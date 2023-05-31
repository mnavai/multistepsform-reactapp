import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Sidebar from "../components/Sidebar/Sidebar";
import HeadingGroup from "../components/HeadingGroup/HeadingGroup";
const AddOns = () => {
    return (
        <div className="add-ons">
          <Sidebar />
          <main class="main-section">
            <HeadingGroup heading="Pick add-ons" ptag="Add-ons help enhance your gaming experience." />
            <div id="form" className="form-group">
              <div className="checkbox-group" >
                
              </div>
              <div className="buttons">
              <Link to="/select-plan"><Button type="submit" className="btn-goback">Go Back</Button></Link>
              <Link to="/summary"><Button type="submit" className="btn">Next Step</Button></Link>
            </div>
            </div>
          </main>
        </div>
    );
}
export default AddOns;