AOS.init();

function openModal(valor) {
  document.getElementById('valorSelecionado').innerText = 'R$ ' + valor;
  const qrCodeImg = document.querySelector('#pixModal img');
  qrCodeImg.src = `assets/img/qrcode-${valor}.png`;
  document.getElementById('pixModal').classList.remove('hidden');
  document.getElementById('pixModal').classList.add('flex');
}

function closeModal() {
  document.getElementById('pixModal').classList.add('hidden');
  document.getElementById('pixModal').classList.remove('flex');
}

const dataCasamento = new Date('2025-09-06T17:30:00');
function atualizaCountdown() {
  const agora = new Date();
  const diff = dataCasamento - agora;
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  document.getElementById('countdown').textContent = `${dias} dias, ${horas}h e ${minutos}min`;
}
atualizaCountdown();
setInterval(atualizaCountdown, 60000);
