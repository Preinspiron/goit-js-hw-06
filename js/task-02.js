const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const liAddToIngredients= ingredients.map(elem => {
  const newLi = document.createElement('li')
  newLi.textContent = elem;
  newLi.classList.add('item')
  return newLi
})

const ingredientsRef= document.querySelector('#ingredients').append(...liAddToIngredients)


