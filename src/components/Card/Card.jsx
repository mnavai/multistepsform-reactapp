import './Card.css';

const Card = ({src, altText, label, price, onClick, cardSelected}) => {
    
    return(
        <div className={`card ${cardSelected ? "selected" : ""}`} onClick={onClick} >
            <div className="icon">
                <img src={src} alt={altText}/>
            </div>
            <div className="text-group">
                <h5 className="card-label-text">{label}</h5>
                <p className="card-text">{price}</p>
            </div>
        </div>
    );
}
export default Card;