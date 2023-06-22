import { useState, createContext } from "react";

export const CheckBoxContext = createContext({
    selectedServices: [], 
    addSelectedService: () => {}
});

export const CheckBoxProvider = ({children}) => {
    const [selectedServices, setSelectedServices] = useState([]);

    const addSelectedService =  (service, price) => {
        setSelectedServices(
            (prevServices) => [
                ...prevServices,
                { service, price },
            ]
        )
    }

    const value = {selectedServices, addSelectedService};

    return <CheckBoxContext.Provider value={value}>{children}</CheckBoxContext.Provider>
}