import headerLang from './modules/headerLang.js';
import menuHandler from './modules/menuHandler.js';
import swiperPath from './modules/swiperPath.js';


document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  swiperPath();

  document.addEventListener('click', (e) => {
    menuHandler(e)
    headerLang(e);
  })
});