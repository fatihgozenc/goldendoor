import App from 'next/app'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout/Layout';

function GoldenDoor({ Component, pageProps, layoutData }) {
	console.log(layoutData)
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

GoldenDoor.getInitialProps = async (appContext) => {
	const response = await fetch('http://goldendoor-api.narcissundtaurus.com/wp-json/gd/de/layout')
	const data = await response.json()
	const appProps = await App.getInitialProps(appContext);
	return { ...appProps, layoutData: data }
}

export default GoldenDoor;