    import { useState, useEffect } from 'react';
    import styles from './ModalReserva.module.css';

    const ESTADO_INICIAL = {
    nombreYapellido: '',
    email: '',
    telefono: '',
    fecha: '',
    hora: '',
    mensaje: '',
    };

    export default function ModalReserva({ sala, sede, onCerrar, onConfirmar }) {
    const [form, setForm] = useState(ESTADO_INICIAL);

    // Bloquear scroll del body cuando el modal está abierto
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
        document.body.style.overflow = '';
        };
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    function validar() {
        const { nombreYapellido, email, telefono, fecha, hora, mensaje } = form;

        if (!nombreYapellido.trim() || !email.trim() || !telefono.trim() || !fecha.trim() || !hora.trim() || !mensaje.trim()) {
        alert('Por favor, completa todos los campos obligatorios.');
        return false;
        }

        if (/\d/.test(nombreYapellido)) {
        alert('El nombre no puede contener números.');
        return false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('El email no tiene un formato válido.');
        return false;
        }

        if (!/^\d+$/.test(telefono)) {
        alert('El teléfono solo puede contener números.');
        return false;
        }

        if (telefono.length !== 9 && telefono.length !== 11) {
        alert('El teléfono debe tener 9 u 11 caracteres.');
        return false;
        }

        return true;
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!validar()) return;

        onConfirmar({
        ...form,
        ubicacion: sede,
        espacio: sala.nombre,
        tipo: sala.tipo,
        });
    }

    // Cerrar al hacer clic en el overlay (fuera del modal)
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

                <button type="submit" className={styles.botonFormulario}>
                Confirmar reserva
                </button>

            </form>
            </div>

        </div>
        </div>
    );
    }