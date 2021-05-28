

const containerBaloes = document.querySelector(".container-baloes");

const startBtn = document.querySelector("button");

function adicionarBalao() {
  const elementoImg = document.createElement("img");

  elementoImg.setAttribute("src", "./assets/baloon.png");
  elementoImg.setAttribute("class", "balao");

  const valorLeft = Math.round(Math.random() * 90);
  const valorTop = Math.round(Math.random() * 90);

  elementoImg.style.left = valorLeft + "vw";
  elementoImg.style.top = valorTop + "vh";

  containerBaloes.appendChild(elementoImg);

  elementoImg.addEventListener("click", function () {
    elementoImg.remove();
  
  });
}

startBtn.addEventListener("click", function () {
  startBtn.remove();

  containerBaloes.style.display = "block";

  setInterval(adicionarBalao, 2000);
});





