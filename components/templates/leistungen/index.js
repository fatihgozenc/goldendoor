import { NextSeo } from 'next-seo';
import Hero from '../../Hero';
import parse from 'html-react-parser';
import './style.scss'

export default function({data}) {
	return (
		<>
			<NextSeo
				title={data.fields.seo.title}
				description={data.fields.seo.description}
			/>
			<Hero data={data} entrance={data.fields.eroffnungstitel} />
			<div id="content" className="services">
				{data.fields.leistung_bearbeitung.map((item, key) => (

					<div key={key} className="home__route">
						
						<div className="home__route--wrapper services__route--wrapper">
							<div className="home__route--img services__route--img backgroundImg"
								style={{ backgroundImage: "url(" + item.leistung_bild + ")" }} />
							<div className="home__route--content services__route--content">
								<h3 className="title__lg">{item.leistung_titel}</h3>
								{parse(item.leistung_inhalt)}
							</div>
						</div>

					</div>

				))}
			</div>
		</>
	)
};