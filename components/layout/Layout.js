import Header from './Header';
import Newsletter from './Newsletter';
import Footer from './Footer';
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
			<Newsletter data={props.data.newsletter} />
			<Footer data={props.data.footer} />
		</>
	)
};

export default Layout;