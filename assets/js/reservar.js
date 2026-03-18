// ============================================================
// CLASE Espacio
// Guarda los datos de una sala disponible para reservar
// ============================================================
class Espacio {
    constructor(id, nombre, tipo) {
        this.id     = id;       // ID del elemento en el HTML (ej: "espacio-1")
        this.nombre = nombre;   // Nombre de la sala (ej: "Sala de reunión N°1")
        this.tipo   = tipo;     // Tipo de sala: "compartida", "privada" o "taller"
    }
}

// ============================================================
// CLASE Reserva
// Guarda todos los datos de una reserva realizada
// ============================================================
class Reserva {
    constructor(nombre, email, telefono, espacio, ubicacion, fecha, hora, mensaje, htmlCardEspacio) {
        this.nombre    = nombre;
        this.email     = email;
        this.telefono  = telefono;
        this.espacio   = espacio;       // Es una instancia de la clase Espacio
        this.ubicacion = ubicacion;
        this.fecha     = fecha;
        this.hora      = hora;
        this.mensaje   = mensaje;
        this.htmlCardEspacio = htmlCardEspacio;
    }
}

// ============================================================
// CLASE App
// Controla toda la lógica: reservas, validación y filtros
// ============================================================
class App {
    constructor() {
        // Array donde se van guardando todas las reservas creadas
        this.reservas = [];

        // Espacio seleccionado al hacer clic en "Reservar"
        this.espacioActual = null;

        // Instancia del modal de Bootstrap
        this.modal = new bootstrap.Modal(document.getElementById('modalReserva'));

        // Contenedor HTML donde aparecen las cards de confirmación
        this.contenedorReservas = document.getElementById('contenedorReservas');

        // Conectar el formulario con el método que maneja el envío
        document.getElementById('formularioReserva').addEventListener('submit', (e) => {
            e.preventDefault();
            this.enviarFormulario();
        });
    }

    // ----------------------------------------------------------
    // Se llama al hacer clic en "Reservar" de una card
    // Recibe el id del HTML y el nombre visible de la sala
    // ----------------------------------------------------------
    abrirFormulario(cardId, nombreEspacio) {
        // Buscar la card en el HTML para leer su data-tipo
        const cardElement = document.getElementById(cardId);
        const tipo = cardElement.dataset.tipo;

        // Crear una instancia de Espacio con los datos de esa card
        this.espacioActual = new Espacio(cardId, nombreEspacio, tipo);

        // Mostrar el nombre del espacio dentro del modal
        document.getElementById('nombreEspacioSeleccionado').textContent = nombreEspacio;

        // Limpiar el formulario antes de abrir el modal
        document.getElementById('formularioReserva').reset();

        // Abrir el modal
        this.modal.show()
    }

    // ----------------------------------------------------------
    // Se ejecuta al enviar el formulario
    // Valida los datos, crea la reserva y actualiza la vista
    // ----------------------------------------------------------
    enviarFormulario() {
        const nombre    = document.getElementById('nombreYapellido').value;
        const email     = document.getElementById('email').value;
        const telefono  = document.getElementById('telefono').value;
        const ubicacion = document.getElementById('ubicacion').value;
        const fecha     = document.getElementById('fecha').value;
        const hora      = document.getElementById('hora').value;
        const mensaje   = document.getElementById('mensaje').value;

        // Si la validación falla, se detiene todo
        if (!this.validarFormulario(nombre, email, telefono, ubicacion, fecha, hora, mensaje)) {
            return;
        }

        const cardElement = document.getElementById(this.espacioActual.id);
        const htmlCardEspacio = cardElement.outerHTML;

        // Crear una instancia de Reserva con todos los datos
        const nuevaReserva = new Reserva(
            nombre, email, telefono,
            this.espacioActual,
            ubicacion, fecha, hora, mensaje,
            htmlCardEspacio  
        );

        // Guardar la reserva en el array
        this.reservas.push(nuevaReserva);

        // Eliminar la card del espacio con animación
        if (cardElement) {
            cardElement.style.transition = 'opacity 0.4s ease';
            cardElement.style.opacity = '0';
            setTimeout(() => cardElement.remove(), 400);
        }

        // Mostrar la card de confirmación
        this.mostrarCardReserva(nuevaReserva);

        // Cerrar modal y limpiar formulario
        this.modal.hide();
        document.getElementById('formularioReserva').reset();

        alert('✅ Reserva creada exitosamente');
    }

    // ----------------------------------------------------------
    // Crea y muestra en pantalla la card de confirmación
    // ----------------------------------------------------------
    mostrarCardReserva(reserva) {
        const card = document.createElement('div');
        card.classList.add('card-reserva');

        card.innerHTML = `
            <div class="card-reserva-header">
                <h5>🗓 Reserva de ${reserva.nombre}</h5>
            </div>
            <div class="card-reserva-body">
                <p><strong>Email:</strong> ${reserva.email}</p>
                <p><strong>Teléfono:</strong> ${reserva.telefono}</p>
                <p><strong>Espacio:</strong> ${reserva.espacio.nombre}</p>
                <p><strong>Tipo de espacio:</strong> ${reserva.espacio.tipo}</p>
                <p><strong>Ubicación:</strong> ${reserva.ubicacion}</p>
                <p><strong>Fecha:</strong> ${reserva.fecha}</p>
                <p><strong>Hora:</strong> ${reserva.hora}</p>
                ${reserva.mensaje.trim() ? `<p><strong>Mensaje:</strong> ${reserva.mensaje}</p>` : ''}
            </div>
            <div class="card-reserva-footer">
                <button class="btn-cancelar-reserva" onclick="app.eliminarReserva(this, '${reserva.espacio.id}')">
                    🗑 Cancelar reserva
                </button>
            </div>
        `;

        this.contenedorReservas.appendChild(card);
    }


    // ----------------------------------------------------------
    // Elimina la card de confirmación cuando el usuario
    // hace clic en "Cancelar reserva"
    // ----------------------------------------------------------
    eliminarReserva(boton, espacioId) {
        // Encontrar la card de confirmación y eliminarla
        const cardReserva = boton.closest('.card-reserva');

        // Buscar la reserva en el array usando el id del espacio
        const reserva = this.reservas.find(r => r.espacio.id === espacioId);

        if (reserva) {
            // Restaurar la card del espacio en el contenedor
            const contenedorEspacios = document.getElementById('contenedorEspacios');
            contenedorEspacios.innerHTML += reserva.htmlCardEspacio;

            // Eliminar la reserva del array
            this.reservas = this.reservas.filter(r => r.espacio.id !== espacioId);
        }

        // Eliminar la card de confirmación con animación
        cardReserva.style.transition = 'opacity 0.4s ease';
        cardReserva.style.opacity = '0';
        setTimeout(() => cardReserva.remove(), 400);
    }

    // ----------------------------------------------------------
    // Filtra las cards visibles según el tipo seleccionado
    //
    // querySelectorAll funciona igual que getElementById pero
    // permite buscar VARIOS elementos a la vez usando una clase
    // (con punto) en vez de un id (con #).
    //
    // Ejemplo:
    //   getElementById('espacio-1')     → busca 1 elemento por id
    //   querySelectorAll('.btn-filtro') → busca TODOS los elementos
    //                                     que tengan esa clase
    // ----------------------------------------------------------
    filtrarEspacios(tipo, botonClickeado) {
        // Quitar la clase "activo" de todos los botones de filtro
        // y ponerla solo en el que se acaba de clickear
        const botones = document.querySelectorAll('.btn-filtro');
        botones.forEach(btn => btn.classList.remove('activo'));
        botonClickeado.classList.add('activo');

        // Mostrar u ocultar cada card según su data-tipo
        const cards = document.querySelectorAll('.card-espacio-wrapper');
        cards.forEach(card => {
            if (tipo === 'todos' || card.dataset.tipo === tipo) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // ----------------------------------------------------------
    // Valida los campos del formulario antes de crear la reserva
    // Retorna true si todo está bien, false si hay algún error
    // ----------------------------------------------------------
    validarFormulario(nombre, email, telefono, ubicacion, fecha, hora, mensaje) {
        if (!nombre.trim() || !email.trim() || !telefono.trim() ||
            !ubicacion.trim() || !fecha.trim() || !hora.trim() || !mensaje.trim()) {
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
}

// ============================================================
// Crear la instancia global de App
// Se usa "const app" para que los botones del HTML puedan
// llamar a sus métodos con app.abrirFormulario(...) etc.
// ============================================================
const app = new App();