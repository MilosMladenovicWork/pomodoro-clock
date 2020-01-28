import React, {useState, useEffect, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import Circle from './Circle'
import CircleContainer from './CircleContainer'
import TimeSetting from './TimeSetting'
import InputMinutes from './InputMinutes'
import InputSeconds from './InputSeconds'
import notificationSound from './sounds/notification.mp3'

function App() {
  const circlePath = useRef(null);
  const audio = useRef(null);
  const [time, setTime] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')
  const [startTime, setStartTime] = useState('')
  const [play, setPlay] = useState(false)

  const minutesInput = (minutes) => {
    setMinutes(minutes)
  }

  const secondsInput = (seconds) => {
    setSeconds(seconds)
  }



  const playChange = (value) => {
    setPlay((prevState) => {
      return !prevState
    })
  }

  const resetTimer = () => {
    setMinutes('')
    setSeconds('')
    setTime('')
    setStartTime('')
    setPlay(false)
  }

  useEffect(() => {
    if(startTime === ''){
      setTime(Number(minutes) * 60 + Number(seconds))
    }
    if(play){
      setTime((prevState) => {
        return prevState - 1
      })
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
      setMinutes(Math.floor(time/60))
      setSeconds(time % 60)
  }, [time])

  useEffect(() => {
    if(startTime === ''){
      setStartTime(time)
    }
    if(time === 0){
      setPlay(false)
      setStartTime('')
      setMinutes('')
      setSeconds('')
      setTime('');
      audio.current.play();
    }
  }, [time])



  return (
    <div className="App">
        <CircleContainer>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 468 468" style={{transform:'rotate(-90deg)'}}>
  <g id="Ellipse_3" data-name="Ellipse 3" fill="transparent" stroke="rgb(250, 0, 154)" stroke-width="2.8vh">
    <circle cx="234" cy="234" r="234" stroke="none"/>
    <circle cx="234" cy="234" r="219" style={{transition:'1s'}} ref={circlePath} strokeDasharray='1375.46px' strokeDashoffset={1375.46/startTime * (time)} fill="none"/>
  </g>
</svg>
        </CircleContainer>
      <Circle>
        <TimeSetting>
          <div className='inputs'>
            <InputMinutes minutesInput={minutesInput} minutes={minutes} startTime={startTime}/>
            <InputSeconds secondsInput={secondsInput} seconds={seconds} startTime={startTime}/>
          </div>
          <div className='buttons'>
            <button disabled={(minutes > 0 || seconds > 0) ? false : true} onClick={() => playChange()}>{play ? 'pause' : 'play'}</button>
            <button onClick={() => resetTimer()}>reset</button>
          </div>
        </TimeSetting>
      </Circle>
      <audio ref={audio} controls>
        <source src={notificationSound} type='audio/mpeg'/>
      </audio>
    </div>
  );
}

export default App;
