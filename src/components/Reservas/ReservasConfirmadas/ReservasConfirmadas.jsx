    import styles from './ReservasConfirmadas.module.css';

    export default function ReservasConfirmadas({ reservas }) {
    if (reservas.length === 0) return null;

    return (
        <section className={styles.seccionReservasConfirmadas}>
        <div className="container py-4">
            <h2 className={styles.tituloConfirmadas}>Reservas confirmadas</h2>

            <div className={styles.contenedorReservas}>
            {reservas.map((reserva, index) => (
                <div key={index} className={styles.cardReserva}>
                <div className={styles.cardReservaHeader}>
                    <h5>🗓 Reserva de {reserva.nombreYapellido}</h5>
                </div>
                <div className={styles.cardReservaBody}>
                    <p><strong>Email:</strong> {reserva.email}</p>
                    <p><strong>Teléfono:</strong> {reserva.telefono}</p>
                    <p><strong>Espacio:</strong> {reserva.espacio}</p>
                    <p><strong>Tipo de espacio:</strong> {reserva.tipo}</p>
                    <p><strong>Sede:</strong> {reserva.ubicacion}</p>
                    <p><strong>Fecha:</strong> {reserva.fecha}</p>
                    <p><strong>Hora:</strong> {reserva.hora}</p>
                    {reserva.mensaje.trim() && (
                    <p><strong>Mensaje:</strong> {reserva.mensaje}</p>
                    )}
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
    }