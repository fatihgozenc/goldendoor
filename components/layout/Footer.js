import parse from 'html-react-parser';
import Obfuscate from 'react-obfuscate';

const Footer = ({ data }) => {

	return (
		<footer className="footer">
			<div className="footer__block">

				<div className="footer__block__item">
					<img id="footer--logo" src={data.info.logo} alt="Golden Door Logo" />
				</div>

				<div className="footer__block__item">
					{parse(data.info.address.berlin)}
				</div>

				<div className="footer__block__item">
					{parse(data.info.address.dresden)}
				</div>

				<div className="footer__block__item footer__block__item--numbers">
					<Obfuscate tel={data.info.telefon.split('T:')[1]} />
					<Obfuscate email={data.info.email.toLowerCase()} />
				</div>

				<div className="footer__block__item">
					<div className="footer__routes">
						<div className="footer__routes--block">
							{data.routes.map((route, key) => {
								while (key <= 3) {
									return (
										<a key={route.id} href={route.url} className="footer__routes--item" >{route.title}</a>
									)
								}
							})}
						</div>
						<div className="footer__routes--block">
							{data.routes.map((route, key) => {
								while (key >= 4) {
									return (
										<a key={route.id} href={route.url} className="footer__routes--item">{route.title}</a>
									)
								}
							})}
							<div className="footer__routes--item copyright">{data.info.copyright}</div>
						</div>
					</div>
				</div>

			</div>
			<div className="footer__block">
				<div className="footer__submarken">
					<div id="submarken--text" className="footer__submarken--item ">{data.submarken.submarke_text}</div>

					<div className="footer__submarken--wrapper">

						<div className="footer__submarken--block">
							{data.submarken.submarke_logogroup.map((marke, key) => {
								while (key < 4) {
									return (
										<div key={key} className="footer__submarken--item">
											<a href={marke.route}>
												<img src={marke.logo} alt="Submarke Logo" />
											</a>
										</div>
									)
								}
							})
							}
						</div>
						<div className="footer__submarken--block">
							{data.submarken.submarke_logogroup.map((marke, key) => {
								while (key > 3 && key < 8) {
									return (
										<div key={key} className="footer__submarken--item">
											<a href={marke.route}>
												<img src={marke.logo} alt="Submarke Logo" />
											</a>
										</div>
									)
								}
							})
							}
						</div>

					</div>

					<div className="footer__submarken--block">
						{data.submarken.submarke_logogroup.map((marke, key) => {
							while (key > 7) {
								return (
									<div key={key} className="footer__submarken--item">
										<a href={marke.route}>
											<img src={marke.logo} alt="Submarke Logo" />
										</a>
									</div>
								)
							}
						})
						}
					</div>
				</div>
			</div>

		</footer >
	)
};

export default Footer;