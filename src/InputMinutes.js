import React from 'react'
import './inputTime.css'

function InputMinutes(props){

  let shouldDisable = props.startTime !== '' ? 'disabled' : null

  return(
    <label>
      <input type='text' size='2' maxLength='2' min={0} disabled={shouldDisable} name='minutes' onChange={(e)=> {props.minutesInput(e.target.value)}} value={props.minutes}/>
    </label>
  )
}

export default InputMinutes