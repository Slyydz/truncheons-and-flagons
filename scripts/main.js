import { getDropdown } from "./game/dropdown.js";

 const contentElement = document.querySelector(".displayPart-1");

 contentElement.innerHTML = getDropdown("test", "test", "test");