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
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-center sm:space-x-6 md:space-x-8 lg:space-x-12 xl:space-x-16 space-y-6 sm:space-y-12 md:space-y-12 lg:space-y-0 mb-10 pt-[2rem]">
        <Node ref={nodeRefs[0]} text="Análisis Inicial" className="node-style" style={{ transform: "translate(10px, 10px)" }} />
        <Node ref={nodeRefs[1]} text="Planteamiento estratégico" className="node-style" style={{ transform: "translate(-5px, 15px)" }} />
        <Node ref={nodeRefs[2]} text="Implementación del sistema" className="node-style" style={{ transform: "translate(20px, -10px)" }} />
        <Node ref={nodeRefs[3]} text="Evaluación de resultados" className="node-style" style={{ transform: "translate(-15px, 20px)" }} />
        <Node ref={nodeRefs[4]} text="Optimización operativa" className="node-style" style={{ transform: "translate(10px, -5px)" }} />
        <Node ref={nodeRefs[5]} text="VENTAS" className="box" style={{ color: "#00FF00", transform: "translate(-20px, 10px)" }} />
      </div>

      {/* Estilos para los nodos */}
      <style jsx>{`
        .node-style {
          background-color: black;
          color: white;
          border: 2px solid green;
          padding: 15px;
          width: auto;
          height: auto;
          min-width: 150px;
          min-height: 100px;
          max-width: 220px;
          max-height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          transition: background-color 0.3s, color 0.3s;
        }

        .node-style:hover {
          background-color: white;
          color: black;
        }

        .box {
          margin: max(1rem, 3vw);
          border: 0.35rem solid;
          border-image: conic-gradient(from var(--angle), var(--c2), var(--c1) 0.1turn, var(--c1) 0.15turn, var(--c2) 0.25turn) 30;
          animation: borderRotate var(--d) linear infinite forwards;
          background-color: black;
          color: white;
          padding: 10px;
        }

        .box:nth-child(2) {
          border-image: radial-gradient(ellipse at var(--gradX) var(--gradY), var(--c1), var(--c1) 10%, var(--c2) 40%) 30;
          animation: borderRadial var(--d) linear infinite forwards;
        }

        /* Ajustes en pantallas pequeñas */
        @media (max-width: 1100px) {
          .node-style {
            width: auto;
            height: auto;
            min-width: 120px;
            min-height: 80px;
            max-width: 180px;
          }

          .box {
            width: auto;
            height: auto;
            min-width: 120px;
            min-height: 80px;
            max-width: 180px;
          }
        }

        /* Aumento de espacio entre los nodos en pantallas muy pequeñas (móviles) */
        @media (max-width: 480px) {
          .node-style {
            width: 100%;
            min-width: 120px;
            min-height: 60px;
            max-width: 150px;
            margin-top: 4rem; /* Aumento del margin-top en móviles */
            transform: translate(10px, 15px); /* Mantener las variaciones en las posiciones */
          }

          .box {
            width: 100%;
            min-width: 120px;
            max-width: 150px;
            margin-top: 5rem; /* Aumento del margin-top en móviles */
            transform: translate(-10px, 10px); /* Mantener las variaciones en las posiciones */
          }
        }
      `}</style>
    </div>
  );
};

export default Workflow;
