    import styles from './ReservasConfirmadas.module.css';

export default function ReservasConfirmadas({ reservas }) {
    if (reservas.length === 0) return null;

    return (
        <section className={styles.seccionReservasConfirmadas}>
        <div className="container py-4">
            <h2 className={styles.tituloConfirmadas}>Reservas confirmadas</h2>
            <div className={styles.contenedorReservas}>
            {reservas.map((reserva) => {

                // Busca la sala dentro del array de salas del espacio
                const salaDetalle = reserva.espacios?.salas?.find(
                    (s) => String(s._id) === String(reserva.salas)
                );

                return (
                <div key={reserva._id} className={styles.cardReserva}>
                    <div className={styles.cardReservaHeader}>
                        <h5>🗓 Reserva de {reserva.usuarios?.nombre ?? 'Usuario'}</h5>
                    </div>
                    <div className={styles.cardReservaBody}>
                        <p><strong>Email:</strong>    {reserva.usuarios?.correo}</p>
                        <p><strong>Sede:</strong>     {reserva.espacios?.nombre}</p>
                        <p><strong>Dirección:</strong>{reserva.espacios?.direccion}</p>
                        <p><strong>Sala:</strong>     {salaDetalle?.nombre ?? '—'}</p>
                        <p><strong>Tipo:</strong>     {salaDetalle?.tipo   ?? '—'}</p>
                        <p><strong>Fecha:</strong>    {reserva.fecha}</p>
                        <p><strong>Hora:</strong>     {reserva.hora}</p>
                        {reserva.mensaje?.trim() && (
                            <p><strong>Mensaje:</strong> {reserva.mensaje}</p>
                        )}
                    </div>
                </div>
                );
            })}
            </div>
        </div>
        </section>
    );
}