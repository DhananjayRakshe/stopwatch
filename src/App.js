import { useState } from 'react';
import './App.css';
import BtnComponent from './Components/BtnComponent';
import DisplayComponent from './Components/DisplayComponent';

function App() {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    run();
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms;
  var updatedS = time.s;
  var updatedM = time.m;
  var updatedH = time.h;

  const run = () => {
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH})
  }
   
  return (
    <div className="App">
      <h1>Hello World</h1>
      <DisplayComponent time={time} />
      <BtnComponent start= {start} status = {status} />
    </div>
  );
}

export default App;
