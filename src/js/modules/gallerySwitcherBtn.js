const gallerySwitcherBtn = (e) => {
  const scroll = document.querySelector('.top-gallery__buttons_scroll');
  const buttons = document.querySelectorAll('.top-gallery__buttons_btn')

  const arr = ['PHOTOS 相片', 'VIDEOS 影片'];
  const activeClass = 'active';

  if (e.target && e.target.classList.contains('top-gallery__buttons_btn')) {
		const index = arr.indexOf(e.target.textContent.toUpperCase())

    buttons.forEach(btn => btn.classList.remove(activeClass))
    buttons[index].classList.add(activeClass)

		if (index) {
			scroll.classList.add(activeClass)
		} else {
			scroll.classList.remove(activeClass)
		}
	}
  
}

export default gallerySwitcherBtn;