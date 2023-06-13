import './Input.css';
const Input = ({ id, labelName, type, placeholder, onChange, value, error, hasError }) => {
  return (
    <div className={`field-group ${hasError ? 'error' : ''}`}>
      <div className="labels-container">
        <label className="form-label" htmlFor={id}>
          {labelName}
        </label>
        {hasError && <label className="error-text">{error}</label>}
      </div>
      <input
        type={type}
        id={id}
        className={`form-input ${hasError ? 'error' : ''}`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
export default Input;