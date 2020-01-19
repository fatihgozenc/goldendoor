import { API_HOST } from '../../config';
import Galerie from '../../components/templates/galerie';

const GaleriePage = ({ data }) => <Galerie data={data} />

GaleriePage.getInitialProps = async () => {
	const res = await fetch(`${API_HOST}en/gallery`)
	const json = await res.json()
	return { data: json }
}

export default GaleriePage