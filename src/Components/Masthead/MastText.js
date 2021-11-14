import AppleStoreBadge from "./AppleStoreBadge";

function MastText(props) {
  return (
    <div className="col-lg-6">
      <div className="mb-5 mb-lg-0 text-center text-lg-start">
        <h1 className="display-1 lh-1 mb-3">{props.data.mastheadTitle}</h1>
        <p className="lead fw-normal text-muted mb-5">{props.data.mastheadText}</p>
        <AppleStoreBadge data={props.data} />
      </div>
    </div>
  );
}

export default MastText;
