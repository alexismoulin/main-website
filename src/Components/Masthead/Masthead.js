import MastText from "./MastText";
import DeviceMockup from "../DeviceMockUp/DeviceMockup";

function Masthead(props) {
  return (
    <header className="masthead">
      <div className="container px-5">
        <div className="row gx-5 align-items-center">
          <MastText data={props.data} />
          <div className="col-lg-6">
            <DeviceMockup
              type="masthead"
              data={props.data}
              screenshot={require(`../../Assets/${props.data.assetFolder}/screenshot1.png`).default}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Masthead;
