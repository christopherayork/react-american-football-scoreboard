//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function convertTime(time) {
  return '00:00';
}

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  let [homeScore, homeAdd] = useState(0);
  let [awayScore, awayAdd] = useState(0);
  let [time, setTime] = useState(0); // Convert this to an actual time by adding a colon before the last two values

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{ homeScore }</div>
          </div>
          <div className="timer">{ convertTime(time) }</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{ awayScore }</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={ () => homeAdd(homeScore + 7) } className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={ () => homeAdd(homeScore + 3) } className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={ () => awayAdd(awayScore + 7) } className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={ () => awayAdd(awayScore + 3) } className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
