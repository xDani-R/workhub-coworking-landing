import { useState, useEffect } from 'react';
import styles from './Espacios.module.css';

const Espacios = () => {
  // Carrusel del hero
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroImages = [
    '/src/assets/img/img_espacios/hero_espacio_1.jpg',
    '/src/assets/img/img_espacios/hero_espacio_2.jpg',
    '/src/assets/img/img_espacios/hero_espacio_3.jpg',
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  const goToSlide = (index) => setCurrentIndex(index);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Datos de las sedes
  const sedes = [
    {
      id: 1,
      nombre: 'Peñalolén',
      titulo: 'Comunidad que crece desde lo local',
      descripcion: 'Un espacio cercano y activo, donde la colaboración surge de forma natural. Ideal para quienes buscan conectarse, compartir y construir en comunidad.',
      image: '/src/assets/img/img_espacios/sede_penalolen.jpg',
      colorBorde: '#DEF093',
      colorBoton: '#A1AE6A',
      quePasaAqui: ['Cobertura de servicios', 'Acceso físico', 'Usuario único'],
      queContiene: ['Base completa', 'Sistema de gestión', 'Equipos de acceso'],
      imagePosition: 'left',
      circleIcon: '/src/assets/img/img_espacios/planta.png',
      circleColor: '#DEF093',
      circleOffset: { top: '25px', right: '25px' }
    },
    {
      id: 2,
      nombre: 'La Reina',
      titulo: 'Equilibrio entre foco y conexión',
      descripcion: 'Un entorno personalizado para avanzar con claridad, sin perder el vínculo con otros. Aquí la productividad convive con la colaboración.',
      image: '/src/assets/img/img_espacios/sede_lareina.jpg',
      colorBorde: '#F3CD6D',
      colorBoton: '#F3CD6D',
      quePasaAqui: ['Trabajar en equipo.', 'Desarrollar habilidades.', 'Participar activamente.', 'Proporcionar valor.'],
      queContiene: ['Equipo de trabajo.', 'Sesión de trabajo.', 'Comunicación efectiva.', 'Respeto mutuo.', 'Valoración colectiva.'],
      imagePosition: 'right',
      circleIcon: '/src/assets/img/img_espacios/ubicacion.png',
      circleColor: '#F3CD6D',
      circleOffset: { top: '25px', left: '455px' }
    },
    {
      id: 3,
      nombre: 'Ñuñoa',
      titulo: 'Creatividad constante',
      descripcion: 'Un espacio dinámico donde las ideas circulan y los proyectos evolucionan. Perfecto para perfiles creativos y equipos en expansión.',
      image: '/src/assets/img/img_espacios/sede_nunoa.jpg',
      colorBorde: '#8D65B8',
      colorBoton: '#8A66B0',
      quePasaAqui: ['Trabajo en equipo.', 'Creatividad.', 'Innovación.', 'Experiencia.', 'Conocimiento.'],
      queContiene: ['Técnicas de trabajo.', 'Experiencias personales.', 'Niveles de compromiso.', 'Aprendizaje continuo.'],
      imagePosition: 'left',
      circleIcon: '/src/assets/img/img_espacios/asterisco.png',
      circleColor: '#8A66B0',
      circleOffset: { top: '25px', right: '25px' }
    }
  ];

  return (
    <main className={styles.exploraEspacio}>
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
              <span 
                key={idx} 
                className={`${styles.heroDot} ${idx === currentIndex ? styles.heroActiveDot : ''}`} 
                onClick={() => goToSlide(idx)} 
              />
            ))}
          </div>
        </div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.container}>
            <p className={styles.heroSub}>Explora el espacio</p>
            <h1 className={styles.heroTitle}>
              Cada sede, una forma de crear y conectar
            </h1>
            <p className={styles.heroText}>
              En WorkHub cada espacio tiene su propia energia, pero todos forman parte del mismo ecosistema creativo y colaborativo.
            </p>
          </div>
        </div>
      </section>

            {/* Espacio interdisciplinario - Tarjeta con 3 columnas */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          {/* Tarjeta primero */}
          <div className={styles.introCard}>
            {/* Columna 1 - Logo */}
            <div className={styles.introColLogo}>
              <img src="/src/assets/img/img_espacios/logo_cowork.png" alt="Logo WorkHub" />
            </div>
            
            {/* Columna 2 - Título */}
            <div className={styles.introColTitle}>
              <h3>Un solo ecosistema, múltiples formas de habitarlo</h3>
            </div>
            
            {/* Columna 3 - Texto */}
            <div className={styles.introColText}>
              <p>
                No trabajamos en espacios aislados. Creamos entornos, donde las personas, 
                los proyectos u oportunidades se cruzan constantemente.
              </p>
            </div>
          </div>
          {/* Título debajo de la tarjeta */}
          <h2 className={styles.introTitle}>Espacio interdisciplinario</h2>
        </div>
      </section>

      {/* Sección de Sedes */}
      <section className={styles.sedesSection}>
        <div className={styles.container}>
          {sedes.map((sede) => (
            <div 
              key={sede.id} 
              className={`${styles.sedeCard} ${sede.imagePosition === 'right' ? styles.sedeCardReverse : ''}`}
              style={{ borderColor: sede.colorBorde }}
            >
              {/* Círculo decorativo */}
              <div 
                className={styles.sedeCircle}
                style={{ 
                  backgroundColor: sede.circleColor,
                  position: 'absolute',
                  ...sede.circleOffset
                }}
              >
                <img src={sede.circleIcon} alt="Icono" />
              </div>
              
              <div className={styles.sedeImage}>
                <img src={sede.image} alt={`Sede ${sede.nombre}`} />
              </div>
              <div className={styles.sedeContent}>
                <span className={styles.sedeNombre}>{sede.nombre}</span>
                <h3 className={styles.sedeTitulo}>{sede.titulo}</h3>
                <p className={styles.sedeDescripcion}>{sede.descripcion}</p>
                <div className={styles.sedeDetalles}>
                  <div className={styles.detalleCol}>
                    <h4>QUÉ PASA AQUÍ</h4>
                    <ul>
                      {sede.quePasaAqui.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.detalleCol}>
                    <h4>QUÉ CONTIENE</h4>
                    <ul>
                      {sede.queContiene.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button 
                  className={styles.conoceMasBtn}
                  style={{ backgroundColor: sede.colorBoton }}
                >
                  Conoce más de {sede.nombre}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA - Encuentra tu lugar */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaGrid}>
            {/* Lado izquierdo - Título y botón */}
            <div className={styles.ctaLeft}>
              <h2 className={styles.ctaTitle}>Encuentra tu lugar dentro de la comunidad</h2>
              <button className={styles.ctaButton}>Contáctanos</button>
            </div>
            
            {/* Lado derecho - Círculos con nombres y líneas conectoras */}
            <div className={styles.ctaRight}>
              <svg className={styles.curvedLines} viewBox="0 0 500 250" preserveAspectRatio="none">
                {/* Línea curva del círculo 1 (WorkHub) al 2 (Peñalolén) */}
                <path 
                  d="M 40 180 Q 120 40, 180 180" 
                  fill="none" 
                  stroke="#C59BD7" 
                  strokeWidth="2" 
                  strokeDasharray="6,6"
                />
                {/* Línea curva del círculo 1 (WorkHub) al 3 (La Reina) */}
                <path 
                  d="M 40 180 Q 120 40, 290 160" 
                  fill="none" 
                  stroke="#C59BD7" 
                  strokeWidth="2" 
                  strokeDasharray="6,6"
                />
                {/* Línea curva del círculo 1 (WorkHub) al 4 (Ñuñoa) */}
                <path 
                  d="M 40 180 Q 120 40, 410 160" 
                  fill="none" 
                  stroke="#C59BD7" 
                  strokeWidth="2" 
                  strokeDasharray="6,6"
                />
              </svg>
              
              <div className={styles.ctaCircleItem} style={{ marginTop: '60px' }}>
                <div className={styles.ctaCircle} style={{ backgroundColor: '#8A66B0' }}>
                  <img src="/src/assets/img/img_espacios/logo_cowork.png" alt="Logo" className={styles.ctaCircleImg} />
                </div>
                <span className={styles.ctaCircleLabel}>WorkHub</span>
              </div>
              
              <div className={styles.ctaCircleItem} style={{ marginTop: '20px' }}>
                <div className={styles.ctaCircle} style={{ backgroundColor: '#C9D975' }}>
                  <img src="/src/assets/img/img_espacios/planta.png" alt="Planta" className={styles.ctaCircleImg} />
                </div>
                <span className={styles.ctaCircleLabel}>Peñalolén</span>
              </div>
              
              <div className={styles.ctaCircleItem} style={{ marginTop: '10px' }}>
                <div className={styles.ctaCircle} style={{ backgroundColor: '#F3CD6E' }}>
                  <img src="/src/assets/img/img_espacios/ubicacion.png" alt="Ubicación" className={styles.ctaCircleImg} />
                </div>
                <span className={styles.ctaCircleLabel}>La Reina</span>
              </div>
              
              <div className={styles.ctaCircleItem} style={{ marginTop: '0px' }}>
                <div className={styles.ctaCircle} style={{ backgroundColor: '#B6B7E4' }}>
                  <img src="/src/assets/img/img_espacios/asterisco.png" alt="Asterisco" className={styles.ctaCircleImg} />
                </div>
                <span className={styles.ctaCircleLabel}>Ñuñoa</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Espacios;