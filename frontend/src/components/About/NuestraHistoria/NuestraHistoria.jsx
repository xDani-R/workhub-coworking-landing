    import styles from './NuestraHistoria.module.css';
    import storyImg from '../../../assets/img/wide gallery pic (5).jpg';

    const NuestraHistoria = () => {
    return (
        <section className={styles.nuestraHistoria}>
        <div className={styles.container}>

            <div className={styles.row}>

            {/* Texto */}
            <div className={styles.colTexto}>
                <h3>Nuestra comunidad</h3>

                <p>
                WorkHub es más que un espacio de coworking. Es un punto de encuentro
                para profesionales, creativos, emprendedores y equipos que buscan
                desarrollar sus proyectos en un ambiente abierto, colaborativo
                y lleno de posibilidades.
                </p>

                <p>
                Aquí conviven distintas disciplinas, perspectivas e ideas.
                Nuestro objetivo es ofrecer un lugar donde el trabajo individual
                se transforme en una experiencia colectiva capaz de generar
                nuevas oportunidades, aprendizajes y redes profesionales.
                </p>
            </div>

            {/* Imagen */}
            <div className={styles.colImagen}>
                <img src={storyImg} alt="Nuestra comunidad WorkHub" className={styles.storyImg} />
            </div>

            </div>
        </div>
        </section>
    );
    };

    export default NuestraHistoria;