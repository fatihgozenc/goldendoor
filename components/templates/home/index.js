import parse from 'html-react-parser';
import { NextSeo } from 'next-seo';
import MehrLesen from '../../MehrLesen';
import Opening from '../../opening';
import './style.scss';

export default function ({ data }) {
	const paragraphs = data.content.split("\n\r");

	return (
		<>
			<NextSeo
				title={data.fields.seo.title}
				description={data.fields.seo.description}
			/>
			<Opening data={data.fields.text_slider} />
			<div className="preface">
				<h2>{parse(data.fields.titel)}</h2>
				<div className="preface__blocks">

					{paragraphs.map((paragraph, key) => (
						<p key={key}>{paragraph}</p>
					))}

				</div>
			</div>
			<div className="pool pool--home">

				{data.fields.routers.map((route, key) => (

					<a key={key} href={route.link} className="home__route" >
						<div className="home__route--wrapper">
							<div className="home__route--img backgroundImg"
								style={{ backgroundImage: "url(" + route.bild + ")" }} />
							<div className="home__route--content">
								<h3 className="title__lg">{route.titel}</h3>
								{parse(route.inhalt)}
								<span className="home__route--link">
									<MehrLesen name={route.titel} />
								</span>
							</div>
						</div>
					</a>

				))}
			</div>
		</>
	)
}
