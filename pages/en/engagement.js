import Engagement from '../../components/templates/engagement';

const EngagementPage = ({ data }) => <Engagement data={data} />

EngagementPage.getInitialProps = async () => {
	const res = await fetch(`${process.env.API_HOST_SITE}en/engagement`)
	const json = await res.json()
	return { data: json }
}

export default EngagementPage