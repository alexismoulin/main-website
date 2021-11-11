import "./css/styles.css";
import NavigationBar from "./Components/Navigation/NavigationBar";
import Masthead from "./Components/Masthead/Masthead";
import Testimonial from "./Components/Testimonial/Testimonial";
import Features from "./Components/Features/Features";
import Subsection from "./Components/SubSection/Subsection";
import CallToAction from "./Components/CallToAction/CallToAction";
import BadgeSection from "./Components/BadgeSection/BadgeSection";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Masthead />
      <Testimonial />
      <Features />
      <Subsection />
      <CallToAction />
      <BadgeSection />
      <Footer />
    </div>
  );
}

export default App;
