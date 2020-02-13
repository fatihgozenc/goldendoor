import { NextSeo } from 'next-seo';
import Breadcrumb from '../../Breadcrumb';
import parse from 'html-react-parser';
import './style.scss';

export default function ({ data }) {

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
			{
				data.children != null ? (
					<>
						<div className="engagement">
							{
								data.children.map((item, key) => (
									<div key={key} className="engagement__item">

										<a href={`presse/${item.slug}`}>
											<div className="engagement__item--img backgroundImg"
												style={{ backgroundImage: "url(" + item.image + ")" }} />
											<div className="engagement__item--info">
												<h3>{item.title}</h3>
												<p>{parse(item.excerpt)}</p>
											</div>
										</a>
									</div>
								))
							}
						</div>
						<div className="pool__pagination">
							{
								new Array(data.page_count + 1).fill(data.page_count).map((item, key) => {
									if (key === 1) {
										return (
											<a key={key} href={data.lang === 'en' ? `/en/presse` : `/presse`} className={data.page_number == key ? 'pageActive' : null}
											>{key}
											</a>
										)
									} else if (key > 1) {
										return (
											<a key={key} href={data.lang === 'en' ? `/en/presse/page/${key}` : `/presse/page/${key}`}
												className={data.page_number == key ? 'pageActive' : null}
											>{key}
											</a>
										)
									} else {
										return null;
									}
								})
							}
						</div>
					</>
				) : (
						<div className="engagement">
							<p className="nocontent">
								{data.lang == 'de' ? 'Wir aktualisieren unseren Nachrichteninhalt. Vielen Dank für Ihre Geduld.' : 'We\'re updating our news content. Thank you for your patience.'}
							</p>
						</div>
					)
			}

		</>
	)
};