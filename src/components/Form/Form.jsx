import Input from "../Input/Input";
import { useState } from 'react';
import Button from '../Button/Button.jsx';
import '../Button/Button.css';
import '../Form/Form.css';

const Form = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const handleNameChange = (e) => {
       setName(e.target.value);
       console.log(name);
    }
    const handleEmailChange = (e) => {
       setEmail(e.target.value);
       console.log(email);
    }
    const handlePhoneChange = (e) => {
       setPhone(e.target.value);
       console.log(phone);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(name === ''){
            console.log('name is empty');
        }
        if(email === ''){
            console.log('email is empty');
        }
        if(phone === ''){
            console.log('phone is empty');
        }
        return;
    }

    // const [formData, setFormData] = useState({name:'',email:'',phone:''});
    // const handleForm = (e) => {
    //     setFormData({...formData,[e.target.id]:e.target.value});
    //     console.log()
    // }
    return(
        <form id="form" class="form-group" onSubmit={handleSubmit}>
                <Input labelName="Name" id="name" placeholder="e.g. Stephen King" type="text" onChange={handleNameChange} value={name} />
                <Input labelName="Email Address" id="email" placeholder="e.g. stephenking@lorem.com" type="email" onChange={handleEmailChange} value={email} />
                <Input labelName="Phone" id="phone" placeholder="e.g. +1 999-999-9999" type="tel" onChange={handlePhoneChange} value={phone} />
                <div className="form-buttons single-btn">
                    <Button type="submit" className="btn">Next Step</Button>
                </div>
        </form>
    );
}
export default Form;