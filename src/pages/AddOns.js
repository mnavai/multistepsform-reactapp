import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Sidebar from "../components/Sidebar/Sidebar";
import HeadingGroup from "../components/HeadingGroup/HeadingGroup";
import Checkbox from "../components/Checkbox/Checkbox";
import AppLayout from "../components/AppLayout/AppLayout";
import MainWrapper from "../components/MainWrapper/MainWrapper";
import { useState, useContext } from "react";
import { CheckBoxContext } from "../context/CheckBoxContext";

const AddOns = () => {
    const {setSelectedService, setServicePrice}  = useContext(CheckBoxContext);
    const [selectedCheckbox,setSelectedCheckbox] = useState([]);

    const handleOnChange = (checkboxData) => {

        const checkboxArray = [...selectedCheckbox];

        const index = checkboxArray.findIndex(
            (checkbox) => checkbox.label === checkboxData.label
        );
        if (index === -1) {
            checkboxArray.push(checkboxData);
        } else {
            checkboxArray.splice(index,1);
        }
        setSelectedCheckbox((prevState) => [...prevState, ...checkboxArray]);

        if (checkboxArray.length > 0) {
            const lastSelectedCheckbox = checkboxArray[
            checkboxArray.length - 1
        ];
            setSelectedService(lastSelectedCheckbox.label);
            setServicePrice(lastSelectedCheckbox.price);
        } else {
            setSelectedService(null);
            setServicePrice(null);
        }
        // setSelectedService(checkboxData.label);
        // setServicePrice(checkboxData.price);
        console.log(selectedCheckbox);
    }
    return (
        <AppLayout>
          <Sidebar />
          <MainWrapper>
            <HeadingGroup heading="Pick add-ons" ptag="Add-ons help enhance your gaming experience." />
            <div id="form" className="form-class">
                <div className="checkbox-group">
                    <Checkbox
                        id={1} 
                        label="Online Service" 
                        text="Access to multiplayer games" 
                        price="+$1/mon"
                        onChange={() => handleOnChange({label: "Online Service" , price:1 })}
                        selectedCheckbox={selectedCheckbox === 1} />
                    <Checkbox
                        id={2} 
                        label="Larger Storage" 
                        text="Extra 1TB of cloud save" 
                        price="+$2/mon"
                        onChange={() => handleOnChange({label: "Larger Storage" , price:2 })}
                        selectedCheckbox={selectedCheckbox === 2} />
                    <Checkbox
                        id={3} 
                        label="Customizable Profile" 
                        text="Custom theme on your profile" 
                        price="+$2/mon"
                        onChange={() => handleOnChange({label: "Customizable Profile" , price:2 })}
                        selectedCheckbox={selectedCheckbox === 3} />
                </div>
                <div className="form-buttons">
                    <Link to="/select-plan"><Button type="submit" className="btn-goback">Go Back</Button></Link>
                    <Link to="/summary"><Button type="submit" className="btn">Next Step</Button></Link>
                </div>
            </div>
          </MainWrapper>
        </AppLayout>
    );
}
export default AddOns;