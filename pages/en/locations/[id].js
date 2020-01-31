import Location from '../../../components/templates/location';

const LocationPage = ({ data }) => <Location data={data} />

LocationPage.getInitialProps = async (context) => {
	const { id } = context.query;
	const res = await fetch(`${process.env.API_HOST_SITE}en/locations/${id}`)
	const json = await res.json()
	return { data: json }
}

export default LocationPage