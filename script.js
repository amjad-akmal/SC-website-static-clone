"use strict";

const search = document.querySelector(".search-btn");
const searchField = document.querySelector(".ip-field ");

search.addEventListener("click", () => {
  searchField.classList.toggle("active");
  searchField.focus();
});
