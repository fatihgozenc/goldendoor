const withSass = require('@zeit/next-sass');
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
			API_HOST: 'http://goldendoor-api.narcissundtaurus.com/wp-json/gd/',
		}
	},
	withFonts({
		webpack(config, options) {
			return config;
		}
	})
)