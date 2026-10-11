import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import type * as THREE from 'three';
import { useIsTouchDevice, useReducedMotion } from '../../hooks/useReducedMotion';

interface ArchitecturalWireframeProps {
  accentColor: string;
}

const ArchitecturalWireframe: React.FC<ArchitecturalWireframeProps> = ({ accentColor }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.08;
    groupRef.current.rotation.x = Math.sin(Date.now() * 0.0003) * 0.08;
  });

  return (
    <group ref={groupRef}>
      {/* Outer Architectural Frame */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.6, 3.4, 1.4]} />
        <meshBasicMaterial color={accentColor} wireframe transparent opacity={0.18} />
      </mesh>
      {/* Inner Cantilevered Volume */}
      <mesh position={[0.35, -0.25, 0.25]}>
        <boxGeometry args={[1.8, 2.2, 1.1]} />
        <meshBasicMaterial color="#F5F1E8" wireframe transparent opacity={0.12} />
      </mesh>
      {/* Horizontal Plinth Plane */}
      <mesh position={[-0.2, -1.1, 0]}>
        <boxGeometry args={[3.2, 0.12, 1.8]} />
        <meshBasicMaterial color={accentColor} wireframe transparent opacity={0.22} />
      </mesh>
    </group>
  );
};

function isWebGLSupported(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

interface ArchitecturalSceneProps {
  accentColor?: string;
  className?: string;
}

/**
 * 41. 3D STRATEGY
 * Selective, non-blocking (pointer-events: none) architectural wireframe scene.
 * Gracefully degrades to an SVG architectural line motif when WebGL is unavailable,
 * on mobile/touch devices, or when prefers-reduced-motion is enabled.
 */
export const ArchitecturalScene: React.FC<ArchitecturalSceneProps> = ({
  accentColor = '#B49A72',
  className = '',
}) => {
  const reducedMotion = useReducedMotion();
  const isTouch = useIsTouchDevice();
  const [webglReady] = useState<boolean>(() => isWebGLSupported());

  if (!webglReady || reducedMotion || isTouch) {
    // Non-WebGL / Reduced-Motion / Mobile Fallback
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none select-none flex items-center justify-center opacity-20 ${className}`}
      >
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full max-w-[360px] max-h-[360px]"
          fill="none"
          stroke={accentColor}
          strokeWidth="0.75"
        >
          <rect x="70" y="40" width="220" height="300" />
          <rect x="110" y="90" width="210" height="220" strokeOpacity="0.6" />
          <line x1="40" y1="310" x2="360" y2="310" />
          <line x1="70" y1="40" x2="110" y2="90" strokeOpacity="0.5" />
          <line x1="290" y1="40" x2="320" y2="90" strokeOpacity="0.5" />
        </svg>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      >
        <ArchitecturalWireframe accentColor={accentColor} />
      </Canvas>
    </div>
  );
};

export default ArchitecturalScene;
