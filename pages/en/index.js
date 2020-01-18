import { API_HOST } from '../../config';
import Home from '../../components/templates/home';

const Index = ({ data }) => <Home data={data} />

Index.getInitialProps = async () => {
	const res = await fetch(`${API_HOST}en/home`)
	const json = await res.json()
	return { data: json }
}

export default Index