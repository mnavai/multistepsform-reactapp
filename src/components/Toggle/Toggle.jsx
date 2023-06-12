import { useState } from "react";
import "./Toggle.css";

const Toggle = ({monthly,yearly}) => {
    const [toggleState,setToggleState] = useState(false);
      const handleToggle = () => {
        setToggleState(!toggleState);
        let toggleStatus = monthly;
        if (toggleState === false){
            toggleStatus = yearly;
        }
        else {
            toggleStatus = monthly;
        }
        console.log(toggleStatus);
    }
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