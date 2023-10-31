// pages/about/about.tsx
import React from "react";
import Image from 'next/image'
import { FaLaravel } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { BiLogoPhp } from "react-icons/bi";
import { BsFillBootstrapFill } from "react-icons/bs";
import RoadmapFe from "./roadmapfe";
import RoadmapReact from "./roadmapreact";

function RoadmapPage() {
  return (
    <><div className="grid grid-cols-5 px-20 pt-32 pb-2 bg-white">
      <div className="col-span-3">
        <h1 className="font-['Rajdhani'] text-lg font-semibold pb-1 text-blue-950">- Roadmap</h1>
        <h1 className="font-['Rajdhani'] text-5xl font-black text-blue-950">Learning path recomendation</h1>
      </div>
    </div>
    <div className="grid grid-cols-4 gap-5 px-20 pb-3 bg-white">
        <button className="bg-blue-950 hover:bg-blue-900 text-white text-sm font-bold py-3 px-1 rounded-full w-full">
          Frontend Developer
        </button>       
        <button className="bg-gray-400 hover:bg-blue-950 text-white text-sm font-bold py-3 rounded-full w-full">
          Mastering React Js
        </button>       
    </div >
    <RoadmapFe /> 
    {/* <RoadmapReact />  */}
    </> 
    
  );
}

export default RoadmapPage;
