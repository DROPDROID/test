let iconMenu = document.querySelector(".icon-menu");
let body = document.querySelector("body");
let menuBody = document.querySelector(".menu__body");
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		iconMenu.classList.toggle("active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("active");
	});
}

let user_icon_search = document.querySelector('.search');
user_icon_search.addEventListener("click", function (e) {
	let user_menu_search = document.querySelector('.header-input');
	user_menu_search.classList.toggle('_active-menu-search');
});