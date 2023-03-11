const refs = {
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
  div: document.querySelector("#boxes"),
  number: document.querySelector('input'),
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const divsToRender = []
  for (let i = 0, j = 30; i < amount; i += 1, j +=10){
    const result = `<div style="width:${j}px; height: ${j}px; background-color:${getRandomHexColor()}"></div>`

    divsToRender.push(result)
  }
  return divsToRender.join("")
}
console.log(createBoxes(10));

refs.create.addEventListener("click", onCreate)
function onCreate(e) {
  const toInner = createBoxes(refs.number.value)
  
  refs.div.insertAdjacentHTML("afterbegin", toInner)
  
}

refs.destroy.addEventListener("click", (e) => refs.div.innerHTML='')


