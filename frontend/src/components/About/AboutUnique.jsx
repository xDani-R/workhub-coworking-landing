import { Container, Row, Col } from "react-bootstrap";
import style from "./AboutUnique.module.css";

const AboutUnique = () => {
    return (
        <section className={style.section}>
            <Container fluid className="p-0">
                <Row className="align-items-center">
                    <Col md={6}>
                        <h2 className={style.title}>
                            Qué hace único a nuestro equipo
                        </h2>
                    </Col>
                    <Col md={6}>
                        <p className={style.text}>
                            No solo definimos funciones. Construimos una cultura donde las personas son el eje de todo lo que hacemos.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutUnique;