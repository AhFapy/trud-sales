// Workflow.jsx
import React, { useRef, useEffect, useState } from "react";
import Node from "./Node";

const Workflow = () => {
  const nodeRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const [lines, setLines] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateLines = () => {
      const newLines = [];
      for (let i = 0; i < nodeRefs.length - 1; i++) {
        const startNode = nodeRefs[i].current;
        const endNode = nodeRefs[i + 1].current;

        if (startNode && endNode) {
          const startX = startNode.offsetLeft + startNode.offsetWidth;
          const startY = startNode.offsetTop + startNode.offsetHeight / 2;
          const endX = endNode.offsetLeft;
          const endY = endNode.offsetTop + endNode.offsetHeight / 2;
          newLines.push({ startX, startY, endX, endY });
        }
      }
      setLines(newLines);
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / scrollHeight, 1);
      setScrollProgress(progress * (nodeRefs.length - 1));
    };

    calculateLines();
    window.addEventListener("resize", calculateLines);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", calculateLines);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative p-10">
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {lines.map((line, index) => {
          // Calcula el progreso de la línea
          const lineProgress = Math.max(0, Math.min(scrollProgress - index, 1));

          return (
<path
  key={index}
  d={`M${line.startX},${line.startY} C${line.startX + 50},${line.startY} ${line.endX - 50},${line.endY} ${line.endX},${line.endY}`}
  stroke={`url(#gradient-${index})`}
  strokeWidth="2" 
  fill="none"
/>
          );
        })}

        {/* Definición de gradientes con `lineProgress` ya definido */}
        {lines.map((_, index) => (
          <defs key={index}>
            <linearGradient id={`gradient-${index}`} gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="white" stopOpacity="1" />
<stop
  offset={`${Math.min(scrollProgress - index, 1) * 100}%`}
  stopColor="#10B981"  // Color verde césped
  stopOpacity="1"
/>
<stop offset="100%" stopColor="#10B981" stopOpacity="1" />

            </linearGradient>
          </defs>
        ))}
      </svg>

      <div className="flex flex-col space-y-16 mb-[2rem]">
        <Node ref={nodeRefs[0]} text="Entrada de los Leads" className="bg-red-500" style={{ color: "white", marginLeft: "-2rem"}} />
        <Node ref={nodeRefs[1]} text="Generar Necesidad" className="bg-green-500" style={{ color: "black", marginLeft: "10rem", fontSize: "1.2rem" }} />
        <Node ref={nodeRefs[2]} text="Paso 3" className="bg-purple-500" style={{ padding: "10px", marginLeft: "22.5rem", marginTop: "-10rem" }} />
        <Node ref={nodeRefs[3]} text="Paso 4" className="bg-purple-500" style={{ padding: "10px",  marginLeft: "33rem", marginTop: "2rem" }} />
        <Node ref={nodeRefs[4]} text="Paso 5" className="bg-purple-500" style={{ padding: "10px",  marginLeft: "45rem", marginTop: "-10rem" }} />
        <Node ref={nodeRefs[5]} text="VENTA" className="bg-purple-500" style={{ padding: "10px",  marginLeft: "60rem", marginTop: "-7rem" }} />
      </div>
      
    </div>
  );
};

export default Workflow;
