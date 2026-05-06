import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/img/logo_coworkhub_purple.png';

const Navbar = () => {
    const [visible, setVisible] = useState(true);
    const [prevScroll, setPrevScroll] = useState(0);
    const [usuario, setUsuario] = useState(null);

    // Leer usuario del localStorage al montar
    useEffect(() => {
        const usuarioGuardado = localStorage.getItem('usuario');
        if (usuarioGuardado) setUsuario(JSON.parse(usuarioGuardado));
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if (currentScroll > prevScroll && currentScroll > 80) {
                setVisible(false);
            } else {
                setVisible(true);
            }
            setPrevScroll(currentScroll);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScroll]);

    function handleLogout() {
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
        setUsuario(null);
        window.location.href = '/';
    }

    return (
        <header
            className={`navbar navbar-expand-lg fixed-top shadow-sm ${styles.navbarGlass} ${styles.scrollable} ${
                visible ? styles.navbarVisible : styles.navbarHidden
            }`}
        >
            <div className="container d-flex align-items-center">

                {/* Logo / Brand */}
                <a className={`navbar-brand d-flex align-items-center gap-2 ${styles.tituloNavbar}`} href="/">
                    <img src={logo} height="32" alt="WorkHub logo" />
                    <span className={styles.tituloNavbar}>
                        WorkHub
                        <span className="d-none d-md-inline"> - Laboratorio creativo</span>
                    </span>
                </a>

                {/* Botón hamburguesa (móvil) */}
                <button
                    className="navbar-toggler ms-auto"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarPrincipal"
                    aria-controls="navbarPrincipal"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Links de navegación */}
                <nav className="collapse navbar-collapse" id="navbarPrincipal">
                    <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-2 ${styles.listaNave}`}>
                        <li className="nav-item">
                            <a className="nav-link" href="/nosotros">Quiénes Somos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/comunidad">Comunidad</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/espacios">Espacios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/beneficios">Beneficios</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.btnReserva}`} href="/reservas">
                                Reservas
                            </a>
                        </li>

                        {/* Botón dinámico login/logout */}
                        <li className="nav-item">
                            {usuario ? (
                                <button
                                    className={`nav-link ${styles.btnReserva}`}
                                    onClick={handleLogout}
                                >
                                    Cerrar sesión
                                </button>
                            ) : (
                                <a className={`nav-link ${styles.btnReserva}`} href="/login">
                                    Iniciar sesión
                                </a>
                            )}
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;