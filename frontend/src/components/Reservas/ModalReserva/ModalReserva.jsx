    import { useState, useEffect } from 'react';
    import styles from './ModalReserva.module.css';

    export default function ModalReserva({ sala, espacioId, sede, onCerrar, onConfirmar }) {

    // ── Leer usuario desde localStorage (guardado en el login) ──
    const usuarioGuardado = JSON.parse(localStorage.getItem('usuario') || '{}');

    const [form, setForm] = useState({
        nombreYapellido: usuarioGuardado.nombre  || '',
        email:           usuarioGuardado.correo  || '',
        telefono:        '',
        fecha:           '',
        hora:            '',
        mensaje:         '',
    });

    const [loading,  setLoading]  = useState(false);
    const [apiError, setApiError] = useState('');

    // Bloquear scroll del body cuando el modal está abierto
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setApiError('');
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    function validar() {
        const { nombreYapellido, email, telefono, fecha, hora, mensaje } = form;

        if (!nombreYapellido.trim() || !email.trim() || !telefono.trim() ||
            !fecha.trim() || !hora.trim() || !mensaje.trim()) {
        return 'Por favor, completa todos los campos obligatorios.';
        }
        if (/\d/.test(nombreYapellido)) {
        return 'El nombre no puede contener números.';
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return 'El email no tiene un formato válido.';
        }
        if (!/^\d+$/.test(telefono)) {
        return 'El teléfono solo puede contener números.';
        }
        if (telefono.length !== 9 && telefono.length !== 11) {
        return 'El teléfono debe tener 9 u 11 dígitos.';
        }
        return null; // sin errores
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const errorValidacion = validar();
        if (errorValidacion) {
        setApiError(errorValidacion);
        return;
        }

        setLoading(true);
        setApiError('');

        try {
        const token = localStorage.getItem('token');

        console.log('Datos a enviar:', {
    fecha   : form.fecha,
    hora    : form.hora,
    mensaje : form.mensaje,
    usuarios : usuarioGuardado.id,
    espacios : espacioId,
    salas    : sala._id,
});

        const response = await fetch('http://localhost:3001/reservas', {
            method : 'POST',
            headers: {
            'Content-Type' : 'application/json'            },
            body: JSON.stringify({
            fecha   : form.fecha,
            hora    : form.hora,
            mensaje : form.mensaje,
            usuarios: usuarioGuardado.id,   // _id del usuario logueado
            espacios : espacioId,            // _id del documento Espacio
            salas    : sala._id,             // _id de la sala (subdocumento)
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            setApiError(data.mensaje || 'Error al crear la reserva. Intenta nuevamente.');
            return;
        }

        // ✅ Reserva creada — notifica al padre con los datos para mostrar en pantalla
        onConfirmar({
            ...form,
            ubicacion : sede,
            espacio   : sala.nombre,
            tipo      : sala.tipo,
        });

        } catch (err) {
        setApiError('No se pudo conectar con el servidor. Verifica tu conexión.');
        } finally {
        setLoading(false);
        }
    }

    function handleOverlayClick(e) {
        if (e.target === e.currentTarget) onCerrar();
    }

    return (
        <div className={styles.overlay} onClick={handleOverlayClick}>
        <div className={styles.modalContenido}>

            {/* Header */}
            <div className={styles.modalHeader}>
            <h5 className={styles.tituloModal}>Reservar espacio</h5>
            <button className={styles.btnCerrar} onClick={onCerrar} aria-label="Cerrar">
                ✕
            </button>
            </div>

            {/* Body */}
            <div className={styles.modalBody}>
            <p className={styles.espacioSeleccionado}>📍 {sala.nombre}</p>

            {/* Error de API o validación */}
            {apiError && (
                <div className={styles.apiErrorBanner}>
                {apiError}
                </div>
            )}

            <form onSubmit={handleSubmit} className={styles.formulario}>

                <div className={styles.inputFormulario}>
                <label className={styles.labelFormulario}>Nombre y apellido</label>
                <input
                    type="text"
                    name="nombreYapellido"
                    className={`form-control ${styles.inputControl}`}
                    placeholder="Marcos Perez"
                    value={form.nombreYapellido}
                    onChange={handleChange}
                />
                </div>

                <div className={styles.inputFormulario}>
                <label className={styles.labelFormulario}>Email</label>
                <input
                    type="email"
                    name="email"
                    className={`form-control ${styles.inputControl}`}
                    placeholder="car.perez@gmail.com"
                    value={form.email}
                    onChange={handleChange}
                />
                </div>

                <div className={styles.inputFormulario}>
                <label className={styles.labelFormulario}>Teléfono</label>
                <input
                    type="tel"
                    name="telefono"
                    className={`form-control ${styles.inputControl}`}
                    placeholder="912345672"
                    value={form.telefono}
                    onChange={handleChange}
                />
                </div>

                {/* Sede + Fecha en fila */}
                <div className={`${styles.inputFormulario} ${styles.filaDoble}`}>
                <div className={styles.inputUbicacionFecha}>
                    <label className={styles.labelFormulario}>Sede</label>
                    <input
                    type="text"
                    className={`form-control ${styles.inputControl}`}
                    value={sede}
                    readOnly
                    />
                </div>
                <div className={styles.inputUbicacionFecha}>
                    <label className={styles.labelFormulario}>Fecha</label>
                    <input
                    type="date"
                    name="fecha"
                    className={`form-control ${styles.inputControl}`}
                    value={form.fecha}
                    onChange={handleChange}
                    required
                    />
                </div>
                </div>

                <div className={styles.inputFormulario}>
                <label className={styles.labelFormulario}>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className={`form-control ${styles.inputControl}`}
                    value={form.hora}
                    onChange={handleChange}
                />
                </div>

                <div className={styles.inputFormulario}>
                <label className={styles.labelFormulario}>Mensaje</label>
                <textarea
                    name="mensaje"
                    className={`form-control ${styles.textareaControl}`}
                    placeholder="Indícanos si necesitas algo adicional"
                    value={form.mensaje}
                    onChange={handleChange}
                />
                </div>

                <button
                type="submit"
                className={styles.botonFormulario}
                disabled={loading}
                >
                {loading ? 'Enviando reserva...' : 'Confirmar reserva'}
                </button>

            </form>
            </div>

        </div>
        </div>
    );
    }