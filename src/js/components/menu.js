const menuBtn = document.querySelector('.header__nav-button')
const menu = document.querySelector('#menu')
const header = document.querySelector('.header')
const navigationBtns = document.querySelectorAll('.header__nav a')
console.log(navigationBtns)

menuBtn.addEventListener('click', () => {
	console.log('clicked')
	menu.classList.toggle('header__nav--active')
	console.log('clicked2')

	navigationBtns.forEach(button => {
		button.addEventListener('click', () => {
			menu.classList.remove('header__nav--active')
		})
	})
	
	document.addEventListener('click', (e) => {
		if (!header.contains(e.target)) {
			menu.classList.remove('header__nav--active')
		}
	})
})
