function show(section) {
  document.getElementById('filmovi').classList.add('hidden');
  document.getElementById('serije').classList.add('hidden');
  document.getElementById('igrice').classList.add('hidden');
  document.getElementById(section).classList.remove('hidden');
}


function openModal(naziv, opis, redatelj, glumac) {
  document.getElementById('modal').style.display = 'flex';
  document.getElementById('m-naziv').innerText = naziv;
  document.getElementById('m-opis').innerText = opis;
  document.getElementById('m-redatelj').innerText = redatelj;
  document.getElementById('m-glumac').innerText = glumac;
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// klik izvan modala
window.onclick = function(e) {
  if (e.target.id === 'modal') {
    closeModal();
  }
}

window.show = show;
window.openModal = openModal;
window.closeModal = closeModal;