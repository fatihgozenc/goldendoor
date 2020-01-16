import Link from 'next/link';

const Footer = (props) => (
	<footer>
		<Link href="/">
			<a>Home</a>
		</Link>
		<Link href="/about">
			<a>About</a>
		</Link>
	</footer>
);

export default Footer;