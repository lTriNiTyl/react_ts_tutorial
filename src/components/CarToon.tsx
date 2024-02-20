import { useEffect, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, SpotLight } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { Mesh } from "three";
import * as THREE from 'three';

// The code using .gltf 3d file.
function MeshComponent() {
  const fileUrl = process.env.PUBLIC_URL + "/assets/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl, loader => {
    const draco = new DRACOLoader();
    draco.setDecoderPath('../node_modules/three/examples/js/libs/draco/gltf/');
    loader.setDRACOLoader(draco);
  });
  
  gltf.scene.add(new THREE.AmbientLight(0x404040, 0))
  useFrame(() => {
    //mesh.current.rotation.y += 0.01;
  });

  console.log(mesh);
  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export function CarToon() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Canvas className='h-2xl w-2xl'>
        <OrbitControls />
        <ambientLight intensity={10} position={[100, 5, 1]} />
        <directionalLight position={[100, 5, 1]} intensity={20} />
        <directionalLight position={[-10, -10, -5]} intensity={10} />
        <MeshComponent />
      </Canvas>
    </div>
  );
}
