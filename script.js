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

var misterioso = document.getElementById('misterioso');
var fogueira = document.getElementById('fogueira');
var tela = document.getElementById('particulas');
var pincel = tela.getContext('2d');
var particulas = [];
var animando = null;
var somFogueira = null;

function animar() {
  pincel.clearRect(0, 0, tela.width, tela.height);

  if (particulas.length < 80) {
    particulas.push({
      x: tela.width / 2 + Math.random() * 50 - 25,
      y: tela.height - 120,
      vx: Math.random() - 0.5,
      vy: -(Math.random() * 1.5 + 0.5),
      vida: 1
    });
  }

  for (var i = particulas.length - 1; i >= 0; i--) {
    var p = particulas[i];

    p.x += p.vx;
    p.y += p.vy;
    p.vida -= 0.012;

    if (p.vida <= 0) {
      particulas.splice(i, 1);
      continue;
    }

    pincel.globalAlpha = p.vida;
    pincel.fillStyle = p.vida > 0.7 ? '#ffa33c' : '#c9301c';
    pincel.fillRect(p.x, p.y, 3, 3);
  }

  pincel.globalAlpha = 1;
}

misterioso.addEventListener('click', function () {
  fogueira.classList.add('aberta');

  if (!animando) {
    animando = setInterval(animar, 30);
  }

  if (somFogueira) {
    somFogueira.pause();
  }

  somFogueira = new Audio('audio/bonfire.mp4');
  somFogueira.volume = volume.value / 100;
  somFogueira.play().catch(function () {});
});

var dog = document.getElementById('dog');
var foto = document.querySelector('.foto');

dog.addEventListener('click', function () {
  if (foto.getAttribute('src') === 'images/nicolas.png') {
    foto.src = 'images/dog.jpeg';
    foto.alt = 'Yujizao';
  } else {
    foto.src = 'images/nicolas.png';
    foto.alt = 'Foto de Nicolas Rodrigues de Vargas';
  }
});
