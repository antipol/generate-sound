import React from "react";
import { makeSound } from "../helpers/makeSound";

const App = () => {
  const handleStart = e => {
    // loop the amount of times there are nodes in makeSound
    for (let i = 0; i < 14; i++) {
      // IIFE in order to use setTimeout inside loop
      (() => {
        setTimeout(() => {
          //play sound on each iteration, i decides which node is played
          makeSound(i);
          //delay each sound 0.5 second * i (setTimeout is non-blocking, without *i it plays all sounds at the same time, here after 0.5 second)
        }, 500 * i);
      })();
    }
  };

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={handleStart}>Play</button>
    </div>
  );
};

export default App;
