import FeatureItem from "./FeatureItem";
import DeviceMockup from "../DeviceMockUp/DeviceMockup";

import screenshot from "../../Models/screenshot";

function Features() {

    const featureItemContent = [
        {
            title: "Fortune 100 companies",
            message: "You can easily select a fortunee 100 company you want to forecast the stock value outcome",
            icon: "bi-phone"
        },
        {
            title: "Customizable",
            message: "Create and manage custom companies, foreign companies and cryptocurrencies",
            icon: "bi-camera"
        },
        {
            title: "AI based",
            message: "Machine learning algorithms will calculate a score based on business news",
            icon: "bi-gift"
        },
        {
            title: "Free to Use",
            message: "The App is free to download and use without any hidden in-App purchases",
            icon: "bi-patch-check"
        }
    ];

    function createFeatureItem(num) {
        return (
            <FeatureItem
            title={featureItemContent[num].title}
            message={featureItemContent[num].message}
            icon={featureItemContent[num].icon}
            />
        );
    }

    return(
        <section id="features">
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-8 order-lg-1 mb-5 mb-lg-0">
                        <div className="container-fluid px-5">
                            <div className="row gx-5">
                                {createFeatureItem(0)}
                                {createFeatureItem(1)}
                            </div>
                            <div className="row">
                            {createFeatureItem(2)}
                                {createFeatureItem(3)}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 order-lg-0">
                        <DeviceMockup type="features" screenshot={screenshot.SCREENSHOT2}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;