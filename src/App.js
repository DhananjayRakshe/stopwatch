import { useState } from 'react';
import './App.css';
import BtnComponent from './Components/BtnComponent';
import DisplayComponent from './Components/DisplayComponent';

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  // not started =0
  // started = 1
  // pause = 2

  const start = () => {
    run();
    setStatus(1)
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms;
  var updatedS = time.s;
  var updatedM = time.m;
  var updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH })
  }

  const stop = () => {
    clearInterval(interv)
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv)
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 })
  };

  const resume = () => start();

  return (
    <div className="App">
      <h1>Stop Watch</h1>
      <br />
      <DisplayComponent time={time} />
      <br />
      <BtnComponent start={start} stop={stop} reset={reset} resume = {resume} status={status} />
    </div>
  );
}

export default App;
