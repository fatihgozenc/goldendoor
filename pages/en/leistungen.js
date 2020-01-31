import Leistungen from '../../components/templates/leistungen';

const LeistungenPage = ({ data }) => <Leistungen data={data} />

LeistungenPage.getInitialProps = async () => {
	const res = await fetch(`${process.env.API_HOST_SITE}en/services`)
	const json = await res.json()
	return { data: json }
}

export default LeistungenPage