import React from 'react'
import './Circle.css'

function Circle(props){
  return(
    <div className='circle'>
      {props.children}
    </div>
  )
}

export default Circle