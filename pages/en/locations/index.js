import { API_HOST } from '../../../config';
import Locations from '../../../components/templates/locations';

const LocationsPage = ({ data, lang }) => <Locations data={data} lang={lang} />

LocationsPage.getInitialProps = async () => {
	const lang = 'en';
	const res = await fetch(`${API_HOST}en/locations`)
	const json = await res.json()
	return { data: json, lang: lang }
}

export default LocationsPage