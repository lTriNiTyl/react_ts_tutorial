import { Canvas, useLoader } from '@react-three/fiber'
import React, { Suspense, useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls, Html, useGLTFLoader } from '@react-three/drei'
//import { Box } from '@material-ui/core'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { Mesh } from 'three'
import * as THREE from 'three'

type Props = {
  url: string,
};

const Model = ({ url }: Props) => {
  const mesh = useRef<Mesh>(null!);
  const glb = useLoader(GLTFLoader, process.env.PUBLIC_URL + url, loader => {
    const draco = new DRACOLoader();
    draco.setDecoderPath('../node_modules/three/examples/js/libs/draco/gltf/');
    loader.setDRACOLoader(draco);
  });
  glb.scene.add(new THREE.AmbientLight(0x404040, 0))
  return (
    <mesh ref={mesh} position={[1,-1,0]} scale={[0.1,0.1,0.1]}>
      <primitive object={glb.scene} />
    </mesh>
  );
}

export const PirateShip3d = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Canvas camera={{ position: [90, 40, 40] }}>
        <ambientLight intensity={10} position={[0, 5, 1]} />
        <OrbitControls />
        <Suspense fallback={<Html>loading..</Html>}>
          <Model url="/assets/pirate-ship.glb" />
        </Suspense>
      </Canvas>
    </div>
  )
}
