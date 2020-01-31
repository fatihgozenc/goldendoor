import Datenschutz from '../../components/templates/datenschutz';

const DatenschutzPage = ({ data }) => <Datenschutz data={data} />

DatenschutzPage.getInitialProps = async () => {
	const res = await fetch(`${process.env.API_HOST_SITE}en/datenschutz`)
	const json = await res.json()
	return { data: json }
}

export default DatenschutzPage