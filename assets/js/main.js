/*
	const hamburger = document.querySelector(".hamburger");
	const navMenu = document.querySelector(".nav-menu");

	hamburger.addEventListener("click", mobileMenu);

	function mobileMenu() {
		hamburger.classList.toggle("active");
		navMenu.classList.toggle("active");
	}

	// burgerMenu.click(function() {
	//   this.classList.toggle('open')
	// })

	// const burgerMenu = document.querySelector('.menu')

	// burgerMenu.addEventListener('click', event => {
	//   burgerMenu.classList.toggle('open')
	// }).sideBarNav

*/

const burgerMenu = document.querySelector('.menu')
const sideNav = document.querySelector('.sideBarNav')

burgerMenu.addEventListener('click', sidemenu)
function sidemenu() {
  burgerMenu.classList.toggle('open')
  sideNav.classList.toggle('active')
}

// window.addEventListener('mouseup', function(event) {
//   var box = document.getElementById('sideBarNav')
//   if (event.target != box && event.target.parentNode != box) {
//     box.style.display = 'none'
//   }
// })

/* const today = new Date()
const year = today.getFullYear()

document.getElementById('copyright').innerHTML = year()
 */
