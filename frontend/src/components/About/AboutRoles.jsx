import { Container, Row, Col, Card } from "react-bootstrap";
import style from "./AboutRoles.module.css";

const roles = [
  {
    title: "Gestión central",
    text: "Coordinamos el funcionamiento diario, los recursos y el soporte para que el espacio esté siempre listo para recibir a nuestra comunidad. Gestionamos cada reserva y cada interación con la preción que exige un entorno profesional en crecimiento.",
  },
  {
    title: "Activación",
    text: "Diseñamos y producimos experiencias que inspiran, conectan y generan valor real para los miembros. Desde talleres hasta encuentros estratégicos, creamos la agenda que convierte u espacio de trabajo en un verdadero hub de colaboración.",
  },
  {
    title: "Entorno",
    text: "Cuidamos cada detalle del entorno físico y digital: los equipos, los servicios y la experiencia ambiental. Nuestro objetivo es ofrecer un espacio impecable, funcional y pensado para que los equipos puedan concentrarse en lo que realmente importa.",
  },
  {
    title: "Vínculos",
    text: "Construimos alianzas estratégicas con organizaciones, marcas e instituciones que amplían el ecosistema de WorkHub. Abrimos puertas, traemos recursos y generamos oportunidades que multiplican el impacto de nuestra comunidad.",
  },
];

const AboutRoles = () => {
  return (
    <section className={style.section}>
      <Container fluid className="px-md-5">
        <p className={style.tag}>CÓMO NOS ORGANIZAMOS</p>

        <h2 className={style.title}>
          Roles que trabajan juntos por un mismo propósito
        </h2>

        <Row>
          {roles.map((rol, i) => (
            <Col md={3} key={i}>
              <Card className={style.card}>
                <Card.Body>
                  <div className={style.icon}></div>
                  <h6 className={style.subtitle}>{rol.title}</h6>
                  <p className={style.text}>{rol.text}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AboutRoles;
