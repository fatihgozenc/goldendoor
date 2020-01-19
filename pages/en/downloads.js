import { API_HOST } from '../../config';
import Downloads from '../../components/templates/downloads';

const DownloadsPage = ({ data }) => <Downloads data={data} />

DownloadsPage.getInitialProps = async () => {
	const res = await fetch(`${API_HOST}en/downloads`)
	const json = await res.json()
	return { data: json }
}

export default DownloadsPage