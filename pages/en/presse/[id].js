import PressItem from '../../../components/templates/pressitem';

const PressItemPage = ({ data }) => <PressItem data={data} />

PressItemPage.getInitialProps = async (context) => {
	const { id } = context.query;
	const res = await fetch(`${process.env.API_HOST_SITE}en/press/${id}`)
	const json = await res.json()
	return { data: json }
}

export default PressItemPage