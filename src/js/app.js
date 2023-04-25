import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

new Swiper(".slider", {
	//Arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	 },
	 slidesPerView: 2,
})


const plus = document.querySelectorAll(".services_item_name");
const descr = document.querySelectorAll(".services_item_descr");
const button = document.querySelectorAll(".services_button");
const image = document.querySelectorAll(".services_img");
const minus = document.querySelectorAll(".services_item_plus");

let previouslyClickedIndex = null;

plus.forEach((element, i) => {
  element.addEventListener('click', () => {
    // Check if another plus element was already clicked
    if (previouslyClickedIndex !== null && previouslyClickedIndex !== i) {
      descr[previouslyClickedIndex].classList.remove('active_flex');
      button[previouslyClickedIndex].classList.remove('active');
      minus[previouslyClickedIndex].classList.remove('active_plus');
		image[previouslyClickedIndex].classList.remove('active');
    }

    // Toggle the active classes and the display of the corresponding content
    descr[i].classList.toggle('active_flex');
    button[i].classList.toggle('active');
    minus[i].classList.toggle('active_plus');
	 image[i].classList.toggle('active');

    previouslyClickedIndex = i;
  });
});

window.addEventListener('DOMContentLoaded', () => {
  // any additional code here
});