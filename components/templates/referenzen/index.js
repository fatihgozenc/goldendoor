import { NextSeo } from 'next-seo';
import Link from 'next/link';
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
					<Link key={key} href={route.lang === 'en' ? `/en/referenzen/${route.slug}` : `/referenzen/${route.slug}`}>
						<a className="home__route" >
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
					</Link>
				))}
				<div className="pool__pagination">
					{
						new Array(data.page_count + 1).fill(data.page_count).map((item, key) => {
							if (key === 1) {
								return (
									<Link key={key} href={data.lang === 'en' ? `/en/referenzen` : `/referenzen`}>
										<a className={data.page_number == key ? 'pageActive' : null}
										>{key}
										</a>
									</Link>
								)
							} else if (key > 1) {
								return (
									<Link key={key} href={data.lang === 'en' ? `/en/referenzen/page/${key}` : `/referenzen/page/${key}`}>
										<a className={data.page_number == key ? 'pageActive' : null}
										>{key}
										</a>
									</Link>
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