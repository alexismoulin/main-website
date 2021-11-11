import "./css/styles.css";
import NavigationBar from "./Components/Navigation/NavigationBar";
import Masthead from "./Components/Masthead/Masthead";
import Testimonial from "./Components/Testimonial/Testimonial";
import Features from "./Components/Features/Features";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Masthead />
      <Testimonial />
      <Features />
    </div>
  );
}

export default App;
