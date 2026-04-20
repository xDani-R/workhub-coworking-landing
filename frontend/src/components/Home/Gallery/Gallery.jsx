    import styles from '../Gallery/Gallery.module.css';

    import imgMeeting from '../../../assets/img/Salas y coworking/photo-1568992688065-536aad8a12f6.jpg';
    import imgTall from '../../../assets/img/tall gallery pic (1).jpg';
    import imgWorkshop from '../../../assets/img/Salas y coworking/premium_photo-1677087122965-5fe4c0d437a1.jpeg';
    import imgEmpty from '../../../assets/img/Salas y coworking/premium_photo-1677529495887-0f2735bf8f42.avif';

    const Gallery = () => {
    return (
        <section className={styles.customGalleryContainer}>

        {/* ── Texto superior ── */}
        <div className={styles.textBlockTop}>
            <h1>
            Una <span className={styles.upgradeLine}>comunidad</span> que se activa en el espacio
            </h1>
            <p>
            CoworkHub es un espacio donde las ideas se encuentran y las personas
            colaboran. Nuestras salas de trabajo, áreas abiertas y espacios para
            talleres están pensados para compartir procesos, generar conversaciones
            y activar proyectos en comunidad.
            </p>
        </div>

        {/* ── Grid de imágenes ── */}
        <div className={styles.galleryGrid}>

            <div className={styles.gridItem}>
            <img src={imgMeeting} alt="Meeting space" />
            </div>

            <div className={`${styles.gridItem} ${styles.tallImage}`}>
            <img src={imgTall} alt="Warehouse event" />
            </div>

            <div className={styles.gridItem}>
            <img src={imgWorkshop} alt="Workshop" />
            </div>

            <div className={`${styles.gridItem} ${styles.greyPlaceholder}`}>
            <img src={imgEmpty} alt="Empty space" />
            </div>

            <div className={`${styles.gridItem} ${styles.textBlockSide}`}>
            <h3>Un espacio para crear en conjunto</h3>
            <p>
                En WorkHub creemos que las mejores ideas nacen en comunidad. Por eso
                ofrecemos espacios flexibles que se adaptan a distintas formas de
                trabajar: desde reuniones privadas hasta instancias colaborativas.
                Ya sea que vengas a concentrarte, a conectar o a desarrollar tu
                proyecto, aquí encontrarás una red que impulsa tu crecimiento
                profesional y creativo.
            </p>
            </div>

        </div>
        </section>
    );
    };

    export default Gallery;