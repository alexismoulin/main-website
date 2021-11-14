import NavLink from "./NavLink";
import NavActions from "./NavActions";
import ForecastsSelector from "./ForecastsSelector";
import FiltersSelector from "./FiltersSelector";

function NavigationBar(props) {

  function selectAppHandler(selectedApp) {
    props.onAppSelection(selectedApp);
  }

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
      id="mainNav"
    >
      <div className="container px-5">
        <ForecastsSelector onAppSelection={selectAppHandler} />
        <FiltersSelector onAppSelection={selectAppHandler} />
        <NavActions>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#download">Download</NavLink>
        </NavActions>
      </div>
    </nav>
  );
}

export default NavigationBar;
