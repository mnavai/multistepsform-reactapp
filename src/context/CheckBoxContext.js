import { useState, createContext } from "react";

export const CheckBoxContext = createContext({
    selectService: "",
    setSelectedService: () => {},
    servicePrice: 0,
    setServicePrice: () => {},
})

export const CheckBoxProvider = ({children}) => {
    const [selectService, setSelectedService] = useState("");
    const [servicePrice, setServicePrice] = useState(0);

    const value = {selectService, setSelectedService, servicePrice, setServicePrice};

    return <CheckBoxContext.Provider value={value}>{children}</CheckBoxContext.Provider>
}