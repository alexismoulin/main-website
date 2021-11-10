function BackgroundCircle() {
  return (
    <svg
      className="circle"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="circleGradient" gradientTransform="rotate(45)">
          <stop className="gradient-start-color" offset="0%"></stop>
          <stop className="gradient-end-color" offset="100%"></stop>
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="50"></circle>
    </svg>
  );
}

export default BackgroundCircle;
