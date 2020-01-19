import { API_HOST } from '../../config';
import UberUns from '../../components/templates/uberuns';

const UberUnsPage = ({ data }) => <UberUns data={data}/>

UberUnsPage.getInitialProps = async () => {
	const lang = 'en';
	const res = await fetch(`${API_HOST}en/aboutus`)
	const json = await res.json()
	return { data: json, lang }
}

export default UberUnsPage