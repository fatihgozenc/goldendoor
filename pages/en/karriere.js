import Karriere from '../../components/templates/karriere';

const KarrierePage = ({ data, language }) => <Karriere data={data} language={language} />

KarrierePage.getInitialProps = async () => {
	const language = 'en';
	const res = await fetch(`${process.env.API_HOST_SITE}en/career`)
	const json = await res.json()
	return { data: json, language: language }
}

export default KarrierePage