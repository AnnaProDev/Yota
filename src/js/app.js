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


//Function for show for service's elements
const plus = document.querySelectorAll(".services_plus_wrapper");
const name = document.querySelectorAll(".services_subtitle");
const minus = document.querySelectorAll(".services_plus");
const item = document.querySelectorAll(".services_item");

function addElements(part) {
	let previouslyClickedIndex = null;
	part.forEach((element, i) => {
		element.addEventListener('click', () => {
			// Check if another plus element was already clicked
			if (previouslyClickedIndex !== null && previouslyClickedIndex !== i) {
				minus[previouslyClickedIndex].classList.remove('active_plus');
				item[previouslyClickedIndex].classList.add('grid-hiderows');
			}
			minus[i].classList.toggle('active_plus');
			item[i].classList.toggle('grid-hiderows');

			previouslyClickedIndex = i;
		});
	});
}

if (plus.length > 0 && name.length > 0) {
	addElements(plus);
	addElements(name);
}

//Function for show page's elements

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