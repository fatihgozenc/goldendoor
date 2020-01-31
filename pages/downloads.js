import Downloads from '../components/templates/downloads';

const DownloadsPage = ({ data }) => <Downloads data={data} />

DownloadsPage.getInitialProps = async () => {
	const res = await fetch(`${process.env.API_HOST_SITE}de/downloads`)
	const json = await res.json()
	return { data: json }
}

export default DownloadsPage