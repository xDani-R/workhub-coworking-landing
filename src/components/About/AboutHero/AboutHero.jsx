    import styles from './AboutHero.module.css';

    const AboutHero = () => {
    return (
        <section className={styles.seccionNosotros}>
        <div className={styles.container}>

            <p className={styles.aboutMini}>Nosotros</p>

            <h1>La comunidad detrás de WorkHub</h1>

            <p className={styles.aboutText}>
            WorkHub nace como un espacio pensado para quienes buscan trabajar,
            crear y colaborar en un entorno que inspire ideas. Creemos que los
            proyectos crecen cuando las personas se conectan, comparten procesos
            y construyen en comunidad.
            </p>

        </div>
        </section>
    );
    };

    export default AboutHero;