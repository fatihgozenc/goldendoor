import Cookie from 'cookie-universal';
import MenuToggler from './MenuToggler';
import MenuMailer from './MenuMailer';
import Link from 'next/link';

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
		} else if (lang === 'en') {
			return pathname.split('/en')[1]
		} else {
			return `/en/${pathname.split('/')[1]}`
		}
	}

	const toggleMenu = (e) => {
		console.log(navigation, e.currentTarget)
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
									<Link href={item.url}>
										<a className="nav__parent">{item.title}</a>
									</Link>
									{item.children !== null &&
										item.children.map(subItem => (
											(subItem.children !== null)
												? (
													<ul key={subItem.id}>
														<Link href={subItem.url} >
															<a className="nav__child">{subItem.title}</a>
														</Link>
														{subItem.children.map(subItemChild => (
															<li key={subItemChild.id}>
																<Link href={subItemChild.url}>
																	<a className="nav__child nav__child--sub">
																		{subItemChild.title}
																	</a>
																</Link>
															</li>
														))}
													</ul>
												) : (
													<li key={subItem.id}>
														<Link href={subItem.url}>
															<a className="nav__child">{subItem.title}</a>
														</Link>
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
						<button
							className="panel__lang-selector"
							onClick={changeLang}>
								{`${lang.toUpperCase()}▾`}
						</button>
						<Link href={setPathLang()}>
							<a 
								ref={langSelection}
								className="panel__lang-selected"
								onClick={setLang}>
									<span>{(lang === 'de' ? 'EN' : 'DE')}</span>
							</a>
						</Link>
					</div>
					<Link href={lang === 'de' ? '/' : '/en'}>
						<a id="logo" >
							<img src={logo} alt="Golden Door Logo" />
						</a>
					</Link>
					<div className="panel panel__menu">
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