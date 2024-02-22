var text = document.querySelector('h1')
text.innerHTML = ("SCARPA")

var paragrafo = document.querySelector('p')
paragrafo.innerHTML = ("TAL DO SAPECA")

function exibir(){
    alert(`SO COROAS 19 992585409`)
}

var imagem = document.getElementById("minhaImagem1");

var caminhoDaImagem = "img/foto.jpg";

imagem.src = caminhoDaImagem;

function tocarAudio() {
    var audio = document.getElementById("meuAudio");
    audio.play();
}