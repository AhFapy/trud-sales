// Workflow.jsx
import React, { useRef, useEffect, useState } from "react";
import Node from "./Node";
import "./workflow.css";

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
          const startX = startNode.offsetLeft + startNode.offsetWidth / 2;
          const startY = startNode.offsetTop + startNode.offsetHeight / 2;
          const endX = endNode.offsetLeft + endNode.offsetWidth / 2;
          const endY = endNode.offsetTop + endNode.offsetHeight / 2;

          const controlOffsetX = 150 + i * 15;
          const controlOffsetY = 10 + i * 10;

          newLines.push({ startX, startY, endX, endY, controlOffsetX, controlOffsetY });
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
    <div className="relative p-4 md:p-10">
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        {lines.map((line, index) => {
          const lineProgress = Math.max(0, Math.min(scrollProgress - index, 1));

          return (
            <path
              key={index}
              d={`M${line.startX},${line.startY} C${line.startX + line.controlOffsetX},${line.startY + line.controlOffsetY} ${line.endX - line.controlOffsetX},${line.endY - line.controlOffsetY} ${line.endX},${line.endY}`}
              stroke={`url(#gradient-${index})`}
              strokeWidth="2"
              fill="none"
            />
          );
        })}

        {/* Gradientes para las líneas */}
        {lines.map((_, index) => (
          <defs key={index}>
            <linearGradient id={`gradient-${index}`} gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop
                offset={`${Math.min(scrollProgress - index, 1) * 100}%`}
                stopColor="#10B981"
                stopOpacity="1"
              />
              <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
            </linearGradient>
          </defs>
        ))}
      </svg>

      {/* Nodos con fondo negro y texto blanco */}
      <div className="flex flex-row items-start space-x-20 mb-10 pt-[2rem]">
        <Node ref={nodeRefs[0]} text="Entrada de los Leads" className="node-style" style={{ marginTop: "0rem" }} />
        <Node ref={nodeRefs[1]} text="Generar Necesidad" className="node-style" style={{ marginTop: "2rem", fontSize: "1.2rem" }} />
        <Node ref={nodeRefs[2]} text="Paso 3" className="node-style" style={{ padding: "10px", marginTop: "-3rem" }} />
        <Node ref={nodeRefs[3]} text="Paso 4" className="node-style" style={{ padding: "10px", marginTop: "1.5rem" }} />
        <Node ref={nodeRefs[4]} text="Paso 5" className="node-style" style={{ padding: "10px", marginTop: "-1rem" }} />
        <Node ref={nodeRefs[5]} text="VENTA" className="box" style={{ padding: "10px", marginTop: "2rem" }} />
      </div>

      {/* Estilos para los nodos */}
      <style jsx>{`
        .node-style {
          background-color: black;
          color: white;
          border: 2px solid green;
          padding: 10px;
          transition: background-color 0.3s, color 0.3s; /* Añadimos la transición */
        }

        .node-style:hover {
          background-color: white;
          color: black;
        }
      `}</style>
    </div>
  );
};

export default Workflow;
