import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
const AddOns = () => {
    return (
        <div className="add-ons">
            <h1> Add ons page</h1>
              <div className="buttons">
                <Link to="/select-plan"><Button type="submit" className="btn-goback">Go Back</Button></Link>
                <Link to="/summary"><Button type="submit" className="btn">Next Step</Button></Link>
              </div>
        </div>
    );
}
export default AddOns;