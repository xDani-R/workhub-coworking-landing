    import { useState } from 'react';
    import styles from './Login.module.css';
    import logo from '../../src/assets/img/logo_coworkhub.png';
    const LogoIcon = () => (
    <img src={logo} alt="logo" className={styles.logoIcon} />
    );

    /* ================================
    HELPERS DE VALIDACIÓN
    ================================ */

    const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    /* ================================
    COMPONENTE
    ================================ */

    const Login = () => {
    const [form, setForm] = useState({
        correo:     '',
        contrasena: '',
    });

    const [errors,   setErrors]   = useState({});
    const [touched,  setTouched]  = useState({});
    const [loading,  setLoading]  = useState(false);
    const [apiError, setApiError] = useState('');

    /* ── Actualizar campo ── */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setApiError('');
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    /* ── Blur ── */
    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        setErrors((prev) => ({ ...prev, ...getFieldError(name, form) }));
    };

    /* ── Validación por campo ── */
    const getFieldError = (name, f) => {
        switch (name) {
        case 'correo':
            if (!f.correo)               return { correo: 'El correo es requerido.' };
            if (!isValidEmail(f.correo)) return { correo: 'Ingresa un correo válido.' };
            return { correo: undefined };
        case 'contrasena':
            if (!f.contrasena) return { contrasena: 'La contraseña es requerida.' };
            return { contrasena: undefined };
        default:
            return {};
        }
    };

    /* ── Validar todos ── */
    const validateAll = () => {
        const allFields = Object.keys(form);
        setTouched(allFields.reduce((acc, k) => ({ ...acc, [k]: true }), {}));
        const allErrors = {};
        allFields.forEach((name) => {
        const partial = getFieldError(name, form);
        const key = Object.keys(partial)[0];
        if (partial[key]) allErrors[key] = partial[key];
        });
        setErrors(allErrors);
        return allErrors;
    };

    /* ── Submit → llamada al backend ── */
    const handleSubmit = async (e) => {
        e.preventDefault();

        const allErrors = validateAll();
        if (Object.keys(allErrors).length > 0) return;

        setLoading(true);
        setApiError('');

        try {
        const response = await fetch('http://localhost:3001/usuarios/login', {
            method : 'POST',
            headers: { 'Content-Type': 'application/json' },
            body   : JSON.stringify({
            correo    : form.correo,
            contrasena: form.contrasena,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            // 401 → "Credenciales inválidas" (no revelar cuál campo falló)
            setApiError(data.mensaje || 'Correo o contraseña incorrectos.');
            return;
        }

        // ✅ Login exitoso → guardar token y redirigir
        localStorage.setItem('token',   data.token);
        localStorage.setItem('usuario', JSON.stringify(data.usuario));

        window.location.href = '/';

        } catch (err) {
        setApiError('No se pudo conectar con el servidor. Verifica tu conexión.');
        } finally {
        setLoading(false);
        }
    };

    /* ── Helpers de render ── */
    const fieldError = (name) =>
        touched[name] && errors[name]
        ? <p className={styles.errorMsg}>{errors[name]}</p>
        : null;

    const inputClass = (name) =>
        `${styles.input} ${touched[name] && errors[name] ? styles.inputError : ''}`;

    return (
        <div className={styles.page}>

        {/* ── Left panel ── */}
        <div className={styles.leftPanel}>
            <div className={styles.logoLockup}><LogoIcon /></div>
            <div className={styles.leftCopy}>
            <h2 className={styles.leftHeading}>Accede a tu espacio</h2>
            <p className={styles.leftSubtext}>
                Gestiona tus reuniones, reservas y comunidad desde un solo lugar.
            </p>
            </div>
            <p className={styles.leftFooter}>© 2026 Workhub. Todos los derechos reservados.</p>
        </div>

        {/* ── Right panel ── */}
        <div className={styles.rightPanel}>
            <div className={styles.formBox}>
            <h1 className={styles.formHeading}>Iniciar sesión</h1>
            <p className={styles.formSub}>Bienvenido de vuelta</p>

            {/* Error global de API */}
            {apiError && (
                <div className={styles.apiErrorBanner}>
                {apiError}
                </div>
            )}

            {/* Correo */}
            <div className={styles.fieldGroup}>
                <label className={styles.label}>Correo electrónico</label>
                <input
                className={inputClass('correo')}
                type="email" name="correo" placeholder="tucorreo@ejemplo.com"
                value={form.correo} onChange={handleChange} onBlur={handleBlur}
                />
                {fieldError('correo')}
            </div>

            {/* Contraseña */}
            <div className={styles.fieldGroup}>
                <div className={styles.rowBetween}>
                <label className={styles.label}>Contraseña</label>
                <a className={styles.linkForgot} href="#">¿La olvidaste?</a>
                </div>
                <input
                className={inputClass('contrasena')}
                type="password" name="contrasena" placeholder="••••••••"
                value={form.contrasena} onChange={handleChange} onBlur={handleBlur}
                />
                {fieldError('contrasena')}
            </div>

            <button
                className={styles.btnPrimary}
                onClick={handleSubmit}
                disabled={loading}
            >
                {loading ? 'Ingresando...' : 'Ingresar'}
            </button>

            <p className={styles.registerLine}>
                ¿No tienes cuenta?{' '}
                <a className={styles.registerLink} href="/register">Regístrate</a>
            </p>
            </div>
        </div>

        </div>
    );
    };

    export default Login;