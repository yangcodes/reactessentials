import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} in the house!`);
  }, [emotion]);
  useEffect(() => {
    console.log(`It's ${secondary} in the house!`);
  }, [secondary]);

  return (
    <>
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setSecondary("crabby")}>Crabby </button>
      <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
      <button onClick={() => setEmotion("pumped")}>Pump</button>
    </>
  );
}

export default App;
