import React, { useState } from "react";
import "./css/styles.css";
import appModel from "./Models/appModel";
import NavigationBar from "./Components/Navigation/NavigationBar";
import Masthead from "./Components/Masthead/Masthead";
import Testimonial from "./Components/Testimonial/Testimonial";
import Features from "./Components/Features/Features";
import Subsection from "./Components/SubSection/Subsection";
import CallToAction from "./Components/CallToAction/CallToAction";
import BadgeSection from "./Components/BadgeSection/BadgeSection";
import Footer from "./Components/Footer/Footer";

function App() {

  const [appData, setAppData] = useState(appModel.FORECAST)

  return (
    <div className="App">
      <NavigationBar data={appData}/>
      <Masthead data={appData}/>
      <Testimonial data={appData}/>
      <Features data={appData}/>
      <Subsection data={appData}/>
      <CallToAction data={appData}/>
      <BadgeSection data={appData}/>
      <Footer data={appData}/>
    </div>
  );
}

export default App;
