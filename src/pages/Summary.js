import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Sidebar from "../components/Sidebar/Sidebar";
import HeadingGroup from "../components/HeadingGroup/HeadingGroup";
import AppLayout from "../components/AppLayout/AppLayout";
import MainWrapper from "../components/MainWrapper/MainWrapper";

const Summary = () => {
    return (
        <AppLayout>
            <Sidebar />
            <MainWrapper>
                <HeadingGroup 
                        heading="Finishing up" 
                        ptag="Double-check everything looks ok before confirming." />
                <div id="form" className="form-class">
                    <div className="bill-container">
                        <div className="selected-plan">
                            <div class="plan"></div>
                            <Link to="/select-plan">Change</Link>
                        </div>
                        <hr />
                        <div className="selected-addons">

                        </div>
                        <div className="total-price">

                        </div>
                    </div>
                    <div className="form-buttons">
                        <Link to="/add-ons"><Button type="submit" className="btn-goback">Go Back</Button></Link>
                        <Link to="/thank-you"><Button type="submit" className="btn">Confirm</Button></Link>
                    </div>
                </div>
            </MainWrapper>
        </AppLayout>
    );
}
export default Summary;