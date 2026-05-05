import styles from './Gallery.module.css';
import imgMeeting from '../../../assets/img/wide gallery pic (1).jpg';
import imgEmpty from '../../../assets/img/wide gallery pic (5).jpg';
import imgTall from '../../../assets/img/tall gallery pic (1).jpg';
import iconProcesses from '../../../assets/icons/processes.svg';
import iconGraph from '../../../assets/icons/graph.svg';

const Gallery = () => {
  return (
    <section className={styles.customGalleryContainer}>
      {/* ── 1. Header Block (Top) ── */}
      <div className={styles.headerBlock}>
        <div className={styles.titleArea}>
          <h1>La comunidad que <br /> transforma el espacio</h1>
        </div>
        <div className={styles.descriptionArea}>
          <p>
            Un entorno pensado para descubrir, compartir y crear en comunidad. 
            Distintas disciplinas y proyectos se cruzan, generando un espacio 
            dinámico que evoluciona constantemente.
          </p>
        </div>
      </div>

      <div className={styles.galleryGrid}>
        {/* ── Row 1 ── */}
        <div className={`${styles.gridItem} ${styles.mainImage}`}>
          <img src={imgMeeting} alt="Meeting" />
        </div>

        <div className={`${styles.gridItem} ${styles.statCardBlue}`}>
          <h2>+50</h2>
          <h3>Proyectos en desarrollo</h3>
          <p>Un espacio diseñado para facilitar procesos y resultados</p>
        </div>

        <div className={`${styles.gridItem} ${styles.smallImageRight}`}>
          <img src={imgTall} alt="Small square" />
        </div>

        {/* ── Row 2 ── */}
        <div className={`${styles.gridItem} ${styles.statCardPurple}`}>
          <h2>+150</h2>
          <h3>Personas conectando ideas</h3>
          <p>
            Proyectos en curso que avanzan de manera constante, articulando 
            distintas formas de trabajo.
          </p>
        </div>

        <div className={`${styles.gridItem} ${styles.tallImageRight}`}>
          <img src={imgEmpty} alt="Tall right" />
        </div>
      </div>

      {/* ── 3. Bottom Icon Section ── */}
      <div className={styles.iconSection}>
        <div className={styles.iconLeft}>
          <img 
            src={iconProcesses} 
            alt="Procesos activos icon" 
            className={styles.sectionIcon} 
          />
        </div>

        <div className={styles.iconText}>
          <h3>Procesos activos</h3>
          <p>
            Metodología de trabajo en curso que permiten organizar, ejecutar y
            optimizar el desarrollo de proyectos de forma constante.
          </p>
        </div>

        <div className={styles.iconRight}>
          <img 
            src={iconGraph} 
            alt="Gráfico de progreso icon" 
            className={styles.sectionIcon} 
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;