function FeatureItem(props) {
  return (
    <div className="col-md-6 mb-5">
      <div className="text-center">
        <i className={`${props.icon} icon-feature text-${props.colorSet}-gradient d-block mb-3`}></i>
        <h3 className="font-alt">{props.title}</h3>
        <p className="text-muted mb-0">{props.message}</p>
      </div>
    </div>
  );
}

export default FeatureItem;
