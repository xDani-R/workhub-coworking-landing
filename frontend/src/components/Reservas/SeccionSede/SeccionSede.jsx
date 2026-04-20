    import { useState } from 'react';
    import CardEspacio from '../CardEspacio/CardEspacio';
    import styles from './SeccionSede.module.css';

    const FILTROS = [
    { key: 'todos',      label: 'Todos' },
    { key: 'compartida', label: 'Sala compartida' },
    { key: 'privada',    label: 'Sala privada' },
    { key: 'taller',     label: 'Sala taller' },
    ];

    export default function SeccionSede({ sede, salasVisibles, onReservar }) {
    const [filtroActivo, setFiltroActivo] = useState('todos');

    const salasFiltradas = salasVisibles.filter(
        (sala) => filtroActivo === 'todos' || sala.tipo === filtroActivo
    );

    return (
        <div className={styles.seccionSede}>
        {/* Banner de sede */}
        <div className={styles.sedeBanner}>
            <span className={styles.sedeIcono}>🏢</span>
            <div>
            <h3>{sede.nombre}</h3>
            <p>{sede.direccion}</p>
            </div>
        </div>

        {/* Filtros */}
        <div className={styles.filtrosContainer}>
            {FILTROS.map((filtro) => (
            <button
                key={filtro.key}
                className={`${styles.btnFiltro} ${filtroActivo === filtro.key ? styles.activo : ''}`}
                onClick={() => setFiltroActivo(filtro.key)}
            >
                {filtro.label}
            </button>
            ))}
        </div>

        {/* Grid de cards */}
        <div className="row g-4">
            {salasFiltradas.map((sala) => (
            <CardEspacio
                key={sala.id}
                sala={sala}
                onReservar={onReservar}
            />
            ))}
        </div>
        </div>
    );
    }