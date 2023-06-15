import './Checkbox.css';
const Checkbox = ({label,text,price,onChange,id,selectedCheckbox}) => {
    return(
        <div className={`checkbox-container ${selectedCheckbox ? "selected" : ""}`} data-checkboxid={id} >
            <div className="checkbox" >
                <input type="checkbox" id="checkbox" className="checkbox-class" onChange={onChange} />
            </div>
            <div className="text-wrapper">
                <h5 className="checkbox-label">{label}</h5>
                <p className="checkbox-p">{text}</p>
            </div>
            <div className="price-wrapper">
                <p className="price-tag-p">{price}</p>
            </div>
        </div>
    );
}
export default Checkbox; 