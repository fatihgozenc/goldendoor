import { API_HOST } from '../config';
import Karriere from '../components/templates/karriere';

const KarrierePage = ({ data, language }) => <Karriere data={data} language={language} />

KarrierePage.getInitialProps = async () => {
	const language = 'de';
	const res = await fetch(`${API_HOST}de/career`)
	const json = await res.json()
	return { data: json, language: language }
}

export default KarrierePage