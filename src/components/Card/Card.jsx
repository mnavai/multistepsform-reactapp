import { useContext } from 'react';
import './Card.css';
import { CardContext } from '../../context/CardContext';

const Card = ({src, altText, label, price, onClick, selectedCard, id}) => {
    
    const cardSelected = selectedCard && selectedCard.id === id;
    const {toggleSelection} = useContext(CardContext);

     return(
        <div className={`card ${cardSelected ? "selected" : ""}`} onClick={onClick} data-cardid={id} data-testid="card">
            <div className="icon">
                <img src={src} alt={altText} data-testid="icon" />
            </div>
            <div className="text-group">
                <h5 className="card-label-text" data-testid="label">{label}</h5>
                <p className="card-text" data-testid="price">{price}</p>
                {toggleSelection === "Yearly" && <p className='free-deal'>2 months free</p>}
            </div>
        </div>
    ); 
}
export default Card;