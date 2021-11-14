import appModel from "../../Models/appModel";

function AppLogo(props) {

  // Helper functions

  function selectAppData() {
  }

  // Component Body

  return (
    <div
      className="navbar-brand fw-bold"
      style={styles.divLogo}
      onClick={selectAppData}
    >
      <img
        style={styles.imageLogo}
        src={require(`../../Assets/${props.data.assetFolder}/logo.png`).default}
        alt={props.data.apptitle}
      />
      <div style={styles.textLogo}>{props.data.appTitle}</div>
    </div>
  );
}

export default AppLogo;

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
