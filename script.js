var jogos = document.querySelectorAll('.jogo');
var botao = document.getElementById('sortear');
var pausar = document.getElementById('pausar');
var volume = document.getElementById('volume');
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
  tocando.volume = volume.value / 100;
  tocando.play().catch(function () {});

  pausar.textContent = 'Pausar';
  resultado.textContent = 'Tocando: ' + jogos[sorteado].dataset.musica;
});

pausar.addEventListener('click', function () {
  if (!tocando) {
    return;
  }

  if (tocando.paused) {
    tocando.play().catch(function () {});
    pausar.textContent = 'Pausar';
  } else {
    tocando.pause();
    pausar.textContent = 'Continuar';
  }
});

volume.addEventListener('input', function () {
  if (tocando) {
    tocando.volume = volume.value / 100;
  }
});
