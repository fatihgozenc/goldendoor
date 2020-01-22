import { API_HOST } from '../config';
import Engagement from '../components/templates/engagement';

const EngagementPage = ({ data }) => <Engagement data={data} />

EngagementPage.getInitialProps = async () => {
	const res = await fetch(`${API_HOST}de/engagement`)
	const json = await res.json()
	return { data: json }
}

export default EngagementPage