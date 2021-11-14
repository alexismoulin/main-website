import FeatureItem from "./FeatureItem";
import DeviceMockup from "../DeviceMockUp/DeviceMockup";

function Features(props) {
  return (
    <section id="features">
      <div className="container px-5">
        <div className="row gx-5 align-items-center">
          <div className="col-lg-8 order-lg-1 mb-5 mb-lg-0">
            <div className="container-fluid px-5">
              <div className="row gx-5">
                <FeatureItem
                  title={props.data.featureTitle1}
                  message={props.data.featureMessage1}
                  icon="bi-phone"
                />
                <FeatureItem
                  title={props.data.featureTitle2}
                  message={props.data.featureMessage2}
                  icon="bi-camera"
                />
              </div>
              <div className="row">
                <FeatureItem
                  title={props.data.featureTitle3}
                  message={props.data.featureMessage3}
                  icon="bi-gift"
                />
                <FeatureItem
                  title={props.data.featureTitle4}
                  message={props.data.featureMessage4}
                  icon="bi-patch-check"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 order-lg-0">
            <DeviceMockup
              type="features"
              screenshot={
                require(`../../Assets/${props.data.assetFolder}/screenshot2.png`)
                  .default
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
