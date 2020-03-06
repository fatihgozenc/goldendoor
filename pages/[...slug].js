import Error from './_error';

const redirects = [
	{
		from: '/factsheet',
		to: '/downloads'
	}
];

const Redirecter = () => { return <Error statusCode={404} />; };

Redirecter.getInitialProps = async ({ res, pathname, query, asPath }) => {
	const redirect = redirects.find(({ from }) => {
		const pattern = new RegExp(from, 'g');
		return asPath.match(pattern)
	});
	// Check if this runs on the server (`res` is defined) and we found a redirect
	if (res && redirect) {
		res.writeHead(301, {
			Location: redirect.to,
		});
		res.end();
	} else {
		return <Error statusCode={404} />;
	}
};
export default Redirecter;