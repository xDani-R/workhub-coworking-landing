    import { useState } from 'react';
    import styles from './Registro.module.css';
    import logo from '../../src/assets/img/logo_coworkhub.png';

    const LogoIcon = () => (
    <img src={logo} alt="logo" className={styles.logoIcon} />
    );

    /* ================================
    HELPERS DE VALIDACIÓN
    ================================ */

    const formatRut = (value) => {
    const clean = value.replace(/[^0-9kK]/g, '').toUpperCase();
    if (clean.length === 0) return '';
    const body = clean.slice(0, -1);
    const dv   = clean.slice(-1);
    const bodyFormatted = body.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return body.length > 0 ? `${bodyFormatted}-${dv}` : dv;
    };

    const isValidRutFormat = (rut) =>
    /^\d{1,2}\.\d{3}\.\d{3}-[\dkK]$/.test(rut);

    const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const isValidPassword = (password) =>
    /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);

    /* ================================
    COMPONENTE
    ================================ */

    const Registro = () => {
    const [form, setForm] = useState({
        nombre:     '',
        rut:        '',
        correo:     '',
        contrasena: '',
        confirmar:  '',
    });

    const [errors,   setErrors]   = useState({});
    const [touched,  setTouched]  = useState({});
    const [loading,  setLoading]  = useState(false);
    const [apiError, setApiError] = useState('');
    const [success,  setSuccess]  = useState(false);

    /* ── Actualizar campo ── */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setApiError('');
        if (name === 'rut') {
        setForm((prev) => ({ ...prev, rut: formatRut(value) }));
        } else {
        setForm((prev) => ({ ...prev, [name]: value }));
        }
    };

    /* ── Marcar campo como tocado al perder foco ── */
    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        setErrors((prev) => ({ ...prev, ...getFieldError(name, form) }));
    };

    /* ── Retorna el error de un campo ── */
    const getFieldError = (name, currentForm) => {
        switch (name) {
        case 'nombre':
            return currentForm.nombre.trim()
            ? { nombre: undefined }
            : { nombre: 'El nombre es requerido.' };

        case 'rut':
            if (!currentForm.rut)                   return { rut: 'El RUT es requerido.' };
            if (!isValidRutFormat(currentForm.rut)) return { rut: 'Formato inválido. Ejemplo: 12.345.678-9' };
            return { rut: undefined };

        case 'correo':
            if (!currentForm.correo)                return { correo: 'El correo es requerido.' };
            if (!isValidEmail(currentForm.correo))  return { correo: 'Ingresa un correo válido.' };
            return { correo: undefined };

        case 'contrasena':
            if (!currentForm.contrasena)                  return { contrasena: 'La contraseña es requerida.' };
            if (!isValidPassword(currentForm.contrasena)) return { contrasena: 'Mínimo 8 caracteres, una mayúscula y un número.' };
            return { contrasena: undefined };

        case 'confirmar':
            if (!currentForm.confirmar)                       return { confirmar: 'Debes confirmar tu contraseña.' };
            if (currentForm.confirmar !== currentForm.contrasena) return { confirmar: 'Las contraseñas no coinciden.' };
            return { confirmar: undefined };

        default:
            return {};
        }
    };

    /* ── Submit → fetch al backend ── */
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Marcar todos como tocados y validar
        const allFields = Object.keys(form);
        setTouched(allFields.reduce((acc, k) => ({ ...acc, [k]: true }), {}));

        const allErrors = allFields.reduce((acc, name) => {
        const partial = getFieldError(name, form);
        const key = Object.keys(partial)[0];
        if (partial[key]) acc[key] = partial[key];
        return acc;
        }, {});

        setErrors(allErrors);
        if (Object.keys(allErrors).length > 0) return;

        setLoading(true);
        setApiError('');

        try {
        const response = await fetch('http://localhost:3001/usuarios/registrar', {
            method:  'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            // El backend recibe un solo campo "nombre" → unimos nombre 
            nombre:     `${form.nombre.trim()}`,
            rut:        form.rut,
            correo:     form.correo,
            contrasena: form.contrasena,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            // El backend devuelve { mensaje: '...' } en errores (ej: correo ya registrado)
            setApiError(data.mensaje || 'Error al crear la cuenta. Intenta nuevamente.');
            return;
        }

        // ✅ Registro exitoso
        setSuccess(true);

        } catch (err) {
        setApiError('No se pudo conectar con el servidor. Verifica tu conexión.');
        } finally {
        setLoading(false);
        }
    };

    const fieldError = (name) =>
        touched[name] && errors[name]
        ? <p className={styles.errorMsg}>{errors[name]}</p>
        : null;

    const inputClass = (name) =>
        `${styles.input} ${touched[name] && errors[name] ? styles.inputError : ''}`;

    /* ── Pantalla de éxito ── */
    if (success) {
        return (
        <div className={styles.page}>
            <div className={styles.leftPanel}>
            <div className={styles.logoLockup}><LogoIcon /></div>
            <div className={styles.leftCopy}>
                <h2 className={styles.leftHeading}>Tu espacio de trabajo te espera</h2>
                <p className={styles.leftSubtext}>
                Únete a Workhub y empieza a reservar salas, gestionar tu equipo y colaborar en conjunto.
                </p>
            </div>
            <p className={styles.leftFooter}>© 2026 Workhub. Todos los derechos reservados.</p>
            </div>
            <div className={styles.rightPanel}>
            <div className={styles.formBox}>
                <div className={styles.successBox}>
                <div className={styles.successIcon}>✓</div>
                <h2 className={styles.successHeading}>¡Cuenta creada!</h2>
                <p className={styles.successText}>
                    Tu cuenta fue registrada exitosamente. Ya puedes iniciar sesión.
                </p>
                <a className={styles.btnPrimary} href="/login">
                    Ir a iniciar sesión
                </a>
                </div>
            </div>
            </div>
        </div>
        );
    }

    return (
        <div className={styles.page}>

        {/* ── Left panel ── */}
        <div className={styles.leftPanel}>
            <div className={styles.logoLockup}><LogoIcon /></div>
            <div className={styles.leftCopy}>
            <h2 className={styles.leftHeading}>Tu espacio de trabajo te espera</h2>
            <p className={styles.leftSubtext}>
                Únete a Workhub y empieza a reservar salas, gestionar tu equipo y colaborar en conjunto.
            </p>
            </div>
            <p className={styles.leftFooter}>© 2026 Workhub. Todos los derechos reservados.</p>
        </div>

        {/* ── Right panel ── */}
        <div className={styles.rightPanel}>
            <div className={styles.formBox}>
            <h1 className={styles.formHeading}>Crear cuenta</h1>
            <p className={styles.formSub}>Completa tus datos para comenzar</p>

            {/* Banner de error de API */}
            {apiError && (
                <div className={styles.apiErrorBanner}>
                {apiError}
                </div>
            )}

            {/* Nombre */}
            <div className={styles.fieldGroup}>
                <label className={styles.label}>Nombre</label>
                <input
                className={inputClass('nombre')}
                type="text" name="nombre" placeholder="Ana"
                value={form.nombre} onChange={handleChange} onBlur={handleBlur}
                />
                {fieldError('nombre')}
            </div>

            {/* RUT */}
            <div className={styles.fieldGroup}>
                <label className={styles.label}>RUT</label>
                <input
                className={inputClass('rut')}
                type="text" name="rut" placeholder="12.345.678-9"
                value={form.rut} onChange={handleChange} onBlur={handleBlur}
                maxLength={12}
                />
                {fieldError('rut')}
            </div>

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
                <label className={styles.label}>Contraseña</label>
                <input
                className={inputClass('contrasena')}
                type="password" name="contrasena" placeholder="Mínimo 8 caracteres"
                value={form.contrasena} onChange={handleChange} onBlur={handleBlur}
                />
                {!touched.contrasena && (
                <p className={styles.passwordHint}>
                    Usa al menos 8 caracteres, una mayúscula y un número.
                </p>
                )}
                {fieldError('contrasena')}
            </div>

            {/* Confirmar contraseña */}
            <div className={styles.fieldGroup}>
                <label className={styles.label}>Confirmar contraseña</label>
                <input
                className={inputClass('confirmar')}
                type="password" name="confirmar" placeholder="••••••••"
                value={form.confirmar} onChange={handleChange} onBlur={handleBlur}
                />
                {fieldError('confirmar')}
            </div>

            <button
                className={styles.btnPrimary}
                onClick={handleSubmit}
                disabled={loading}
            >
                {loading ? 'Creando cuenta...' : 'Crear cuenta'}
            </button>

            <p className={styles.loginLine}>
                ¿Ya tienes cuenta?{' '}
                <a className={styles.loginLink} href="/login">Inicia sesión</a>
            </p>
            </div>
        </div>

        </div>
    );
    };

    export default Registro;