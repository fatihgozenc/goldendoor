import Locations from '../../components/templates/locations';

const LocationsPage = ({ data }) => <Locations data={data} />

LocationsPage.getInitialProps = async () => {
	const res = await fetch(`${process.env.API_HOST_SITE}de/locations`)
	const json = await res.json()
	return { data: json }
}

export default LocationsPage