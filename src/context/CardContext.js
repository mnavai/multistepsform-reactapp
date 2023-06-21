import { createContext, useState } from "react";

export const CardContext = createContext({
    selectCards: "",
    setSelectedCards: () => {},
    cardPrice: "",
    setCardPrice: () => {},
    toggleSelection: "Monthly",
    setToggleSelection: () => {},
})

export const CardProvider = ({children}) => {
    const [selectCards, setSelectedCards] = useState("");
    const [cardPrice, setCardPrice] = useState(0);
    const [toggleSelection, setToggleSelection] = useState("Monthly");

    const value = {selectCards, setSelectedCards, cardPrice, setCardPrice, toggleSelection, setToggleSelection};

    return (
        <CardContext.Provider value={value}></CardContext.Provider>
    )
 }