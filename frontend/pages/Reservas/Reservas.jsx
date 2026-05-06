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

    /* ================================
    PANTALLA DE ACCESO BLOQUEADO
    ================================ */
    function PantallaNoAutorizada() {
    return (
        <section style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        }}>
        <div style={{
            textAlign: 'center',
            maxWidth: '420px',
            padding: '48px 32px',
            borderRadius: '16px',
            background: '#ffffff',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        }}>
            {/* Ícono */}
            <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'rgba(91, 45, 110, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            fontSize: '28px',
            }}>
            🔒
            </div>

            <h2 style={{
            fontSize: '1.4rem',
            fontWeight: '700',
            color: '#1a1a1a',
            marginBottom: '10px',
            }}>
            Acceso restringido
            </h2>

            <p style={{
            fontSize: '14px',
            color: '#888',
            lineHeight: '1.6',
            marginBottom: '28px',
            }}>
            Para ver y realizar reservas necesitas tener una cuenta activa.
            </p>

            {/* Botones */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <a
                href="/login"
                style={{
                padding: '10px 24px',
                borderRadius: '10px',
                background: '#5B2D6E',
                color: '#fff',
                fontWeight: '600',
                fontSize: '14px',
                textDecoration: 'none',
                transition: 'background 0.2s',
                }}
            >
                Iniciar sesión
            </a>
            <a
                href="/registro"
                style={{
                padding: '10px 24px',
                borderRadius: '10px',
                border: '2px solid #5B2D6E',
                color: '#5B2D6E',
                fontWeight: '600',
                fontSize: '14px',
                textDecoration: 'none',
                transition: 'all 0.2s',
                }}
            >
                Registrarse
            </a>
            </div>
        </div>
        </section>
    );
    }

    /* ================================
    COMPONENTE PRINCIPAL
    ================================ */
    export default function Reservas() {
    const [sedeActiva, setSedeActiva] = useState('la-reina');
    const [modalData, setModalData]   = useState(null);
    const [sede, setSede]             = useState(null);
    const [loading, setLoading]       = useState(true);
    const [error, setError]           = useState(null);
    const [reservasConfirmadas, setReservasConfirmadas] = useState([]);

    // ── Verificar token ──
    const token = localStorage.getItem('token');

    // Si no hay token, mostrar pantalla de bloqueo directamente
    if (!token) {
        return <PantallaNoAutorizada />;
    }

    const salasReservadas = reservasConfirmadas.map((r) => r.sala);

    // ── Cargar espacios ──
    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch('http://localhost:3001/espacios', {
        headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
            if (!res.ok) throw new Error('Error al obtener espacios');
            return res.json();
        })
        .then((data) => {
            const encontrada = data.find((e) =>
            e.nombre.toLowerCase().includes(NOMBRE_SEDE[sedeActiva].toLowerCase())
            );
            setSede(encontrada ?? null);
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }, [sedeActiva]);

    // ── Cargar reservas ──
    useEffect(() => {
        fetch('http://localhost:3001/reservas', {
        headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => res.json())
        .then((data) => setReservasConfirmadas(Array.isArray(data) ? data : []))
        .catch((err) => console.error('Error al cargar reservas:', err));
    }, []);

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
        headers: { Authorization: `Bearer ${token}` },
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

            {loading && <p className="text-center text-muted">Cargando salas...</p>}
            {error   && <p className="text-center text-danger">Error: {error}</p>}

            {!loading && !error && sede && (
                <SeccionSede
                sede={sede}
                salasVisibles={salasVisibles}
                onReservar={handleReservar}
                />
            )}

            {!loading && !error && !sede && (
                <p className="text-center text-muted">
                No hay espacios disponibles para esta sede.
                </p>
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