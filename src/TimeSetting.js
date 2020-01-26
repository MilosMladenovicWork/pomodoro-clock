import React from 'react'
import './TimeSetting.css'

function TimeSetting(props){
  return(
    <div className='time-setting'>
      {props.children}
    </div>
  )
}

export default TimeSetting