import parse from 'html-react-parser';
import DatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';
import { NextSeo } from 'next-seo';
import { useDropzone } from 'react-dropzone';
import Breadcrumb from '../../Breadcrumb';
import Dropzone from 'react-dropzone-uploader'
import serialize from 'serialize-javascript';
var bufferify = require('json-bufferify');
import Icon from '../../Icon';
import './style.scss';

export default ({ data, language }) => {

	const formFields = data.fields.karriere_bewerbung;

	const [jobStartDate, setJobStartDate] = React.useState(new Date());

	const collapseBlock = (el) => {
		let sectionHeight = el.scrollHeight;
		let elTransition = el.style.transition;
		el.style.transition = '';
		requestAnimationFrame(function () {
			el.style.height = sectionHeight + 'px';
			el.style.transition = elTransition;
			requestAnimationFrame(function () {
				el.style.height = 6 + 'rem';
			});
		});
	}

	const expandBlock = (el) => {
		let sectionHeight = el.scrollHeight;
		el.style.height = sectionHeight + 'px';
		let trigger = (el) => {
			el.addEventListener('transitionend', function (e) {
				el.removeEventListener('transitionend', trigger);
				el.style.height = null;
			});
		}
	}

	const openBlock = (e) => {
		const entryContainer = e.currentTarget.parentElement.parentElement;
		let isCollapsed = entryContainer.getAttribute('data-collapsed') === 'true';
		if (isCollapsed) {
			collapseBlock(entryContainer)
			entryContainer.setAttribute('data-collapsed', 'false');
		} else {
			expandBlock(entryContainer)
			entryContainer.setAttribute('data-collapsed', 'true');
		}
		e.currentTarget.firstElementChild.classList.toggle('rotateSymbol');
	}

	const labels = data.fields.karriere_bewerbung.bewerbung_etiketten;

	const uploadText = formFields.bewerbung_hochladen;
	const uploadMessages = formFields.formnachrichten;
	const [uploadedFile, setUploadedFile] = React.useState({
		file: '',
		buffer: {}
	});

	const MyUploader = () => {
		// specify upload params and url for your files
		const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }

		// called every time a file's `status` changes
		const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

		// receives array of files that are done uploading when submit button is clicked
		const handleSubmit = (files, allFiles) => {
			console.log(files.map(f => f.meta))
			allFiles.forEach(f => f.remove())
		}

		return (
			<Dropzone
				getUploadParams={getUploadParams}
				onChangeStatus={handleChangeStatus}
				onSubmit={handleSubmit}
				accept="application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
			/>
		)
	}


	const onDrop = React.useCallback((acceptedFiles) => {
		acceptedFiles.forEach((file) => {
			const reader = new FileReader()
			reader.onabort = () => console.log(uploadMessages[1].text)
			reader.onerror = () => console.log(uploadMessages[1].text)
			reader.onload = () => {
				// Do whatever you want with the file contents
				const binaryStr = reader.result
				setUploadedFile({ file: file, buffer: binaryStr })
			}
			reader.readAsArrayBuffer(file)
			console.log(file)
		})

	}, [])

	const { getRootProps, getInputProps } = useDropzone({ onDrop })
	const uploadTextParts = uploadText.split(' ');
	const [submitted, setSubmitted] = React.useState(false);
	const { handleSubmit, register, errors } = useForm();

	const onSubmit = data => {
		const formData = {
			lang: language,
			contactType: "jobApplication",
			name: language === 'de' ? data.bewerbung_vorname : data.bewerbung_name,
			surname: language === 'de' ? data.bewerbung_name : data.bewerbung_surname,
			email: data.bewerbung_email,
			position: data.job_position,
			jobstatus: data.job_status,
			startdate: jobStartDate.toDateString(),
			message: data.job_message,
			attachment_name: uploadedFile.file.path,
			attachment_buffer: new TextDecoder('utf-8').decode(uploadedFile.buffer)
		}
		fetch('/api/kontakt', {
			method: 'post',
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
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
			<div className="page__title page__title--contact">
				<Breadcrumb slug={data.slug} title={data.title} />
				<h1>{data.title}</h1>
			</div>
			<div className="career">
				{
					data.fields.karriere_eintrage.map((item, key) => (
						<div key={key} className="career__entry--wrapper">
							<div className="career__entry" data-collapsed="false">
								<div className="career__entry--block career__entry--util">
									{item.info.arbeitszeit}
								</div>
								<div className="career__entry--block career__entry--info">
									<h3>{item.info.titel}</h3>
									{parse(item.beschreibung)}
									<a href="#bewerbung" className="golden__button button--bewerbung">
										{formFields.bewerbung_button}
									</a>
								</div>
								<div className="career__entry--block career__entry--util">
									{item.info.standort}
								</div>
								<div className="career__entry--block">
									<a href={`#job-${key}`} onClick={(e) => openBlock(e)}>
										<Icon type="plus" />
									</a>
								</div>
							</div>
						</div>
					))
				}
			</div>
			<form onSubmit={handleSubmit(onSubmit)} id="bewerbung" className="career__application">

				<h2>{formFields.bewerbung_titel}</h2>

				<div className="contact__step--flexWrapper">

					<div className="contact__stepblock">
						<label className="label__text" htmlFor="bewerbung_name">{labels.bewerbung_vorname}*
							<input
								className="input__text"
								type="text"
								ref={register({
									required: true,
									maxlength: 20,
									pattern: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
								})}
								name="bewerbung_name" />
						</label>
					</div>

					<div className="contact__stepblock">
						<label className="label__text" htmlFor="bewerbung_name">{labels.bewerbung_name}*
							<input
								className="input__text"
								type="text"
								ref={register({
									required: true,
									maxlength: 20,
									pattern: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
								})}
								name="bewerbung_surname" />
						</label>
					</div>

					<div className="contact__stepblock">
						<label className="label__text" htmlFor="bewerbung_email">EMAIL*
							<input
								className="input__text"
								type="email"
								ref={register({
									required: true,
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
										message: `UNGÜLTIGE E-MAIL-ADRESSE`
									}
								})}
								name="bewerbung_email" />
						</label>
					</div>

					<div className="contact__stepblock">
						<label className="label__text" htmlFor="bewerbung_tel">{labels.bewerbung_telefon}
							<input
								className="input__text"
								type="tel"
								ref={
									register({
										maxlength: 35
									})
								}
								name="bewerbung_tel" />
						</label>
					</div>

					<div className="contact__stepblock">
						<label htmlFor="job_position" className="label__select">{formFields.bewerbung_frage_1}</label>
						<select name="job_position" ref={register}>
							<optgroup>
								{data.fields.karriere_eintrage.map((item, key) => (
									<option key={key} value={item.info.titel}>{item.info.titel}, {item.info.standort}</option>
								))}
							</optgroup>
						</select>
					</div>

					<div className="contact__stepblock uploadcv">
						{/* <MyUploader /> */}
						<div {...getRootProps()}>
							<input name="uploadedfile" ref={register} {...getInputProps()} />
							<span>{uploadTextParts[0]}</span>
							<span>{uploadTextParts[1]}</span>
							<span>{`${uploadTextParts[2]} ${uploadTextParts[3]}`}</span>
						</div>
					</div>

					<div className="contact__stepblock">
						<label htmlFor="job_status"
							className="contact__stepblock--inner">{formFields.bewerbung_frage_2.frage}</label>
						{formFields.bewerbung_frage_2.job_status.map((item, key) => (
							<p className="contact__stepblock--inner contact__stepblock--career" key={key}>
								<input ref={register} className="input__radio" type="radio" name="job_status" value={item.status} />
								<span className="label__radio">{item.status}</span>
							</p>
						))}
					</div>

					<div className="contact__stepblock contact__stepblock--date">
						<label className="contact__stepblock--inner" htmlFor="job_start_date">{formFields.bewerbung_zeit}</label>
						<DatePicker selected={jobStartDate} onChange={date => setJobStartDate(date)} />
					</div>

					<div className="contact__stepblock">
						<label htmlFor="job_message">{formFields.bewerbung_nachricht}</label>
						<textarea
							ref={register}
							name="job_message"
							id="job_message" cols="30" rows="5" />
					</div>

					<div className="contact__stepblock career__submitwrapper" >

						<button type="submit" className="golden__button">{formFields.bewerbung_button}</button>

					</div>

				</div>

			</form>
		</>
	)
}