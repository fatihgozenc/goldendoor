import { NextSeo } from 'next-seo';
import Breadcrumb from '../../Breadcrumb';
import parse from 'html-react-parser';
import './style.scss';

export default function ({ data }) {

	console.log(data)

	return (
		<>
			<NextSeo
				title={data.main.fields.seo.title}
				description={data.main.fields.seo.description}
			/>

			<div className="page__title page__title--downloads">
				<Breadcrumb
					slug={data.slug}
					title={data.main.title} />
				<h1>{data.main.title}</h1>
			</div>

			<div className="engagement">

				{
					data.children.map((item, key) => (
						<div key={key} className="engagement__item">
							<div className="engagement__item--img backgroundImg"
								style={{ backgroundImage: "url(" + item.image + ")" }} />
							<div className="engagement__item--info">
								<h3>{item.title}</h3>
								<p>{parse(item.excerpt)}</p>
							</div>
						</div>
					))
				}

			</div>

		</>
	)
};