import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Sidebar from "../components/Sidebar/Sidebar";
import HeadingGroup from "../components/HeadingGroup/HeadingGroup";
import Checkbox from "../components/Checkbox/Checkbox";

const AddOns = () => {
    return (
        <div className="add-ons">
          <Sidebar />
          <main class="main-section">
            <HeadingGroup heading="Pick add-ons" ptag="Add-ons help enhance your gaming experience." />
            <div id="form" className="form-group">
                <div className="checkbox-group">
                    <Checkbox 
                        label="Online Service" 
                        text="Access to multiplayer games" 
                        price="+$1/mon" />
                    <Checkbox 
                        label="Larger Storage" 
                        text="Extra 1TB of cloud save" 
                        price="+$2/mon" />
                    <Checkbox 
                        label="Customizable Profile" 
                        text="Custom theme on your profile" 
                        price="+$2/mon" />
                </div>
                <div className="form-buttons">
                    <Link to="/select-plan"><Button type="submit" className="btn-goback">Go Back</Button></Link>
                    <Link to="/summary"><Button type="submit" className="btn">Next Step</Button></Link>
                </div>
            </div>
          </main>
        </div>
    );
}
export default AddOns;