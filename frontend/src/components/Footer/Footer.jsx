import styles from '../Footer/Footer.module.css';
import logo from '../../assets/img/logo_coworkhub.png';

const columnas = [
  {
    id: 'que-es',
    titulo: 'Qué es WorkHub',
    links: ['Cowork diario', 'Comunidad creativa', 'Red colaborativa', 'Eventos interdisciplinarios'],
  },
  {
    id: 'como-funciona',
    titulo: 'Cómo funciona',
    links: ['Planes y membresías', 'Arriendo para talleres', 'Preguntas frecuentes'],
  },
  {
    id: 'team',
    titulo: 'WorkHub Team',
    links: ['Comunidad', 'Alianzas', 'Descarga Brochure'],
  },
];

const linksLegales = [
  'Política de privacidad',
  'Términos y condiciones',
  'Reglamento interno',
  'Seguridad',
];

const SubscribeForm = ({ mobile }) => (
  <div className={`${styles.footerSubscribe} ${mobile ? styles.footerSubscribeMobile : styles.footerSubscribeDesktop}`}>
    <p><strong>Comunidad en tu bandeja</strong></p>
    <div className={styles.subscribeForm}>
      <input type="email" placeholder="Suscríbete!" />
      <button type="button" className={styles.subscribeButton} aria-label="Suscribirse">→</button>
    </div>
    <p className={styles.subscribeDesc}>
      Ideas, talleres y encuentros para crear en red.<br />
      Sin ruido, solo contenido con sentido.
    </p>
  </div>
);

const Footer = () => {
  return (
    <footer className={styles.footer} id="Allfooter">
      <SubscribeForm mobile />
      <div className={styles.footerLogo} id="footer-logo">
        <img src={logo} height="100" alt="WorkHub logo" />
      </div>
      <div className={styles.footerGrid}>
        {columnas.map((col) => (
          <div key={col.id} className={styles.footerCol}>
            <ul>
              <li className="mb-2">
                <a href="#" className={`${styles.withoutlist1} ${styles.footerColTitle}`}>
                  {col.titulo}
                </a>
              </li>
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className={styles.withoutlist1}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <SubscribeForm />
      </div>
      <hr className={styles.rayita} id="rayita" />
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomLinks}>
          {linksLegales.map((link) => (
            <a key={link} href="#" className={styles.withoutlist1}>{link}</a>
          ))}
        </div>
        <span className={styles.footerCopyright}>
          ©2026 Workhub – Laboratorio creativo. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;