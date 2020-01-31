import Home from '../../components/templates/home';

const Index = ({ data }) => <Home data={data} />

Index.getInitialProps = async () => {
	const res = await fetch(`${process.env.API_HOST_SITE}en/home`)
	const json = await res.json()
	return { data: json }
}

export default Index