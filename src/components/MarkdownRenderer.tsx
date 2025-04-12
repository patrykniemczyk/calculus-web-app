import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import 'katex/dist/katex.min.css';

interface MarkdownRendererProps {
  defaultPage?: string;
}

const MarkdownRenderer = ({ defaultPage }: MarkdownRendererProps) => {
  const { page } = useParams();
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const fileName = page || defaultPage;

  useEffect(() => {
    if (!fileName) {
      setError('Nie podano strony.');
      return;
    }

    const filePath = `${import.meta.env.BASE_URL}content/${fileName}.md`;

    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Nie znaleziono pliku Markdown.');
        }
        return response.text();
      })
      .then((text) => {
        setContent(text);
        setError('');
      })
      .catch(() => {
        setContent('');
        setError(`Nie udało się załadować pliku: ${fileName}.md`);
      });
  }, [fileName]);

  if (error) return <p>{error}</p>;
  if (!content) return <p>Ładowanie...</p>;

  return (
    <ReactMarkdown
      children={content}
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex, rehypeSlug]}
    />
  );
};

export default MarkdownRenderer;
