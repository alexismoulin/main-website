function WatchScreenshot(props) {
  return (
      <img src={props.screenshot} style={styles.screenshot} alt="screenshot" />
  );
}

export default WatchScreenshot;

const styles = {
  screenshot: {
    zIndex: "100",
    maxWidth: "100%",
    height: "100%",
  },
};
