import './Card.css';

const Card = ({src, altText, label, price, onClick, selectedCard, id}) => {

    const cardSelected = selectedCard && selectedCard.id === id;
    
    return(
        <div className={`card ${cardSelected ? "selected" : ""}`} onClick={onClick} data-cardid={id}>
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