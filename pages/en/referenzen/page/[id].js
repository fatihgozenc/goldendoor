import Referenzen from '../../../../components/templates/referenzen';

const ReferenzenPage = ({ data }) => <Referenzen data={data} />

ReferenzenPage.getInitialProps = async (context) => {
	const { id } = context.query;
	const res = await fetch(`${process.env.API_HOST_SITE}en/references/page/${id}`)
	const json = await res.json()
	return { data: json }
}

export default ReferenzenPage