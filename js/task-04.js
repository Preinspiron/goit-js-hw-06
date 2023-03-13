const counterValue = document.querySelector('#value')

const incrBtn = document.querySelector('[data-action="increment"]')

incrBtn.addEventListener("click", ()=> counterValue.textContent = +counterValue.textContent +1
)


const decrBtn = document.querySelector('[data-action="decrement"]')

decrBtn.addEventListener("click", ()=> counterValue.textContent -=1
)
