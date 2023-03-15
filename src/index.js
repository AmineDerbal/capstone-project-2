import './styles/style.css';

import { getApiItems } from './modules/api.js';
import displayItems from './modules/display.js';

const getItemsCount = () => document.querySelectorAll('.item').length;
window.onload = async () => {
  const items = await getApiItems();
  displayItems(items);
  const itemsCounter = document.getElementById('item-counters');
  itemsCounter.innerHTML = `(${getItemsCount()}) Breeds of dog`;
};
