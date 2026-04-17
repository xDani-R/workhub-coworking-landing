import { Container, Row, Col } from "react-bootstrap";
import style from "./AboutPurpose.module.css";

const AboutPurpose = () => {
    return (
        <section className={style.section}>
            <Container>
                <Row>
                    <Col md={4}>
                        <h4>Nuestro propósito compartido</h4>
                        </Col>

                        <Col md={8}>
                        <p>
                            Cada rol, cada desición y cada detalle están pensados para que puedas trabajar, crear y conectar en un ambiente que inspira y potencia proyectos.
                        </p>

                        <div className={style.values}>
                            <span>Impulsamos talento</span>
                            <span>|</span>
                            <span>Fomentamos comunidad</span>
                            <span>|</span>
                            <span>Creamos impacto</span>
                        </div>
                    </Col>
                </Row>

            </Container>
        </section>
    );
};

export default AboutPurpose;