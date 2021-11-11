import AppLogo from "./AppLogo";
import NavLink from "./NavLink";
import NavActions from "./NavActions";

function NavigationBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
      id="mainNav"
    >
      <div className="container px-5">
        <AppLogo />
        <NavActions>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#download">Download</NavLink>
        </NavActions>
      </div>
    </nav>
  );
}

export default NavigationBar;
