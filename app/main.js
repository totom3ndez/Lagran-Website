//-------------------- UTILITIES --------------------//
function toTop() {
	const toTopBtn = document.querySelector('#backtotop');
	toTopBtn.addEventListener('click', () => {
		document.documentElement.scrollTop = 0;
	});
}
// When the user clicks the button, the page scrolls to the top.
//-------------------- NAVBAR --------------------//
const navLinks = document.getElementById('navLinks');
function showMenu() {
	navLinks.style.right = '0';
}
function hideMenu() {
	navLinks.style.right = '-200px';
}
/**\
 * When the user clicks the hamburger menu, the navLinks div slides in from the right, and when the
 * user clicks the close button, the navLinks div slides out to the right.
 */
const navbar = document.querySelector('#navbar');
const logo = document.querySelector('#logo');
const nameTag = document.querySelector('#name-tag');
const sticky = navbar.offsetTop;
function stickyNav() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add('sticky');
	} else {
		navbar.classList.remove('sticky');
	}
}
function scrollFunction() {
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		navbar.style.borderBottom = '1px solid #fff111';
		navbar.style.padding = '0.6rem 1rem';
		logo.style.width = '3rem';
		nameTag.style.visibility = 'hidden';
	} else {
		navbar.style.borderBottom = 'none';
		logo.style.width = '5rem';
		nameTag.style.visibility = 'visible';
	}
}
window.onscroll = function () {
	stickyNav();
};
window.onscroll = function () {
	scrollFunction();
};
// If the user scrolls down 200px, the navbar will shrink and the name tag will disappear.

const socialIcons = [
	(igSocial = document.querySelector('#igSocial')),
	(fbSocial = document.querySelector('#fbSocial')),
];
const sliders = [
	(slideIg = document.querySelector('#slideIg')),
	(slideFb = document.querySelector('#slideFb')),
];

socialIcons.forEach(function (icon) {
	icon.addEventListener('mouseover', function () {
		icon.nextElementSibling.classList.add('showLink');
	});
	icon.addEventListener('mouseout', function () {
		icon.nextElementSibling.classList.remove('showLink');
	});
});
