import "./AppLogo.css";
import logo from "../Assets/logo.png";

console.log(logo);

function AppLogo() {
  return (
    <div>
      <img className="image-logo" src={logo} alt="forecasts"/>
      <div className="navbar-brand">AI Stock Forecasts</div>
    </div>
  );
}

export default AppLogo;
