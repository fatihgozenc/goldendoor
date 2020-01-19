import React from 'react';
import Hero from '../../hero';
import Carousel from '../../carousel';
import './style.scss';

export default function({data}) {
	const mitarbeiterData = data.fields.mitarbeiter_info;
	const images = mitarbeiterData.map(item => (
		item.mitarbeiter_bild
	))

	return (
		<>
			<Hero data={data} />
			<div id="content" className="team">
				<Carousel
					name="team"
					data={mitarbeiterData}
					imgList={images}
					img_width={250}
					img_height={280}
					visibleImages={5}
					duration={750}
				/>
				<div className="team__lastblock">
					<h5>{data.fields.karriere_text}</h5>
          <a className="golden__button" 
            href={data.fields.karriere_button.link}>
              {data.fields.karriere_button.text}
          </a>
				</div>
			</div>
		</>
	)
}