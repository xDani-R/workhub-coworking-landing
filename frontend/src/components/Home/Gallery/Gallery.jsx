import styles from '../Gallery/Gallery.module.css';

import imgMeeting from '../../../assets/img/wide gallery pic (1).jpg';
import imgEmpty from '../../../assets/img/wide gallery pic (5).jpg';
import imgTall from '../../../assets/img/tall gallery pic (1).jpg';


const Gallery = () => {
  return (
    <section className={styles.customGalleryContainer}>

      <div className={styles.galleryGrid}>

        {/* ── Texto superior ── */}
        <div className={styles.textBlockTop}>
          <h1>
            Una <span className={styles.upgradeLine}>comunidad</span> que <br />
            se activa en el <br />
            espacio
          </h1>
          <p>
            CoworkHub es un espacio donde las <br />ideas se encuentran y las personas<br />
            colaboran. Nuestras salas de trabajo,<br /> áreas abiertas y espacios para <br />
            talleres están pensados para <br />compartir procesos, generar<br /> conversaciones
            y activar proyectos<br /> en comunidad.
          </p>
        </div>

        <div className={styles.gridItem}>
          <img src={imgMeeting} alt="Meeting space" />
        </div>

        <div className={`${styles.gridItem} ${styles.tallImage}`}>
          <img src={imgTall} alt="Warehouse event" />
        </div>

        <div className={`${styles.gridItem} ${styles.greyPlaceholder}`}>
          <img src={imgEmpty} alt="Empty space" />
        </div>

        <div className={`${styles.gridItem} ${styles.textBlockSide}`}>
          <h3>Un espacio para crear en conjunto</h3>
          <p>
            En WorkHub creemos que las mejores<br /> ideas nacen en comunidad. Por eso<br />
            ofrecemos espacios flexibles que se <br />adaptan a distintas formas de
            trabajar:<br /> desde reuniones privadas hasta instancias colaborativas.<br />
            Ya sea que vengas a concentrarte, a <br />conectar o desarrollar tu
            proyecto,<br /> aquí encontrarás una red que impulsa<br /> tu crecimiento
            profesional y creativo.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Gallery;