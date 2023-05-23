import Input from "../Input/Input"

const Form = () => {
    return(
        <form id="form" class="form-group">
                <Input labelName="Name" placeholder="e.g. Stephen King" type="text" />
                <Input labelName="Email Address" placeholder="e.g. stephenking@lorem.com" type="text" />
                <Input labelName="Phone" placeholder="e.g. +1 999-999-9999" type="text" />
                <input type="submit" value="Next Step" class="btn" />
        </form>
    );
}
export default Form;