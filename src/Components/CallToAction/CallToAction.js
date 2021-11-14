function CallToAction(props) {
  return (
    <section className="cta" id="download">
      <div className="cta-content">
        <div className="container px-5">
          <h2 className="text-white display-1 lh-1 mb-4">
            Stop waiting.
            <br />
            Get it for free.
          </h2>
          <a
            className="btn btn-outline-light py-3 px-4 rounded-pill"
            href={props.data.appStoreURL}
          >
            Download for free
          </a>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
