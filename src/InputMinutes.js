import React from 'react'

function InputMinutes(props){
  return(
    <input type='number' name='minutes' onChange={(e)=> {props.minutesInput(e.target.value)}} value={props.time}/>
  )
}

export default InputMinutes