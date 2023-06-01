import Input from "../Input/Input";
import '../Button/Button.css';

const Form = () => {
    return(
        <form id="form" class="form-group">
                <Input labelName="Name" id="name" placeholder="e.g. Stephen King" type="text" />
                <Input labelName="Email Address" id="email" placeholder="e.g. stephenking@lorem.com" type="email" />
                <Input labelName="Phone" id="phone" placeholder="e.g. +1 999-999-9999" type="tel" />
        </form>
    );
}
export default Form;