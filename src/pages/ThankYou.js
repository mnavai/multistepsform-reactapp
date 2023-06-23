import Sidebar from "../components/Sidebar/Sidebar";
import AppLayout from "../components/AppLayout/AppLayout";
import MainWrapper from "../components/MainWrapper/MainWrapper";
import React from 'react'

import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use';



const Summary = () => {
    const { width, height } = useWindowSize();
    return (
        <AppLayout>
            <Sidebar />
            <MainWrapper>
                <div id="form" className="form-class">
                    <div className="finalmessage-container">
                        <div className="thanks-icon">
                           <img className="thank-you-icon" src="assets/images/icon-thank-you.svg" alt="thank you icon"/>
                        </div>
                        <div className="thank-you-heading">

                            <h1>Thank you!</h1>
                        </div>
                        <div className="thank-you-p">
                            <p>Thanks for confirming your subscription! We hope you have fun using our platform! If you ever need support, feel free to email us at support@loremgaming.com</p>
                        </div>
                    </div>
                    <Confetti width={width} height={height} />
                </div>
            </MainWrapper>
        </AppLayout>
    );
}
export default Summary;