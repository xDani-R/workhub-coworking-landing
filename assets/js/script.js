// Variable global para guardar el id y tipo de la card que se está reservando
let cardIdActual = null;
let tipoEspacioActual = null;

// Instancia del modal de Bootstrap
const modalReserva = new bootstrap.Modal(document.getElementById('modalReserva'));

// Contenedor donde se mostrarán las cards de reserva
const contenedorReservas = document.getElementById('contenedorReservas');

/**
 * Se llama al hacer clic en "Reservar" de cada card.
 * Guarda el id, nombre y tipo del espacio, luego abre el modal.
 */
function abrirFormulario(cardId, nombreEspacio) {
    cardIdActual = cardId;

    // Obtener el tipo desde el atributo data-tipo de la card
    const cardElement = document.getElementById(cardId);
    tipoEspacioActual = cardElement ? cardElement.dataset.tipo : 'No especificado';

    document.getElementById('nombreEspacioSeleccionado').textContent = nombreEspacio;
    document.getElementById('formularioReserva').reset();
    modalReserva.show();
}

// Evento submit del formulario
document.getElementById('formularioReserva').addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre    = document.getElementById('nombreYapellido').value;
    const email     = document.getElementById('email').value;
    const telefono  = document.getElementById('telefono').value;
    const ubicacion = document.getElementById('ubicacion').value;
    const fecha     = document.getElementById('fecha').value;
    const hora      = document.getElementById('hora').value;
    const mensaje   = document.getElementById('mensaje').value;
    const espacio   = document.getElementById('nombreEspacioSeleccionado').textContent;

    if (!validarFormulario(nombre, email, telefono, ubicacion, fecha, hora, mensaje)) {
        return;
    }

    // Cerrar el modal
    modalReserva.hide();

    // Eliminar la card del espacio reservado con fade out
    if (cardIdActual) {
        const cardElement = document.getElementById(cardIdActual);
        if (cardElement) {
            cardElement.style.transition = 'opacity 0.4s ease';
            cardElement.style.opacity = '0';
            setTimeout(() => cardElement.remove(), 400);
        }
        cardIdActual = null;
    }

    // Crear card de confirmación de reserva
    const card = document.createElement('div');
    card.classList.add('card-reserva');
    card.innerHTML = `
        <div class="card-reserva-header">
            <h5>🗓 Reserva de ${nombre}</h5>
        </div>
        <div class="card-reserva-body">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Espacio:</strong> ${espacio}</p>
            <p><strong>Tipo de espacio:</strong> ${tipoEspacioActual}</p>
            <p><strong>Ubicación:</strong> ${ubicacion}</p>
            <p><strong>Fecha:</strong> ${fecha}</p>
            <p><strong>Hora:</strong> ${hora}</p>
            ${mensaje.trim() ? `<p><strong>Mensaje:</strong> ${mensaje}</p>` : ''}
        </div>
    `;

    contenedorReservas.appendChild(card);
    tipoEspacioActual = null;

    alert('✅ Reserva creada exitosamente');
    document.getElementById('formularioReserva').reset();
});

function validarFormulario(nombre, email, telefono, ubicacion, fecha, hora, mensaje) {
    if (!nombre.trim() || !email.trim() || !telefono.trim() || !ubicacion.trim() || !fecha.trim() || !hora.trim() || !mensaje.trim()) {
        alert('Por favor, completa todos los campos obligatorios.');
        return false;
    }

    const regexNombre = /\d/;
    if (regexNombre.test(nombre)) {
        alert('El nombre no puede contener números.');
        return false;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert('El email no tiene un formato válido.');
        return false;
    }

    const regexTelefono = /^\d+$/;
    if (!regexTelefono.test(telefono)) {
        alert('El teléfono solo puede contener números.');
        return false;
    }

    if (telefono.length !== 9 && telefono.length !== 11) {
        alert('El teléfono debe tener 9 u 11 caracteres.');
        return false;
    }

    return true;
}

// Función de filtrado por tipo
function filtrarEspacios(tipo) {
    document.querySelectorAll('.btn-filtro').forEach(btn => btn.classList.remove('activo'));
    event.target.classList.add('activo');

    document.querySelectorAll('.card-espacio-wrapper').forEach(card => {
        if (tipo === 'todos' || card.dataset.tipo === tipo) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}