import Link from 'next/link';

const Header = () => (
	<header>
		<Link href="/">
			<a>Home</a>
		</Link>
		<Link href="/en">
			<a>Change to EN</a>
		</Link>
	</header>
);

export default Header;