window.onload = function() {
	let preloader = document.querySelector('.loader')
	let body = document.querySelector('.body')

	let tl = gsap.timeline()

	tl
		.to(preloader, {opacity: 0, duration: 1, display: 'none'})
		.from(body, {opacity: 0, duration: 1})
}