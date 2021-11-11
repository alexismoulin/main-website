import DeviceScreenshot from "./DeviceScreenshot";
import BackgroundCircle from "./BackgroundCircle";
import CircleSVG from "./CircleSVG";
import CrossSVG from "./CrossSVG";

function DeviceMockup(props) {

    // type: masthead vs features
    return(
        <div className={`${props.type}-device-mockup`}>
        <BackgroundCircle />
        <CrossSVG />
        <CircleSVG />
        <DeviceScreenshot screenshot={props.screenshot} />
      </div>
    );
}

export default DeviceMockup;