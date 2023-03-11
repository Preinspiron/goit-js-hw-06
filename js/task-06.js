const inputRef = document.querySelector('#validation-input')

inputRef.addEventListener("blur", onBlur)

function onBlur(e) {
	const { value, dataset } = e.currentTarget

	e.currentTarget.classList.add("invalid")
	if (+value.length === +dataset.length) {
		e.currentTarget.classList.replace('invalid', 'valid')
	}

	
		
	
	
}