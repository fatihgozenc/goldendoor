import { API_HOST } from '../config';
import Leistungen from '../components/templates/leistungen';

const LeistungenPage = ({ data }) => <Leistungen data={data} />

LeistungenPage.getInitialProps = async () => {
	const res = await fetch(`${API_HOST}de/services`)
	const json = await res.json()
	return { data: json }
}

export default LeistungenPage