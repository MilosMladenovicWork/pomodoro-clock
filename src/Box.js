import React, {useRef, useEffect} from 'react'
import {useFrame, useThree} from 'react-three-fiber'

const Box = (props) => {
  const mesh = useRef()
  const {camera} = useThree()
  useEffect(() => {
    camera.fov = 75
    camera.aspect = window.innerWidth / window.innerHeight
    camera.near = 0.1
    camera.far = 1
  
    camera.up.set(0, 0, 1)
    camera.position.set(0, 0, 10)
  }, [])

  useFrame(() => {
    
    camera.position.z -= 0.0003
    if(camera.position.z <= -8){
      camera.position.z = 0;
    }
  })


  return(
    <mesh
      position={props.position}
      ref={mesh}
      scale={[0.2, 0.2, 0.2]}
      camera={{fov:120}}
      >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={'rgb(250, 0, 154)'} />
    </mesh>
  )
}

export default Box