import Input from "../Input/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button.jsx";
import "../Button/Button.css";
import "../Form/Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" });
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const validateForm = () => {
    const newErrors = {};
    if (name === "") {
      newErrors.name = "This field is required";
    }
    if (email === "") {
      newErrors.email = "This field is required";
    }
    if (phone === "") {
      newErrors.phone = "This field is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setName("");
      setEmail("");
      setPhone("");
      navigate("/select-plan");
    }
  };

  return (
    <form id="form" className="form-group" onSubmit={handleSubmit}>
      <Input
        labelName="Name"
        id="name"
        placeholder="e.g. Stephen King"
        type="text"
        onChange={handleNameChange}
        value={name}
        error={errors.name}
        hasError={errors.name !== ""}
      />
      <Input
        labelName="Email Address"
        id="email"
        placeholder="e.g. stephenking@lorem.com"
        type="email"
        onChange={handleEmailChange}
        value={email}
        error={errors.email}
        hasError={errors.email !== ""}
      />
      <Input
        labelName="Phone"
        id="phone"
        placeholder="e.g. +1 999-999-9999"
        type="tel"
        onChange={handlePhoneChange}
        value={phone}
        error={errors.phone}
        hasError={errors.phone !== ""}
      />
      <div className="form-buttons single-btn">
        <Button type="submit" className="btn">
          Next Step
        </Button>
      </div>
    </form>
  );
};
export default Form;