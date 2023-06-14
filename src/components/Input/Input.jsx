import "./Input.css";

const Input = ({ id, labelName, type, placeholder, onChange, value, error }) => {
  const hasError = value === "";

  return (
    <div className="field-group">
      <div className="labels-container">
        <label className="form-label" htmlFor={id}>
          {labelName}
        </label>
        {hasError && <label className="error-text">{error}</label>}
      </div>
      <input
        type={type}
        id={id}
        className={`form-input ${hasError ? 'error-text' : ''}`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
