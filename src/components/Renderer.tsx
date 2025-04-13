import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface RendererProps {
  defaultPage?: string;
}

const Renderer = ({ defaultPage }: RendererProps) => {
  const { page } = useParams();
  const [content, setContent] = useState<string>('');
  const [error, setError] = useState<string>('');

  const fileName = page || defaultPage;

  useEffect(() => {
    if (!fileName) {
      setError('No page specified.');
      return;
    }

    const fetchContent = async (filePath: string) => {
      try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error('Failed to fetch file');

        const text = await response.text();
        setContent(text);
        setError('');

        // Smooth scroll to the top after content is loaded
        window.requestAnimationFrame(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      } catch {
        setError(`Failed to load file: ${fileName}.html`);
        setContent('');
      }
    };

    const filePath = `${import.meta.env.BASE_URL}html/${fileName}.html`;
    fetchContent(filePath);
  }, [fileName]);

  // Conditional rendering based on content or error state
  if (error) return <p>{error}</p>;
  if (!content) return <p>Loading...</p>;

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default Renderer;
