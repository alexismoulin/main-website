import CSSTransition from "react-transition-group/CSSTransition";

import "./AppBody.css";

import Masthead from "../Masthead/Masthead";
import Testimonial from "../Testimonial/Testimonial";
import Features from "../Features/Features";
import Subsection from "../SubSection/Subsection";
import CallToAction from "../CallToAction/CallToAction";
import BadgeSection from "../BadgeSection/BadgeSection";
import Footer from "../Footer/Footer";

function AppBody(props) {
  console.log(props.data);
  return (
    <CSSTransition
      in={props.show}
      timeout={500}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: "",
        enterActive: "AppBodyOpen",
        exit: "",
        exitActive: "AppBodyClosed",
      }}
    >
      <div>
      <Masthead data={props.data}/>
      <Testimonial data={props.data}/>
      <Features data={props.data}/>
      <Subsection data={props.data}/>
      <CallToAction data={props.data}/>
      <BadgeSection data={props.data}/>
      <Footer data={props.data}/>
      </div>
    </CSSTransition>
  );
}

export default AppBody;
