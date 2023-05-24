const Input = ({id, labelName, type, placeholder}) => {
    // const {name, labelName, type, placeholder} = props;
    return(
        <div className="field-group">
            <div className="labels-container">
                <label className="form-label" for={id}>{labelName}</label>
                <label className="error-text-name" for={id}>This field is required</label> 
            </div>
            <input type={type} id={id} className="form-input" placeholder={placeholder} />
        </div>
    );
}
export default Input;