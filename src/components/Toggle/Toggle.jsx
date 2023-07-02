import { useState, useContext, useEffect } from "react"
import { CardContext } from "../../context/CardContext";
import "./Toggle.css";

const Toggle = ({monthly,yearly}) => {
    const [toggleState,setToggleState] = useState(false);
    const {setToggleSelection} = useContext(CardContext);
    const storage = window.localStorage;

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
        const data = storage.getItem('toggleState');
        if (data !== null) {setToggleState(JSON.parse(data))} //turns it back to an obj
    }, [storage]);

    useEffect(() => {
        storage.setItem("toggleState", JSON.stringify(toggleState));
    }, [toggleState,storage]);

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