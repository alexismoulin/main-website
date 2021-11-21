import React, { useState } from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import "./css/styles.css";

import appModel from "./Models/appModel";

import NavigationBar from "./Components/Navigation/NavigationBar";
import AppBody from "./Components/AppBody/AppBody";

function App() {
  const [appData, setAppData] = useState(appModel.FORECASTS);
  const [showAppBody, setShowAppBody] = useState(true);

  function selectAppHandler(selectedApp) {
    setShowAppBody(false);
    setTimeout(() => {
      setAppData(selectedApp);
      setShowAppBody(true)
    }, 500)
  }

  return (
    <div className="App">
      <NavigationBar data={appData} onAppSelection={selectAppHandler} />
      <CSSTransition
        in={showAppBody}
        timeout={1000}
        mountOnEnter
        unmountOnExit
        classNames={{
          enter: "",
          enterActive: "AppBodyOpen",
          exit: "",
          exitActive: "AppBodyClosed",
        }}
      >
        <AppBody show={showAppBody} data={appData}/>
      </CSSTransition>
    </div>
  );
}

export default App;
