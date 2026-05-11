import { useState } from "react";
import ServiceCards from "../../src/components/Beneficios/ServiceCard/ServiceCard";
import SearchAndFilter from "../../src/components/Beneficios/SearchAndFilter/SearchAndFilter";
import "./Beneficios.css"
import image002 from '../../src/assets/img/002.png'
import Box_small from "../../src/components/Beneficios/Box_small/Box_small";
import Boxincolumn from "../../src/components/Beneficios/Box_in_column/Boxincolumn";
import Beneficioactivo from "../../src/assets/page_section_fernando/primer item/beneficio activo.png"
import Aliados from "../../src/assets/page_section_fernando/primer item/aliados del sist.png"
import Insignia from "../../src/assets/page_section_fernando/primer item/insignia.png"
import Corazon from "../../src/assets/page_section_fernando/primer item/pensado comunidad.png"
import Aprendizaje from "../../src/assets/page_section_fernando/mas que beneficios/aprendizaje_1.png"
import Comunidad from "../../src/assets/page_section_fernando/mas que beneficios/comunidad_2.png"
import Oportunidades from "../../src/assets/page_section_fernando/mas que beneficios/oportunidade_4.png"
import Visibilidad from "../../src/assets/page_section_fernando/mas que beneficios/visibilidad_3.png"
import Hojablanca from "../../src/assets/page_section_fernando/segundo item_barra/hoja_blanca.png"
import Meditacion from "../../src/assets/page_section_fernando/Meditation.jpg"
import laurel from "../../src/assets/page_section_fernando/todos los beneficios/salud_1.png"
import taller from "../../src/assets/page_section_fernando/todos los beneficios/educacion_2.png"
import cafe from "../../src/assets/page_section_fernando/todos los beneficios/vida_3.png"
import inversion from "../../src/assets/page_section_fernando/todos los beneficios/finanzas_04.png"
import red from "../../src/assets/page_section_fernando/todos los beneficios/red_5.png"
import chequeo from "../../src/assets/page_section_fernando/todos los beneficios/salud_06.png"


const Beneficios = () => {
    const [busqueda, setBusqueda] = useState("");
    const [categoriaActiva, setCategoriaActiva] = useState("Todas");

    const cards = [
        {
            id: 1,
            image: laurel,
            tag: "SALUD",
            title: "Plan de bienestar integral",
            description: "Sesiones de mindfulness, meditación guiada y acceso a red de especialistas con tarifas para socios.",
            status: "Sonicdrop →"
        },
        {
            id: 2,
            image: taller,
            tag: "EDUCACIÓN",
            title: "Talleres de diseño y prototipado",
            description: "Aprendizaje hands-on con facilitadores de la industria. Precio especial para miembros del ecosistema.",
            status: "Tipo Escuela →"
        },
        {
            id: 3,
            image: cafe,
            tag: "VIDA",
            title: "Descuento en cafés aliados",
            description: "Cafeterías y restaurantes cercanos con descuentos exclusivos para socios WorkHub.",
            status: "Red Gastro →"
        },
        {
            id: 4,
            image: inversion,
            tag: "FINANZAS",
            title: "Inversión simple para freelancers",
            description: "Empieza a invertir desde $1.000 con Fintual, sin comisiones de entrada para socios de WorkHub.",
            status: "Fintual →"
        },
        {
            id: 5,
            image: red,
            tag: "RED",
            title: "Acceso a comunidades creativas",
            description: "Conecta con +600 profesionales de otras ciudades a través de alianzas con otros ecosistemas colaborativos.",
            status: "WorkHub Network →"
        },
        {
            id: 6,
            image: chequeo,
            tag: "SALUD",
            title: "Chequeo médico preventivo",
            description: "Exámenes preventivos con clínicas aliadas a precio preferencial para freelancers sin seguro colectivo.",
            status: "Sonicdrop →"
        }
    ];

    const categorias = [...new Set(cards.map((c) => c.tag))];

    const cardsFiltradas = cards
    .filter((card) =>
        card.title.toLowerCase().includes(busqueda.toLowerCase()) ||
        card.description.toLowerCase().includes(busqueda.toLowerCase()) ||
        card.status.toLowerCase().includes(busqueda.toLowerCase()) // ← AGREGA ESTA LÍNEA
    )
    .filter((card) =>
        categoriaActiva === "Todas" ? true : card.tag === categoriaActiva
    );

    return (
        <>
            <SearchAndFilter 
                        busqueda={busqueda}
                        setBusqueda={setBusqueda}
                        categoriaActiva={categoriaActiva}
                        setCategoriaActiva={setCategoriaActiva}
                        categorias={categorias}
                    />
            <div className="container-welcome">
                <div style={{ paddingRight: '200px'}}>
                    <p className="pop" style={{ color: '#643278'}}>comunidad</p>
                    <h1 style={{ fontWeight: 700 }}>Beneficios para quienes <purple>construyen</purple> el colectivo</h1>
                    <p>Descuentos, acceso y experiencias exclusivas diseñadas para las socias y socios del ecosistema WorkHub.</p>
                    <button style={{ type: "button", position: 'relative', zIndex: 1, color: '#FFFFFF', whiteSpace: 'pre-wrap' }} className="Button-container btn btn-light">Conoce todos los beneficios     →</button>
                </div>
                <img className="welcome-image" src={image002} alt="Imagen 002" />
            </div>
            <div className="containerbox" style={{ position: 'relative', 
    zIndex: 10, }}>
                <Box_small 
                    image={Beneficioactivo}
                    alt="Imagen 2to2"
                    title="+34"
                    description="Beneficios activos"
                />
                <div className="vr"/>
                <Box_small 
                    image={Aliados}
                    alt="Imagen 2to2"
                    title="12"
                    description="Aliados del ecosistema"
                />
                <div className="vr"/>
                <Box_small 
                    image={Insignia}
                    alt="Imagen 2to2"
                    title="3"
                    description="Nuevos este mes"
                />
                <div className="vr"/>
                <Box_small 
                    image={Corazon}
                    alt="Imagen 2to2"
                    title="100%"
                    description="Creados para la comunidad"
                />
            </div>
            <div className="container-welcome" style={{ padding: '0px', borderRadius: '20px', overflow: 'hidden' }}>
                <div className="welcome2textpart">
                    <p className="pop" style={{ backgroundColor: '#643278', color: '#FFFFFF' }}>Destacado</p>
                    <h1>Cuidate mientras construyes tu proyecto</h1>
                    <p>Accede a sesiones de mindfulness, chequeos médicos y talleres de salud mental pensados especialmente para freelancers y emprendedores</p>
                    <br/>
                    <div className="bar-welcome-footer">
                        <img className="icon" src={Hojablanca} alt="Icono" />
                        <div>
                            <h5>Sonicdrop</h5>
                            <h6 style={{ color: '#b3b3b3' }}>Salud & Bienestar</h6>
                        </div>
                        <button style={{ type: "button" }, { border: '1px solid #D1D1D1', whiteSpace: 'pre-wrap' }} className="Button-container btn btn-light"><darkpurple>Ver beneficio     →</darkpurple></button>
                    </div> 
                </div>
                <img className="welcome-image2" style={{ padding: '0px' }} src={Meditacion} alt="Imagen 002" />
            </div>
            <div className="beneficios-container">
                <h1 className="titlebeneficios">Todos los beneficios</h1>
                <div className="row gy-5">
                    {cardsFiltradas.map((card) => (
                        <div key={card.id} className="col-12 col-md-6 col-lg-4">
                            <ServiceCards {...card} onVerDetalles={() => {}} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="container-footer">
                <div className="graypart col-4">
                    <h1 className="title-footer">Más que beneficios somos un <purple>ecosistema</purple></h1>
                    <p className="subtitle-footer">Cada beneficio está diseñado para impulsar tu crecimiento personal, profesional y creativo.</p>
                </div>
                <div className="cardsfooterpart col-8">
                    <Boxincolumn 
                        image={Aprendizaje}
                        alt="Imagen 2to2"
                        title="Aprendizaje"
                        description="Formación continua para potenciar tus habilidades."
                    />
                    <Boxincolumn 
                        image={Comunidad}
                        alt="Imagen 2to2"
                        title="Comunidad"
                        description="Conexiones reales que abren puertas y generan colaboraciones. "
                    />
                    <Boxincolumn 
                        image={Visibilidad}
                        alt="Imagen 2to2"
                        title="Visibilidad"
                        description="Espacios para mostrar tu trabajo y crecer en red."
                    />
                    <Boxincolumn 
                        image={Oportunidades}
                        alt="Imagen 2to2"
                        title="Oportunidades"
                        description="Acceso a proyectos, eventos y alianzas exclusivas."
                    />
                </div>
            </div>
        </>
    )
}

export default Beneficios