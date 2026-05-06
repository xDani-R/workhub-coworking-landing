import styles from './AboutBanner.module.css';

const AboutBanner = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.banner}>
        <div className={styles.left}>
          <h2>Qué hace único a nuestro equipo</h2>
        </div>
        <div className={styles.right}>
          <p className={styles.bold}>No solo definimos funciones.</p>
          <p className={styles.text}>Construimos una cultura donde las personas son el eje de todo lo que hacemos.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;