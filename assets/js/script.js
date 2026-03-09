document.getElementById('formularioReserva').addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener valores del formulario
    const nombre = document.getElementById('nombreYapellido').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const tipoEspacio = document.getElementById('tipoEspacio').value;
    const ubicacion = document.getElementById('ubicacion').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const mensaje = document.getElementById('mensaje').value;

    if(!validarFormulario(nombre,email,telefono,tipoEspacio,ubicacion,fecha,hora,mensaje)){
        return;
    }

    // Crear la card
    const card = document.createElement('div');
    card.classList.add('card-reserva');
    card.innerHTML = `
        <div class="card-reserva-header">
            <h5>🗓 Reserva de ${nombre}</h5>
        </div>
        <div class="card-reserva-body">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Tipo de espacio:</strong> ${tipoEspacio}</p>
            <p><strong>Ubicación:</strong> ${ubicacion}</p>
            <p><strong>Fecha:</strong> ${fecha}</p>
            <p><strong>Hora:</strong> ${hora}</p>
            <p><strong>Mensaje:</strong> ${mensaje}</p>
        </div>
    `;

    // Agregar la card al contenedor
    document.getElementById('contenedorReservas').appendChild(card);

    alert('Reserva creada exitosamente')

    // Limpiar el formulario
    document.getElementById('formularioReserva').reset();
});

function validarFormulario(nombre,email,telefono,tipoEspacio,ubicacion,fecha,hora,mensaje) {
    // Validar campos vacíos
    if (!nombre.trim() || !email.trim() || !telefono.trim() || !tipoEspacio.trim() || !ubicacion.trim() || !fecha.trim() || !hora.trim() || !mensaje.trim()) {
        alert('Por favor, completa todos los campos obligatorios.');
        return false;
    }

    // Validar que el nombre no contenga números
    const regexNombre = /\d/;
    if (regexNombre.test(nombre)) {
        alert('El nombre no puede contener números.');
        return false;
    }

    // Validar formato de email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert('El email no tiene un formato válido.');
        return false;
    }

    // Validar que el teléfono contenga solo números
    const regexTelefono = /^\d+$/;
    if (!regexTelefono.test(telefono)) {
        alert('El teléfono solo puede contener números.');
        return false;
}

    // Validar que el teléfono tenga 9 u 11 caracteres
    if (telefono.length !== 9 && telefono.length !== 11) {
        alert('El teléfono debe tener 9 u 11 caracteres.');
        return false;
    }

    return true;
}