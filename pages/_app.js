import App from 'next/app'
import fetch from 'isomorphic-unfetch'

function GoldenDoor({ Component, pageProps, layoutData }) {
	console.log(layoutData)
	return <Component {...pageProps} />
}

GoldenDoor.getInitialProps = async (appContext) => {
	const response = await fetch('http://goldendoor-api.narcissundtaurus.com/wp-json/gd/de/layout')
	const data = await response.json()
	const appProps = await App.getInitialProps(appContext);
	return { ...appProps, layoutData: data }
}

export default GoldenDoor;