import React, {useState, useEffect, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import Circle from './Circle'
import CircleContainer from './CircleContainer'
import TimeSetting from './TimeSetting'
import InputMinutes from './InputMinutes'

function App() {
  const circlePath = useRef(null);
  const [time, setTime] = useState('')
  const [startTime, setStartTime] = useState('')
  const [play, setPlay] = useState(false)

  const minutesInput = (minutes) => {
    setTime(minutes)
  }

  const playChange = (value) => {
    setPlay((prevState) => {
      return !prevState
    })
  }

  useEffect(() => {
    if(play){
      setStartTime(time)
      const tick = setInterval(() => {
        setTime((prevState) => {
          return prevState - 1
        })
      }, 1000)
      return () => {
        clearInterval(tick)
      }
    }
  }, [play])

  useEffect(() => {
    if(time === 0){
      setPlay(false)
      setStartTime('')
      setTime('')
    }
  }, [time])



  return (
    <div className="App">
        <CircleContainer>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 468 468" style={{transform:'rotate(-90deg)'}}>
  <g id="Ellipse_3" data-name="Ellipse 3" fill="transparent" stroke="rgb(250, 0, 154)" stroke-width="2.8vh">
    <circle cx="234" cy="234" r="234" stroke="none"/>
    <circle cx="234" cy="234" r="219" style={{transition:'1s'}} ref={circlePath} strokeDasharray='1375.46px' strokeDashoffset={play && 1375.46/startTime * (time)} fill="none"/>
  </g>
</svg>
        </CircleContainer>
      <Circle>
        <TimeSetting>
          <InputMinutes minutesInput={minutesInput} time={time}/>
          <button onClick={() => playChange()}>{play ? 'pause' : 'play'}</button>
        </TimeSetting>
      </Circle>
    </div>
  );
}

export default App;
