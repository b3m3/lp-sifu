import Swiper from 'swiper'
import { Pagination, Navigation, Parallax } from 'swiper/modules'

export const swiperPath = () => {
	const swiper = new Swiper('.path__swiper', {
		modules: [Pagination, Parallax],
		loop: true,
		parallax: true,
		speed: 600,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	})
}

export const swiperGallery = () => {
	const swiper = new Swiper('.gallery__swiper', {
		modules: [Pagination, Navigation],
		loop: true,
		speed: 600,
		breakpoints: {
			320: {
				spaceBetween: 20,
				slidesPerView: 1,
			},
			768: {
				spaceBetween: 40,
				slidesPerView: 2,
			},
		},

		pagination: {
			el: '.gallery-swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})
}
