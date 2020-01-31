import Referenzen from '../../components/templates/referenzen';

const ReferenzenPage = ({ data }) => <Referenzen data={data} />

ReferenzenPage.getInitialProps = async () => {
	const res = await fetch(`${process.env.API_HOST_SITE}de/references/page/1`)
	const json = await res.json()
	return { data: json }
}

export default ReferenzenPage