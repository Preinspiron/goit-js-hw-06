const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

inputRef.addEventListener("input", onChange)

function onChange(e) {
	const { value } = e.currentTarget;
	spanRef.style.fontSize = `${value}px`;
}