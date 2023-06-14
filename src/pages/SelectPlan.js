import Button from "../components/Button/Button";
import HeadingGroup from "../components/HeadingGroup/HeadingGroup";
import Slidebar from "../components/Sidebar/Sidebar";
import Card from "../components/Card/Card";
import { Link } from "react-router-dom";
import { useState } from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import MainWrapper from "../components/MainWrapper/MainWrapper";
import Toggle from "../components/Toggle/Toggle";

const SelectPlan = () => {
    //const [card, setCard] = useState({});
    // const [arcadeCardSelected, setArcadeCardSelected] = useState(false);
    // const [advancedCardSelected, setAdvancedCardSelected] = useState(false);
    // const [proCardSelected, setProCardSelected] = useState(false);
    
    // const handleClickArcade = (e) => { 
    //     setArcadeCardSelected(!arcadeCardSelected);
    //     setAdvancedCardSelected(false);
    //     setProCardSelected(false);
 
    // }
    // const handleClickAdvanced = (e) => { 
    //     setAdvancedCardSelected(!advancedCardSelected);
    //     setArcadeCardSelected(false);
    //     setProCardSelected(false);  
    // }
    // const handleClickPro = (e) => { 
    //     setProCardSelected(!proCardSelected);
    //     setAdvancedCardSelected(false);
    //     setArcadeCardSelected(false);   
    // }
    const [selectedCard, setSelectedCard] = useState(null);

    const handleClickCard = (cardData) => {
        setSelectedCard(cardData);
        console.log(cardData);
    };

    return(
        <AppLayout>
            <Slidebar />
            <MainWrapper>
                <HeadingGroup heading="Select your plan" ptag="You have the option monthly or yearly billing." />
                <div id="form" className="form-class">
                    <div className="card-group">
                        <Card id={1}
                            src="assets/images/icon-arcade.svg"
                            altText="arcade icon"
                            label="Arcade"
                            price="$9/mon"
                            onClick={() => handleClickCard({ label: "Arcade", price: "$9/mon" })}
                            cardSelected={selectedCard === 1}
                            />
                        <Card id={2}
                            src="assets/images/icon-advanced.svg" 
                            altText="advanced icon"
                            label="Advanced"
                            price="$12/mon"
                            onClick={() => handleClickCard({ label: "Advanced", price: "$12/mon" })}
                            cardSelected={selectedCard === 2}
                            />
                        <Card id={3}
                            src="assets/images/icon-pro.svg"
                            altText="pro icon"
                            label="Pro"
                            price="$15/mon"
                            onClick={() => handleClickCard({ label: "Pro", price: "$15/mon" })}
                            cardSelected={selectedCard === 3}
                            />
                    </div>
                    <Toggle monthly="Monthly" yearly="Yearly" />
                    <div className="form-buttons">
                        <Link to="/"><Button type="submit" className="btn-goback">Go Back</Button></Link>
                        <Link to="/add-ons"><Button type="submit" className="btn">Next Step</Button></Link>
                    </div>
                </div>
            </MainWrapper>       
        </AppLayout>
    );
}
export default SelectPlan;