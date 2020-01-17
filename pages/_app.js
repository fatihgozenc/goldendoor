import App from 'next/app'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout/Layout';

function GoldenDoor({ Component, pageProps, layoutData, ctx }) {
	// console.log(ctx)
	return (
		<Layout data={layoutData}>
			<Component {...pageProps} />
		</Layout>
	)
}

GoldenDoor.getInitialProps = async (appContext) => {
	// console.log(appContext.ctx)
	const response = await fetch('http://goldendoor-api.narcissundtaurus.com/wp-json/gd/de/layout')
	const data = await response.json()
	const appProps = await App.getInitialProps(appContext);
	return { ...appProps, layoutData: data }
}

export default GoldenDoor;