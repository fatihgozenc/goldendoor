import Scene from './Scene';
import Galaxy from './Galaxy';
import parse from 'html-react-parser';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import './style.scss';

export default function({ data }) {
	return (
		<div className="scene">
			<div className="scene-background" />
			<div className="scene-landscape" />
			<div className="scene-galaxy"><Galaxy /></div>
			<Scene />
			<div className="home__slider">
				<CarouselProvider
					naturalSlideWidth={220}
					naturalSlideHeight={125}
					totalSlides={data.length}
					isPlaying={true}
					interval={9000}
					infinite={true}
				>
					<Slider className="home__slider--wrapper">

						{data.map((item, key) => (

							<a href={item.link} key={key}>
								<Slide index={key}>
									<h2>{item.titel}</h2>
									{parse(item.inhalt)}
								</Slide>
							</a>

						))}

					</Slider>
				</CarouselProvider>
			</div>
		</div>
	)
}