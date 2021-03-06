import Galerie from '../../components/templates/galerie';

const GaleriePage = ({ data }) => <Galerie data={data} />

GaleriePage.getInitialProps = async () => {
	const res = await fetch(`${process.env.API_HOST_SITE}en/gallery`)
	const json = await res.json()
	return { data: json }
}

export default GaleriePage