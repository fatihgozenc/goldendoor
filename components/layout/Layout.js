import dynamic from 'next/dynamic';
import Header from './Header';
import Footer from './Footer';
const Newsletter = dynamic(() => import('./Newsletter'), {
	ssr: false
});
import './style.scss';

const Layout = (props) => {

	return (
		<>
			<Header
				logo={props.data.footer.info.logo}
				data={props.data.header}
				lang={props.data.lang}
				pathname={props.pathname}
			/>
			{props.children}
			{ props.pathname !== '/en/datenschutz' || '/datenschutz' || '/impressum' || '/en/impressum' &&
				<Newsletter data={props.data.newsletter} />
			}
			<Footer data={props.data.footer} />
		</>
	)
};

export default Layout;