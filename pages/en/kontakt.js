import Kontakt from '../../components/templates/kontakt';

const KontaktPage = ({ data, layout, lang }) => <Kontakt data={data} lang={lang} layout={layout} />

KontaktPage.getInitialProps = async () => {
	const lang = 'en';
	const res = await fetch(`${process.env.API_HOST_SITE}en/contact`)
	const layoutRes = await fetch(`${process.env.API_HOST_SITE}en/layout`);
	const layoutJson = await layoutRes.json();
	const json = await res.json()
	return { data: json, layout: layoutJson, lang }
}

export default KontaktPage