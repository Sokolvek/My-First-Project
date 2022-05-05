import React, {useEffect, useRef, useState} from 'react';
import Timer from './components/timer';
import './styles/App.css';
function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0)
  var times;
useEffect(()=>{
times = setInterval(()=>{
  setSeconds(seconds+1);
  if(seconds===59){
  setMinutes(minutes+1)
  setSeconds(0)
}
  },1000);

 


return () => clearInterval(times);

});
const res = () => {
  setMinutes(0);
  setSeconds(0);
    }

const stop = () => {
  clearInterval(times)
}
const start = () =>{
  times = setInterval(()=>{
    setSeconds(seconds+1);
    if(seconds===59){
    setMinutes(minutes+1)
    setSeconds(0)
  }
    },1000);
}
  
  return (
  
  
     <div className='App'>
       
       <div className=''>
         <h1 className='Test__One'>{minutes} : {seconds}</h1>
       </div>
       <div className='Buttons'>
         <button onClick={stop}>Stop</button>
         <button onClick={start}>Start</button>
         <button onClick={res}>Reset</button>

       </div>

     </div>
  );
}

export default App;
