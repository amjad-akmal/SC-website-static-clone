"use strict";

const search = document.querySelector(".search-btn");
const searchField = document.querySelector(".ip-field ");

search.addEventListener("click", () => {
  searchField.classList.toggle("active");
  searchField.focus();
});

const navBtn = document.querySelector(".nav-bar-btn");

navBtn.addEventListener("click", () => {
  document.querySelector(".main-nav").classList.toggle("nav-open");
});
