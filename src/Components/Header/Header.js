import NavigationBar from "./NavigationBar";
import AppLogo from "./AppLogo";
import NavLink from "./NavLink";
import NavActions from "./NavActions";

function Header() {
  return (
    <NavigationBar>
      <AppLogo />
      <NavActions>
        <NavLink href="#features">Features</NavLink>
        <NavLink href="#download">Download</NavLink>
      </NavActions>
    </NavigationBar>
  );
}

export default Header;
