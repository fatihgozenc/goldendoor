import App from 'next/app'
import Head from 'next/head';
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout/Layout';
import { DefaultSeo } from 'next-seo';
import { API_HOST } from '../config';

function GoldenDoor({ Component, pageProps, layoutData, pathname, lang }) {
	return (
		<>
			<Head>
				<DefaultSeo
						openGraph={{
							type: 'website',
							locale: 'de_DE',
							url: 'http://goldendoor.group/',
							site_name: 'Golden Door Group',
						}}
					/>
				<link href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css" rel="stylesheet" />
			</Head>
			<Layout data={layoutData} pathname={pathname}>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

GoldenDoor.getInitialProps = async (appContext) => {
	const pathname = appContext.ctx.asPath
	const lang = appContext.ctx.asPath.split('/')[1] === 'en' ? 'en' : 'de';
	const response = await fetch(`${API_HOST}${lang}/layout`)
	const data = await response.json()
	const appProps = await App.getInitialProps(appContext);
	return { ...appProps, layoutData: data, pathname, lang }
}

export default GoldenDoor;