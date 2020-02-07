const withSASS = require('@zeit/next-sass');
const withFonts = require('nextjs-fonts');

module.exports = withSASS(
	{
		webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
			config.module.rules.push({
				enforce: "pre",
				test: /.scss$/,
				loader: "sass-resources-loader",
				options: {
					resources: "./styles/globals.scss"
				}
			})
			return config
		},
		env: {
			API_HOST_SITE: 'http://api.goldendoor.group/wp-json/gd/',
			NEWSLETTER_USER: 'marketing@goldendoor.group',
			NEWSLETTER_PASS: '&n2go@GD',
			NEWSLETTER_API_HOST: 'https://api.newsletter2go.com',
			NEWSLETTER_API_KEY: 't4u26bmr_Qe1ORGnr_fDNBssO_Sjxlfmi3_a5Ri5P:gyt7smav',
			SMTP_HOST: 'w018aa9c.kasserver.com',
			SMTP_USER: 'w018aa9c',
			SMTP_PASS: 'ho7yZrChhnT6CgYF',
			SMTP_FROM: 'hallo@goldendoor.group',
			SMTP_TO: 'hallo@goldendoor.group',
			RECAPTCHA_SECRET: '6LejFI8UAAAAAEJm8Dlam0If-F5Uv3KkiLJAgKBX'
		}
	},
	withFonts(),
)