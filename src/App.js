import React, { useEffect } from "react";
import logo from "./logo.svg";
import lottie from "lottie-web";
import "./App.css";

function App() {
  const animContainer = React.createRef();

  useEffect(() => {
    lottie.loadAnimation({
      container: animContainer.current, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/name-anim.json" // the path to the animation json
    });
  });

  return (
    <div className="App">
      <header className="App-header">
        <div
          id="anim"
          ref={animContainer}
          style={{ height: "300px", width: "100%" }}
        />
        <p>Lottie + After Effects Demo</p>
      </header>
    </div>
  );
}

export default App;
