    import { useState, useEffect, useRef } from 'react';
    import styles from './Hero.module.css';

    const slides = [
    {
        id: 'c-element-one',
        itemClass: styles.carrouselItemOne,
        tag: 'EL LUGAR DONDE LAS IDEAS CRECEN',
        title: <>Deja el café de casa. <br /> Únete a nuestra comunidad.</>,
        btnText: 'RESERVAR',
        btnTarget: 'form-section',
    },
    {
        id: 'c-element-two',
        itemClass: styles.carrouselItemTwo,
        tag: 'AMBIENTES QUE INSPIRAN',
        title: <>Salas privadas y espacios<br />abiertos para colaborar.</>,
        btnText: 'VER ESPACIOS',
        btnTarget: 'gallery-section',
    },
    {
        id: 'c-element-three',
        itemClass: styles.carrouselItemThree,
        tag: 'NETWORKING REAL',
        title: <>Conecta con profesionales<br />que piensan como tú.</>,
        btnText: 'CONOCER MÁS',
        btnTarget: 'aboutus-section',
    },
    ];

    const Hero = () => {
    const [current, setCurrent] = useState(0);
    const intervalRef = useRef(null);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const goTo = (index) => {
        setCurrent((index + slides.length) % slides.length);
    };

    const next = () => goTo(current + 1);
    const prev = () => goTo(current - 1);

    // Autoplay cada 5 segundos
    useEffect(() => {
        intervalRef.current = setInterval(next, 5000);
        return () => clearInterval(intervalRef.current);
    }, [current]);

    return (
        <section className={styles.carrousel}>

        {/* ── Slides ── */}
        <div className={styles.carrouselElementsDiv} id="carrousel">
            {slides.map((slide, index) => (
            <div
                key={slide.id}
                id={slide.id}
                className={`${styles.carrouselItem} ${slide.itemClass} ${index === current ? styles.active : ''}`}
            >
                <div className={styles.carrouselBody}>
                <p>{slide.tag}</p>
                <h1>{slide.title}</h1>
                <button onClick={() => scrollTo(slide.btnTarget)}>
                    {slide.btnText}
                </button>
                </div>
            </div>
            ))}
        </div>

        {/* ── Controles ── */}
        <div className={styles.carrouselControllers}>

            {/* Bullets */}
            <div className={styles.selectButtonsDiv}>
            {slides.map((_, index) => (
                <button
                key={index}
                className={`${styles.circleButton} ${index === current ? styles.active : ''}`}
                onClick={() => goTo(index)}
                aria-label={`Slide ${index + 1}`}
                />
            ))}
            </div>

        </div>
        </section>
    );
    };

    export default Hero;