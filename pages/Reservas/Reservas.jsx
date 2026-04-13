    import { useState, useEffect } from 'react';
    import SedesTabs from '../../src/components/Reservas/SedesTabs/SedesTabs';
    import SeccionSede from '../../src/components/Reservas/SeccionSede/SeccionSede';
    import ModalReserva from '../../src/components/Reservas/ModalReserva/ModalReserva';
    import ReservasConfirmadas from '../../src/components/Reservas/ReservasConfirmadas/ReservasConfirmadas';
    import styles from '../Reservas/Reservas.module.css';

    // ─────────────────────────────────────────────────────────────
    // OPCIÓN A — JSON local (sin servidor)
    // Importa el objeto directamente desde el archivo de datos.
    // No requiere fetch ni useEffect para obtener los datos.
    // Para activar: descomentar el import y el bloque marcado con [A]
    // ─────────────────────────────────────────────────────────────
    // import espacios from '../../src/data/espacios';

    // ─────────────────────────────────────────────────────────────
    // OPCIÓN B — json-server (activa)
    // Simula una API REST real con fetch + useEffect.
    // Requiere correr: npm run server (puerto 3001)
    // ─────────────────────────────────────────────────────────────

    const NOMBRE_SEDE = {
    'la-reina': 'La Reina',
    penalolen:  'Peñalolen',
    nunoa:      'Ñuñoa',
    };

    export default function Reservas() {
    const [sedeActiva, setSedeActiva]               = useState('la-reina');
    const [modalData, setModalData]                 = useState(null);
    const [reservasConfirmadas, setReservasConfirmadas] = useState([]);
    const [salasReservadas, setSalasReservadas]     = useState([]);

    // ── Estados exclusivos de OPCIÓN B ──
    const [sede, setSede]       = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError]     = useState(null);

    // ── [A] OPCIÓN A — JSON local ──────────────────────────────
    // Comentar este bloque si se usa OPCIÓN B
    // const sede = espacios[sedeActiva];
    // ──────────────────────────────────────────────────────────

    // ── [B] OPCIÓN B — json-server ─────────────────────────────
    // Comentar este bloque si se usa OPCIÓN A
    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch(`http://localhost:3001/espacios?id=${sedeActiva}`)
        .then((res) => {
            if (!res.ok) throw new Error('Error al obtener la sede');
            return res.json();
        })
        .then((data) => setSede(data[0]))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }, [sedeActiva]);
    // ──────────────────────────────────────────────────────────

    const salasVisibles = sede?.salas?.filter(
        (sala) => !salasReservadas.includes(sala.id)
    ) ?? [];

    function handleReservar(sala) {
        setModalData({ sala, sede: NOMBRE_SEDE[sedeActiva] });
    }

    function handleCerrarModal() {
        setModalData(null);
    }

    function handleConfirmarReserva(datosReserva) {
        setSalasReservadas((prev) => [...prev, modalData.sala.id]);
        setReservasConfirmadas((prev) => [...prev, datosReserva]);
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
            onCerrar={handleCerrarModal}
            onConfirmar={handleConfirmarReserva}
            />
        )}
        </>
    );
    }