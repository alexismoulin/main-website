import logo from "../../Assets/logo.png";

function AppLogo() {
  return (
    <div className="navbar-brand fw-bold">
      <img style={styles.imageLogo} src={logo} alt="forecasts"/>
      <div style={styles.textLogo}>AI Stock Forecasts</div>
    </div>
  );
}

export default AppLogo;

const styles = {
  imageLogo: {
    flex: 1,
    width: "2rem",
    height: "2rem",
    verticalAlign: "middle"
  },
  textLogo: {
    display: "inline-block",
    marginLeft: "1rem",
    fontWeight: 700
  }
}
