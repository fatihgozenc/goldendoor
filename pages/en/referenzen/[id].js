import Referenz from '../../../components/templates/referenz';

const ReferenzPage = ({ data }) => <Referenz data={data} />

ReferenzPage.getInitialProps = async (context) => {
	const { id } = context.query;
	const res = await fetch(`${process.env.API_HOST_SITE}en/references/${id}`)
	const json = await res.json()
	return { data: json }
}

export default ReferenzPage