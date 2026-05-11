import "./ServiceCard.css";
 
const ServiceCard = ({
  image,
  tag,
  title,
  description,
  status,
  onVerDetalles,
}) => {

  return (
    <div className="service-card">
      <div className="service-card__image-wrapper">
        <img src={image} alt={title} className="service-card__image" />
      </div>
      <div>
        <div className="service-card__body">
          <p className="service-card__tag" ><purple>{tag}</purple></p>
          <h3 className="service-card__title">{title}</h3>
          <p className="service-card__description">{description}</p>
          {/* <div className="service-card__footer">
            <span className="service-card__status">
              <span />
              {status}
            </span>
          </div> */}
        </div>
        <hr/>
        <div className="service-card__action">
          <button className="service-card__btn" onClick={onVerDetalles}>
            {status}
          </button>
        </div>
      </div>
    </div>
    
  );
};
 
export default ServiceCard;