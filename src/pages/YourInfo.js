import Sidebar from "../components/Sidebar/Sidebar";
import HeadingGroup  from "../components/HeadingGroup/HeadingGroup";
import Form from "../components/Form/Form";
import AppLayout from "../components/AppLayout/AppLayout";
import MainWrapper from "../components/MainWrapper/MainWrapper";

const YourInfo = () => {
    return(
        <AppLayout>
            <Sidebar />
            <MainWrapper>
                <HeadingGroup heading="Personal Info" ptag="Please provide your name, email address, and phone number." />
                <div id="form" className="form-class">
                    <Form />
                </div>
            </MainWrapper>
        </AppLayout>    
    );
}
export default YourInfo;