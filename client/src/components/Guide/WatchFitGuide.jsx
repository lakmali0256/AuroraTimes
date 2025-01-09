import React from "react";
import "./WatchFitGuide.css"; // Import custom styles

const WatchFitGuide = () => {
  return (
    <div className="watch-fit-guide">
      <div className="background-image">
        <img src="./upload/Guide.jpg" alt="Watch Fit Guide" />
        <div className="overlay-text">
          <h3>Watch Fit Guide</h3>
          <p>Size matters; find the perfect watch</p>
          <button className="learn-more">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default WatchFitGuide;
