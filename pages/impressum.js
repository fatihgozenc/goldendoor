import { API_HOST } from '../config';
import Impressum from '../components/templates/impressum';

const ImpressumPage = ({ data }) => <Impressum data={data} />

ImpressumPage.getInitialProps = async () => {
	const res = await fetch(`${API_HOST}de/impressum`)
	const json = await res.json()
	return { data: json }
}

export default ImpressumPage