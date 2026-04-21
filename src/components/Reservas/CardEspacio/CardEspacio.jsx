    import styles from './CardEspacio.module.css';

    // Mapa de amenidades: clave → ícono + label
    const AMENIDAD_MAP = {
    wifi:    { icon: 'bi bi-wifi',     label: 'WiFi' },
    pizarra: { icon: 'bi bi-pencil',   label: 'Pizarra' },
    ac:      { icon: 'bi bi-snow',     label: 'A/C' },
    tv:      { icon: 'bi bi-tv',       label: 'TV' },
    cafe:    { icon: 'bi bi-cup-hot',  label: 'Café & té' },
    };

    export default function CardEspacio({ sala, onReservar }) {
    return (
        <div className={`col-12 col-md-6 col-lg-4`}>
        <div className={`card ${styles.cardEspacio} h-100`}>
            <img
            src={sala.imagen}
            className={`card-img-top ${styles.cardImgTop}`}
            alt={sala.alt}
            />

            <div className={`card-body ${styles.cardBody}`}>
            <h5 className={styles.cardTitle}>{sala.nombre}</h5>
            <p className={styles.cardPrecio}>{sala.precio}</p>

            <div className={styles.amenidades}>
                {sala.amenidades.map((key) => {
                const amenidad = AMENIDAD_MAP[key];
                if (!amenidad) return null;
                return (
                    <span key={key} className={styles.badgeAmenidad}>
                    <i className={amenidad.icon}></i> {amenidad.label}
                    </span>
                );
                })}
            </div>
            </div>

            <div className={`${styles.cardFooter} border-0 pb-3`}>
            <button
                className={`${styles.btnReservar} w-100`}
                onClick={() => onReservar(sala)}
            >
                Reservar &nbsp;›
            </button>
            </div>
        </div>
        </div>
    );
    }