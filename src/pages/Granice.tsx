import MarkdownRenderer from '../components/MarkdownRenderer';

const Granice = () => {
  return <MarkdownRenderer filePath={`${import.meta.env.BASE_URL}content/granice.md`}
  />;
};

export default Granice;
