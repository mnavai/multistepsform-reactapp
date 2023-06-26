import Button from "../components/Button/Button";
import HeadingGroup from "../components/HeadingGroup/HeadingGroup";
import Slidebar from "../components/Sidebar/Sidebar";
import Card from "../components/Card/Card";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import MainWrapper from "../components/MainWrapper/MainWrapper";
import Toggle from "../components/Toggle/Toggle";
import { CardContext } from "../context/CardContext";

const SelectPlan = () => {
    const { setSelectedCards, setCardPrice } = useContext(CardContext);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleClickCard = (cardData) => {
        setSelectedCard(cardData);
        setSelectedCards(cardData.label);
        setCardPrice(cardData.price);
        console.log(cardData);
    };

    return(
        <AppLayout>
            <Slidebar currentStep="2" />
            <MainWrapper>
                <HeadingGroup heading="Select your plan" ptag="You have the option monthly or yearly billing." />
                <div id="form" className="form-class">
                    <div className="card-group">
                        <Card id={1}
                            src="assets/images/icon-arcade.svg"
                            altText="arcade icon"
                            label="Arcade"
                            price="$9/mon"
                            onClick={() => handleClickCard({ id:1, label: "Arcade", price: 9 })}
                            selectedCard={selectedCard}
                            />
                        <Card id={2}
                            src="assets/images/icon-advanced.svg" 
                            altText="advanced icon"
                            label="Advanced"
                            price="$12/mon"
                            onClick={() => handleClickCard({ id:2, label: "Advanced", price: 12 })}
                            selectedCard={selectedCard}
                            />
                        <Card id={3}
                            src="assets/images/icon-pro.svg"
                            altText="pro icon"
                            label="Pro"
                            price="$15/mon"
                            onClick={() => handleClickCard({ id:3, label: "Pro", price: 15 })}
                            selectedCard={selectedCard}
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