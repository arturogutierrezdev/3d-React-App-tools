
import {useRef, useState} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import './App.css'

//directly controls box
function Box(props) {
const ref = useRef()
const [hovered, hover]= useState(false)
const [clicked, click] = useState(false)
useFrame((state, delta) => (ref.current.rotation.x +=delta))
return (
  <mesh
    {...props}
    ref={ref}
    scale={clicked ? 1.5 : 1}
    onClick={(event) => click(!clicked)}
    onPointerOver={(event) => (event.stopPropagation(), hover(true))}
    onPointerOut={(event) => hover(false)}>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
  </mesh>
)
}

export default function App() {
  return (
    <>
    <div className={"canvas-container"}>
      <Canvas>
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <ambientLight intensity = {0.5} />
        <directionalLight color="white" position={[0,0,5]} />
        <OrbitControls />
      </Canvas>
    </div>
    </>
);
}