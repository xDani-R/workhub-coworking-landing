import "./Boxincolumn.css"

const Boxincolumn = ({image, alt, title, description}) => {
    return (
        <div className="Boxincolumn-container"> 
            <img className="Boximage" src={image} alt={alt}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Boxincolumn