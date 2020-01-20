import { API_HOST } from '../config';
import UberUns from '../components/templates/uberuns';

const UberUnsPage = ({ data, lang }) => <UberUns lang={lang} data={data}/>

UberUnsPage.getInitialProps = async () => {
	const lang = 'de';
	const res = await fetch(`${API_HOST}de/aboutus`)
	const json = await res.json()
	return { data: json, lang: lang }
}

export default UberUnsPage