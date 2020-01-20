import Link from 'next/link'
import Hero from '../../Hero'
import parse from 'html-react-parser'
import MehrLesen from '../../MehrLesen'
import './style.scss'

export default function ({ data, lang }) {
	const story = data.fields.uber_uns_story;
	const philosophy = data.fields.uber_uns_philosophy;
	const extra_text_1 = data.fields.uber_uns_extra_text.extra_text_block_1;
	const extra_text_2 = data.fields.uber_uns_extra_text.extra_text_block_2;
	console.log(data.lang)
	return (
		<>
			<Hero data={data} entrance={data.fields.eroffnungstitel} />
			<div id="content">

				<div className="story story--right">
					<div className="story__img backgroundImg" style={{ backgroundImage: "url(" + story.story_bild + ")" }} />
					<div className="story__content">
						<h2 className="title__lg">{story.story_titel}</h2>
						{parse(story.story_inhalt)}
						{
							lang === 'de'
								? (
									<Link href="/referenzen">
										<a>
											<MehrLesen name={`ZUM REFERENZEN`} />
										</a>
									</Link>
								) : (
									<Link href="/en/referenzen">
										<a>
											<MehrLesen name={`TO REFERENCES`} />
										</a>
									</Link>
								)
						}
					</div>
				</div>

				<div className="extratext">
					{/* {parse(extra_text_1)}
					{parse(extra_text_2)} */}
				</div>

				<div className="story story--left">
					<div className="story__content">
						<h2 className="title__lg">
							{philosophy.philosophy_titel}
						</h2>
						{parse(philosophy.philosophy_inhalt)}
						{
							lang === 'de'
								? (
									<a href="/kontakt">
										<MehrLesen name={`ZUM KONTAKT`} />
									</a>
								) : (
									<a href="/en/kontakt">
										<MehrLesen name={`TO CONTACT`} />
									</a>
								)
						}
					</div>
					<div
						className="story__img backgroundImg"
						style={{
							backgroundImage: "url(" + philosophy.philosophy_bild + ")"
						}}
					/>
				</div>

			</div>
		</>
	)
};