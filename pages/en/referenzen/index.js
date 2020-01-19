import { API_HOST } from '../../../config';
import Referenzen from '../../../components/templates/referenzen';

const ReferenzenPage = ({ data }) => <Referenzen data={data} />

ReferenzenPage.getInitialProps = async () => {
	const res = await fetch(`${API_HOST}en/references/page/1`)
	const json = await res.json()
	return { data: json }
}

export default ReferenzenPage