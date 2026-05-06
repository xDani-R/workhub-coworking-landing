    import { useState, useEffect } from 'react';
    import SedesTabs from '../../src/components/Reservas/SedesTabs/SedesTabs';
    import SeccionSede from '../../src/components/Reservas/SeccionSede/SeccionSede';
    import ModalReserva from '../../src/components/Reservas/ModalReserva/ModalReserva';
    import ReservasConfirmadas from '../../src/components/Reservas/ReservasConfirmadas/ReservasConfirmadas';
    import styles from '../Reservas/Reservas.module.css';


    const NOMBRE_SEDE = {
    'la-reina': 'La Reina',
    penalolen:  'Peñalolen',
    nunoa:      'Ñuñoa',
    };

    export default function Reservas() {
    const [sedeActiva, setSedeActiva] = useState('la-reina');
    const [modalData, setModalData]   = useState(null);
    const [sede, setSede]             = useState(null);
    const [loading, setLoading]       = useState(true);
    const [error, setError]           = useState(null);

    // ── Reservas desde la BD ──
    const [reservasConfirmadas, setReservasConfirmadas] = useState([]);

    // Salas ocupadas derivadas de las reservas reales
    const salasReservadas = reservasConfirmadas.map((r) => r.sala);

    // ── Cargar espacios ──
    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch(`http://localhost:3001/espacios`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then((res) => { if (!res.ok) throw new Error('Error al obtener espacios'); return res.json(); })
        .then((data) => {
            const encontrada = data.find((e) =>
                e.nombre.toLowerCase().includes(NOMBRE_SEDE[sedeActiva].toLowerCase())
            );
            setSede(encontrada ?? null);
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }, [sedeActiva]);

    useEffect(() => {
        fetch('http://localhost:3001/reservas', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then((res) => res.json())
        .then((data) => setReservasConfirmadas(Array.isArray(data) ? data : []))
        .catch((err) => console.error('Error al cargar reservas:', err));
    }, []);




    // ──────────────────────────────────────────────────────────

    const salasVisibles = sede?.salas?.filter(
        (sala) => !salasReservadas.includes(String(sala._id))
    ) ?? [];

    function handleReservar(sala) {
        setModalData({ sala, sede: NOMBRE_SEDE[sedeActiva], espacioId: sede._id });
    }

    function handleCerrarModal() {
        setModalData(null);
    }

    function handleConfirmarReserva() {
        fetch('http://localhost:3001/reservas', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then((res) => res.json())
        .then((data) => setReservasConfirmadas(Array.isArray(data) ? data : []))
        .catch((err) => console.error('Error al recargar reservas:', err));

        setModalData(null);
        alert('✅ Reserva creada exitosamente');
    }

    return (
        <>
        <section className={styles.seccionEspacios}>
            <div className="container py-5">

            <h2 className={styles.tituloEspacios}>Reservas | Espacios disponibles</h2>
            <p className={`text-muted mb-4 ${styles.subtitulo}`}>
                Selecciona una sede para ver sus salas disponibles.
            </p>

            <SedesTabs
                sedeActiva={sedeActiva}
                onCambiarSede={setSedeActiva}
            />

            {/* ── Estados de carga/error (solo OPCIÓN B) ── */}
            {loading && <p className="text-center text-muted">Cargando salas...</p>}
            {error   && <p className="text-center text-danger">Error: {error}</p>}

            {!loading && !error && sede && (
                <SeccionSede
                sede={sede}
                salasVisibles={salasVisibles}
                onReservar={handleReservar}
                />
            )}

            </div>
        </section>

        <ReservasConfirmadas reservas={reservasConfirmadas} />

        {modalData && (
            <ModalReserva
            sala={modalData.sala}
            sede={modalData.sede}
            espacioId={modalData.espacioId}
            onCerrar={handleCerrarModal}
            onConfirmar={handleConfirmarReserva}
            />
        )}
        </>
    );
    }