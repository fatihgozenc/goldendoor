import { NextSeo } from 'next-seo';
import Hero from '../../Hero';
import MehrLesen from '../../MehrLesen';
import './style.scss'

export default function ({ data }) {
	return (
		<>
			<NextSeo
				title={data.main.fields.seo.title}
				description={data.main.fields.seo.description}
			/>
			<Hero data={data.main} />
			<div id="content" className="pool pool--home">
				{data.children.map((route, key) => (
					<a key={key} href={route.lang === 'en' ? `/en/referenzen/${route.slug}` : `/referenzen/${route.slug}`}
						className="home__route" >
						<div className="home__route--wrapper">
							<div className="home__route--img backgroundImg"
								style={{ backgroundImage: "url(" + route.image + ")" }} />
							<div className="home__route--content">
								<h3 className="title__lg">{route.title}</h3>
								<p>{route.excerpt}</p>
								<span className="home__route--link">
									<MehrLesen name={data.read_more} />
								</span>
							</div>
						</div>
					</a>
				))}
				<div className="pool__pagination">
					{
						new Array(data.page_count + 1).fill(data.page_count).map((item, key) => {
							if (key === 1) {
								return (
									<a key={key} href={data.lang === 'en' ? `/en/referenzen` : `/referenzen`} className={data.page_number == key ? 'pageActive' : null}
									>{key}
									</a>
								)
							} else if (key > 1) {
								return (
									<a key={key} href={data.lang === 'en' ? `/en/referenzen/page/${key}` : `/referenzen/page/${key}`}
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
			</div>
		</>
	)
};