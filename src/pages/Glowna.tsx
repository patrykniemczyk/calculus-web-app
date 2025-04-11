import MarkdownRenderer from '../components/MarkdownRenderer';

const glowna = () => {
  return <MarkdownRenderer filePath={`${import.meta.env.BASE_URL}content/glowna.md`} />;
};

export default glowna;
