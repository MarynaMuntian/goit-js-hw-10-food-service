import foodCards from './menu.json';
import menuTemplate from './menu-template.hbs';

const menuGallery = document.querySelector('ul.js-menu');

const cardsMarkup = menuTemplate(foodCards);

menuGallery.insertAdjacentHTML('beforeend', cardsMarkup);