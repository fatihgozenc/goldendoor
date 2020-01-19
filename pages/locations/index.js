import { API_HOST } from '../../config';
import Locations from '../../components/templates/locations';

const LocationsPage = ({ data }) => <Locations data={data} />

LocationsPage.getInitialProps = async () => {
	const res = await fetch(`${API_HOST}de/locations`)
	const json = await res.json()
	return { data: json }
}

export default LocationsPage