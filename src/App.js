import React, {useState, useEffect, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import Circle from './Circle'
import CircleContainer from './CircleContainer'
import TimeSetting from './TimeSetting'
import InputMinutes from './InputMinutes'
import InputSeconds from './InputSeconds'
import notificationSound from './sounds/notification.mp3'
import Box from './Box'
import {Canvas, useFrame} from 'react-three-fiber'

function App() {
  const circlePath = useRef(null);
  const audio = useRef(null);
  const [time, setTime] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')
  const [startTime, setStartTime] = useState('')
  const [play, setPlay] = useState(false)

  let cameraPosition = 50;

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
      if(startTime !== ''){
      audio.current.currentTime = 0;
      audio.current.play();
      }
      setPlay(false)
      setStartTime('')
      setMinutes('')
      setSeconds('')
      setTime('');
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
      <div id='canvas'>
        <Canvas camera={{far:cameraPosition}}>
          <ambientLight/>
          <pointLight position={[10, 10, 10]} />
          <Box position={[-5, 1, 0]}/>
          <Box position={[-4, 4, 0]}/>
          <Box position={[-3, -5, 0]}/>
          <Box position={[-2, 3, 0]}/>
          <Box position={[-1, -2, 0]}/>
          <Box position={[1, 1, 0]}/>
          <Box position={[2, 2, 0]}/>
          <Box position={[3, -3, 0]}/>
          <Box position={[4, -4, 0]}/>
          <Box position={[5, 2, 0]}/>
          <Box position={[6, 5, 0]}/>
          <Box position={[7, 3, 0]}/>

          <Box position={[-2, 1, -2]}/>
          <Box position={[-1, 4, -2]}/>
          <Box position={[1, -5, -2]}/>
          <Box position={[1, 3, -2]}/>
          <Box position={[2, -2, -2]}/>
          <Box position={[4, 1, -2]}/>
          <Box position={[5, 2, -2]}/>
          <Box position={[6, -3, -2]}/>
          <Box position={[7, -4, -2]}/>
          <Box position={[8, 2, -2]}/>
          <Box position={[9, 5, -2]}/>
          <Box position={[10, 3, -2]}/>

          <Box position={[-8, 1, -2]}/>
          <Box position={[-7, 4, -2]}/>
          <Box position={[-5, -5, -2]}/>
          <Box position={[-5, 3, -2]}/>
          <Box position={[-4, -2, -2]}/>
          <Box position={[-2, 1, -2]}/>
          <Box position={[-1, 2, -2]}/>
          <Box position={[1, -3, -2]}/>
          <Box position={[1, -4, -2]}/>
          <Box position={[2, 2, -2]}/>
          <Box position={[3, 5, -2]}/>
          <Box position={[4, 3, -2]}/>

          <Box position={[-2, 1, -4]}/>
          <Box position={[-1, 4, -4]}/>
          <Box position={[1, -5, -4]}/>
          <Box position={[1, 3, -4]}/>
          <Box position={[2, -2, -4]}/>
          <Box position={[4, 1, -4]}/>
          <Box position={[5, 2, -4]}/>
          <Box position={[6, -3, -4]}/>
          <Box position={[7, -4, -4]}/>
          <Box position={[8, 2, -4]}/>
          <Box position={[9, 5, -4]}/>
          <Box position={[10, 3, -4]}/>

          <Box position={[-8, 1, -4]}/>
          <Box position={[-7, 4, -4]}/>
          <Box position={[-5, -5, -4]}/>
          <Box position={[-5, 3, -4]}/>
          <Box position={[-4, -2, -4]}/>
          <Box position={[-2, 1, -4]}/>
          <Box position={[-1, 2, -4]}/>
          <Box position={[1, -3, -4]}/>
          <Box position={[1, -4, -4]}/>
          <Box position={[2, 2, -4]}/>
          <Box position={[3, 5, -4]}/>
          <Box position={[4, 3, -4]}/>

          <Box position={[-2, 1, -6]}/>
          <Box position={[-1, 4, -6]}/>
          <Box position={[1, -5, -6]}/>
          <Box position={[1, 3, -6]}/>
          <Box position={[2, -2, -6]}/>
          <Box position={[4, 1, -6]}/>
          <Box position={[5, 2, -6]}/>
          <Box position={[6, -3, -6]}/>
          <Box position={[7, -4, -6]}/>
          <Box position={[8, 2, -6]}/>
          <Box position={[9, 5, -6]}/>
          <Box position={[10, 3, -6]}/>

          <Box position={[-8, 1, -6]}/>
          <Box position={[-7, 4, -6]}/>
          <Box position={[-5, -5, -6]}/>
          <Box position={[-5, 3, -6]}/>
          <Box position={[-4, -2, -6]}/>
          <Box position={[-2, 1, -6]}/>
          <Box position={[-1, 2, -6]}/>
          <Box position={[1, -3, -6]}/>
          <Box position={[1, -4, -6]}/>
          <Box position={[2, 2, -6]}/>
          <Box position={[3, 5, -6]}/>
          <Box position={[4, 3, -6]}/>

          <Box position={[-2, 1, -8]}/>
          <Box position={[-1, 4, -8]}/>
          <Box position={[1, -5, -8]}/>
          <Box position={[1, 3, -8]}/>
          <Box position={[2, -2, -8]}/>
          <Box position={[4, 1, -8]}/>
          <Box position={[5, 2, -8]}/>
          <Box position={[6, -3, -8]}/>
          <Box position={[7, -4, -8]}/>
          <Box position={[8, 2, -8]}/>
          <Box position={[9, 5, -8]}/>
          <Box position={[10, 3, -8]}/>

          <Box position={[-8, 1, -8]}/>
          <Box position={[-7, 4, -8]}/>
          <Box position={[-5, -5, -8]}/>
          <Box position={[-5, 3, -8]}/>
          <Box position={[-4, -2, -8]}/>
          <Box position={[-2, 1, -8]}/>
          <Box position={[-1, 2, -8]}/>
          <Box position={[1, -3, -8]}/>
          <Box position={[1, -4, -8]}/>
          <Box position={[2, 2, -8]}/>
          <Box position={[3, 5, -8]}/>
          <Box position={[4, 3, -8]}/>

          <Box position={[-2, 1, -10]}/>
          <Box position={[-1, 4, -10]}/>
          <Box position={[1, -5, -10]}/>
          <Box position={[1, 3, -10]}/>
          <Box position={[2, -2, -10]}/>
          <Box position={[4, 1, -10]}/>
          <Box position={[5, 2, -10]}/>
          <Box position={[6, -3, -10]}/>
          <Box position={[7, -4, -10]}/>
          <Box position={[8, 2, -10]}/>
          <Box position={[9, 5, -10]}/>
          <Box position={[10, 3, -10]}/>

          <Box position={[-8, 1, -10]}/>
          <Box position={[-7, 4, -10]}/>
          <Box position={[-5, -5, -10]}/>
          <Box position={[-5, 3, -10]}/>
          <Box position={[-4, -2, -10]}/>
          <Box position={[-2, 1, -10]}/>
          <Box position={[-1, 2, -10]}/>
          <Box position={[1, -3, -10]}/>
          <Box position={[1, -4, -10]}/>
          <Box position={[2, 2, -10]}/>
          <Box position={[3, 5, -10]}/>
          <Box position={[4, 3, -10]}/>

          <Box position={[-2, 1, -12]}/>
          <Box position={[-1, 4, -12]}/>
          <Box position={[1, -5, -12]}/>
          <Box position={[1, 3, -12]}/>
          <Box position={[2, -2, -12]}/>
          <Box position={[4, 1, -12]}/>
          <Box position={[5, 2, -12]}/>
          <Box position={[6, -3, -12]}/>
          <Box position={[7, -4, -12]}/>
          <Box position={[8, 2, -12]}/>
          <Box position={[9, 5, -12]}/>
          <Box position={[10, 3, -12]}/>

          <Box position={[-8, 1, -12]}/>
          <Box position={[-7, 4, -12]}/>
          <Box position={[-5, -5, -12]}/>
          <Box position={[-5, 3, -12]}/>
          <Box position={[-4, -2, -12]}/>
          <Box position={[-2, 1, -12]}/>
          <Box position={[-1, 2, -12]}/>
          <Box position={[1, -3, -12]}/>
          <Box position={[1, -4, -12]}/>
          <Box position={[2, 2, -12]}/>
          <Box position={[3, 5, -12]}/>
          <Box position={[4, 3, -12]}/>

          <Box position={[-2, 1, -14]}/>
          <Box position={[-1, 4, -14]}/>
          <Box position={[1, -5, -14]}/>
          <Box position={[1, 3, -14]}/>
          <Box position={[2, -2, -14]}/>
          <Box position={[4, 1, -14]}/>
          <Box position={[5, 2, -14]}/>
          <Box position={[6, -3, -14]}/>
          <Box position={[7, -4, -14]}/>
          <Box position={[8, 2, -14]}/>
          <Box position={[9, 5, -14]}/>
          <Box position={[10, 3, -14]}/>

          <Box position={[-8, 1, -14]}/>
          <Box position={[-7, 4, -14]}/>
          <Box position={[-5, -5, -14]}/>
          <Box position={[-5, 3, -14]}/>
          <Box position={[-4, -2, -14]}/>
          <Box position={[-2, 1, -14]}/>
          <Box position={[-1, 2, -14]}/>
          <Box position={[1, -3, -14]}/>
          <Box position={[1, -4, -14]}/>
          <Box position={[2, 2, -14]}/>
          <Box position={[3, 5, -14]}/>
          <Box position={[4, 3, -14]}/>

          <Box position={[-2, 1, -16]}/>
          <Box position={[-1, 4, -16]}/>
          <Box position={[1, -5, -16]}/>
          <Box position={[1, 3, -16]}/>
          <Box position={[2, -2, -16]}/>
          <Box position={[4, 1, -16]}/>
          <Box position={[5, 2, -16]}/>
          <Box position={[6, -3, -16]}/>
          <Box position={[7, -4, -16]}/>
          <Box position={[8, 2, -16]}/>
          <Box position={[9, 5, -16]}/>
          <Box position={[10, 3, -16]}/>

          <Box position={[-8, 1, -16]}/>
          <Box position={[-7, 4, -16]}/>
          <Box position={[-5, -5, -16]}/>
          <Box position={[-5, 3, -16]}/>
          <Box position={[-4, -2, -16]}/>
          <Box position={[-2, 1, -16]}/>
          <Box position={[-1, 2, -16]}/>
          <Box position={[1, -3, -16]}/>
          <Box position={[1, -4, -16]}/>
          <Box position={[2, 2, -16]}/>
          <Box position={[3, 5, -16]}/>
          <Box position={[4, 3, -16]}/>

          <Box position={[-2, 1, -18]}/>
          <Box position={[-1, 4, -18]}/>
          <Box position={[1, -5, -18]}/>
          <Box position={[1, 3, -18]}/>
          <Box position={[2, -2, -18]}/>
          <Box position={[4, 1, -18]}/>
          <Box position={[5, 2, -18]}/>
          <Box position={[6, -3, -18]}/>
          <Box position={[7, -4, -18]}/>
          <Box position={[8, 2, -18]}/>
          <Box position={[9, 5, -18]}/>
          <Box position={[10, 3, -18]}/>

          <Box position={[-8, 1, -18]}/>
          <Box position={[-7, 4, -18]}/>
          <Box position={[-5, -5, -18]}/>
          <Box position={[-5, 3, -18]}/>
          <Box position={[-4, -2, -18]}/>
          <Box position={[-2, 1, -18]}/>
          <Box position={[-1, 2, -18]}/>
          <Box position={[1, -3, -18]}/>
          <Box position={[1, -4, -18]}/>
          <Box position={[2, 2, -18]}/>
          <Box position={[3, 5, -18]}/>
          <Box position={[4, 3, -18]}/>

          <Box position={[-2, 1, -20]}/>
          <Box position={[-1, 4, -20]}/>
          <Box position={[1, -5, -20]}/>
          <Box position={[1, 3, -20]}/>
          <Box position={[2, -2, -20]}/>
          <Box position={[4, 1, -20]}/>
          <Box position={[5, 2, -20]}/>
          <Box position={[6, -3, -20]}/>
          <Box position={[7, -4, -20]}/>
          <Box position={[8, 2, -20]}/>
          <Box position={[9, 5, -20]}/>
          <Box position={[10, 3, -20]}/>

          <Box position={[-8, 1, -20]}/>
          <Box position={[-7, 4, -20]}/>
          <Box position={[-5, -5, -20]}/>
          <Box position={[-5, 3, -20]}/>
          <Box position={[-4, -2, -20]}/>
          <Box position={[-2, 1, -20]}/>
          <Box position={[-1, 2, -20]}/>
          <Box position={[1, -3, -20]}/>
          <Box position={[1, -4, -20]}/>
          <Box position={[2, 2, -20]}/>
          <Box position={[3, 5, -20]}/>
          <Box position={[4, 3, -20]}/>

          <Box position={[-2, 1, -22]}/>
          <Box position={[-1, 4, -22]}/>
          <Box position={[1, -5, -22]}/>
          <Box position={[1, 3, -22]}/>
          <Box position={[2, -2, -22]}/>
          <Box position={[4, 1, -22]}/>
          <Box position={[5, 2, -22]}/>
          <Box position={[6, -3, -22]}/>
          <Box position={[7, -4, -22]}/>
          <Box position={[8, 2, -22]}/>
          <Box position={[9, 5, -22]}/>
          <Box position={[10, 3, -22]}/>

          <Box position={[-8, 1, -22]}/>
          <Box position={[-7, 4, -22]}/>
          <Box position={[-5, -5, -22]}/>
          <Box position={[-5, 3, -22]}/>
          <Box position={[-4, -2, -22]}/>
          <Box position={[-2, 1, -22]}/>
          <Box position={[-1, 2, -22]}/>
          <Box position={[1, -3, -22]}/>
          <Box position={[1, -4, -22]}/>
          <Box position={[2, 2, -22]}/>
          <Box position={[3, 5, -22]}/>
          <Box position={[4, 3, -22]}/>

          <Box position={[-2, 1, -24]}/>
          <Box position={[-1, 4, -24]}/>
          <Box position={[1, -5, -24]}/>
          <Box position={[1, 3, -24]}/>
          <Box position={[2, -2, -24]}/>
          <Box position={[4, 1, -24]}/>
          <Box position={[5, 2, -24]}/>
          <Box position={[6, -3, -24]}/>
          <Box position={[7, -4, -24]}/>
          <Box position={[8, 2, -24]}/>
          <Box position={[9, 5, -24]}/>
          <Box position={[10, 3, -24]}/>

          <Box position={[-8, 1, -24]}/>
          <Box position={[-7, 4, -24]}/>
          <Box position={[-5, -5, -24]}/>
          <Box position={[-5, 3, -24]}/>
          <Box position={[-4, -2, -24]}/>
          <Box position={[-2, 1, -24]}/>
          <Box position={[-1, 2, -24]}/>
          <Box position={[1, -3, -24]}/>
          <Box position={[1, -4, -24]}/>
          <Box position={[2, 2, -24]}/>
          <Box position={[3, 5, -24]}/>
          <Box position={[4, 3, -24]}/>

          <Box position={[-2, 1, -26]}/>
          <Box position={[-1, 4, -26]}/>
          <Box position={[1, -5, -26]}/>
          <Box position={[1, 3, -26]}/>
          <Box position={[2, -2, -26]}/>
          <Box position={[4, 1, -26]}/>
          <Box position={[5, 2, -26]}/>
          <Box position={[6, -3, -26]}/>
          <Box position={[7, -4, -26]}/>
          <Box position={[8, 2, -26]}/>
          <Box position={[9, 5, -26]}/>
          <Box position={[10, 3, -26]}/>

          <Box position={[-8, 1, -26]}/>
          <Box position={[-7, 4, -26]}/>
          <Box position={[-5, -5, -26]}/>
          <Box position={[-5, 3, -26]}/>
          <Box position={[-4, -2, -26]}/>
          <Box position={[-2, 1, -26]}/>
          <Box position={[-1, 2, -26]}/>
          <Box position={[1, -3, -26]}/>
          <Box position={[1, -4, -26]}/>
          <Box position={[2, 2, -26]}/>
          <Box position={[3, 5, -26]}/>
          <Box position={[4, 3, -26]}/>

        </Canvas>
      </div>
    </div>
  );
}

export default App;
