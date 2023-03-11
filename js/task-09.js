const btnRef = document.querySelector('.change-color')
  btnRef.addEventListener("click", onBtnClick);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onBtnClick(e) {
  const rand = getRandomHexColor()
  document.body.style.backgroundColor = rand;
  btnRef.previousElementSibling.firstElementChild.textContent = rand;

  
}

