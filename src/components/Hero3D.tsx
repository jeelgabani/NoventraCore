import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.5}>
        <MeshDistortMaterial
          color="#B11226"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe={false}
        />
      </Sphere>
      {/* Outer Wireframe Sphere */}
      <Sphere args={[1.6, 32, 32]}>
        <meshStandardMaterial
          color="#B11226"
          wireframe
          transparent
          opacity={0.1}
        />
      </Sphere>
    </Float>
  );
};

const Hero3D = () => {
  return (
    <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0 opacity-50 lg:opacity-100 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#ff0000" />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default Hero3D;
