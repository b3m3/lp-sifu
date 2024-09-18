const menuHandler = (e) => {
	const menuItem = e.target.closest('.header__nav_link');
	const buyBtn = e.target.closest('.header__buttons_buy');
	
	const menu = document.querySelector('.menu-col');
	const menuBtn = document.querySelector('.menu-hamburger');

  const activeClass = 'active';

	if (e.target && e.target === menuBtn) {
		menuBtn.classList.toggle(activeClass)

		if (menuBtn.classList.contains(activeClass)) {
			menu.classList.add(activeClass)
		} else {
			menu.classList.remove(activeClass)
		}
	}

	if (e.target && (e.target === menuItem || e.target === buyBtn)) {
		menu.classList.remove(activeClass)
		menuBtn.classList.remove(activeClass)
	}

	if (
		e.target &&
		!e.target.closest('.menu-col') &&
		!e.target.closest('.menu-hamburger')
	) {
		menu.classList.remove(activeClass)
		menuBtn.classList.remove(activeClass)
	}
}

export default menuHandler;