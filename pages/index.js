import Home from '../components/templates/home';

const Index = ({ data }) => {
	// console.log(data)
	return (
		<Home data={data} />
	);
}

Index.getInitialProps = async () => {
	const res = await fetch('http://goldendoor-api.narcissundtaurus.com/wp-json/gd/de/home')
	const json = await res.json()
	return { data: json }
}

export default Index