import './Card.css';

const Card = ({src, altText, label, price, onClick, cardSelected, id}) => {
    
    return(
        <div className={`card ${cardSelected ? "selected" : ""}`} onClick={onClick} cardId={id}>
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