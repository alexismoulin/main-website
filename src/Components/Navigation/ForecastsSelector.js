import appModel from "../../Models/appModel";
import forecastsLogo from "../../Assets/forecasts/logo.png"

function ForecastsSelector(props) {

  // Helper functions

  function selectAppHandler() {
    const { FORECASTS } = appModel;
    props.onAppSelection(FORECASTS);
}

  // Component Body

  return (
    <div
      className="navbar-brand fw-bold"
      style={styles.divLogo}
      onClick={selectAppHandler}
    >
      <img
        style={styles.imageLogo}
        src={forecastsLogo}
        alt=""
      />
      <div style={styles.textLogo}>AI Stock Forecasts</div>
    </div>
  );
}

export default ForecastsSelector;

const styles = {
  divLogo: {
    cursor: "pointer",
  },
  imageLogo: {
    flex: 1,
    width: "2rem",
    height: "2rem",
    verticalAlign: "middle",
  },
  textLogo: {
    display: "inline-block",
    marginLeft: "1rem",
    fontWeight: 700,
  },
};
