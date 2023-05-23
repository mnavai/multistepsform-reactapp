const Form = () => {
    return(
        <form id="form" class="form-group">
                <div class="field-group">
                    <div class="labels-container">
                        <label class="form-label">Name</label>
                        <label class="error-text-name">This field is required</label> 
                    </div>
                    <input type="text" id="name" class="form-input" placeholder="e.g. Stephen King" />
                </div>
                <div class="field-group">
                    <div class="labels-container">
                        <label class="form-label">Email Address</label>
                        <label class="error-text-email">This field is required</label> 
                    </div>
                    <input type="email" id="email" class="form-input" placeholder="e.g. stephenking@lorem.com" />
                </div>
                <div class="field-group">
                    <div class="labels-container">
                        <label class="form-label">Phone</label>
                        <label class="error-text-phone">This field is required</label> 
                    </div>
                    <input class="form-input" type="number" id="phonenumber" placeholder="e.g. +1 999-999-9999" />
                </div>
                <input type="submit" value="Next Step" class="btn" />
            </form>
    );
}
export default Form;