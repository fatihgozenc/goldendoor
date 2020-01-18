import { API_HOST } from '../config';

const UberUns = ({ data }) => {
	// console.log(data)
	return (
		<p>Hello Next.js</p>
	);
}

UberUns.getInitialProps = async () => {
	const res = await fetch(`${API_HOST}de/aboutus`)
	const json = await res.json()
	return { data: json }
}

export default UberUns