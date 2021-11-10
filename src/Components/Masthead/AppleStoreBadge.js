import badge from "../../Assets/app-store-badge.svg";

function AppleStoreBadge() {
  return (
    <div className="d-flex flex-column flex-lg-row align-items-center">
      <a href="https://apps.apple.com/us/app/ai-stock-forecasts/id1527494965?ign-mpt=uo%3D2">
        <img className="app-badge" src={badge} alt="Apple Store" />
      </a>
    </div>
  );
}

export default AppleStoreBadge;
