import Header from './Header';
import Newsletter from './Newsletter';
import Footer from './Footer';
import './style.scss';

const Layout = (props) => {
	const logo = props.data.footer.info.logo;
	const headerData = props.data.header;
	const footerData = props.data.footer;
	const lang = props.data.lang;
	const pathname = props.pathname;

	return (
		<>
			<Header logo={logo} data={headerData} lang={lang} pathname={pathname} />
			{props.children}
			<Newsletter />
			<Footer data={footerData} />
		</>
	)
};

export default Layout;