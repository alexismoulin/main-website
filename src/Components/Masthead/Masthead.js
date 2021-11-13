import MastText from "./MastText";
import DeviceMockup from "../DeviceMockUp/DeviceMockup";

import screenshot from "../../Models/screenshot";

function Masthead(props) {
  return (
    <header className="masthead">
      <div className="container px-5">
        <div className="row gx-5 align-items-center">
          <MastText />
          <div className="col-lg-6">
            <DeviceMockup type="masthead" screenshot={screenshot.SCREENSHOT1}/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Masthead;
