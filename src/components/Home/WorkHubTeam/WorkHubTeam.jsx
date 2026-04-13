    import styles from './WorkHubTeam.module.css';
    import teamImg from '../../../assets/img/team-cowork-hub.jpg';

    const WorkHubTeam = () => {
    return (
        <section className={styles.aboutus} id="aboutus-section">
        <div className={styles.aboutusContent}>

            <h1>
            Workhub <span className={styles.underlineWave}>team</span>
            </h1>

            <p>
            Es un espacio de coworking diseñado para activar ideas en comunidad.
            Creemos en la colaboración como motor de innovación, por eso integramos
            salas de trabajo con espacios abiertos para talleres, encuentros y
            procesos compartidos.
            </p>

            <p>
            Más que escritorios, ofrecemos un ecosistema interdisciplinario donde
            distintas miradas conviven, dialogan y construyen juntas. Aquí, cada
            proyecto encuentra red, apoyo y posibilidad de expansión.
            </p>

            <img src={teamImg} alt="Espacio de coworking Workhub" />

        </div>
        </section>
    );
    };

    export default WorkHubTeam;