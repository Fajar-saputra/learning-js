import capitalize, { lengthString } from "./modules/string.js";
import { input,capitalizeEl,btn,lengthEl, reverseEl } from "./modules/dom.js";
import handlerEvent from "./modules/handler.js";
import { reverseString } from "./modules/reverseString.js";

btn.addEventListener("click", () =>
  handlerEvent({
    input,
    capitalizeEl,
    lengthEl,
    capitalize,
    lengthString,
    reverseEl,
    reverseString
  })
);

