import fs from 'fs-extra'
import path from 'path'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkMath from 'remark-math'
import remarkRehype from 'remark-rehype'
import rehypeKatex from 'rehype-katex'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeStringify from 'rehype-stringify'
import { globby } from 'globby'
import { read, write } from 'to-vfile'

const inputDir = './public/content'
const outputDir = './public/html'

const processor = unified()
	.use(remarkParse)
	.use(remarkMath)
	.use(remarkRehype)
	.use(rehypeKatex)
	.use(rehypeSlug)
	.use(rehypeAutolinkHeadings, { behavior: 'wrap' })
	.use(rehypeStringify)

async function convertAll() {
	await fs.ensureDir(outputDir)
	const files = await globby(`${inputDir}/**/*.md`)

	for (const filePath of files) {
		const vfile = await read(filePath)
		const html = await processor.process(vfile)

		const relativePath = path.relative(inputDir, filePath)
		const outputPath = path.join(outputDir, relativePath.replace(/\.md$/, '.html'))

		await fs.ensureDir(path.dirname(outputPath))
		await fs.writeFile(outputPath, String(html))
	}

	console.log('Markdown files converted to HTML.')
}

convertAll()
