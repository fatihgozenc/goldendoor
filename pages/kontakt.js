import { API_HOST } from '../config';
import Kontakt from '../components/templates/kontakt';

const KontaktPage = ({ data, layout, lang }) => <Kontakt data={data} lang={lang} layout={layout} />

KontaktPage.getInitialProps = async () => {
	const lang = 'de';
	const res = await fetch(`${API_HOST}de/contact`)
	const layoutRes = await fetch(`${API_HOST}de/layout`);
	const layoutJson = await layoutRes.json();
	const json = await res.json()
	return { data: json, layout: layoutJson, lang }
}

export default KontaktPage