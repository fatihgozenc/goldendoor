import Presse from '../../../components/templates/presse';

const PressePage = ({ data }) => <Presse data={data} />

PressePage.getInitialProps = async (context) => {
	const { id } = context.query;
	const res = await fetch(`${process.env.API_HOST_SITE}de/press/page/${id}`)
	const json = await res.json()
	return { data: json }
}

export default PressePage