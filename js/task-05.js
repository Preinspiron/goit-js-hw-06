const inputRef = document.querySelector('#name-input')
const spanText = document.querySelector('#name-output')

inputRef.addEventListener("input", (e) => {
	spanText.textContent = e.currentTarget.value ?
		e.currentTarget.value: "Anonymous"

})

