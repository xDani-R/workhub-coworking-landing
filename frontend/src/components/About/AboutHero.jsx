import { Container, Row, Col } from "react-bootstrap";
import styles from "./AboutHero.module.css";
import teamImg from "../../assets/img/team.png"

const AboutHero = () => {
    return (
        <section className={styles.hero}>
            <Container>
                <Row className="align-items-center">

                    <Col md={6}>
                    <p className={styles.tag}>QUIÉNES SOMOS</p>

                    <h1 className={styles.title}> 
                        El equipo que activa WorkHub
                    </h1>

                    <p className={styles.text}>
                        Somos un grupo interdiciplinario que conecta oficios, creatividad y colaboración para hacer crecer la comunidad desde la práctica.
                    </p>

                    <div className={styles.features}>
                        <span>Personas compromentidas</span>
                        <span>Trabajo colaborativo</span>
                        <span>Pasión</span>
                    </div>
                    </Col>

                    <Col md={6}>
                        <img src={teamImg} className={`img-fluid ${styles.image}`} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutHero;