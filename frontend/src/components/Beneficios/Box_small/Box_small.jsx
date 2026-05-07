import "./Box_small.css"


const Box_small = ({image, alt, title, description}) => {
    return (
            <div className="Box_small"> 
                <img className="Boximage" src={image} alt={alt}/>
                <div className="Boxtext">
                    <h3 style={{ color: '#643278'}}>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
    );
};

export default Box_small