
import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import { OverlayUI } from './components/OverlayUI';
import { MorphState } from './constants';

const App: React.FC = () => {
  const [state, setState] = useState<MorphState>(MorphState.SCATTERED);

  const toggleState = () => {
    setState(prev => prev === MorphState.SCATTERED ? MorphState.TREE_SHAPE : MorphState.SCATTERED);
  };

  return (
    <div className="relative w-full h-screen bg-[#021a12]">
      <Canvas
        shadows
        camera={{ position: [0, 5, 15], fov: 45 }}
        gl={{ 
          antialias: true,
          powerPreference: "high-performance",
          alpha: false
        }}
      >
        <Suspense fallback={null}>
          <Experience state={state} />
        </Suspense>
      </Canvas>
      
      <OverlayUI currentState={state} onToggle={toggleState} />
      
      {/* Cinematic Vignette */}
      <div className="pointer-events-none fixed inset-0 bg-radial-vignette opacity-50 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />
    </div>
  );
};

export default App;
