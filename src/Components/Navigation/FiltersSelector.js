import appModel from "../../Models/appModel";
import filtersLogo from "../../Assets/filters/logo.png"

function FiltersSelector(props) {

  // Helper functions

  function selectAppHandler() {
      const { FILTERS } = appModel;
      props.onAppSelection(FILTERS);
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
      <div style={styles.textLogo}>Deep Filters</div>
    </div>
  );
}

export default FiltersSelector;

const styles = {
  divLogo: {
    cursor: "pointer",
    paddingRight: 70
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
