import appModel from "../../Models/appModel";
import filtersLogo from "../../Assets/workouts/logo.png"

function WorkoutsSelector(props) {

  // Helper functions

  function selectAppHandler() {
      const { WORKOUTS } = appModel;
      props.onAppSelection(WORKOUTS);
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
        src={filtersLogo}
        alt=""
      />
      <div style={styles.textLogo}>iWorkOut</div>
    </div>
  );
}

export default WorkoutsSelector;

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
