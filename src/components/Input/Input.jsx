const Input = (props) => {
    console.log(props)
    return(
        <div className="field-group">
            <div className="labels-container">
                <label className="form-label">{props.labelName}</label>
                <label className="error-text-name">This field is required</label> 
            </div>
            <input type={props.type} id="name" className="form-input" placeholder={props.placeholder} />
        </div>
    );
}
export default Input;