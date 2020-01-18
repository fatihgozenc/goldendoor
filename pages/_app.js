import App from 'next/app'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout/Layout';
import { API_HOST } from '../config';

function GoldenDoor({ Component, pageProps, layoutData, pathname }) {
	return (
		<Layout data={layoutData} path={pathname}>
			<Component {...pageProps} />
		</Layout>
	)
}

GoldenDoor.getInitialProps = async (appContext) => {
	const pathname = appContext.ctx.asPath
	const lang = appContext.ctx.asPath.split('/')[1] === 'en' ? 'en' : 'de';
	const response = await fetch(`${API_HOST}${lang}/layout`)
	const data = await response.json()
	const appProps = await App.getInitialProps(appContext);
	return { ...appProps, layoutData: data, pathname }
}

export default GoldenDoor;