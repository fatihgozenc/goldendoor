const nodemailer = require('nodemailer')
const fs = require('fs');

const transporter = nodemailer.createTransport({
	pool: true,
	host: "smtprelaypool.ispgateway.de",
	port: 465,
	secure: true, // use TLS
	auth: {
		user: 'f.gozenc@narciss-taurus.de',
		pass: '1rk3n84L>h8c'
	}
});


const send = (req) => {
	const attach = fs.createReadStream("path", req.body.file);
	const message = {
		from: 'f.gozenc@narciss-taurus.de',
		to: 'f.gozenc@narciss-taurus.de',
		subject: `Neu Nachricht von `,
		text: req.body,
		attachments: attach,
		replyTo: 'f.gozenc@narciss-taurus.de'
	}

	return new Promise((resolve, reject) => {
		transporter.sendMail(message, (error, info) =>
			error ? reject(error) : resolve(info)
		)
	})
}

module.exports = send