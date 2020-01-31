import Downloads from '../components/templates/downloads';

const DownloadsPage = ({ data, language }) => <Downloads data={data} language={language} />

DownloadsPage.getInitialProps = async () => {
	const language = 'de';
	const res = await fetch(`${process.env.API_HOST_SITE}de/downloads`)
	const json = await res.json()
	return { data: json, language: language }
}

export default DownloadsPage