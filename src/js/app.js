import headerLang from './modules/headerLang.js';
import menuHandler from './modules/menuHandler.js'

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  document.addEventListener('click', (e) => {
    menuHandler(e)
    headerLang(e);
  })
});