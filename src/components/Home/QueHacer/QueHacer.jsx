import styles from './QueHacer.module.css';
import CoworkingIcon from '../../../assets/icons/coworking3.png';
import MeetingIcon from '../../../assets/icons/meeting3.png';
import WorkshopIcon from '../../../assets/icons/workshop3.png';

const QueHacer = () => {
  const activities = [
    {
      title: 'Coworking compartido',
      description: 'Trabaja a tu ritmo en un espacio cómodo, abierto y pensado para conectar con otras personas.',
      icon: CoworkingIcon, // Placeholder
    },
    {
      title: 'Salas de reuniones',
      description: 'Espacios pensados para reunir ideas, equipos y proyectos.',
      icon: MeetingIcon, // Placeholder
    },
    {
      title: 'Eventos y talleres',
      description: 'Actividades, charlas y encuentros que activan la comunidad y generan nuevas oportunidades.',
      icon: WorkshopIcon, // Placeholder
    }
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.mainTitle}>¿Qué puedes hacer aquí?</h2>
      
      <div className={styles.cardsGrid}>
        {activities.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconPlaceholder}>
              {item.icon ? <img src={item.icon} alt="" /> : <div className={styles.square} />}
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDescription}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QueHacer;