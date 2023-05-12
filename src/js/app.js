import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

//Slider
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

//Smooth scroll
var links = document.querySelectorAll("a");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      var targetElement = document.querySelector(hash);
      var targetTop = targetElement.offsetTop;
      window.scrollTo({
        top: targetTop,
        behavior: "smooth"
      });
      history.replaceState(null, null, hash);
    }
  });
}


//Mask for phone number
if (document.querySelector('input[type="tel"]')) {
	document.querySelector('input[type="tel"]').addEventListener('input', function (e) {
		var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
		e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
	 });
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
				serviceDescr[previouslyClickedIndex].classList.remove('questions_item_descr_active');
				serviceMinus[previouslyClickedIndex].classList.remove('active_plus');
			}
			// Toggle the active classes and the display of the corresponding content
			serviceDescr[i].classList.toggle('questions_item_descr_active');
			serviceMinus[i].classList.toggle('questions_item_plus_active');

			previouslyClickedIndex = i;
		});
	});
}

//Function for show menu-hamburger's 

const listName = document.querySelectorAll(".menu_item_name");
const arrow = document.querySelectorAll(".menu_item_img");
const list = document.querySelectorAll(".menu_item_list");

if (listName.length > 0) {
	let previouslyClickedIndex = null;
	listName.forEach((element, i) => {
		element.addEventListener('click', () => {
			// Check if another plus element was already clicked
			if (previouslyClickedIndex !== null && previouslyClickedIndex !== i) {
				list[previouslyClickedIndex].classList.remove('menu_item_list_active');
				arrow[previouslyClickedIndex].classList.remove('active_rotate');
			}
			// Toggle the active classes and the display of the corresponding content
			list[i].classList.toggle('menu_item_list_active');
			arrow[i].classList.toggle('active_rotate');

			previouslyClickedIndex = i;
		});
	});
}


window.addEventListener('DOMContentLoaded', () => {
  //Menu-hamburger
	const menu = document.querySelector('.menu');
	const menuItem = document.querySelectorAll('.menu_item');
	const hamburger = document.querySelector('.hamburger');
	const body = document.querySelector('body');
	const cross = document.querySelector('.menu_close')


	hamburger.addEventListener('click', () => {
		menu.classList.toggle('menu_active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			menu.classList.toggle('menu_active');
		})
	})

	cross.addEventListener('click', () => {
		menu.classList.toggle('menu_active');
		body.classList.toggle('lock');
	});

	body.addEventListener('click', () => {
		body.classList.toggle('lock');
});
})

//Function for show page's elements @media (max-width: 767.98px)

const plus_2 = document.querySelectorAll(".services_subtitle_2");
const sub_2 = document.querySelectorAll(".services_subtitle_2_wrapper");
const image_2 = document.querySelectorAll(".services_img_2");
const minus_2 = document.querySelectorAll(".services_plus_2");
const button_2 = document.querySelectorAll(".services_button_2");
const text_2 = document.querySelectorAll(".services_text_2");

if (plus_2 .length > 0) {
	let previouslyClickedIndex = null;
	plus_2.forEach((element, i) => {
		element.addEventListener('click', () => {
			// Check if another plus element was already clicked
			if (previouslyClickedIndex !== null && previouslyClickedIndex !== i) {
				image_2[previouslyClickedIndex].classList.remove('active');
				minus_2[previouslyClickedIndex].classList.remove('active_plus');
				button_2[previouslyClickedIndex].classList.remove('active');
				text_2[previouslyClickedIndex].classList.remove('active_flex');
				sub_2[previouslyClickedIndex].classList.remove('services_subtitle_2_active');
			}
			// Toggle the active classes and the display of the corresponding content
			image_2[i].classList.toggle('active');
			minus_2[i].classList.toggle('active_plus');
			button_2[i].classList.toggle('active');
			text_2[i].classList.toggle('active_flex');
			sub_2[i].classList.toggle('services_subtitle_2_active');

			previouslyClickedIndex = i;
		});
	});
}

//Function for show reviews @media (max-width: 767.98px)

const more = document.querySelector(".reviews_button");
const slide = document.querySelectorAll(".slider_item");

slide.forEach((slideItem) => {
  more.addEventListener("click", () => {
    slideItem.classList.toggle("slider_item_block");
  });
});

//Function for show brands @media (max-width: 576.98px)

const moreBrands = document.querySelector(".brands_button");
const brands = document.querySelector(".brands_items");

if ( brands ) {
	  moreBrands.addEventListener("click", () => {
    brands.classList.toggle("hidden_rows");
  });
}

//Style for areas

const allCities = document.querySelectorAll(".areas_city_link");
const city = document.querySelector("#city");

if (city) {
	allCities.forEach((element) => {
	  const textCity = element.textContent;
	  if (city.textContent === textCity) {
		 element.classList.add("areas_city_bold");
	  }
	})
 }