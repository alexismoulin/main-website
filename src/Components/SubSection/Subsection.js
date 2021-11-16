import SubsectionText from "./SubsectionText";

function Subsection(props) {
  return (
    <section className="bg-light">
      <div className="container px-5">
        <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
          <SubsectionText data={props.data}/>
          <div className="col-sm-8 col-md-6">
            <div className="px-5 px-sm-0">
              <img
                className="img-fluid rounded-circle"
                src={require(`../../Assets/${props.data.assetFolder}/subSection-picture.jpg`).default}
                alt="Artistic"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subsection;
