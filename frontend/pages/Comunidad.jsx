import { useState, useEffect } from 'react';
import styles from './Comunidad.module.css';

const Comunidad = () => {
  // Carrusel del hero
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroImages = [
    '../src/assets/img/img_comunidad/imagen1.jpg',
    '../src/assets/img/img_comunidad/imagen2.jpg',
    '../src/assets/img/img_comunidad/imagen3.jpg',
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  const goToSlide = (index) => setCurrentIndex(index);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Carrusel de palabras para la tarjeta final
  const [wordIndex, setWordIndex] = useState(0);
  const words = ['experimentar', 'compartir', 'colaborar'];

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(wordInterval);
  }, []);

  return (
    <main className={styles.comunidad}>
      {/* Hero con carrusel */}
      <section className={styles.hero}>
        <div className={styles.carouselBackground}>
          {heroImages.map((img, idx) => (
            <div
              key={idx}
              className={`${styles.carouselSlideBg} ${idx === currentIndex ? styles.activeBg : ''}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          <button className={`${styles.heroCarouselBtn} ${styles.heroPrev}`} onClick={prevSlide}>❮</button>
          <button className={`${styles.heroCarouselBtn} ${styles.heroNext}`} onClick={nextSlide}>❯</button>
          <div className={styles.heroDots}>
            {heroImages.map((_, idx) => (
              <span key={idx} className={`${styles.heroDot} ${idx === currentIndex ? styles.heroActiveDot : ''}`} onClick={() => goToSlide(idx)} />
            ))}
          </div>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.container}>
            <p className={styles.heroSub}>Procesos, encuentros y trabajo en constante movimiento</p>
            <h1>
              <span className={styles.highlight}>Un ecosistema de ideas,</span>
              <br />
              <span className={styles.highlight}>talento y colaboración</span>
            </h1>
            <button className={styles.heroButton}>Reserva un espacio</button>
          </div>
        </div>
      </section>

      {/* Sección Comunidad con layout alternado */}
      <section className={styles.comunidadSection}>
        <div className={styles.container}>
          <h2 className={styles.comunidadTitle}>Comunidad</h2>
          <div className={styles.comunidadLayout}>
            <div className={styles.layoutRow}>
              <div className={styles.counterCard}>
                <div className={styles.counterNumber}>+60</div>
                <h3>Iniciativas activas</h3>
                <p>Talentos diversos creando y colaborando desde el espacio.</p>
              </div>
              <div className={styles.imagesPair}>
                <img src="../src/assets/img/img_comunidad/imagen4.jpg" alt="Comunidad 4" />
                <img src="../src/assets/img/img_comunidad/imagen5.jpg" alt="Comunidad 5" />
              </div>
            </div>
            <div className={styles.layoutRow}>
              <div className={styles.imagesPair}>
                <img src="../src/assets/img/img_comunidad/imagen6.jpg" alt="Comunidad 6" />
                <img src="../src/assets/img/img_comunidad/imagen7.jpg" alt="Comunidad 7" />
              </div>
              <div className={styles.counterCard}>
                <div className={styles.counterNumber}>+7</div>
                <h3>Talleres semanales</h3>
                <p>Encuentros que activan la práctica y el pensamiento creativo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarjeta morada: "El equipo que activa el ecosistema" */}
      <section className={styles.teamHeroSection}>
        <div className={styles.container}>
          <div className={styles.teamHeroCard}>
            <div className={styles.teamHeroGrid}>
              <h2 className={styles.teamHeroTitle}>El equipo que activa el ecosistema</h2>
              <p className={styles.teamHeroText}>
                Somos un grupo interdisciplinario que conecta oficios, creatividad y colaboración para hacer crecer la comunidad desde la práctica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cuatro tarjetas de habilidades */}
      <section className={styles.teamCardsSection}>
        <div className={styles.container}>
          <div className={styles.teamGrid}>
            <div className={styles.teamCard}>
              <div className={styles.cardIcon}>
                <img src="../src/assets/img/img_comunidad/generar.jpg" alt="Generar redes" />
              </div>
              <h3>Generar Redes</h3>
              <p>Promovemos la creación de conexiones significativas entre creativos, facilitando redes profesionales y colaboraciones.</p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.cardIcon}>
                <img src="../src/assets/img/img_comunidad/fomentar.jpg" alt="Fomentar creatividad" />
              </div>
              <h3>Fomentar la creatividad</h3>
              <p>Espacios inspiradores y talleres de arte y oficios prácticos diseñados para liberar tu potencial creativo.</p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.cardIcon}>
                <img src="../src/assets/img/img_comunidad/compartir.jpg" alt="Compartir habilidades" />
              </div>
              <h3>Compartir Habilidades</h3>
              <p>Talleres semanales donde se comparten conocimientos y se aprenden nuevas habilidades en una comunidad colaborativa.</p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.cardIcon}>
                <img src="../src/assets/img/img_comunidad/construir.jpg" alt="Construir comunidad" />
              </div>
              <h3>Construir Comunidad</h3>
              <p>Creamos un ecosistema inclusivo y vibrante donde los creativos se apoyan y crecen juntos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección "Un espacio para crear y compartir" */}
      <section className={styles.createShareSection}>
        <div className={styles.container}>
          <div className={styles.createShareGrid}>
            <div className={styles.createShareText}>
              <h2>Un espacio para crear y compartir</h2>
              <p>
                Nuestro coworking creativo va más allá de un espacio de trabajo. Es un ecosistema que reúne espacios inspiradores, talleres prácticos y experiencias colaborativas. Aquí convergen freelancers, emprendedores y artistas para aprender, compartir y potenciar sus procesos.
              </p>
              <p>
                Fomentamos el intercambio de ideas y conocimiento, creando un entorno donde conectar y desarrollarte.
              </p>
            </div>
            <div className={styles.createShareImages}>
              <img src="../src/assets/img/img_comunidad/imagen8.jpg" alt="Espacio creativo 1" />
              <img src="../src/assets/img/img_comunidad/imagen9.jpg" alt="Espacio creativo 2" />
            </div>
          </div>
        </div>
      </section>

      {/* Tarjeta final con carrusel de palabras */}
      <section className={styles.experimentCta}>
        <div className={styles.container}>
          <div className={styles.experimentCard}>
            <h2>
              Un espacio para{' '}
              <span className={styles.rotatingWord}>{words[wordIndex]}</span>{' '}
              en colectivo.
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Comunidad;