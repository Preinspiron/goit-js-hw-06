const categoriesRef = document.querySelectorAll('.item')
// console.clear()
console.group("Number of categories:", categoriesRef.length)

categoriesRef.forEach(element => {
	console.log("Categories:", element.firstElementChild.textContent);
	console.log("Elements: ", element.lastElementChild.childElementCount);
});
console.groupEnd();
