import { createContext, useState } from "react";

export const CardContext = createContext({
    selectCards: "",
    setSelectedCard: () => {},
    cardPrice: "",
    setCardPrice: () => {},
    toggleSelection: "Monthly",
    setToggleSelection: () => {},
})

export const CardProvider = ({children}) => {
    const [selectCards, setSelectedCard] = useState("");
    const [cardPrice, setCardPrice] = useState(0);
    const [toggleSelection, setToggleSelection] = useState("Monthly");

    const value = {selectCards, setSelectedCard, cardPrice, setCardPrice, toggleSelection, setToggleSelection};

    return (
        <CardContext.Provider value={value}></CardContext.Provider>
    )
 }