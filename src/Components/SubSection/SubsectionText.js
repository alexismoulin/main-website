function SubsectionText(props) {
    return(
        <div className="col-12 col-lg-5">
        <h2 className="display-4 lh-1 mb-4">{props.data.subsectionTitle}</h2>
        <p className="lead fw-normal text-muted mb-5 mb-lg-0">{props.data.subsectionMessage1}</p>
        <br/>
        <br/>
        <p className="lead fw-normal text-muted mb-5 mb-lg-0">{props.data.subsectionMessage2}</p>
    </div>
    );
}

export default SubsectionText;