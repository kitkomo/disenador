function scroll() {
	const headerLinks = document.querySelectorAll('.header__nav a')
	const footerLinks = document.querySelectorAll('.footer__navigation a')

	headerLinks.forEach(link => {
		link.addEventListener('click', scroll)
	})
	footerLinks.forEach(link => {
		link.addEventListener('click', scroll)
	})

	function scroll(event) {
		event.preventDefault()
		const targetId = event.currentTarget.getAttribute("href") === "#" ? null : event.currentTarget.getAttribute("href");
		if (targetId === null) {
			return
		} else {
			const targetPosition = document.querySelector(targetId).offsetTop;
			window.scrollTo({
				top: targetPosition,
				behavior: "smooth"
			})
		}
	}
}

scroll()