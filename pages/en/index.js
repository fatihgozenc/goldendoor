import { API_HOST } from '../../config';

const Index = ({ data }) => {
	return (
		<p>Hello Next.js</p>
	);
}

Index.getInitialProps = async () => {
	const res = await fetch(`${API_HOST}en/home`)
	const json = await res.json()
	return { data: json }
}

export default Index