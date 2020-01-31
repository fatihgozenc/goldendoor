import Impressum from '../../components/templates/impressum';

const ImpressumPage = ({ data }) => <Impressum data={data} />

ImpressumPage.getInitialProps = async () => {
	const res = await fetch(`${process.env.API_HOST_SITE}en/impressum`)
	const json = await res.json()
	return { data: json }
}

export default ImpressumPage