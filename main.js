

const containerBaloes = document.querySelector(".container-baloes");

const startBtn = document.querySelector("button");

const score = document.querySelector("span");

let counter = 0;

function adicionarBalao() {

  const elementoImg = document.createElement("img");

  elementoImg.setAttribute("src", "./assets/baloon.png");
  elementoImg.setAttribute("class", "balao");

  const valorLeft = Math.round(Math.random() * 90);
  const valorTop = Math.round(Math.random() * 90);

  elementoImg.style.left = valorLeft + "vw";
  elementoImg.style.top = valorTop + "vh";

  containerBaloes.appendChild(elementoImg);

  setLimitBalloon(4);

  
  elementoImg.addEventListener("click", () => removeBalloon(elementoImg)); 
}


function setLimitBalloon(limit) {

  const balloonElement = document.querySelectorAll(".balao")
  const arrOfBalloon = Array.from(balloonElement)
  

  if (arrOfBalloon.length == limit) {
    alert("Você perdeu! :(")
    restartGame();
  }
  
}

function restartGame() {

  startBtn.style.display = "flex";
}



function removeBalloon(element) {

  containerBaloes.removeChild(element);
  counter = counter + 1;
  console.log(counter);
  score.innerText = counter;

}

const setTime = setInterval(adicionarBalao, 2000);


startBtn.addEventListener("click", function () {
  startBtn.remove();

  containerBaloes.style.display = "block";

  setTime;
});





