import "./Input.css";

const Input = ({ id, labelName, type, placeholder, onChange, value, error }) => {
  const hasError = value === "" && error !== "";

  return (
    <div className="field-group">
      <div className="labels-container">
        <label className="form-label" htmlFor={id} data-testid="label">
          {labelName}
        </label>
        {hasError && <label className="error-text" data-testid="error">{error}</label>}
      </div>
      <input
        name={id}
        type={type}
        id={id}
        className={hasError ? "form-input-error" : "form-input"}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        data-testid="input"
      />
    </div>
  );
};

export default Input;
