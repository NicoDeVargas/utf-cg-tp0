var jogos = document.querySelectorAll('.jogo');
var botao = document.getElementById('sortear');
var resultado = document.getElementById('resultado');

botao.addEventListener('click', function () {
  var sorteado = Math.floor(Math.random() * jogos.length);

  for (var i = 0; i < jogos.length; i++) {
    jogos[i].classList.remove('sorteado');
  }

  jogos[sorteado].classList.add('sorteado');

  var nome = jogos[sorteado].querySelector('h3').textContent;
  var horas = jogos[sorteado].querySelector('.horas').textContent;

  resultado.textContent = 'Hoje você joga: ' + nome + ' (' + horas + ')';
});
