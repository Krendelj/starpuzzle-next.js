import App from '../../components/App';

export default async function LangPage({ params }) {
  const { lang } = await params;
  
  return <App lang={lang} key={lang} />;
}
