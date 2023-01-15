const disabledBtns = document.querySelectorAll('.disabled-btn')

disabledBtns.forEach(button => {
	button.addEventListener('click', () => {
		const btnText = button.textContent
		button.textContent = "Sorry, I don\'t work >_<"
		button.disabled = true
		setTimeout(() => {
			button.textContent = btnText
			button.disabled = false
		}, 700)
	})
})