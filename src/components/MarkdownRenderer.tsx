import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const HtmlRenderer = ({ defaultPage }: { defaultPage?: string }) => {
  const { page } = useParams();
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const fileName = page || defaultPage;

  useEffect(() => {
    if (!fileName) {
      setError('Nie podano strony.');
      return;
    }

    const filePath = `${import.meta.env.BASE_URL}html/${fileName}.html`;

    fetch(filePath)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setError('');
        requestAnimationFrame(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      })
      .catch(() => {
        setError(`Nie udało się załadować pliku: ${fileName}.html`);
        setContent('');
      });
  }, [fileName]);

  if (error) return <p>{error}</p>;
  if (!content) return <p>Ładowanie...</p>;

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default HtmlRenderer;
