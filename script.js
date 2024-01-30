const audioCapitulo = document.getElementById("audio-capitulo");
const botaoPlayPause = document.getElementById("play-pause");
const botaoProximo = document.getElementById("proximo");
const botaoAnterior = document.getElementById("anterior");
const nomeCapitulo = document.getElementById("capitulo");

const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;

function tocarfaixa() {
  audioCapitulo.play();
  botaoPlayPause.classList.remove("bi-play-circle-fill");
  botaoPlayPause.classList.add("bi-pause-circle-fill");
}

function pausarfaixa() {
  audioCapitulo.pause();
  botaoPlayPause.classList.remove("bi-pause-circle-fill");
  botaoPlayPause.classList.add("bi-play-circle-fill");
}

function tocarOuPausar() {
  if (taTocando === 0) {
    tocarfaixa();
    taTocando = 1;
  } else {
    pausarfaixa();
    taTocando = 0;
  }
}

function trocarNomeFaixa() {
  nomeCapitulo.innerText = "Capítulo" + " " + capituloAtual;
}

function proximaFaixa() {
  if (capituloAtual === numeroCapitulos) {
    capituloAtual = 1;
  } else {
    capituloAtual = capituloAtual + 1;
  }

  audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
  tocarfaixa();
  taTocando = 1;
  trocarNomeFaixa();
}

function voltarFaixa() {
  if (capituloAtual === 1) {
    capituloAtual = numeroCapitulos;
  } else {
    capituloAtual = capituloAtual - 1;
  }

  audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
  tocarfaixa();
  taTocando = 1;
  trocarNomeFaixa();
}

botaoPlayPause.addEventListener("click", tocarOuPausar);
botaoProximo.addEventListener("click", proximaFaixa);
botaoAnterior.addEventListener("click", voltarFaixa);
