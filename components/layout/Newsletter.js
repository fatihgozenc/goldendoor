import parse from 'html-react-parser';
import { useForm } from "react-hook-form";
import SendingQuery from '../SendingQuery';

const Newsletter = ({ data }) => {

	const [accessToken, setAccessToken] = React.useState('');

	const n2goHeaders = new Headers();
	n2goHeaders.append("Content-Type", "application/json");
	n2goHeaders.append("Authorization", "Basic " + Buffer.from(process.env.NEWSLETTER_API_KEY).toString('base64'));

	const n2goBody = JSON.stringify({
		"username": process.env.NEWSLETTER_USER,
		"password": process.env.NEWSLETTER_PASS,
		"grant_type": "https://nl2go.com/jwt"
	});

	const requestOpts = {
		method: 'POST',
		headers: n2goHeaders,
		body: n2goBody,
		redirect: 'follow'
	};

	const connectToNewsletter = () => {
		fetch(`${process.env.NEWSLETTER_API_HOST}/oauth/v2/token`, requestOpts)
			.then(response => response.json())
			.then(result => {
				setAccessToken(result.access_token)
				localStorage.setItem('newsletter', result.access_token)
			})
			.catch(error => console.log('error', error));
	}

	React.useEffect(() => {
		// localStorage.getItem('newsletter') === null &&
			connectToNewsletter();
	}, [])

	const [registerResponse, setRegisterResponse] = React.useState({});
	const newsletterForm = React.useRef();

	const registerNewsletterUser = (name, surname, email, gender, token) => {
		const n2goRegisterHeaders = new Headers();
		n2goRegisterHeaders.append("Content-Type", "application/json");
		n2goRegisterHeaders.append("Authorization", "Bearer " + token);

		const n2goRegisterBody = JSON.stringify({
			"list_id": "r9s81zk7",
			"email": email,
			"gender": gender === 'Herr' || 'Mr.' ? 'm' : 'f',
			"first_name": name,
			"last_name": surname,
			"is_unsubscribed": false,
			"is_blacklisted": false,
		});

		const registerRequestOpts = {
			method: 'POST',
			headers: n2goRegisterHeaders,
			body: n2goRegisterBody,
			redirect: 'follow'
		};

		fetch(`${process.env.NEWSLETTER_API_HOST}/recipients`, registerRequestOpts)
			.then(response => response.text())
			.then(result => {
				setRegisterResponse(JSON.parse(result))
			})
			.catch(error => console.log('error', error));
	}

	React.useEffect(() => {
		registerResponse.status === 200 &&
			newsletterForm.current.classList.add('newsletterHide');
	}, [registerResponse, setRegisterResponse])

	const { handleSubmit, register, errors } = useForm();
	const onSubmit = values => {
		registerNewsletterUser(values.vorname, values.name, values.email, values.anrede, accessToken);
	};

	return (
		<div id="newsletter" className="newsletter">

			<div className="newsletter__block">
				<h3>Newsletter</h3>
				<p>{data.subtitel}</p>
			</div>

			<form onSubmit={handleSubmit(onSubmit)} ref={newsletterForm} className="newsletter__form">

				<div className="newsletter__form--block">

					<div className="newsletter__form--field">
						<label htmlFor="vorname">{data.vorname}</label>
						<input
							name="vorname"
							ref={register({
								pattern: /^[A-Za-z]+$/i,
								validate: value => value !== "admin" || "Nice try!"
							})}
						/>
						{errors.vorname && errors.vorname.message}
					</div>

					<div className="newsletter__form--field">
						<label htmlFor="name">{data.name}</label>
						<input
							name="name"
							ref={register({
								pattern: /^[A-Za-z]+$/i,
								validate: value => value !== "admin" || "Nice try!"
							})}
						/>
						{errors.name && errors.name.message}
					</div>

				</div>

				<div className="newsletter__form--block">

					<div className="newsletter__form--field">
						<label htmlFor="anrede">{data.anrede.value}</label>
						<select name="anrede" ref={register}>
							<optgroup>
								<option value={data.anrede.herr}>{data.anrede.herr}</option>
								<option value={data.anrede.frau}>{data.anrede.frau}</option>
							</optgroup>
						</select>
						{errors.anrede && errors.anrede.message}
					</div>

					<div className="newsletter__form--field">
						<label htmlFor="email">{data.email}</label>
						<input
							name="email"
							ref={register({
								required: data.fehlerfelder.required,
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
									message: data.fehlerfelder.invalid
								}
							})}
						/>
						{errors.email && errors.email.message}
					</div>

				</div>

				<div className="newsletter__datenschutz">
					{parse(data.datenschutz.text)}
					<input className="input__radio" type="checkbox" required name="acceptance" />
					<label className="label__radio" htmlFor="acceptance">{data.datenschutz.checkbox}</label>
					{parse(data.datenschutz.extra)}
				</div>

				<button type="submit" className="golden__button">{data.datenschutz.button}</button>

			</form>

			{
				registerResponse.status === 200 &&
				 <SendingQuery color="#C2AC84" message={`Danke für die Registrierung.`} />
			}

		</div>
	)
};

export default Newsletter;