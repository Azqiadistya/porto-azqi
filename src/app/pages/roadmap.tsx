// pages/about/about.tsx
"use client"
import React from "react";
import Image from 'next/image'
import { FaLaravel } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { BiLogoPhp } from "react-icons/bi";
import { BsFillBootstrapFill } from "react-icons/bs";
import RoadmapFe from "./roadmapfe";
import RoadmapReact from "./roadmapreact";
import { useState } from 'react';

function RoadmapPage() {
  const [showComponentFe, setShowComponentFe] = useState(true);
  const [showComponentReact, setShowComponentReact] = useState(false);
  const [activeButton, setActiveButton] = useState('Fe');

  const handleClickFe = () => {
    setShowComponentFe(true);
    setShowComponentReact(false);
    setActiveButton('Fe');
  };

  const handleClickReact = () => {
    setShowComponentFe(false);
    setShowComponentReact(true);
    setActiveButton('React');
  };

  return (
    <>
      <div className="grid grid-cols-5 px-20 pt-20 pb-2 bg-white" id="roadmap">
        <div className="col-span-3">
          <h1 className="font-['Rajdhani'] text-lg font-semibold pb-1 text-blue-950">- Roadmap</h1>
          <h1 className="font-['Rajdhani'] text-5xl font-black text-blue-950">Learning path recomendation</h1>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 px-20 pb-3 bg-white">
        <button onClick={handleClickFe} className={`bg-${activeButton === 'Fe' ? 'blue-900' : 'gray-400'} hover:bg-blue-950 text-white text-sm font-bold py-3 px-1 rounded-full w-full`}>
          Frontend Developer
        </button>       
        <button onClick={handleClickReact} className={`bg-${activeButton === 'React' ? 'blue-900' : 'gray-400'} hover:bg-blue-950 text-white text-sm font-bold py-3 rounded-full w-full`}>
          Mastering React Js
        </button>       
      </div>
      {showComponentFe && <RoadmapFe />}
      {showComponentReact && <RoadmapReact />}
    </> 
  );
}

export default RoadmapPage;