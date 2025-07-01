// script.js

// Al hacer clic en un horario, alterna la clase 'seleccionado'
document.querySelectorAll('.horario-slot').forEach(btn => {
  btn.addEventListener('click', () => {
    // Si ya estaba seleccionado, desmarcarlo
    if (btn.classList.contains('seleccionado')) {
      btn.classList.remove('seleccionado');
    } else {
      // Deseleccionar cualquier otro y marcar éste
      document.querySelectorAll('.horario-slot.seleccionado')
              .forEach(el => el.classList.remove('seleccionado'));
      btn.classList.add('seleccionado');
    }
  });
});

// Prevent default en formularios (simulación)
document.getElementById('citaForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Cita confirmada para ' +
        document.querySelector('.horario-slot.seleccionado')?.dataset.hora +
        ' del ' + document.getElementById('fecha-cita').value);
});

document.getElementById('pagoForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Pago simulado realizado con éxito');
});
