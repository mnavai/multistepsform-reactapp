import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Sidebar from "../components/Sidebar/Sidebar";
import HeadingGroup from "../components/HeadingGroup/HeadingGroup";
import AppLayout from "../components/AppLayout/AppLayout";
import MainWrapper from "../components/MainWrapper/MainWrapper";
import { useContext } from "react";
import { CardContext } from "../context/CardContext";

const Summary = () => {
    const { selectCards, toggleSelection, cardPrice } = useContext(CardContext);
    return (
        <AppLayout>
            <Sidebar />
            <MainWrapper>
                <HeadingGroup 
                        heading="Finishing up" 
                        ptag="Double-check everything looks ok before confirming." />
                <div id="form" className="form-class">
                    <div className="bill-container">
                        <div className="plan-details-container">
                            <div className="selected-plan">
                                <div class="plan-text-group">
                                    <div class="plan"><h4>{selectCards}</h4></div>
                                    <Link to="/select-plan">Change</Link>
                                </div>
                                <div className="plan-price">{cardPrice}/{toggleSelection}</div>
                            </div>
                            <hr />
                            <div className="selected-addons">
                                <div className="addon-text-group">
                                    <p className="addons-p">Online Service</p>
                                    <p className="addons-price">+$1/mon</p>
                                </div>
                                <div className="addon-text-group">
                                    <p className="addons-p">Larger Storage</p>
                                    <p className="addons-price">+$2/mon</p>
                                </div>
                            </div>
                        </div>
                        <div className="total">
                            <h1 className="total-heading">Total (per month)</h1>
                            <p className="total-price">+$12/mon</p>
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