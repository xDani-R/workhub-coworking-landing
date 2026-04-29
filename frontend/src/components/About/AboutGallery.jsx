import { Container, Row, Col } from "react-bootstrap";
import styles from "../../components/About/AboutGallery.module.css";
import g1 from "../../assets/img/About/galeria1.jpg";
import g2 from "../../assets/img/About/galeria2.jpg";
import g3 from "../../assets/img/About/galeria3.jpg";
import g4 from "../../assets/img/About/galeria4.jpg";
import g5 from "../../assets/img/About/galeria5.jpg";

const AboutGallery = () => {
  return (
    <section className={styles.gallerySection}>
      <Container fluid className={styles.container}>
        <Row className="mb-5 align-items-center">
          <Col md={6}>
            <h2 className={styles.title}>
              Roles que trabajan juntos por un mismo propósito
            </h2>
          </Col>
          <Col md={6}>
            <p className={styles.text}>
              Cada rol, cada decisión y cada detalle están pensados para que
              puedas trabajar, crear y conectar en un ambiente que inspira y
              potencia proyectos.
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          <Col md={5}>
            <img src={g1} className={styles.imgTall} alt="Gallery" />
          </Col>
          <Col md={7}>
            <Row className="g-4">
              <Col md={6}>
                <img src={g2} className={styles.imgSquare} alt="Gallery" />
              </Col>
              <Col md={6}>
                <img src={g4} className={styles.imgSquare} alt="Gallery" />
              </Col>
              <Col md={6}>
                <img src={g3} className={styles.imgWide} alt="Gallery" />
              </Col>
              <Col md={6}>
                <img src={g5} className={styles.imgSquare} alt="Gallery" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutGallery;
