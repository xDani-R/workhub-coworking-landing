    import styles from './AboutMision.module.css';

    const valores = [
    {
        id: 'comunidad',
        titulo: 'Comunidad',
        descripcion: 'Creemos en el poder de trabajar juntos y compartir ideas.',
    },
    {
        id: 'creatividad',
        titulo: 'Creatividad',
        descripcion: 'Diseñamos espacios que inspiran innovación.',
    },
    {
        id: 'colaboracion',
        titulo: 'Colaboración',
        descripcion: 'Fomentamos conexiones entre profesionales y proyectos.',
    },
    {
        id: 'crecimiento',
        titulo: 'Crecimiento',
        descripcion: 'Apoyamos a quienes buscan desarrollar sus ideas.',
    },
    ];

    const AboutMision = () => {
    return (
        <section className={styles.mision}>
        <div className={styles.container}>

            <h3>Nuestra misión</h3>

            <p className={styles.misionText}>
            Crear un espacio donde las ideas, el trabajo y la comunidad
            se encuentren para impulsar proyectos, creatividad
            y colaboración entre profesionales.
            </p>

            <div className={styles.valoresGrid}>
            {valores.map((valor) => (
                <div key={valor.id} className={styles.valorItem}>
                <h5>{valor.titulo}</h5>
                <p>{valor.descripcion}</p>
                </div>
            ))}
            </div>

        </div>
        </section>
    );
    };

    export default AboutMision;