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
    
}