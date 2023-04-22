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