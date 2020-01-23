import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import serialize from 'serialize-javascript';
import Breadcrumb from '../../Breadcrumb';
import Obfuscate from 'react-obfuscate';
import parse from 'html-react-parser';
import { useForm } from "react-hook-form";
import DatePicker from 'react-datepicker';
import SendingQuery from '../../SendingQuery';
import './style.scss';

const MapContainer = dynamic(() => import('../../MapContainer'), {
	ssr: false
});

export default ({ data, layout, lang }) => {

	const router = useRouter();
	const requestedLocation = router.query.locationName !== undefined ? router.query.locationName : false;
	const locationSelection = React.useRef();

	const contactInfo = layout.footer.info
	const steps = [data.fields.kontakt_stufe_1, data.fields.kontakt_stufe_2, data.fields.kontakt_stufe_3];

	const [eventDate, setEventDate] = React.useState(new Date());
	const [elusiveDate, setElusiveDate] = React.useState(new Date());
	const [beginTime, setBeginTime] = React.useState(new Date());
	const [endTime, setEndTime] = React.useState(new Date());

	const formSteps = React.useRef();
	const stepSlider = React.useRef();
	const dateRange = React.useRef();
	const dates = React.useRef();
	const firstStepLock = React.useRef();
	const secondStepLock = React.useRef();
	const successBlock = React.useRef();

	const changeStep = (e) => {
		const isDateAnswerOneChecked = firstStepLock.current.nextElementSibling.firstElementChild.checked;
		const isDateAnswerTwoChecked = firstStepLock.current.nextElementSibling.nextElementSibling.firstElementChild.checked;
		const ellipses = formSteps.current.parentElement.parentElement.firstElementChild.children;

		if (isDateAnswerOneChecked === true || isDateAnswerTwoChecked === true) {

			firstStepLock.current.parentElement.classList.remove('uncheckedField')

			if (e.currentTarget.classList.contains('goFirst')) {
				formSteps.current.classList.remove('atSecondStep')
				ellipses[1].classList.remove('activeStep')
				ellipses[0].classList.add('activeStep')
			} else if (e.currentTarget.classList.contains('goNext')) {

				if (secondStepLock.current.nextElementSibling.value.length > 0) {
					formSteps.current.classList.remove('atSecondStep')
					formSteps.current.classList.add('atThirdStep')
					ellipses[1].classList.remove('activeStep')
					ellipses[2].classList.add('activeStep')
				} else {
					secondStepLock.current.parentElement.classList.add('uncheckedField')
				}

			} else if (e.currentTarget.classList.contains('goSecond')) {
				formSteps.current.classList.remove('atThirdStep')
				formSteps.current.classList.add('atSecondStep')
				ellipses[2].classList.remove('activeStep')
				ellipses[1].classList.add('activeStep')
			} else {
				formSteps.current.classList.add('atSecondStep')
				ellipses[0].classList.remove('activeStep')
				ellipses[1].classList.add('activeStep')
			}

		} else {
			firstStepLock.current.parentElement.classList.add('uncheckedField')
		}

	}

	const removeUnchecked = (e) => {
		e.currentTarget.parentElement.classList.contains('uncheckedField') === true ? e.currentTarget.parentElement.classList.remove('uncheckedField') : null
	}

	const hideDates = (e) => {
		const container = e.currentTarget.parentElement.parentElement;
		const answerYes = e.currentTarget.parentElement.parentElement.children[1].firstElementChild;
		container.classList.contains('uncheckedField') === true ? container.classList.remove('uncheckedField') : null;
		if (answerYes.checked) {
			dates.current.classList.remove('hidden')
			dateRange.current.classList.add('hidden')
		} else {
			dates.current.classList.add('hidden')
			dateRange.current.classList.remove('hidden')
		}
	}

	const { handleSubmit, register, errors } = useForm();

	const [submitted, setSubmitted] = React.useState(false);

	const onSubmit = values => {
		const dates = {
			lang: lang,
			eventdatum: eventDate.toDateString(),
			ausweichtermin: elusiveDate.toDateString(),
			eventzeitbeginn: beginTime.toLocaleTimeString('de-DE'),
			eventzeitend: endTime.toLocaleTimeString('de-DE')
		};
		const finalForm = { ...values, ...dates };

		fetch('/api/contact', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: serialize(finalForm)
    }).then((res) => {
      res.status === 200 ? setSubmitted(!submitted) : ''
    }).catch((err) => console.log(err))
	};

	React.useEffect(() => {
		stepSlider.current.firstElementChild.classList.add('activeStep')
		if (requestedLocation) {
			locationSelection.current.lastElementChild.value = requestedLocation;
		}
	}, []);

	React.useEffect(() => {
		if (submitted){
			formSteps.current.classList.add('hideForm');
			successBlock.current.classList.add('showSuccess');
		}
	}, [submitted])

	return (
		<>
			<NextSeo
				title={data.fields.seo.title}
				description={data.fields.seo.description}
			/>
			<div className="page__title page__title--contact">
				<Breadcrumb slug={data.slug} title={data.title} />
				<h1>{data.title}</h1>
			</div>
			<div className="contact">

				<div ref={stepSlider} className="contact__stepslider">
					{
						steps.map((item, key) => (
							<div key={key}
								className="contact__stepslider--ellipse">
								<span>{key + 1}</span>
							</div>
						))
					}
				</div>

				<div className="contact--wrapper">

					<form className="contact__steps" ref={formSteps} onSubmit={handleSubmit(onSubmit)}>

						<div className="contact__step">

							<div className="contact__step--flexWrapper">

								<div className="contact__stepblock">
									<label htmlFor="event_type" className="label__select">{steps[0].kontakt_frage_1.frage}</label>
									<select name="event_type" ref={register}>
										<optgroup>
											{steps[0].kontakt_frage_1.optionen.map((item, key) => (
												<option key={key} value={item.option}>{item.option}</option>
											))}
										</optgroup>
									</select>
								</div>

								<div className="contact__stepblock" ref={locationSelection}>
									<label htmlFor="event_location" className="label__select">{steps[0].kontakt_frage_2.frage}</label>
									<select ref={register} name="event_location">
										<optgroup>
											{steps[0].kontakt_frage_2.optionen.map((item, key) => (
												<option key={key} value={item.option}>{item.option}</option>
											))}
										</optgroup>
									</select>
								</div>

							</div>

							<div className="contact__step--flexWrapper-xl">

								<div className="contact__stepblock">
									<label
										ref={firstStepLock}
										htmlFor="event_date_answer"
										className="contact__stepblock--inner">{steps[0].kontakt_frage_3.frage}</label>
									{steps[0].kontakt_frage_3.optionen.map((item, key) => (
										<p className="contact__stepblock--inner" key={key}>
											<input onClick={hideDates} ref={register} className="input__radio" type="radio" name="event_date_answer" value={item.option} />
											<span className="label__radio">{item.option}</span>
										</p>
									))}
								</div>

								<div className="contact__stepblock" ref={dateRange}>
									<label className="label__text" htmlFor="date_range">{steps[0].kontakt_frage_5}</label>
									<input className="input__text" name="date_range" ref={register} type="text" />
								</div>

								<div ref={dates}
									className="contact__stepblock contact__stepblock--datewrapper hidden">

									<div className="contact__stepblock--date">
										<label htmlFor="date_of_event">{steps[0].kontakt_frage_6.datum}</label>
										<DatePicker selected={eventDate} name="eventdatum" ref={register} onChange={date => setEventDate(date)} />
									</div>

									<div className="contact__stepblock--date">
										<label htmlFor="date_of_elusive">{steps[0].kontakt_frage_6.ausweichtermin}</label>
										<DatePicker selected={elusiveDate} name="ausweichtermin" ref={register} onChange={date => setElusiveDate(date)} />
									</div>

									<div className="contact__stepblock--date">
										<label htmlFor="date_of_elusive">{steps[0].kontakt_frage_6.beginn}</label>
										<DatePicker
											ref={register}
											name="event_beginn_zeit"
											showTimeSelect
											showTimeSelectOnly
											timeIntervals={15}
											timeCaption="Time"
											dateFormat="h:mm aa"
											selected={beginTime} onChange={date => setBeginTime(date)}
										/>
									</div>

									<div className="contact__stepblock--date">
										<label htmlFor="date_of_elusive">{steps[0].kontakt_frage_6.ende}</label>
										<DatePicker
											name="event_end_zeit"
											showTimeSelect
											showTimeSelectOnly
											timeIntervals={15}
											timeCaption="Time"
											dateFormat="h:mm aa"
											selected={endTime} onChange={date => setEndTime(date)}
										/>
									</div>

								</div>

							</div>

							<a href="#"
								className="golden__button golden__button--center"
								onClick={changeStep} >
								{data.fields.buttonfelder.prufen}
							</a>

						</div>

						<div className="contact__step">

							<h3>{steps[1].feld_1.titel}</h3>

							<div className="contact__step--wrapper">

								<div className="contact__step--flexWrapper">

									<div className="contact__stepblock">
										<label ref={secondStepLock} className="label__text" htmlFor="personenzahl">{steps[1].feld_1.frage_1}</label>
										<input onChange={removeUnchecked} 
										type="text" 
										ref={register({ 
											required: true,
											maxLength: 30, 
										})} 
										className="input__text" name="personenzahl" />
									</div>

									<div className="contact__stepblock">
										<label htmlFor="event_max_budget"
											className="contact__stepblock--inner">{steps[1].feld_1.frage_2.fragefeld}</label>
										{Object.values(steps[1].feld_1.frage_2.optionen).map((item, key) => (
											<p className="contact__stepblock--inner" key={key}>
												<input ref={register} type="radio" className="input__radio" name="event_max_budget" value={item} />
												<span className="label__radio">{item}</span>
											</p>
										))}
									</div>

								</div>

								<h3>{steps[1].feld_2.titel}</h3>

								<div className="contact__step--flexWrapper-xl">

									{(Object.values(steps[1].feld_2).slice(1)).map((item, key) => (

										<div key={key} className="contact__stepblock">
											<label htmlFor={`event_${item.fragefeld.toLowerCase()}`} className="label__select">{item.fragefeld}</label>
											<select ref={register} name={`event_${item.fragefeld.toLowerCase()}`}>

												{item.optionen.map((subItem, subKey) => (
													<option key={subKey} value={subItem.option}>{subItem.option}</option>
												))}

											</select>
										</div>
									))}

								</div>

							</div>

							<div className="contact__buttongroup">
								<a
									href="#"
									onClick={changeStep}
									className="golden__button goFirst">{data.fields.buttonfelder.zuruck}</a>
								<a
									href="#"
									onClick={changeStep}
									className="golden__button goNext">{data.fields.buttonfelder.weiter}</a>
							</div>

						</div>

						<div className="contact__step">

							<h3>{steps[2].titel}</h3>

							<div className="contact__step--flexWrapper">

								<div className="contact__stepblock">
									<label htmlFor="kontakt_anrede" className="label__select">{steps[2].anredefeld.frage}</label>
									<select ref={register} name="kontakt_anrede">
										{steps[2].anredefeld.sex.map((item, key) => (
											<option key={key} value={item.option}>{item.option}</option>
										))}
									</select>
								</div>

								<div className="contact__stepblock">
									<label className="label__text" 
										htmlFor={`kontakt_company`}>
										{steps[2].andere_fragen.firma}</label>
										<input
											ref={register({ 
												maxlength: 40, 
											})}
											className="input__text"
											type="text"
											name={`kontakt_company`} />
								</div>

								<div className="contact__stepblock">
									<label className="label__text" 
										htmlFor={`kontakt_name`}>
										{steps[2].andere_fragen.vorname}*</label>
										<input
											ref={register({ 
												required: true, 
												maxlength: 20, 
												pattern: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u 
											})}
											className="input__text"
											type="text"
											name={`kontakt_name`} />
											{errors.kontakt_name && data.fields.fehlerfelder[1].text.toUpperCase()}
								</div>

								<div className="contact__stepblock">
									<label className="label__text" 
										htmlFor={`kontakt_surname`}>
										{steps[2].andere_fragen.nachname}*</label>
										<input
											ref={register({ 
												required: true, 
												maxlength: 25, 
												pattern: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u 
											})}
											className="input__text"
											type="text"
											name={`kontakt_surname`} />
											{errors.kontakt_surname && data.fields.fehlerfelder[1].text.toUpperCase()}
								</div>

								<div className="contact__stepblock">
									<label className="label__text" 
										htmlFor={`kontakt_email`}>
										{steps[2].andere_fragen.email}*</label>
										<input
											ref={register({ 
												required: true,
												pattern: {
													value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
													message: `UNGÜLTIGE E-MAIL-ADRESSE`
												}
											})}
											className="input__text"
											type="email"
											name={`kontakt_email`} />
											{errors.kontakt_email && errors.kontakt_email.message}
								</div>

								<div className="contact__stepblock">
									<label className="label__text" 
										htmlFor={`kontakt_phone`}>
										{steps[2].andere_fragen.telefon}</label>
										<input
											ref={register({ 
												maxlength: 35, 
											})}
											className="input__text"
											type="tel"
											name={`kontakt_phone`} />
								</div>

								<div className="contact__stepblock">
									<label htmlFor="event_nachricht">{steps[0].kontakt_frage_4}</label>
									<textarea ref={register}
										name="event_nachricht" cols="30" rows="5" />
								</div>
								<div className="contact__stepblock contact__stepblock--acceptance">
										<label htmlFor="acceptance" className="contact__stepblock--inner">
											{lang === 'en' ? 'DATA PRIVACY' : 'DATENSCHUTZ'}*</label>
												<input ref={register({required: true})} type="radio" className="input__radio" name="acceptance" />
												<span className="label__radio">{parse(data.fields.kontakt_stufe_3.datenschutz)}</span>
									</div>

							</div>

							<div className="contact__buttongroup">

								<a
									href="#"
									onClick={changeStep}
									className="golden__button goSecond">{data.fields.buttonfelder.zuruck}</a>

								<button type="submit" className="golden__button">{data.fields.buttonfelder.senden}</button>

							</div>
						</div>
						
					</form>

					<div className="contact__success">
						<div ref={successBlock} className="contact__success--wrapper">
							{submitted &&
								<SendingQuery color="#C2AC84" message={data.fields.fehlerfelder[2].text}/>
							}
						</div>
					</div>

				</div>

			</div>

			<div className="contact__info">
				<div className="contact__info--map">
					<MapContainer data={data.fields.karte_koordinaten} />
				</div>

				<div className="contact__info--address">
					<div className="contact__info--logo">
						<img src={contactInfo.logo} alt="Golden Door Logo" />
					</div>
					{Object.values(contactInfo.address).map((item, key) => (
						<div key={key}>{parse(item)}</div>
					))}
					<Obfuscate tel={contactInfo.telefon.split('T:')[1]} />
					<Obfuscate email={contactInfo.email.toLowerCase()} />
				</div>

			</div>

		</>
	)
};