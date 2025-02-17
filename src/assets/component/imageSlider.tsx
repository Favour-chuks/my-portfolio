import { useState, useEffect, useRef } from "react";
import "../../../testcomponents/testscript";
import "../../../public/images/RUNGGON.png";

export default function Slideshow() {
  const [index, setIndex] = useState(0);
  const colors = ["#0088FE", "#00C49F", "#FFBB28"];
  const delay = 2500;

  const timeoutref = useRef(null);
  const resetTimeout = () => {
    if (timeoutref.current) {
      clearTimeout(timeoutref.current);
    }
  };

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout;
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {colors.map((backgroundColor, index) => (
          <div className="slide" key={index} style={{ backgroundColor }}>
            <img src="/images/RUNGGON.png" alt="runggon png" />
            <img src="/images/img1.jpg" alt="runggon png" />
            <img src="/images/img2.jpg" alt="runggon png" />
            {/* <div style={backgroundImage="url()"}></div> */}
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div key={idx} className="slideshowDot"></div>
        ))}
      </div>
    </div>
  );
}
