import { API_HOST } from '../../config';
import Kontakt from '../../components/templates/kontakt';

const KontaktPage = ({ data }) => <Kontakt data={data} />

KontaktPage.getInitialProps = async () => {
	const res = await fetch(`${API_HOST}en/contact`)
	const json = await res.json()
	return { data: json }
}

export default KontaktPage