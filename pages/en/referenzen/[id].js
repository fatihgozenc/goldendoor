import { API_HOST } from '../../../config';
import Referenz from '../../../components/templates/referenz';

const ReferenzPage = ({ data }) => <Referenz data={data} />

ReferenzPage.getInitialProps = async (context) => {
  const { id } = context.query;
	const res = await fetch(`${API_HOST}en/references/${id}`)
	const json = await res.json()
	return { data: json }
}

export default ReferenzPage