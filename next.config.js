const withSASS = require('@zeit/next-sass');
const withFonts = require('nextjs-fonts');
if (process.env.NODE_ENV !== 'production') require('dotenv').config()

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
			API_HOST_SITE: 'https://api.goldendoor.group/wp-json/gd/',
			NEWSLETTER_USER: process.env.NEWSLETTER_USER,
			NEWSLETTER_PASS: process.env.NEWSLETTER_PASS,
			NEWSLETTER_API_HOST: process.env.NEWSLETTER_API_HOST,
			NEWSLETTER_API_KEY: process.env.NEWSLETTER_API_KEY,
			SMTP_HOST: process.env.SMTP_HOST,
			SMTP_ONE_FROM: process.env.SMTP_ONE_FROM,
			SMTP_ONE_PASS: process.env.SMTP_ONE_PASS,
			SMTP_ONE_TO: process.env.SMTP_ONE_TO,
			SMTP_ONE_USER: process.env.SMTP_ONE_USER,
			SMTP_TWO_FROM: process.env.SMTP_TWO_FROM,
			SMTP_TWO_PASS: process.env.SMTP_TWO_PASS,
			SMTP_TWO_TO: process.env.SMTP_TWO_TO,
			SMTP_TWO_USER: process.env.SMTP_TWO_USER
		}
	},
	withFonts(),
)