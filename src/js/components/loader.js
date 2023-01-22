window.onload = function() {
	let tl = gsap.timeline()

	let preloader = document.querySelector('.loader')
	tl
		.to(preloader, {opacity: 0, duration: 0.5, display: 'none'})
}