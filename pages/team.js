import Team from '../components/templates/team';

const TeamPage = ({ data }) => <Team data={data} />

TeamPage.getInitialProps = async () => {
	const res = await fetch(`${process.env.API_HOST_SITE}de/team`)
	const json = await res.json()
	return { data: json }
}

export default TeamPage