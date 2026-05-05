import { Container, Row, Col } from "react-bootstrap";
import styles from "./AboutHighlight.module.css"

const AboutHighlight = () => {
    return (
        <section className={styles.highlight}>
            <Container>
                <Row className="align-items-center">

                    <Col md={2}>
                    <div className={styles.iconBox}></div>
                    </Col>

                    <Col md={5}>
                    <h4 className={styles.title}>
                        Personas que conectan y dan vida al espacio
                    </h4>
                    </Col>

                    <Col md={5}>
                    <p className={styles.text}>
                        Cada rol, cada decisión y cada detalle están pensados para inspirar trabajo y colaboración.
                    </p>
                    </Col>
                    
                </Row>
            </Container>
        </section>
    );
};

export default AboutHighlight;