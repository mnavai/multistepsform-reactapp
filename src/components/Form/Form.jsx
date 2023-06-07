import Input from "../Input/Input";
import { useState, useHistory } from 'react';
import Button from '../Button/Button.jsx';
import '../Button/Button.css';
import '../Form/Form.css';

const Form = () => {
    // const [formData, setFormData] = useState({name:'',email:'',phone:''});
    // const handleForm = (e) => {
    //     setFormData({...formData,[e.target.id]:e.target.value});
    //     console.log()
    // }
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    // const history = useHistory();

    const handleNameChange = (e) => {
       setName(e.target.value);
    }
    const handleEmailChange = (e) => {
       setEmail(e.target.value);
    }
    const handlePhoneChange = (e) => {
       setPhone(e.target.value);
    }
    //store form data in an object
    const formData = {
        name:name,
        email:email,
        phone:phone
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.name === ''){
            setErrorMessage('Name is required');
            return;
        }
        if(formData.email === ''){
            setErrorMessage('Email is required');
            return;
        }
        if(formData.phone === ''){
            setErrorMessage('Phone is required');
            return; 
        }  
        console.log(formData);
        // history.push('/select-plan',{ formData: formData });
        //clear the states (form)
        setName('');
        setEmail('');
        setPhone('');
    }
    return(
        <form id="form" class="form-group" onSubmit={handleSubmit}>
            <Input labelName="Name" id="name" placeholder="e.g. Stephen King" type="text" onChange={handleNameChange} value={name} />
            <Input labelName="Email Address" id="email" placeholder="e.g. stephenking@lorem.com" type="email" onChange={handleEmailChange} value={email} />
            <Input labelName="Phone" id="phone" placeholder="e.g. +1 999-999-9999" type="tel" onChange={handlePhoneChange} value={phone} />
            {<p className="error-message">{errorMessage}</p>}
            <div className="form-buttons single-btn">
                <Button type="submit" className="btn">Next Step</Button>
            </div>
        </form>
    );
}
export default Form;