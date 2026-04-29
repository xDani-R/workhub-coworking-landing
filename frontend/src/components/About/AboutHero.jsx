import { Container } from 'react-bootstrap';
import styles from '../../components/About/AboutHero.module.css';
import teamImg from '../../assets/img/About/about1.jpg';
// Importamos los nuevos iconos
import iconImpulsar from '../../assets/img/About/icon/impulsar 1.png';
import iconPromocion from '../../assets/img/About/icon/promocion 1.png';
import iconObjetivo from '../../assets/img/About/icon/objetivo 1.png';

const AboutHero = () => {
  return (
    <section className={styles.hero}>
      <Container fluid className={styles.container}>
        <p className={styles.topLabel}>Quiénes somos</p>
        <h1 className={styles.title}>El equipo que activa WorkHub</h1>
        
        <div className={styles.iconBar}>
          <div className={styles.iconItem}>
            <img src={iconImpulsar} alt="Impulsar" />
            <span>Impulsamos talento</span>
          </div>
          <div className={styles.divider}>|</div>
          <div className={styles.iconItem}>
            <img src={iconPromocion} alt="Promocion" />
            <span>Fomentamos comunidad</span>
          </div>
          <div className={styles.divider}>|</div>
          <div className={styles.iconItem}>
            <img src={iconObjetivo} alt="Objetivo" />
            <span>Creamos impacto</span>
          </div>
        </div>

        <p className={styles.description}>
          Somos un grupo interdisciplinario que conecta oficios, creatividad y colaboración 
          para hacer crecer la comunidad desde la práctica.
        </p>

        <div className={styles.imageWrapper}>
          <img src={teamImg} alt="Team WorkHub" className={styles.mainImage} />
        </div>
      </Container>
    </section>
  );
};

export default AboutHero;