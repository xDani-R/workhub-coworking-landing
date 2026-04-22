import { Container, Row, Col, Card } from "react-bootstrap";
import style from "./AboutCulture.module.css";

const AboutCulture = () => {
    return (
        <section className={style.section}>
            <Container fluid className="px-md-5">
                <Row className="g-4">
                    <Col md={6} className="mb-3">
                        <Card className={style.card}>
                            <div className={style.image}>X - foto</div>

                            <Card.Body>
                                <h6 className={style.title}>Mirada interdisciplinaria</h6>
                                <p className={style.text}>Aportamos distintas habilidades y perspectivas para resolver juntos los desafios complejos.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="mb-3">
                        <Card className={style.card}>
                            <div className={style.image}>X - foto</div>

                            <Card.Body>
                                <h6 className={style.title}>Comunicación</h6>
                                <p className={style.text}>Cultivamos el diálogo y la transparencia para tomar mejores desiciones como equipo.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="mb-3">
                        <Card className={style.card}>
                            <div className={style.image}>X - foto</div>

                            <Card.Body>
                                <h6 className={style.title}>Mirada interdisciplinaria</h6>
                                <p className={style.text}>Aprendemos, iteramos y mejoramos constantemente nuestros procesos y servicios.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="mb-3">
                        <Card className={style.card}>
                            <div className={style.image}>X - foto</div>

                            <Card.Body>
                                <h6 className={style.title}>Vínculos</h6>
                                <p className={style.text}>Aportamos distintas habilidades y perspectivas para resolver juntos desafiós complejos.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </section>

    );
};

export default AboutCulture;