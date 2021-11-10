import AppleStoreBadge from "./AppleStoreBadge";

function MastText() {
  return (
    <div className="col-lg-6">
      <div className="mb-5 mb-lg-0 text-center text-lg-start">
        <h1 className="display-1 lh-1 mb-3">Forecast stock score via AI</h1>
        <p className="lead fw-normal text-muted mb-5">
          An innovative application that leverages Artificial Intelligence in
          order to forecast variation in stock value.
        </p>
        <AppleStoreBadge />
      </div>
    </div>
  );
}

export default MastText;
