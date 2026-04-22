import { Container, Row, Col, Card } from "react-bootstrap";
import style from "./AboutCulture.module.css";

// Importa tus imágenes reales aquí
import img1 from "../../assets/img/culture1.jpg";
import img2 from "../../assets/img/culture2.jpg";
import img3 from "../../assets/img/culture3.jpg";
import img4 from "../../assets/img/culture4.jpg";

const cultureData = [
    { title: "Mirada interdisciplinaria", text: "Aportamos distintas habilidades y perspectivas para resolver juntos los desafíos complejos.", img: img1 },
    { title: "Comunicación", text: "Cultivamos el diálogo y la transparencia para tomar mejores decisiones como equipo.", img: img2 },
    { title: "Mirada int", text: "Aprendemos, iteramos y mejoramos constantemente nuestros procesos y servicios.", img: img3 },
    { title: "Vínculos", text: "Aportamos distintas habilidades y perspectivas para resolver juntos desafíos complejos.", img: img4 },
];

const AboutCulture = () => {
    return (
        <section className={style.section}>
            <Container fluid>
                <Row className="g-4"> {/* g-4 mantiene el espaciado uniforme entre cards */}
                    {cultureData.map((item, i) => (
                        <Col md={6} key={i}>
                            <Card className={style.card}>
                                {/* El contenedor de la imagen con tu aspect-ratio */}
                                <div className={style.image}>
                                    <img 
                                        src={item.img} 
                                        alt={item.title} 
                                        className={style.imgFluid} 
                                    />
                                </div>
                                <Card.Body className="p-0"> {/* p-0 asegura alineación con el borde de la imagen */}
                                    <h6 className={style.title}>{item.title}</h6>
                                    <p className={style.text}>{item.text}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default AboutCulture;