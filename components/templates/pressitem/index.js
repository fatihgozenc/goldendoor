import { NextSeo } from 'next-seo';
import Hero from '../../Hero';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import parse from 'html-react-parser';
import MehrLesen from '../../MehrLesen';
import './slider.scss';
import './style.scss'

export default function ({ data }) {

	const heroData = {
		slug: data.slug,
		title: data.title,
		content: data.excerpt,
		image: data.image,
		scroll: data.scroll
	}

	console.log(data)

	return (
		<>
			<NextSeo
				title={data.fields.seo.title}
				description={data.fields.seo.description}
			/>
			<Hero data={heroData} className="hero--reference" />
			<div id="content" className="reference">

				<div className="reference__info">
					<h3>{data.title}</h3>
					<p>{parse(data.content.replace(/\n/g, "<br />"))}</p>

					<div className="reference__info--utils">

						<div className="reference__info--linkgroup">
							<a className="" href={data.lang === 'de' ? `/presse/${data.prev}` : `/en/presse/${data.prev}`}>
								&larr; {data.prevbutton}</a>
							<a className="" href={data.lang === 'de' ? `/presse/${data.next}` : `/en/presse/${data.next}`}>
								{data.nextbutton} &rarr;</a>
						</div>

					</div>

				</div>

				{
					data.fields.gallery.length > 0 &&

					(
						<div className="singleloc__gallery reference__gallery">
							<CarouselProvider
								naturalSlideWidth={500}
								naturalSlideHeight={600}
								totalSlides={data.fields.gallery.length}
								isPlaying={true}
								interval={5000}
								infinite={true}
							>
								<Slider className="singleloc__gallery--wrapper reference__gallery--wrapper">

									{data.fields.gallery.map((item, imageKey) => (

										<Slide key={imageKey} index={imageKey}>
											<img width="100%" src={item} />
										</Slide>

									))}

								</Slider>

								<DotGroup className="gallery--nav" />
							</CarouselProvider>
						</div>
					)

				}

			</div>
		</>
	)
};