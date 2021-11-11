function Testimonial() {
  return (
    <aside className="text-center bg-gradient-primary-to-secondary" style={styles.asideLayout}>
      <div className="container px-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-xl-8">
            <div className="h2 fs-1 text-white mb-4">
              An intuitive solution to track companies forecasts wrapped up in a
              single app
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Testimonial;

const styles = {
  asideLayout: {
      paddingTop: "5rem",
      paddingBottom: "4rem"
  }
}
