const headerLang = (e) => {
  const langName = document.querySelector('.lang-header__lang')

  if (e.target && e.target.closest('.lang-header__item')) {
		langName.textContent = e.target.textContent;
	}
}

export default headerLang;