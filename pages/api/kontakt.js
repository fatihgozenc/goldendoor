const kontaktMailer = require('../../kontaktMailer');

export default (req, res) => {
	if (req.method === 'POST') {
		kontaktMailer(req.body).then(() => {
			res.statusCode = 200;
			res.send('Ihre Mail wurde verschickt, vielen Dank für Ihre Zeit.')
		}).catch((error) => {
			console.log('failed', error)
			res.send('Beim Versenden der E-Mail ist ein Problem aufgetreten. Wenden Sie sich an Ihren Administrator.')
		})
	} else {
		res.statusCode = 404;
		res.send('Beim Versenden der E-Mail ist ein Problem aufgetreten. Wenden Sie sich an Ihren Administrator.')
	}
}

export const config = {
	api: {
		bodyParser: {
			sizeLimit: '10mb'
		}
	}
}