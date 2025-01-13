import React, { useEffect, useState } from 'react';
import ReactFlow, { 
  Background, 
  Controls,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';

const Diagram = ({ onNodeClick }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  
  const getNodePositions = () => {
    if (isMobile) {
      return {
        legoBasic: { x: 25, y: 50 },
        mbot: { x: 200, y: 50 },
        ev3: { x: 25, y: 200 },
        spikePrime: { x: 200, y: 200 },
        arduino: { x: 110, y: 350 }
      };
    }
    return {
      legoBasic: { x: 100, y: 50 },
      mbot: { x: 400, y: 50 },
      ev3: { x: 100, y: 200 },
      spikePrime: { x: 400, y: 200 },
      arduino: { x: 250, y: 350 }
    };
  };

  const positions = getNodePositions();

  const nodes = [
    // Nivel 1 - Start (paralel)
    {
      id: 'lego-basic',
      data: { 
        label: (
          <div className="p-2 md:p-3 text-center">
            <div className="font-bold text-sm md:text-lg mb-1">LEGO SPIKE Essential</div>
            <div className="text-xs md:text-sm">Introducere în robotică</div>
          </div>
        )
      },
      position: positions.legoBasic,
      className: 'min-w-[150px] md:min-w-[220px] bg-green-500 text-white rounded-lg border-2 border-green-600 shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-105',
    },
    {
      id: 'mbot',
      data: { 
        label: (
          <div className="p-2 md:p-3 text-center">
            <div className="font-bold text-sm md:text-lg mb-1">mBot</div>
            <div className="text-xs md:text-sm">Introducere alternativă</div>
          </div>
        )
      },
      position: positions.mbot,
      className: 'min-w-[150px] md:min-w-[220px] bg-green-500 text-white rounded-lg border-2 border-green-600 shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-105',
    },

    // Nivel 2 (paralel)
    {
      id: 'ev3',
      data: { 
        label: (
          <div className="p-2 md:p-3 text-center">
            <div className="font-bold text-sm md:text-lg mb-1">MINDSTORMS EV3</div>
            <div className="text-xs md:text-sm">Robotică avansată</div>
          </div>
        )
      },
      position: positions.ev3,
      className: 'min-w-[150px] md:min-w-[220px] bg-blue-500 text-white rounded-lg border-2 border-blue-600 shadow-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105',
    },
    {
      id: 'spike-prime',
      data: { 
        label: (
          <div className="p-2 md:p-3 text-center">
            <div className="font-bold text-sm md:text-lg mb-1">SPIKE Prime</div>
            <div className="text-xs md:text-sm">Alternativă avansată</div>
          </div>
        )
      },
      position: positions.spikePrime,
      className: 'min-w-[150px] md:min-w-[220px] bg-blue-500 text-white rounded-lg border-2 border-blue-600 shadow-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105',
    },

    // Nivel 3 - Final
    {
      id: 'arduino',
      data: { 
        label: (
          <div className="p-2 md:p-3 text-center">
            <div className="font-bold text-sm md:text-lg mb-1">Arduino</div>
            <div className="text-xs md:text-sm">Robotică & Electronică</div>
          </div>
        )
      },
      position: positions.arduino,
      className: 'min-w-[150px] md:min-w-[220px] bg-purple-500 text-white rounded-lg border-2 border-purple-600 shadow-lg hover:bg-purple-600 transition-all duration-300 hover:scale-105',
    },
  ];

  const edges = [
    // Conexiuni Nivel 1 -> Nivel 2
    {
      id: 'e1-3',
      source: 'lego-basic',
      target: 'ev3',
      type: isMobile ? 'straight' : 'smoothstep',
      animated: true,
      style: { strokeWidth: isMobile ? 1 : 2, stroke: '#2563eb' },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#2563eb' },
    },
    {
      id: 'e1-4',
      source: 'lego-basic',
      target: 'spike-prime',
      type: isMobile ? 'straight' : 'smoothstep',
      animated: true,
      style: { strokeWidth: isMobile ? 1 : 2, stroke: '#2563eb' },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#2563eb' },
    },
    {
      id: 'e2-3',
      source: 'mbot',
      target: 'ev3',
      type: isMobile ? 'straight' : 'smoothstep',
      animated: true,
      style: { strokeWidth: isMobile ? 1 : 2, stroke: '#2563eb' },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#2563eb' },
    },
    {
      id: 'e2-4',
      source: 'mbot',
      target: 'spike-prime',
      type: isMobile ? 'straight' : 'smoothstep',
      animated: true,
      style: { strokeWidth: isMobile ? 1 : 2, stroke: '#2563eb' },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#2563eb' },
    },
    // Conexiuni Nivel 2 -> Arduino
    {
      id: 'e3-5',
      source: 'ev3',
      target: 'arduino',
      type: isMobile ? 'straight' : 'smoothstep',
      animated: true,
      style: { strokeWidth: isMobile ? 1 : 2, stroke: '#9333ea' },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#9333ea' },
    },
    {
      id: 'e4-5',
      source: 'spike-prime',
      target: 'arduino',
      type: isMobile ? 'straight' : 'smoothstep',
      animated: true,
      style: { strokeWidth: isMobile ? 1 : 2, stroke: '#9333ea' },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#9333ea' },
    },
  ];

// În return, modificăm div-ul container:
return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={(_, node) => onNodeClick?.(node.id)}
        fitView
        defaultZoom={isMobile ? 0.5 : 1.2}
        minZoom={isMobile ? 0.4 : 0.2}
        maxZoom={isMobile ? 0.8 : 2}
        attributionPosition="bottom-left"
        panOnScroll={false}
        zoomOnScroll={false}
        draggable={false}
        nodesDraggable={false}
        panOnDrag={false}
        zoomOnPinch={false}
        preventScrolling={true}
      >
        <Background color="#f0f0f0" gap={16} />
        <Controls showZoom={!isMobile} showInteractive={!isMobile} />
      </ReactFlow>
    </div>
  );
};

export default Diagram;