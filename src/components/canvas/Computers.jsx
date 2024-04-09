import React,{Suspense, useState, useEffect} from 'react';
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF} from '@react-three/drei';
import CanvasLoader from "../Loader"

const Computers = (isMobile) => {
  const computer=useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
      //spotlight not working
        position={[-20, 50, 10]}
        angle={9}
        penumbra={1}
        castShadow
        shadow-mapSize={{ width: 1024, height: 1024 }}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3,-2.2] :  [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
}

const ComputersCanvas=()=>{
  const [isMobile,setIsMobile]=useState(false);
  useEffect(()=>{
    //useffet only listening for screen width and changing the state of isMobile

    const mediaQuary=window.matchMedia("(max-width:600px)");
    setIsMobile(mediaQuary.matches);

    const handleMediaQueryChange=(event)=>{
      setIsMobile(event.matches);
    }

    mediaQuary.addEventListener("change",handleMediaQueryChange);

    return ()=>{
    mediaQuary.removeEventListener("change",handleMediaQueryChange);
    }
  },[])
  return(
    <Canvas
    frameloop="demand"
    shadows
    camera={{position:[20,3,3], fov:25}}
    gl={{preserveDrawingBuffer:true}}
    >
      <Suspense
      fallback={<CanvasLoader/>}>
       <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
       />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas