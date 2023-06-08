import Button from "../components/Button/Button";
import HeadingGroup from "../components/HeadingGroup/HeadingGroup";
import Slidebar from "../components/Sidebar/Sidebar";
import Card from "../components/Card/Card";
import { Link } from "react-router-dom";
import { useState } from "react";

const SelectPlan = () => {
    // const [card, setCard] = useState({});
    const [arcadeCardSelected, setArcadeCardSelected] = useState(false);
    const [advancedCardSelected, setAdvancedCardSelected] = useState(false);
    const [proCardSelected, setProCardSelected] = useState(false);
    const handleClickArcade = (e) => { 
        setArcadeCardSelected(!arcadeCardSelected);
        console.log('clicked',arcadeCardSelected);    
    }
    const handleClickAdvanced = (e) => { 
        setAdvancedCardSelected(!advancedCardSelected);
        console.log('clicked',advancedCardSelected);    
    }
    const handleClickPro = (e) => { 
        setProCardSelected(!proCardSelected);
        console.log('clicked',proCardSelected);    
    }
    return(
        <div className="select-plan">
            <Slidebar />
            <main className="main-section">
                <HeadingGroup heading="Select your plan" ptag="You have the option monthly or yearly billing." />
                <div id="form" className="form-class">
                    <div className="card-group">
                        <Card src="assets/images/icon-arcade.svg"
                            altText="arcade icon"
                            label="Arcade"
                            price="$9/mon"
                            onClick={handleClickArcade}
                            cardSelected={arcadeCardSelected}
                            />
                        <Card src="assets/images/icon-advanced.svg" 
                            altText="advanced icon"
                            label="Advanced"
                            price="$12/mon"
                            onClick={handleClickAdvanced}
                            cardSelected={advancedCardSelected}
                            />
                        <Card
                            src="assets/images/icon-pro.svg"
                            altText="pro icon"
                            label="Pro"
                            price="$15/mon"
                            onClick={handleClickPro}
                            cardSelected={proCardSelected}    
                            />
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