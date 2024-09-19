import headerLang from './modules/headerLang.js';
import menuHandler from './modules/menuHandler.js';
import gallerySwitcherBtn from './modules/gallerySwitcherBtn.js';
import formHandler from './modules/formHandler.js';
import { swiperPath, swiperGallery } from './modules/swiper.js'

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  swiperPath();
  swiperGallery();
  formHandler();
  
  document.addEventListener('click', (e) => {
    menuHandler(e)
    headerLang(e);
    gallerySwitcherBtn(e)
  })
});