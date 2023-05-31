const Checkbox = ({label,text,price}) => {
    return(
        <div className="checkbox-container">
            <div className="checkbox">
                <input type="checkbox" id="myCheckbox"></input>
            </div>
            <div className="label-text">
                <h5 className="checkbox-label">{label}</h5>
                <p className="checkbox-p">{text}</p>
            </div>
            <div className="price-tag">
                <p className="price-tag-p">{price}</p>
            </div>
        </div>
    );
}
export default Checkbox; 