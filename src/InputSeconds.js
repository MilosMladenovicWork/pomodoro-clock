import React from 'react'

function InputSeconds(props){

  let shouldDisable = props.startTime !== '' ? 'disabled' : null

  return(
    <label>
      <input type='text' size='2' maxLength='2' min={0}  disabled={shouldDisable} name='seconds' onChange={(e)=> {props.secondsInput(e.target.value)}} value={props.seconds}/>
    </label>
  )
}

export default InputSeconds