import React from 'react'
import './CircleContainer.css'

function CircleContainer(props){
  return(
    <div class='circle-container'>
      {props.children}
    </div>
  ) 
}

export default CircleContainer