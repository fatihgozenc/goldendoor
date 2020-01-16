import Header from './Header';
import Newsletter from './Newsletter';
import Footer from './Footer';

const Layout = props => (
	<>
		<Header />
		{props.children}
		<Newsletter/>
		<Footer/>
	</>
);

export default Layout;