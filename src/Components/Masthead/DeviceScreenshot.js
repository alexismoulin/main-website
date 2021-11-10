import screenshot1 from "../../Assets/screenshot1.png";

function DeviceScreenshot() {
  return (
    <div className="device-wrapper">
      <div
        className="device"
        data-device="iPhoneX"
        data-orientation="portrait"
        data-color="black"
      >
        <div className="screen bg-black">
          <img src={screenshot1} style={styles.screenshot} alt="screenshot" />
        </div>
      </div>
    </div>
  );
}

export default DeviceScreenshot;

const styles = {
    screenshot: {
        maxWidth: "100%",
        height: "100%"
    }
}
