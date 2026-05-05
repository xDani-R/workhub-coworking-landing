import { Container, Row, Col } from "react-bootstrap";
import styles from "./AboutArchitecture.module.css";
import iconGestion from "../../assets/img/About/icon/configuraciones 1.png";
import iconActivacion from "../../assets/img/About/icon/encendiendo 1.png";
import iconEntorno from "../../assets/img/About/icon/plantando 1.png";
import iconVinculos from "../../assets/img/About/icon/enlace 1.png";

const cards = [
  {
    t: "Gestión central",
    d: "Coordinamos el funcionamiento diario, los recursos y el soporte para que el espacio esté siempre listo para recibir a nuestra comunidad. Gestionamos cada reserva y cada interacción con la precisión que exige un entorno profesional en crecimiento.",
    i: iconGestion,
    c: "#E0E8EF",
  },
  {
    t: "Activación",
    d: "Diseñamos y gestionamos experiencias que inspiran, conectan y generan valor real para los miembros. Desde talleres hasta encuentros estratégicos, creamos la agenda que convierte un espacio de trabajo en un verdadero hub de colaboración.",
    i: iconActivacion,
    c: "#FEFFEF",
  },
  {
    t: "Entorno",
    d: "Cuidamos cada detalle del entorno físico y digital: los equipos, los servicios y la experiencia ambiental. Nuestro objetivo es ofrecer un espacio impecable, funcional y pensado para que los equipos puedan concentrarse en en lo que realmente importa.",
    i: iconEntorno,
    c: "#EEECE7",
  },
  {
    t: "Vínculos",
    d: "Construimos alianzas estratégicas con organizaciones, marcas e instituciones que amplían el ecosistema de WorkHub. Abrimos puertas, traemos recursos y generamos oportunidades que multiplican el impacto de nuestra comunidad.",
    i: iconVinculos,
    c: "#E6D5F8",
  },
];

const AboutArchitecture = () => {
  return (
    <section className={styles.section}>
      <Container fluid className={styles.container}>
        <h2 className={styles.mainTitle}>Arquitectura colaborativa</h2>
        <p className={styles.mainDesc}>
          Nuestra arquitectura colaborativa se construye a partir de múltiples
          capas de acción que dialogan entre si. Así, cada área no solo cumple
          una función. sino que activa relaciones, cruces y procesos que
          sostienen el movimiento del proyecto.
        </p>
        <Row className="g-4">
          {cards.map((item, idx) => (
            <Col md={3} key={idx}>
              <div className={styles.card} style={{ backgroundColor: item.c }}>
                <div className={styles.iconContainer}>
                  <img src={item.i} alt={item.t} className={styles.cardIcon} />
                </div>
                <h4 className={styles.cardTitle}>{item.t}</h4>
                <p className={styles.cardText}>{item.d}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AboutArchitecture;