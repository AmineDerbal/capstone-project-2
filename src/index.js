import "./styles/style.css";
import { getApiItems } from "./modules/api.js";
import displayItems from "./modules/display.js";

window.onload = async () => {
  const items = await getApiItems();
  displayItems(items);
};
