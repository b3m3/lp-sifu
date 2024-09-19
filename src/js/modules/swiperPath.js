import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

const swiperPath = () => {
	const swiper = new Swiper('.path__swiper', {
		modules: [Pagination],
		loop: true,

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	})
}

export default swiperPath
