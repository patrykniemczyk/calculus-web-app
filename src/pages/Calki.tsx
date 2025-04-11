import MarkdownRenderer from '../components/MarkdownRenderer';

const Calki = () => {
  return <MarkdownRenderer filePath={`${import.meta.env.BASE_URL}content/calki.md`}
  />;
};

export default Calki;
