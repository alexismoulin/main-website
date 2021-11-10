function NavActions(props) {
  return (
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">{props.children}</ul>
    </div>
  );
}

export default NavActions;
