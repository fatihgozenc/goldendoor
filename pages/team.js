import { API_HOST } from '../config';
import Team from '../components/templates/team';

const TeamPage = ({ data }) => <Team data={data} />

TeamPage.getInitialProps = async () => {
	const res = await fetch(`${API_HOST}de/team`)
	const json = await res.json()
	return { data: json }
}

export default TeamPage