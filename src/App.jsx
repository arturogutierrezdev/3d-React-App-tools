
import {useRef, useState} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import './App.css'
import Geometries from 'three/src/renderers/common/Geometries.js'

//directly controls box
function CardModel(props)
{
const ref = useRef()
const [hovered, hover]= useState(false)
const [clicked, click] = useState(false)
const { nodes, materials } = useGLTF('/card.glb')
useFrame((state, delta) => (ref.current.rotation.y +=delta))
return (
 <group {...props} dispose={null}>
  <mesh
    {...props}    
    ref={ref}
    scale={clicked ? 1.5 : 1}
    onClick={(event) => click(!clicked)}
    onPointerOver={(event) => (event.stopPropagation(), hover(true))}
    onPointerOut={(event) => hover(false)}
    geometry={nodes.Cube.geometry}
    position={[0, 0, 0]}
    >
    <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'}/>
  </mesh>
  
  </group>
)
}

export default function App() {
  return (
    <>
    <div className={"canvas-container"}>
      <Canvas>
      <CardModel position={[0, -1, -1]} />
        <ambientLight intensity = {0.5} />
        <directionalLight color="white" position={[0,0,5]} />
        <OrbitControls />
      </Canvas>
    </div>
    </>
);
}