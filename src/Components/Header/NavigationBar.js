import "./NavigationBar.css";

function NavigationBar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
      id="mainNav"
    >
      <div className="container px-5">{props.children}</div>
    </nav>
  );
}

export default NavigationBar;
