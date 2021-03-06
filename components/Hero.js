import Breadcrumb from './Breadcrumb';

export default function({ data, className, entrance }) {
	return (
		<>
			<div className={`hero ${className}`}>
				<div className="hero__img backgroundImg" style={{ backgroundImage: "url(" + data.image + ")" }} />
				<div className="hero__opening">
					<div className="hero__opening--title">
						<Breadcrumb slug={data.slug} title={data.title} />
						<h1>{entrance ? entrance : data.title}</h1>
					</div>
					<div className="hero__opening--excerpt">
						<p>{data.content}</p>
						<a className="hero__scroll scroller" href="#content">{data.scroll}<span>▾</span></a>
					</div>
				</div>
			</div>
		</>
	)
}