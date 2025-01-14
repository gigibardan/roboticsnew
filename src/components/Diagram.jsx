import React, { useEffect, useState } from 'react';
import ReactFlow, { 
  Background, 
  Controls,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';

const Diagram = ({ onNodeClick }) => {
  // State pentru responsive design
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Event listener pentru redimensionarea ferestrei
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  
  // Poziționarea nodurilor în funcție de dimensiunea ecranului
  const getNodePositions = () => {
    if (isMobile) {
      return {
        spikeEssential: { x: 110, y: 20 },
        spikePrime: { x: 20, y: 120 },
        mbot: { x: 200, y: 120 },
        microbit: { x: 20, y: 220 },
        arduino: { x: 200, y: 220 }
      };
    }
    return {
      spikeEssential: { x: 300, y: 20 },
      spikePrime: { x: 100, y: 120 },
      mbot: { x: 500, y: 120 },
      microbit: { x: 100, y: 220 },
      arduino: { x: 500, y: 220 }
    };
  };

  const positions = getNodePositions();

  // Definirea nodurilor (boxurilor) din diagramă
  const nodes = [
    // Nivel 1 - Începător
    {
      id: 'spike-essential',
      data: { 
        label: (
          <div className="p-1 md:p-2 text-center">
            <div className="font-bold text-xs md:text-base">LEGO SPIKE Essential</div>
            <div className="text-xs">Introducere în robotică</div>
          </div>
        )
      },
      position: positions.spikeEssential,
      sourcePosition: 'bottom',
      className: 'min-w-[120px] md:min-w-[180px] bg-green-500 text-white rounded-lg border-2 border-green-600 shadow-lg hover:bg-green-600 transition-colors',
    },
    // Nivel 2 - Intermediar
    {
      id: 'spike-prime',
      data: { 
        label: (
          <div className="p-1 md:p-2 text-center">
            <div className="font-bold text-xs md:text-base">SPIKE Prime</div>
            <div className="text-xs">Robotică avansată</div>
          </div>
        )
      },
      position: positions.spikePrime,
      targetPosition: 'right',
      sourcePosition: 'bottom',
      className: 'min-w-[120px] md:min-w-[180px] bg-blue-500 text-white rounded-lg border-2 border-blue-600 shadow-lg hover:bg-blue-600 transition-colors',
    },
    {
      id: 'mbot',
      data: { 
        label: (
          <div className="p-1 md:p-2 text-center">
            <div className="font-bold text-xs md:text-base">mBot</div>
            <div className="text-xs">Alternativă intermediară</div>
          </div>
        )
      },
      position: positions.mbot,
      targetPosition: 'left',
      sourcePosition: 'left',
      className: 'min-w-[120px] md:min-w-[180px] bg-blue-500 text-white rounded-lg border-2 border-blue-600 shadow-lg hover:bg-blue-600 transition-colors',
    },
    // Nivel 3 - Avansat
    {
      id: 'microbit',
      data: { 
        label: (
          <div className="p-1 md:p-2 text-center">
            <div className="font-bold text-xs md:text-base">micro:bit</div>
            <div className="text-xs">Programare & Electronică de bază   </div>
          </div>
        )
      },
      position: positions.microbit,
      targetPosition: 'top',
      sourcePosition: 'right',
      className: 'min-w-[120px] md:min-w-[180px] bg-purple-500 text-white rounded-lg border-2 border-purple-600 shadow-lg hover:bg-purple-600 transition-colors',
    },
    {
      id: 'arduino',
      data: { 
        label: (
          <div className="p-1 md:p-2 text-center">
            <div className="font-bold text-xs md:text-base">Arduino</div>
            <div className="text-xs">Robotică & Electronică Avansată</div>
          </div>
        )
      },
      position: positions.arduino,
      targetPosition: 'left',
      className: 'min-w-[120px] md:min-w-[180px] bg-purple-500 text-white rounded-lg border-2 border-purple-600 shadow-lg hover:bg-purple-600 transition-colors',
    },
  ];

  // Definirea conexiunilor (săgeților) între noduri
  const edges = [
    // Conexiuni de la SPIKE Essential către nivel intermediar
    {
      id: 'e1-2',
      source: 'spike-essential',
      target: 'spike-prime',
      type: 'step',
      animated: true,
      style: { strokeWidth: 2, stroke: '#2563eb' },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#2563eb' },
    },
    {
      id: 'e1-3',
      source: 'spike-essential',
      target: 'mbot',
      type: 'step',
      animated: true,
      style: { strokeWidth: 2, stroke: '#2563eb' },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#2563eb' },
    },

    // Conexiune opțională mBot -> SPIKE Prime
    {
      id: 'e3-2',
      source: 'mbot',
      target: 'spike-prime',
      type: 'straight',
      sourcePosition: 'right',
      targetPosition: 'left',
      animated: true,
      style: { strokeWidth: 2, stroke: '#2563eb', strokeDasharray: '5,5' },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#2563eb' },
    },

    // Conexiuni către nivel avansat
    {
      id: 'e2-4',
      source: 'spike-prime',
      target: 'microbit',
      type: 'straight',
      animated: true,
      style: { strokeWidth: 2, stroke: '#9333ea' },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#9333ea' },
    },
    {
      id: 'e4-5',
      source: 'microbit',
      target: 'arduino',
      type: 'straight',
      animated: true,
      style: { strokeWidth: 2, stroke: '#9333ea' },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#9333ea' },
    }
  ];

  return (
    <div style={{ width: '100%', height: '350px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={(_, node) => onNodeClick?.(node.id)}
        fitView
        defaultzoom={isMobile ? 0.7 : 1}
        minZoom={isMobile ? 0.5 : 0.3}
        maxZoom={isMobile ? 1 : 2}
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