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

const plus = document.querySelectorAll(".services_item_plus");
const descr = document.querySelectorAll(".services_item_descr");
const button = document.querySelectorAll(".services_button");
const image = document.querySelectorAll(".services_img");