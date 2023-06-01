import Button from "../components/Button/Button";
import HeadingGroup from "../components/HeadingGroup/HeadingGroup";
import Slidebar from "../components/Sidebar/Sidebar";
import Card from "../components/Card/Card";
import { Link } from "react-router-dom";

const SelectPlan = () => {
    return(
        <div className="select-plan">
            <Slidebar />
            <main className="main-section">
                <HeadingGroup heading="Select your plan" ptag="You have the option monthly or yearly billing." />
                <div id="form" className="form-group">
                    <div className="card-group">
                        <Card src="assets/images/icon-arcade.svg"
                            altText="arcade icon"
                            label="Arcade"
                            price="$9/mon"/>
                        <Card src="assets/images/icon-advanced.svg" 
                            altText="advanced icon"
                            label="Advanced"
                            price="$12/mon"/>
                        <Card
                            src="assets/images/icon-pro.svg"
                            altText="pro icon"
                            label="Pro"
                            price="$15/mon"/>
                    </div>
                    <div className="grey-bar">
                        <h5 className="grey-bar-month">Monthly</h5>
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round"></span>
                        </label>
                        <p className="grey-bar-year">Yearly</p>
                    </div>
                    <div className="form-buttons">
                        <Link to="/"><Button type="submit" className="btn-goback">Go Back</Button></Link>
                        <Link to="/add-ons"><Button type="submit" className="btn">Next Step</Button></Link>
                    </div>
                </div>
            </main>        
        </div>
    );
}
export default SelectPlan;