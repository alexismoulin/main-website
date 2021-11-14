import badge from "../../Assets/app-store-badge.svg";

function AppleStoreBadge(props) {
  return (
    <div className="d-flex flex-column flex-lg-row align-items-center">
      <a href={props.data.appStoreURL}>
        <img className="app-badge" src={badge} alt="Apple Store" />
      </a>
    </div>
  );
}

export default AppleStoreBadge;
