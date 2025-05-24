function generarCarta() {
  const palos = ['corazones', 'pica', 'trebol', 'diamante'];
  const simbolos = { corazones: '♥', pica: '♠', trebol: '♣', diamante: '♦' };
  const valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  const paloIndex = Math.floor(Math.random() * 4);
  const valorIndex = Math.floor(Math.random() * 13);

  const palo = palos[paloIndex];
  const valor = valores[valorIndex];
  const simbolo = simbolos[palo];

  const cartaDiv = document.getElementById('carta');
  cartaDiv.className = `card position-relative ${palo}`;
  cartaDiv.innerHTML = `
    <div class="corner-top-left">${simbolo}</div>
    <div class="card-value">${valor}</div>
    <div class="corner-bottom-right">${simbolo}</div>
  `;
}
