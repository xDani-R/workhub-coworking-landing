    import styles from './Sedes.module.css';

    import imgPenalolen from '../../../assets/img/002.png';
    import imgLaReina from '../../../assets/img/004.png';
    import imgNunoa from '../../../assets/img/003.png';

    const sedes = [
    {
        id: 'penalolen',
        img: imgPenalolen,
        alt: 'Sede Peñalolen',
        titulo: 'Sede Peñalolen',
        direccion: 'Av. Grecia #48, Peñalolen, RM.',
    },
    {
        id: 'la-reina',
        img: imgLaReina,
        alt: 'Sede La Reina',
        titulo: 'Sede La Reina',
        direccion: 'Av. Ossa #123, La Reina, RM.',
    },
    {
        id: 'nunoa',
        img: imgNunoa,
        alt: 'Sede Ñuñoa',
        titulo: 'Sede Ñuñoa',
        direccion: 'Calle Simón Bolívar #4500, Ñuñoa, RM.',
    },
    ];

    const Sedes = () => {
    return (
        <section className={styles.sedes} id="sedes">
        <div className={styles.container}>

            <h1 className={styles.interTitle}>
            Ubicación / <span className={styles.wavySedes}>CoWorks</span>
            </h1>

            <div className={styles.row}>
            {sedes.map((sede) => (
                <div key={sede.id} className={styles.colMd4}>
                <div className={styles.card}>
                    <img src={sede.img} alt={sede.alt} />
                    <div className={styles.cardBody}>
                    <h5 className={styles.cardTitle}>{sede.titulo}</h5>
                    <p className={styles.cardText}>
                        Dirección:<br />{sede.direccion}
                    </p>
                    </div>
                </div>
                </div>
            ))}
            </div>

        </div>
        </section>
    );
    };

    export default Sedes;