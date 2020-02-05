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

const send = (props) => {
	const name = props.contactType == 'contactForm' ? (props.kontakt_name + " " + props.kontakt_surname) : props.name + ' ' + props.surname;
	const email = props.contactType == 'contactForm' ? props.kontakt_email : props.email;
	const text = () => {
		if (props.contactType == 'contactForm') {
			return (`
				\r\nKontaktdaten\r\n
				Anrede: ${props.kontakt_anrede}\r\n
				Vorname: ${props.kontakt_name}\r\n
				Nachname: ${props.kontakt_surname}\r\n
				E-Mail: ${props.kontakt_email}\r\n
				Telefon: ${props.kontakt_phone}\r\n
				Firma: ${props.kontakt_company}\r\n
				Nachricht: ${props.event_nachricht}\r\n
				\r\nEventinformationen\r\n
				Art der Veranstaltung: ${props.event_type}\r\n
				Location Auswahl: ${props.event_location}\r\n
				Konkretes Datum?: ${props.event_date_answer}\r\n
				Zeitraum (Wenn es kein konkretes Datum gibt): ${props.date_range}\r\n
				Event Datum (Wenn es ein konkretes Datum gibt): ${props.eventdatum}\r\n
				Event Ausweichtermin (Wenn es ein konkretes Datum gibt): ${props.ausweichtermin}\r\n
				Event Beginn Zeit (Wenn es ein konkretes Datum gibt): ${props.eventzeitbeginn}\r\n
				Event Ende Zeit (Wenn es ein konkretes Datum gibt): ${props.eventzeitend}\r\n
				\r\nZusatzinformationen\r\n
				Anzahl der Personen: ${props.personenzahl}\r\n
				Maximal Budget?: ${props.event_max_budget}\r\n
				\r\nGewünschte dienstleistungen\r\n
				Speisenauswahl: ${props.lang === 'de' ? props.event_speisen : props.event_food}\r\n
				Mobiliarauswahl: ${props.lang === 'de' ? props.event_mobiliar : props.event_furnishings}\r\n
				Technikauswahl: ${props.lang === 'de' ? props.event_technik : props.event_technique}\r\n
				Dekoauswahl: ${props.lang === 'de' ? props.event_deko : props.event_decoration}\r\n
				Musikauswahl: ${props.lang === 'de' ? props.event_musik : props.event_music}\r\n
			`)
		} else if (props.contactType == 'keyRequest') {
			return (`
				\r\nSchlüsselanfrage für Pressekit\r\n\nVorname: ${props.name}\r\nNachname: ${props.surname}\r\nE-Mail: ${props.email}\r\n
			`)
		} else {
			return (`
				\r\nKarriere Bewerbung\r\n
				Vorname: ${props.name}\r\n
				Nachname: ${props.surname}\r\n
				E-Mail: ${props.email}\r\n
				Berufliche Stellung: ${props.position}\r\n
				Aktueller Jobsstatus: ${props.jobstatus}\r\n
				Mögliches Start-Datum: ${props.startdate}\r\n
				Nachricht: ${props.message}\r\n
			`)
		}
	};

	const content = text();

	const uploadedFile =
		props.contactType == 'jobApplication' ? [{
			filename: props.attachment_name,
			path: props.attachment_buffer
		}] : null;

	const sender = `${name} <${email}>`;
	const message = {
		from: 'f.gozenc@narciss-taurus.de',
		to: 'f.gozenc@narciss-taurus.de',
		subject: `Neu Nachricht von ${sender}`,
		text: content,
		attachments: uploadedFile,
		replyTo: sender
	}

	return new Promise((resolve, reject) => {
		transporter.sendMail(message, (error, info) =>
			error ? reject(error) : resolve(info)
		)
	})
}

module.exports = send