const jobMailer = require('../../jobMailer');
const multer = require('multer');

const upload = multer({
	dest: 'uploads/' // this saves your file into a directory called "uploads"
});



export default (req, res) => {
	if (req.method === 'POST') {
		jobMailer(req).then(() => {
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