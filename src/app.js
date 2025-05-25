let temporizadorActivo = false;
let intervaloId = null;
let historialCartas = [];

function generarCarta() {
  const palos = ['corazones', 'pica', 'trebol', 'diamante'];
  const simbolos = {
    corazones: '♥',
    pica: '♠',
    trebol: '♣',
    diamante: '♦'
  };
  const valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  const palo = palos[Math.floor(Math.random() * palos.length)];
  const valor = valores[Math.floor(Math.random() * valores.length)];
  const simbolo = simbolos[palo];

  // Clase para color
  let clase = '';
  switch (palo) {
    case 'corazones': clase = 'corazon'; break;
    case 'diamante': clase = 'diamante'; break;
    case 'pica': clase = 'pica'; break;
    case 'trebol': clase = 'trebol'; break;
  }

  const cartaDiv = document.getElementById('carta');
  cartaDiv.className = `card position-relative ${clase}`;
  cartaDiv.innerHTML = `
    <div class="corner-top-left">${simbolo}</div>
    <div class="card-value">${valor}</div>
    <div class="corner-bottom-right">${simbolo}</div>
  `;

  
  const nuevaCarta = `${valor} ${simbolo}`;
  historialCartas.unshift(nuevaCarta);
  if (historialCartas.length > 12) {
    historialCartas.pop();
  }

  actualizarHistorial();
}

function actualizarHistorial() {
  const lista = document.getElementById('historial');
  if (!lista) return;

  lista.innerHTML = '';

  historialCartas.forEach((cartaTexto) => {
    const [valor, simbolo] = cartaTexto.split(' ');

    let clase = '';
    switch (simbolo) {
      case '♥': clase = 'corazon'; break;
      case '♦': clase = 'diamante'; break;
      case '♠': clase = 'pica'; break;
      case '♣': clase = 'trebol'; break;
    }

    const miniCard = document.createElement('div');
    miniCard.className = `card text-center border border-dark ${clase}`;
    miniCard.innerHTML = `
      <div class="corner-top-left">${simbolo}</div>
      <div class="card-value">${valor}</div>
      <div class="corner-bottom-right">${simbolo}</div>
    `;

    lista.appendChild(miniCard);
  });
}

function toggleAutoCarta() {
  const boton = document.getElementById('autoBtn');

  if (!temporizadorActivo) {
    intervaloId = setInterval(generarCarta, 10000);
    temporizadorActivo = true;
    boton.textContent = "Detener auto-carta ✋";
    boton.classList.remove("btn-warning");
    boton.classList.add("btn-danger");
  } else {
    clearInterval(intervaloId);
    temporizadorActivo = false;
    boton.textContent = "Activar auto-carta ⏳";
    boton.classList.remove("btn-danger");
    boton.classList.add("btn-warning");
  }
}

function cambiarTamañoCarta() {
  const ancho = parseInt(document.getElementById('ancho').value);
  const alto = parseInt(document.getElementById('alto').value);

  if (isNaN(ancho) || isNaN(alto) || ancho <= 0 || alto <= 0) {
    alert("Por favor, introduce valores válidos mayores a 0 para ancho y alto.");
    return;
  }

  const carta = document.getElementById('carta');
  carta.style.width = `${ancho}px`;
  carta.style.height = `${alto}px`;
}
