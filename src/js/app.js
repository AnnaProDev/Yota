import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

if (document.querySelectorAll(".reviews")) {
	new Swiper(".slider", {
	//Arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	 },
	 slidesPerView: 2,
})
}



const plus = document.querySelectorAll(".services_plus_wrapper");
const descr = document.querySelectorAll(".services_text_1");
const descr_2 = document.querySelectorAll(".services_text_2");
const button = document.querySelectorAll(".services_button");
const image = document.querySelectorAll(".services_img");
const minus = document.querySelectorAll(".services_plus");


if (plus.length > 0) {
	let previouslyClickedIndex = null;
	plus.forEach((element, i) => {
		element.addEventListener('click', () => {
			// Check if another plus element was already clicked
			if (previouslyClickedIndex !== null && previouslyClickedIndex !== i) {
				descr[previouslyClickedIndex].classList.remove('active');
				descr_2[previouslyClickedIndex].classList.remove('active');
				button[previouslyClickedIndex].classList.remove('active');
				minus[previouslyClickedIndex].classList.remove('active_plus');
				image[previouslyClickedIndex].classList.remove('active');
			}

			// Toggle the active classes and the display of the corresponding content
			descr[i].classList.toggle('active');
			descr_2[i].classList.toggle('active');
			button[i].classList.toggle('active');
			minus[i].classList.toggle('active_plus');
			image[i].classList.toggle('active');

			previouslyClickedIndex = i;
		});
	});
}


const servicePlus = document.querySelectorAll(".questions_item_subtitle");
const serviceDescr = document.querySelectorAll(".questions_item_descr");
const serviceMinus = document.querySelectorAll(".questions_item_plus");

if (servicePlus.length > 0) {
	let previouslyClickedIndex = null;
	servicePlus.forEach((element, i) => {
		element.addEventListener('click', () => {
			// Check if another plus element was already clicked
			if (previouslyClickedIndex !== null && previouslyClickedIndex !== i) {
				serviceDescr[previouslyClickedIndex].classList.remove('active');
				serviceMinus[previouslyClickedIndex].classList.remove('active_plus');
			}

			// Toggle the active classes and the display of the corresponding content
			serviceDescr[i].classList.toggle('active');
			serviceMinus[i].classList.toggle('active_plus');

			previouslyClickedIndex = i;
		});
	});
}

window.addEventListener('DOMContentLoaded', () => {
  // any additional code here
});