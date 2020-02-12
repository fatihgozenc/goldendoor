const redirects = [
	{
		from: '/factsheet',
		to: '/downloads'
	}
];

const Redirecter = () => { };

Redirecter.getInitialProps = async ({ res, pathname, query, asPath }) => {
	const redirect = redirects.find(({ from }) => {
		const pattern = new RegExp(from, 'g');
		return asPath.match(pattern)
	});
	console.log(asPath, redirect)
	// Check if this runs on the server (`res` is defined) and we found a redirect
	if (res && redirect) {
		res.writeHead(301, {
			Location: redirect.to,
		});
		res.end();
	}
	return {};
};
export default Redirecter;