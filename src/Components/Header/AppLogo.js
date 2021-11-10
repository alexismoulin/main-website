import "./AppLogo.css";
import logo from "../../Assets/logo.png";

function AppLogo() {
  return (
    <div className="navbar-brand fw-bold">
      <img className="image-logo" src={logo} alt="forecasts"/>
      <div className="text-logo">AI Stock Forecasts</div>
    </div>
  );
}

export default AppLogo;
