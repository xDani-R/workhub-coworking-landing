import { useState } from "react";
import ServiceCards from "../../src/components/Beneficios/ServiceCard/ServiceCard";
import SearchAndFilter from "../../src/components/Beneficios/SearchAndFilter/SearchAndFilter";
import "./Beneficios.css"
import image002 from '../../src/assets/img/002.png'
import image003 from '../../src/assets/img/003.png'
import imagecollege from '../../src/assets/img/Sala 7.jpg'
import imagecowork from '../../src/assets/img/Sala 5.jpg'
import imageciber from '../../src/assets/img/wide gallery pic (6).jpg'
import imageevent from '../../src/assets/img/Salas y coworking/premium_photo-1677529495887-0f2735bf8f42.avif'
import imagesport from '../../src/assets/img/Salas y coworking/redd-francisco-rt1R5wtY31Q-unsplash.jpg'

const Beneficios = () => {
    const [busqueda, setBusqueda] = useState("");
    const [categoriaActiva, setCategoriaActiva] = useState("Todas");

    const cards = [
        {
            id: 1,
            image: imagesport,
            tag: "#Salud",
            title: "Espacio deportivo",
            description: "Acondicionada, incluye piso de goma y equipamiento básico",
            status: "En línea"
        },
        {
            id: 2,
            image: imagecollege,
            tag: "#Educación",
            title: "Espacio college",
            description: "Salón con pizarra y proyector",
            status: "Disponible"
        },
        {
            id: 3,
            image: imageciber,
            tag: "#Tecnología",
            title: "Espacio cibercafé",
            description: "Sillas ergonómicas con computadoras de gama media alta y conexión a internet de alta velocidad",
            status: "Disponible"
        },
        {
            id: 4,
            image: imagecowork,
            tag: "#Negocios",
            title: "Espacio de Juntas",
            description: "Salón de reuniones, un ambiente acogedor, cuenta con servicio de catering.",
            status: "Disponible"
        },
        {
            id: 5,
            image: image002,
            tag: "#Negocios",
            title: "Espacio de eventos",
            description: "Sala multiusos, grande y versátil, cuenta con múltiples muebles de fácil reconfiguración",
            status: "Disponible"
        },
        {
            id: 6,
            image: imageevent,
            tag: "#Salud",
            title: "Espacio al aire libre",
            description: "Con hermosa vista y calefacción",
            status: "Disponible"
        }
    ];

    const categorias = [...new Set(cards.map((c) => c.tag))];

    const cardsFiltradas = cards
        .filter((card) =>
            card.title.toLowerCase().includes(busqueda.toLowerCase()) ||
            card.description.toLowerCase().includes(busqueda.toLowerCase())
        )
        .filter((card) =>
            categoriaActiva === "Todas" ? true : card.tag === categoriaActiva
        );

    return (
        <>
            <div className="container-welcome">
                <h2 style={{ fontWeight: 'normal' }}>[Comunidad]</h2>
                <h1>Beneficios</h1>
                <p>Descubre descuentos exclusivos y ofertas especiales de nuestro socios.</p>
            </div>
            <SearchAndFilter 
                    busqueda={busqueda}
                    setBusqueda={setBusqueda}
                    categoriaActiva={categoriaActiva}
                    setCategoriaActiva={setCategoriaActiva}
                    categorias={categorias}
                />
            <div className="beneficios-container">
                <div className="row gy-2 justify-content-center">
                    {cardsFiltradas.map((card) => (
                        <div key={card.id} className="col-12 col-md-6 col-lg-6">
                            <ServiceCards {...card} onVerDetalles={() => {}} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Beneficios