    import styles from './SedesTabs.module.css';

    const SEDES = [
    { id: 'la-reina', label: 'La Reina' },
    { id: 'penalolen', label: 'Peñalolen' },
    { id: 'nunoa', label: 'Ñuñoa' },
    ];

    export default function SedesTabs({ sedeActiva, onCambiarSede }) {
    return (
        <div className={styles.sedeTabs}>
        {SEDES.map((sede) => (
            <button
            key={sede.id}
            className={`${styles.btnSede} ${sedeActiva === sede.id ? styles.activo : ''}`}
            onClick={() => onCambiarSede(sede.id)}
            >
            📍 {sede.label}
            </button>
        ))}
        </div>
    );
    }