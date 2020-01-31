import Breadcrumb from '../../Breadcrumb';
import serialize from 'serialize-javascript';
import { NextSeo } from 'next-seo';
import { useForm } from 'react-hook-form';
import SendingQuery from '../../SendingQuery';
import parse from 'html-react-parser';
import Carousel from '../../carousel'
import Icon from '../../Icon';
import './style.scss';

export default function ({ data, language }) {

	const formFields = data.fields.kontaktform;

	const images = data.fields.factsheets.factsheet_bearbeitung.map(item => (
		item.factsheet_bild
	));
	const pdfData = data.fields.factsheets.factsheet_bearbeitung.map(item => (
		{ name: item.factsheet_name, link: item.factsheet_dokument }
	));

	const successBlock = React.useRef();
	const { handleSubmit, register, errors } = useForm();
	const [submitted, setSubmitted] = React.useState(false);

	const onSubmit = data => {
		const formData = {
			lang: language,
			contactType: "keyRequest",
			name: language === 'de' ? data.bewerbung_vorname : data.bewerbung_name,
			surname: language === 'de' ? data.bewerbung_name : data.bewerbung_surname,
			email: data.bewerbung_email,
		}

		fetch('/api/kontakt', {
			method: 'post',
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
			body: serialize(formData)
		}).then((res) => {
			res.status === 200 ? setSubmitted(!submitted) : ''
		}).catch((err) => console.log(err))
	};

	return (
		<>
			<NextSeo
				title={data.fields.seo.title}
				description={data.fields.seo.description}
			/>
			<div className="page__title page__title--downloads">
				<Breadcrumb
					slug={data.slug}
					title={data.title} />
				<h1>{data.title}</h1>
			</div>
			<Carousel
				name="downloads"
				data={pdfData}
				content={data.fields.factsheets}
				imgList={images}
				img_width={250}
				img_height={180}
				visibleImages={5}
				duration={750}
			/>
			<div className="presskit" id="presskit">
				<div className="presskit__blocks">
					<div className="presskit__block">
						<h2>Presskit</h2>
						{parse(data.fields.presskit.inhalt)}
					</div>
					<div className="presskit__block">
						{Object.entries(data.fields.presskit.bearbeitung).map((item, key) => (

							<a key={key} href={item[1]} target="_blank" className="singleloc__button">
								<Icon type="factsheet" name={item[0].split('_').length > 1 ? `${item[0].split('_')[0]} ${item[0].split('_')[1]}` : item[0]} />
							</a>
						))}
					</div>
				</div>

				<div className="presskit__formblock">
					<form onSubmit={handleSubmit(onSubmit)} className="presskit__form">

						<div className="presskit__form--item">
							<label className="label__text" htmlFor="name">
								{formFields.etiketten.vorname}
								<input className="input__text" type="text" name="name" />
							</label>
						</div>

						<div className="presskit__form--item">
							<label className="label__text" htmlFor="surname">
								{formFields.etiketten.name}
								<input className="input__text" type="text" name="surname" />
							</label>
						</div>

						<div className="presskit__form--item">
							<label className="label__text" htmlFor="email">
								{formFields.etiketten.email}
								<input className="input__text" type="email" name="email" />
							</label>
						</div>

						<div className="presskit__form--item">

							<input ref={register({ required: true })} type="radio" className="input__radio" name="acceptance" />
							<span className="label__radio">{parse(formFields.datenschutz)}</span>
						</div>

						<div className="presskit__form--item">
							<button className="golden__button" type="submit">{formFields.button}</button>
						</div>


					</form>

					<div className="contact__success">
						<div ref={successBlock} className="contact__success--wrapper">
							{submitted &&
								<SendingQuery color="#C2AC84"
									message={language == 'de' ? 'Ihre Anfrage wurde gesendet. Vielen Dank für Ihre Kontaktaufnahme.' : 'Your request has been sent, thank you for contacting us.'} />
							}
						</div>
					</div>

				</div>

			</div>
		</>
	)
};