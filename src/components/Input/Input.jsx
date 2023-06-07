import './Input.css';
const Input = ({id, labelName, type, placeholder, onChange,value}) => {
    // const {name, labelName, type, placeholder} = props;
    return(
        <div className="field-group">
            <div className="labels-container">
                <label className="form-label" for={id}>{labelName}</label>
                <label className="error-text-name" for={id}>This field is required</label> 
            </div>
            <input type={type} id={id} className="form-input" placeholder={placeholder} onChange={onChange} value={value} required />
        </div>
    );
}
export default Input;