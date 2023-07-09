import { useContext } from 'react';
import './Card.css';
import { CardContext } from '../../context/CardContext';

const Card = ({src, altText, label, price, onClick, selectedCard, id}) => {
    
    const cardSelected = selectedCard && selectedCard.id === id;
    const {toggleSelection} = useContext(CardContext);

     return(
        <div className={`card ${cardSelected ? "selected" : ""}`} onClick={onClick} data-cardid={id}>
            <div className="icon">
                <img src={src} alt={altText}/>
            </div>
            <div className="text-group">
                <h5 className="card-label-text">{label}</h5>
                <p className="card-text">{price}</p>
                {toggleSelection === "Yearly" && <p className='free-deal'>2 months free</p>}
            </div>
        </div>
    );
}
export default Card;