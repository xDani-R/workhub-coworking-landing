import styles from './Sedes.module.css';

import imgPenalolen from '../../../assets/img/002.png';
import imgLaReina from '../../../assets/img/004.png';
import imgNunoa from '../../../assets/img/003.png';
import iconPenalolen from '../../../assets/icons/penalolen.svg';     // adjust path/filename
import iconLaReina from '../../../assets/icons/lareina.svg';   // adjust path/filename
import iconNunoa from '../../../assets/icons/nunoa.svg';         // adjust path/filename

const sedes = [
  {
    id: 'penalolen',
    img: imgPenalolen,
    alt: 'Sede Peñalolén',
    titulo: 'Sede Peñalolén',
    descripcion: 'Comunidad que crece desde lo local.',
    direccion: 'Comunidad Ecológica 128, Peñalolén, RM',
    iconPlaceholder: iconPenalolen,
    bgColor: '#C9D975',
  },
  {
    id: 'la-reina',
    img: imgLaReina,
    alt: 'Sede La Reina',
    titulo: 'Sede La Reina',
    descripcion: 'Equilibrio entre foco y conexión.',
    direccion: 'Av. Ossa #3456, La Reina, RM',
    iconPlaceholder: iconLaReina,
    bgColor: '#F3CD6E',
  },
  {
    id: 'nunoa',
    img: imgNunoa,
    alt: 'Sede Ñuñoa',
    titulo: 'Sede Ñuñoa',
    descripcion: 'Creatividad constante que impulsa proyectos.',
    direccion: 'Calle Simón Bolívar 4500, Ñuñoa, RM',
    iconPlaceholder: iconNunoa,
    bgColor: '#B6B7E4',
  },
];

const Sedes = () => {
  return (
    <section className={styles.sedes} id="sedes">
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Nuestras sedes</h1>
        <p className={styles.subtitle}>Distintos espacios, distintas formas de trabajar.</p>

        <div className={styles.row}>
          {sedes.map((sede) => (
            <div key={sede.id} className={styles.colMd4}>
              <div className={styles.card}>
                <img src={sede.img} alt={sede.alt} className={styles.cardImage} />
                <div className={styles.cardContent}>
                    <div className={styles.iconWrapper} style={{ backgroundColor: sede.bgColor }}>
                        <img src={sede.iconPlaceholder} alt={`${sede.titulo} icon`} className={styles.icon} />
                    </div>
                    <div className={styles.textGroup}>
                        <h5 className={styles.cardTitle}>{sede.titulo}</h5>
                        <p className={styles.cardDescription}>{sede.descripcion}</p>
                    </div>
                </div>
                <hr className={styles.divider} />
                <p className={styles.cardAddress}>{sede.direccion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sedes;