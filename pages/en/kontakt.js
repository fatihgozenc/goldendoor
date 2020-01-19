import { API_HOST } from '../../config';
import Kontakt from '../../components/templates/kontakt';

const KontaktPage = ({ data, layout }) => <Kontakt data={data} layout={layout} />

KontaktPage.getInitialProps = async () => {
	const res = await fetch(`${API_HOST}en/contact`)
	const layoutRes = await fetch(`${API_HOST}en/layout`);
	const layoutJson = await layoutRes.json();
	const json = await res.json()
	return { data: json, layout: layoutJson }
}

export default KontaktPage