const refs = {
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
  div: document.querySelector("#boxes"),
  number: document.querySelector('input'),
  width: 30,
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const divsToRender = []
  for (let i = 0; i < amount; i += 1, refs.width += 10){
    // refs.width=j
    const result = `<div style="width:${refs.width}px; height: ${refs.width}px; background-color:${getRandomHexColor()}"></div>`

    divsToRender.push(result)
    console.log('refs', refs.width);
  }
  return divsToRender.join("")
}
// console.log(createBoxes(10));

refs.create.addEventListener("click", onCreate)
function onCreate(e) {
  const toInner = createBoxes(refs.number.value)
  
  refs.div.insertAdjacentHTML("beforeend", toInner)
  
}

refs.destroy.addEventListener("click", (e) => refs.div.innerHTML='')


