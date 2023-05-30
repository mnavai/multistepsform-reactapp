import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

const Summary = () => {
    return (
        <div className="summary">
            <h1> Summary page</h1>
            <Link to="/"><Button type="submit" className="btn">Home</Button></Link>
        </div>
    );
}
export default Summary;