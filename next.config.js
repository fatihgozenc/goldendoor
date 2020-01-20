const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-sass');
const withFonts = require('nextjs-fonts');

module.exports = withSass(
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
			NEWSLETTER_USER: 'marketing@goldendoor.group',
			NEWSLETTER_PASS: '&n2go@GD',
			NEWSLETTER_API_HOST: 'https://api.newsletter2go.com',
			NEWSLETTER_API_KEY: 't4u26bmr_Qe1ORGnr_fDNBssO_Sjxlfmi3_a5Ri5P:gyt7smav'
		}
	},
	withFonts(),
)