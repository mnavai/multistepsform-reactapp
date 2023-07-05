import { useState, useContext, useEffect } from "react"
import { CardContext } from "../../context/CardContext";
import "./Toggle.css";

const Toggle = ({monthly,yearly}) => {
    const [toggleState,setToggleState] = useState(() => JSON.parse(localStorage.getItem("toggleState")) || false); //the getter should go into state to avoid reinitialization on re-rendering page
    const {setToggleSelection} = useContext(CardContext);
  
      const handleToggle = () => {
        setToggleState(!toggleState);
        let toggleStatus = monthly;
        if (toggleState === false){
            toggleStatus = yearly;
        }
        else {
            toggleStatus = monthly;
        }
        setToggleSelection(toggleStatus);
    }
    
    useEffect(() => {
        localStorage.setItem("toggleState", JSON.stringify(toggleState));
    }, [toggleState]);

    return(
        <div className="grey-bar">
            <h5 className="grey-bar-month">{monthly}</h5>
            <label className="switch" >
                <input type="checkbox" onChange={handleToggle} />
                <span className="slider round"></span>
            </label>
            <p className="grey-bar-year">{yearly}</p>
        </div>
    );
}
export default Toggle;