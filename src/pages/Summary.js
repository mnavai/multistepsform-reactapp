import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Sidebar from "../components/Sidebar/Sidebar";
import HeadingGroup from "../components/HeadingGroup/HeadingGroup";

const Summary = () => {
    return (
        <div className="summary">
            <Sidebar />
            <main className="main-section">
                <HeadingGroup heading="Finishing up" ptag="Double-check everything looks ok before confirming." />
                <div className="">

                </div>
                <div className="buttons">
                    <Link to="/add-ons"><Button type="submit" className="btn-goback">Go Back</Button></Link>
                    <Link to="/"><Button type="submit" className="btn">Home</Button></Link>
                </div>
            </main>
        </div>
    );
}
export default Summary;