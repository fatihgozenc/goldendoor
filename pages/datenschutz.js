import { API_HOST } from '../config';
import Datenschutz from '../components/templates/datenschutz';

const DatenschutzPage = ({ data }) => <Datenschutz data={data} />

DatenschutzPage.getInitialProps = async () => {
	const res = await fetch(`${API_HOST}de/datenschutz`)
	const json = await res.json()
	return { data: json }
}

export default DatenschutzPage