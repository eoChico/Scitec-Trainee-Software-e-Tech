const imgs = [
  "ney1.png",
  "ney2.webp",
  "ney3.jpg",
  "ney4.webp",
  "ney5.jpg",
  "ney6.webp",
];

const galeria = document.getElementById("galeria");
const modal = document.getElementById("modal");
const imgModal = document.getElementById("img-modal");
const btnFechar = document.getElementById("fechar");
const btnVoltar = document.getElementById("btn-voltar");
const btnAvancar = document.getElementById("btn-avancar");

let indiceAtual = 0;

imgs.forEach(function (img, index) {
  let containerImg = document.createElement("img");

  containerImg.src = "imgs/" + img;

  containerImg.addEventListener("click", function () {
    abrirModal(index);
  });

  galeria.appendChild(containerImg);
});

function abrirModal(index) {
  indiceAtual = index;
  imgModal.src = "imgs/" + imgs[indiceAtual];
  modal.classList.remove("escondido");
}

function fecharModal() {
  modal.classList.add("escondido");
}
btnFechar.addEventListener("click", fecharModal);

function proximaImagem() {
  indiceAtual++;

  if (indiceAtual >= imgs.length) {
    indiceAtual = 0;
  }
  imgModal.src = "imgs/" + imgs[indiceAtual];
}
btnAvancar.addEventListener("click", proximaImagem);

function imagemAnterior() {
  indiceAtual--;

  if (indiceAtual < 0) {
    indiceAtual = imgs.length - 1;
  }
  imgModal.src = "imgs/" + imgs[indiceAtual];
}
btnVoltar.addEventListener("click", imagemAnterior);
