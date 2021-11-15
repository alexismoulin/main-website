import DeviceScreenshot from "./DeviceScreenshot";
import BackgroundCircle from "./BackgroundCircle";
import CircleSVG from "./CircleSVG";
import CrossSVG from "./CrossSVG";
import WatchScreenshot from "./WatchScreenshot";

function DeviceMockup(props) {
  // type: masthead vs features

  const devicePreview =
    props.deviceType === "iPhoneX" ? (
      <DeviceScreenshot screenshot={props.screenshot} />
    ) : (
      <WatchScreenshot screenshot={props.screenshot} />
    );

  return (
    <div className={`${props.type}-device-mockup`}>
      <BackgroundCircle />
      <CrossSVG />
      <CircleSVG />
      {devicePreview}
    </div>
  );
}

export default DeviceMockup;
