import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';  // Dodajemy rehype-slug
import 'katex/dist/katex.min.css';  // Importowanie stylów KaTeX

interface MarkdownRendererProps {
  filePath: string;
}

const MarkdownRenderer = ({ filePath }: MarkdownRendererProps) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(filePath)
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, [filePath]);

  return (
    <ReactMarkdown
      children={content}
      remarkPlugins={[remarkMath]}          // Obsługuje matematyczne wyrażenia
      rehypePlugins={[rehypeKatex, rehypeSlug]} // Dodajemy rehype-slug
    />
  );
};

export default MarkdownRenderer;
