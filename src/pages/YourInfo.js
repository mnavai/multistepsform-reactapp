import Sidebar from "../components/Sidebar/Sidebar";
import HeadingGroup  from "../components/HeadingGroup/HeadingGroup";
import Form from "../components/Form/Form";
const YourInfo = () => {
    return(
        <div className="your-info">
            <Sidebar />
            <main class="main-section">
                <HeadingGroup heading="Personal Info" ptag="Please provide your name, email address, and phone number." />
                <Form />
            </main>
        </div>
    );
}
export default YourInfo;