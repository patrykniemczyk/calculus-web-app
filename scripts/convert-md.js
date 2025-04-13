import fs from 'fs-extra';
import path from 'path';
import { unified } from 'unified';
import { read } from 'to-vfile';
import { globby } from 'globby';
import remarkParse from 'remark-parse';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeStringify from 'rehype-stringify';

const inputDir = './public/content';
const outputDir = './public/html';

const processor = unified()
	.use(remarkParse)
	.use(remarkMath)
	.use(remarkRehype)
	.use(rehypeKatex)
	.use(rehypeSlug)
	.use(rehypeAutolinkHeadings, { behavior: 'wrap' })
	.use(rehypeStringify);

// Ensure output directory exists
const ensureOutputDir = async () => {
	try {
		await fs.ensureDir(outputDir);
	} catch (error) {
		throw new Error(`Error ensuring output directory: ${error.message}`);
	}
};

// Process an individual Markdown file
const processMarkdownFile = async (filePath) => {
	const vfile = await readFile(filePath);
	const htmlContent = await generateHtml(vfile);
	const outputPath = getOutputPath(filePath);

	await writeHtmlToFile(outputPath, htmlContent);
};

// Read Markdown file
const readFile = async (filePath) => {
	try {
		return await read(filePath);
	} catch (error) {
		throw new Error(`Error reading file at ${filePath}: ${error.message}`);
	}
};

// Generate HTML from Markdown content
const generateHtml = async (vfile) => {
	try {
		return await processor.process(vfile);
	} catch (error) {
		throw new Error(`Error processing Markdown content: ${error.message}`);
	}
};

// Get the output file path based on the input file path
const getOutputPath = (filePath) => {
	const relativePath = path.relative(inputDir, filePath);
	return path.join(outputDir, relativePath.replace(/\.md$/, '.html'));
};

// Write generated HTML to output file
const writeHtmlToFile = async (outputPath, htmlContent) => {
	try {
		await fs.ensureDir(path.dirname(outputPath));
		await fs.writeFile(outputPath, String(htmlContent));
	} catch (error) {
		throw new Error(`Error writing to file ${outputPath}: ${error.message}`);
	}
};

// Convert all Markdown files to HTML
const convertAllMarkdownFiles = async () => {
	try {
		await ensureOutputDir();

		const files = await globby(`${inputDir}/**/*.md`);
		await Promise.all(files.map(processMarkdownFile));

		console.log('Markdown files successfully converted to HTML.');
	} catch (error) {
		console.error('Error during the conversion process:', error.message);
	}
};

convertAllMarkdownFiles();
