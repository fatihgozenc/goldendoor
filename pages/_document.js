import Document, { Html, Head, Main, NextScript } from 'next/document';

class GoldenDoorDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {

		return (
			<Html lang='de'>
				<Head>
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
					<link rel="manifest" href="/site.webmanifest" />
					<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#632948" />
					<meta name="msapplication-TileColor" content="#603cba" />
					<meta name="theme-color" content="#603cba" />
					<script dangerouslySetInnerHTML={{
						__html: `
						function loadGAonConsent() {
							window.ga = window.ga || function () { (ga.q = ga.q || []).push(arguments) }; ga.l = +new Date;
							ga('create', 'UA-146438813-4', 'auto');
							ga('set', 'anonymizeIp', true);
							ga('send', 'pageview');
							var gascript = document.createElement("script");
							gascript.async = true;
							gascript.src = "https://www.google-analytics.com/analytics.js";
							document.getElementsByTagName("head")[0].appendChild(gascript, document.getElementsByTagName("head")[0]);
						}
						if (document.cookie.split(';').filter(function (item) {
							return item.indexOf('cookieconsent_status=allow') >= 0
						}).length) {
							loadGAonConsent();
						}
					`}} />
				</Head>
				<body>
					<Main />
					<NextScript />
					<script src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js" data-cfasync="false"></script>
					<script dangerouslySetInnerHTML={{
						__html: `
							window.cookieconsent.initialise({
								"palette": {
									"popup": {
										"background": "#000",
										"text": "#c2ac84"
									},
									"button": {
										"background": "transparent",
										"border": "#c2ac84",
										"text": "#c2ac84",
									}
								},
								"type": "opt-in",
								"content": {
									"message": "Diese Website verwendet Cookies – nähere Informationen dazu und zu Ihren Rechten als Benutzer finden Sie in unserer Datenschutzerklärung am Ende der Seite. Klicken Sie auf „Ich stimme zu“, um Cookies zu akzeptieren und direkt unsere Website besuchen zu können.",
									"allow": "Ich stimme zu.",
									"deny": "Ablehnen",
									"link": "zum Datenschutz",
									"href": "/datenschutz"
								},
								onStatusChange: function(status, chosenBefore) {
									var type = this.options.type;
									var didConsent = this.hasConsented();
									if (type == 'opt-in' && didConsent) {
										loadGAonConsent();
									}
								}
							});
						`}} />
				</body>
			</Html>
		)
	}
}

export default GoldenDoorDocument