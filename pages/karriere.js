import { API_HOST } from '../config';
import Karriere from '../components/templates/karriere';

const KarrierePage = ({ data }) => <Karriere data={data} />

KarrierePage.getInitialProps = async () => {
	const res = await fetch(`${API_HOST}de/career`)
	const json = await res.json()
	return { data: json }
}

export default KarrierePage