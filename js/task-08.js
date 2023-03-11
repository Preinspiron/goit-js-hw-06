const formRef = document.querySelector(".login-form")
formRef.addEventListener("submit", onSubmit)

const formResult = new Object({ email:"", password: "" })



function onSubmit(e) {
	e.preventDefault()
	let { email, password } = e.currentTarget.elements;
	
	formResult.email = email.value;
	formResult.password = password.value;
	
	if (!email.value || !password.value) {
		alert("Все поля должны быть заполнены.")
	} else if (email.value && password.value) {
		console.log(formResult);
		formResult.email = "";
		formResult.password = "";
		e.currentTarget.reset() 
	}
	
	email.value = formResult.email
	password.value = formResult.password
	
	
	
	}
	
	
	
