import Cookie from 'cookie-universal';
import MenuToggler from './MenuToggler';
import MenuMailer from './MenuMailer';

const cookies = Cookie();

const Header = ({ data, logo, lang, pathname }) => {

	const navigation = React.useRef();
	const langSelection = React.useRef();
	const menuToggler = React.useRef();

	const changeLang = () => {
		langSelection.current.previousElementSibling.classList.add('lowOpacity');
		langSelection.current.classList.add('changeLang');
	}

	const setLang = () => {
		cookies.get('lang') === 'de' ? cookies.set('lang', 'en') : cookies.set('lang', 'de');
		langSelection.current.previousElementSibling.classList.remove('lowOpacity');
		langSelection.current.classList.remove('changeLang');
	}

	const setPathLang = () => {
		if (lang === 'de' && pathname === '/') {
			return `/en`
		} else if (lang === 'en' && pathname === '/en') {
			return `/`
		} else if (pathname === '/en/engagement' || pathname === '/engagement') {
			return lang === 'de' ? `/en/engagement` : `/engagement`
		} else if (lang === 'en') {
			return pathname.split('/en')[1]
		} else {
			return `/en${pathname}`
		}
	}

	const toggleMenu = (e) => {
		menuToggler.current.classList.toggle('toggleMenuIcon');
		navigation.current.classList.toggle('nav__opening');
		let navItems = navigation.current.querySelectorAll('ul');
		setTimeout(() => {
			navItems.forEach(item => {
				item.classList.toggle('nav__child--appear');
			});
		}, 250);
	}

	return (
		<header className="header">
			<nav className="nav" ref={navigation}>
				<div className="nav__wrapper">
					{
						data.map(item => {
							return (
								<ul key={item.id}>
									<a href={item.url} onClick={toggleMenu} className="nav__parent">{item.title}</a>
									{item.children !== null &&
										item.children.map(subItem => (
											(subItem.children !== null)
												? (
													<ul key={subItem.id}>
														<a href={subItem.url} onClick={toggleMenu} className="nav__child">{subItem.title}</a>
														{subItem.children.map(subItemChild => (
															<li key={subItemChild.id}>
																<a href={subItemChild.url} onClick={toggleMenu} className="nav__child nav__child--sub">
																	{subItemChild.title}
																</a>
															</li>
														))}
													</ul>
												) : (
													<li key={subItem.id}>
														<a href={subItem.url} onClick={toggleMenu} className="nav__child">{subItem.title}</a>
													</li>
												)
										))
									}
								</ul>
							)
						})
					}
				</div>
			</nav>
			<div className="frame">
				<div className="logoarea">
					<div className="panel panel__lang">
						<div className="langselection">
							<button
								className="panel__lang-selector"
								onClick={changeLang}>
								{`${lang.toUpperCase()}▾`}
							</button>
							<a href={setPathLang()}
								ref={langSelection}
								className="panel__lang-selected"
								onClick={setLang}>
								<span>{(lang === 'de' ? 'EN' : 'DE')}</span>
							</a>
						</div>
						<div className="additional_menu-item" onClick={toggleMenu}>
							{lang === 'de' ? 'Über Uns' : 'About Us'}</div>
						<div className="additional_menu-item" onClick={toggleMenu}>
							{lang === 'de' ? 'Leistungen' : 'Services'}</div>
					</div>
					<a href={lang === 'de' ? '/' : '/en'} id="logo" >
						<img src={logo} alt="Golden Door Logo" />
					</a>
					<div className="panel panel__menu">
						<div className="additional_menu-item" onClick={toggleMenu}>
							Locations</div>
						<div className="additional_menu-item" onClick={toggleMenu}>
							{lang === 'de' ? 'Galerie' : 'Gallery'}</div>
						<button className="menutoggler__button" ref={menuToggler} onClick={toggleMenu}>
							<MenuToggler />
						</button>
					</div>
				</div>
				<a href="#newsletter" className="menuMailer" >
					<MenuMailer />
				</a>

			</div>
		</header>
	)
};

export default Header;