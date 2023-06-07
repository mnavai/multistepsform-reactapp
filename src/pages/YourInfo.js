import Sidebar from "../components/Sidebar/Sidebar";
import HeadingGroup  from "../components/HeadingGroup/HeadingGroup";
import Form from "../components/Form/Form";
import { Link } from "react-router-dom";
import Button from '../components/Button/Button.jsx';

const YourInfo = () => {
    return(
        <div className="your-info">
            <Sidebar />
            <main className="main-section">
                <HeadingGroup heading="Personal Info" ptag="Please provide your name, email address, and phone number." />
                <div id="form" className="form-class">
                    <Form />
                </div>
            </main>
        </div>
    );
}
export default YourInfo;