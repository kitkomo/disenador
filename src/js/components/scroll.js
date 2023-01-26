function scroll() {
	const links = document.querySelectorAll('a')

	links.forEach(link => {
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