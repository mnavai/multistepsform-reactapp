import Button from "../../components/Button/Button";
import HeadingGroup from "../../components/HeadingGroup/HeadingGroup";
import Slidebar from "../../components/Sidebar/Sidebar";
import Card from "../../components/Card/Card";

const SecondPage = () => {
    return(
        <div className="SecondPage">
            <Slidebar />
            <main class="main-section">
                <HeadingGroup />
                <form id="form" class="form-group">
                    <Card />
                    <Card />
                    <Card />
                    <div class="grey-bar">
                        <h5 class="grey-bar-month">Monthly</h5>
                        <label class="switch">
                            <input type="checkbox"/>
                            <span className="slider round"></span>
                        </label>
                        <p className="grey-bar-year">Yearly</p>
                    </div>
                    <div className="buttons">
                        <Button type="submit" className="btn-goback">Go Back</Button>
                        <Button type="submit" className="btn">Next Step</Button>
                    </div>
                </form>
            </main>        
        </div>
    );
}
export default SecondPage;