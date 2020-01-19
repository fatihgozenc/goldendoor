import { API_HOST } from '../../../config';
import Referenzen from '../../../components/templates/referenzen';

const ReferenzenPage = ({ data }) => <Referenzen data={data} />

ReferenzenPage.getInitialProps = async (context) => {
	const { id } = context.query;
	const res = await fetch(`${API_HOST}de/references/page/${id}`)
	const json = await res.json()
	return { data: json }
}

export default ReferenzenPage