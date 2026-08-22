import React, { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PURPLE = "#c770f0";
const DEEP_PURPLE = "#6b2fa0";
const PINK = "#f0a6e8";

function Float({ speed = 1, rotationIntensity = 1, floatIntensity = 1, children }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime * speed;
    ref.current.position.y = Math.sin(t) * 0.15 * floatIntensity;
    ref.current.rotation.x = Math.sin(t * 0.6) * 0.15 * rotationIntensity;
    ref.current.rotation.z = Math.cos(t * 0.5) * 0.15 * rotationIntensity;
  });
  return <group ref={ref}>{children}</group>;
}

function Sparkles({ count = 60, scale = 7, size = 2, speed = 0.25, color = PURPLE, opacity = 0.6 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * scale;
      arr[i * 3 + 1] = (Math.random() - 0.5) * scale;
      arr[i * 3 + 2] = (Math.random() - 0.5) * scale;
    }
    return arr;
  }, [count, scale]);

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * speed * 0.15;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={size * 0.02}
        sizeAttenuation
        transparent
        opacity={opacity}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function useGlowTexture() {
  return useMemo(() => {
    const size = 256;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createRadialGradient(
      size / 2,
      size / 2,
      0,
      size / 2,
      size / 2,
      size / 2
    );
    gradient.addColorStop(0, "rgba(231,170,250,0.9)");
    gradient.addColorStop(0.4, "rgba(199,112,240,0.35)");
    gradient.addColorStop(1, "rgba(199,112,240,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);
}

function Glow({ scale = 6, opacity = 0.55 }) {
  const texture = useGlowTexture();
  const ref = useRef();

  useFrame((state) => {
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 0.7) * 0.06;
    ref.current.scale.setScalar(scale * pulse);
  });

  return (
    <sprite ref={ref} scale={scale}>
      <spriteMaterial
        map={texture}
        transparent
        opacity={opacity}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </sprite>
  );
}

function CoreShape() {
  const wireRef = useRef();
  const innerRef = useRef();

  useFrame((state, delta) => {
    wireRef.current.rotation.y += delta * 0.18;
    wireRef.current.rotation.x += delta * 0.07;
    innerRef.current.rotation.y -= delta * 0.26;
    innerRef.current.rotation.z += delta * 0.11;
  });

  return (
    <group>
      <Glow scale={5.5} opacity={0.5} />
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[0.85, 0]} />
        <meshStandardMaterial
          color={DEEP_PURPLE}
          emissive={PURPLE}
          emissiveIntensity={0.7}
          transparent
          opacity={0.28}
          toneMapped={false}
        />
      </mesh>
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[1.4, 0]} />
        <meshStandardMaterial
          color={PURPLE}
          emissive={PURPLE}
          emissiveIntensity={1.1}
          wireframe
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

function OrbitingShape({ radius, speed, offset, geometry, color, scale = 0.32 }) {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed + offset;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = Math.sin(t * 1.4) * 0.5;
  });

  return (
    <Float speed={2} rotationIntensity={1.1} floatIntensity={0.6}>
      <mesh ref={ref} scale={scale}>
        {geometry}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          roughness={0.25}
          metalness={0.4}
          toneMapped={false}
        />
      </mesh>
    </Float>
  );
}

function Rig() {
  const groupRef = useRef();
  useFrame((state) => {
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.08) * 0.25;
  });

  const shapes = useMemo(
    () => [
      { radius: 1.9, speed: 0.35, offset: 0, geometry: <octahedronGeometry args={[1, 0]} />, color: PURPLE },
      { radius: 2.15, speed: -0.28, offset: 2, geometry: <tetrahedronGeometry args={[1, 0]} />, color: PINK },
      { radius: 1.7, speed: 0.45, offset: 4, geometry: <boxGeometry args={[1, 1, 1]} />, color: DEEP_PURPLE, scale: 0.22 },
      { radius: 2.3, speed: -0.2, offset: 1.2, geometry: <torusGeometry args={[0.6, 0.22, 12, 24]} />, color: PURPLE, scale: 0.24 },
    ],
    []
  );

  return (
    <group ref={groupRef}>
      <CoreShape />
      {shapes.map((s, i) => (
        <OrbitingShape key={i} {...s} />
      ))}
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[4, 3, 4]} color={PURPLE} intensity={40} distance={12} />
      <pointLight position={[-4, -3, -3]} color={DEEP_PURPLE} intensity={30} distance={12} />
      <pointLight position={[0, 0, 5]} color={PINK} intensity={15} distance={10} />
    </>
  );
}

function isWebGLAvailable() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
}

function Scene3D({ fallback }) {
  const supported = useMemo(() => isWebGLAvailable(), []);

  if (!supported) {
    return fallback || null;
  }

  return (
    <Canvas
      dpr={[1, 1.8]}
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 0, 7], fov: 38 }}
      style={{ width: "100%", height: "100%" }}
    >
      <Suspense fallback={null}>
        <Lights />
        <Rig />
        <Sparkles count={70} scale={6} size={2} speed={0.25} color={PURPLE} opacity={0.7} />
      </Suspense>
    </Canvas>
  );
}

export default Scene3D;
