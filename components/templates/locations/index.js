import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Breadcrumb from '../../Breadcrumb';
import './style.scss'

export default function ({ data, lang }) {
	return (
		<>
			<NextSeo
				title={data.fields.seo.title}
				description={data.fields.seo.description}
			/>
			<div className="page__title">
				<Breadcrumb slug={data.slug} title={data.title} />
				<h1>{data.title}</h1>
			</div>
			<div className="locations">

				{data.fields.location_infos.map((location, key) => (
					(location.location_info.sublocations === false)
						? (
							<a key={key} href={`/locations/${(location.location_info.location_name).toLowerCase()}`}
								className="location__item">
								<h2>{location.location_info.location_name}</h2>
								<div className="location__item--wrapper">
									<div className="location__item--img backgroundImg"
										style={{ backgroundImage: "url(" + location.location_info.location_bild + ")" }} />
								</div>
							</a>
						) : (
							<button key={key}
								className="location__item">
								<h2>{location.location_info.location_name}</h2>
								<div className="location__item--wrapper">
									<div className="location__item--img backgroundImg"
										style={{ backgroundImage: "url(" + location.location_info.location_bild + ")" }} />
									<div className="location__item--subitemwrapper">
										{
											location.location_info.sublocations.map((item, subKey) => (
												<a key={subKey} href={lang === 'en' ? `/en/locations${item.link}` : `/locations${item.link}`}
													className="location__item--subitem">{item.name}</a>
											))
										}
									</div>
								</div>
							</button>
						)
				))}
				<a className="ubersicht" href="#daten">{data.fields.location_scroll_text}<span>▾</span></a>
			</div>
			<div id="daten" className="locations__daten">

				{data.fields.location_infos.map((info, infoKey) => (

					<div key={`1${infoKey}`} className="locations__daten--item">
						<img src={info.location_info.location_logo} alt={`${info.location_info.location_name} Logo`} />

						{Object.values(info.technische_daten).map((locData, locKey) => (
							<div key={locKey} className="locations__daten--itemdata">
								<h5>{locData.key}</h5>
								<p>{locData.value}</p>
							</div>
						))}

					</div>
				)
				)}

			</div>
		</>
	)
};