import Document, { Html, Head, Main, NextScript } from 'next/document'

class GoldenDoorDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
					<link rel="manifest" href="/site.webmanifest" />
					<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#632948" />
					<meta name="msapplication-TileColor" content="#603cba" />
					<meta name="theme-color" content="#603cba" />
				</Head>
				<body>
					<Main />
					<NextScript />
					{/* PAGEPROOFER */}
					{/* <script
          dangerouslySetInnerHTML={{ __html: `(function (d, t) {
					var pp = d.createElement(t), s = d.getElementsByTagName(t)[0];
					pp.src = '//app.pageproofer.com/overlay/js/4956/1600';
					pp.type = 'text/javascript';
					pp.async = true;
					s.parentNode.insertBefore(pp, s);
				})(document, 'script');`}} /> */}
				</body>
			</Html>
		)
	}
}

export default GoldenDoorDocument