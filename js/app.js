import '../sass/style.scss';

import { caesar13 } from "./caesar";
const input = document.querySelector("input");
const cipherForm = document.querySelector("form");

input.addEventListener("input", (event) => {
  const charsAmount = document.querySelector("p.string-length span ");
  charsAmount.textContent =  input.value.length;
});

cipherForm.addEventListener("submit", (e) => caesar13(e, input));