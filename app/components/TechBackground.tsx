"use client";

import React from "react";

interface ParticleNode {
  size: number;
  x: number;
  y: number;
  speed: string;
  delay: string;
}

interface CustomCSSProperties extends React.CSSProperties {
  "--speed"?: string;
  "--delay"?: string;
}

const staticParticles: ParticleNode[] = [
  { size: 2.5, x: 12, y: 25, speed: "22s", delay: "-2s" },
  { size: 4.0, x: 28, y: 65, speed: "16s", delay: "-5s" },
  { size: 3.2, x: 42, y: 18, speed: "28s", delay: "-12s" },
  { size: 2.0, x: 58, y: 72, speed: "20s", delay: "-7s" },
  { size: 4.5, x: 73, y: 45, speed: "14s", delay: "-1s" },
  { size: 3.0, x: 88, y: 82, speed: "26s", delay: "-4s" },
  { size: 2.2, x: 92, y: 12, speed: "19s", delay: "-9s" },
  { size: 4.2, x: 18, y: 88, speed: "15s", delay: "-15s" },
  { size: 3.5, x: 62, y: 32, speed: "22s", delay: "-3s" },
  { size: 2.0, x: 48, y: 92, speed: "24s", delay: "-8s" },
  { size: 4.8, x: 35, y: 52, speed: "15s", delay: "-11s" },
  { size: 3.1, x: 80, y: 68, speed: "19s", delay: "-6s" },
];

export default function TechBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(13,17,23,0)_0%,#0d1117_100%)]" />

      {staticParticles.map((node, i) => {
        const customStyle: CustomCSSProperties = {
          width: node.size,
          height: node.size,
          top: `${node.y}%`,
          left: `${node.x}%`,
          boxShadow:
            node.size > 3 ? "0 0 12px rgba(56, 189, 248, 0.5)" : "none",
          "--speed": node.speed,
          "--delay": node.delay,
        };

        return (
          <div
            key={i}
            className="absolute rounded-full bg-sky-400 opacity-20 animate-tech-float"
            style={customStyle}
          />
        );
      })}
    </div>
  );
}
