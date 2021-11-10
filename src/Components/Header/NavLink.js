import "./NavLink.css";

function NavLink(props) {
  return (
    <li className="nav-item">
      <a className="nav-link me-lg-3" href={props.href}>
        {props.children}
      </a>
    </li>
  );
}

export default NavLink;
