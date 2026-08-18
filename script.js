var jogos = document.querySelectorAll('.jogo');
var botao = document.getElementById('sortear');
var resultado = document.getElementById('resultado');
var tocando = null;

botao.addEventListener('click', function () {
  var sorteado = Math.floor(Math.random() * jogos.length);

  for (var i = 0; i < jogos.length; i++) {
    jogos[i].classList.remove('sorteado');
  }

  jogos[sorteado].classList.add('sorteado');

  if (tocando) {
    tocando.pause();
  }

  tocando = new Audio(jogos[sorteado].dataset.audio);
  tocando.play().catch(function () {});

  resultado.textContent = 'Tocando: ' + jogos[sorteado].dataset.musica;
});
