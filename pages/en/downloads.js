import Downloads from '../../components/templates/downloads';

const DownloadsPage = ({ data, language }) => <Downloads data={data} language={language} />

DownloadsPage.getInitialProps = async () => {
	const language = 'en';
	const res = await fetch(`${process.env.API_HOST_SITE}en/downloads`)
	const json = await res.json()
	return { data: json, language: language }
}

export default DownloadsPage