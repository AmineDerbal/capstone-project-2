import './styles/style.css';
import 'animate.css';
import logoSrc from './image/logo.jpg';

import { getApiItems } from './modules/api.js';
import displayItems from './modules/display.js';

const loadLogo = () => {
  const logoImage = document.querySelector('#logo img');
  logoImage.src = logoSrc;
};

const getItemsCount = () => document.querySelectorAll('.item').length;
window.onload = async () => {
  loadLogo();
  const items = await getApiItems();
  displayItems(items);
  const itemsCounter = document.getElementById('item-counters');
  itemsCounter.innerHTML = `(${getItemsCount()}) Breeds of dog`;
};
