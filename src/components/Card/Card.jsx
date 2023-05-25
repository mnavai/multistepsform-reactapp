const Card = ({src, altText, label, price}) => {
    return(
        <div class="card-group">
            <div className="card">
                <div className="icon">
                    <img src={src} alt={altText}/>
                </div>
                <div className="text-group">
                    <h5 className="card-label-text">{label}</h5>
                    <p className="card-text">{price}</p>
                </div>
            </div>
         </div>
    );
}
export default Card;