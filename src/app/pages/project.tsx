// pages/about/about.tsx
import React from "react";
import Image from 'next/image'
import { FaLaravel } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { BiLogoPhp } from "react-icons/bi";
import { BsFillBootstrapFill } from "react-icons/bs";

function ProjectPage() {
  return (
    <><div className="grid grid-cols-5 px-20 pt-32 pb-7 bg-white">
      <div className="col-span-3">
        <h1 className="font-['Rajdhani'] text-lg font-semibold pb-1 text-blue-950">- PROJECT</h1>
        <h1 className="font-['Rajdhani'] text-5xl font-black text-blue-950">Recent completed works</h1>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-5 px-20 pb-10 bg-white">
      <div className=" bg-blue-50 rounded-t-lg rounded-b-lg">
          <Image src="/porto1.png" width={500} height={500} alt="Picture of the author" className="rounded-t-lg" />
          <h3 className="text-2xl font-['Rajdhani'] font-semibold text-blue-950 pt-3 pl-5">ziraymedia.com</h3>
          <p className="text-base font-['Rajdhani'] pb-1 pt-2 pl-5 text-blue-900">Ziray Media: Crafting Your Digital Presence with Expert Web Solutions.</p> 
          <div className="px-5 pt-2 flex flex-wrap">
            <FaLaravel size={32} color="orange" />
            <SiMysql size={55} color="orange" className="pl-2 pb-2" />
            <BiLogoPhp size={55} color="orange" className="pl-2 pb-2" />
            <BsFillBootstrapFill size={40} color="orange" className="pl-2 pb-2 pt-2" />
          </div>
      </div>
      <div className=" bg-blue-50 rounded-t-lg rounded-b-lg">
          <Image src="/porto1.png" width={500} height={500} alt="Picture of the author" className="rounded-t-lg" />
          <h3 className="text-2xl font-['Rajdhani'] font-semibold text-blue-950 pt-3 pl-5">ziraymedia.com</h3>
          <p className="text-base font-['Rajdhani'] pb-1 pt-2 pl-5 text-blue-900">Ziray Media: Crafting Your Digital Presence with Expert Web Solutions.</p> 
          <div className="px-5 pt-2 flex flex-wrap">
            <FaLaravel size={32} color="orange" />
            <SiMysql size={55} color="orange" className="pl-2 pb-2" />
            <BiLogoPhp size={55} color="orange" className="pl-2 pb-2" />
            <BsFillBootstrapFill size={40} color="orange" className="pl-2 pb-2 pt-2" />
          </div>
      </div>
      <div className=" bg-blue-50 rounded-t-lg rounded-b-lg">
          <Image src="/porto1.png" width={500} height={500} alt="Picture of the author" className="rounded-t-lg" />
          <h3 className="text-2xl font-['Rajdhani'] font-semibold text-blue-950 pt-3 pl-5">ziraymedia.com</h3>
          <p className="text-base font-['Rajdhani'] pb-1 pt-2 pl-5 text-blue-900">Ziray Media: Crafting Your Digital Presence with Expert Web Solutions.</p> 
          <div className="px-5 pt-2 flex flex-wrap">
            <FaLaravel size={32} color="orange" />
            <SiMysql size={55} color="orange" className="pl-2 pb-2" />
            <BiLogoPhp size={55} color="orange" className="pl-2 pb-2" />
            <BsFillBootstrapFill size={40} color="orange" className="pl-2 pb-2 pt-2" />
          </div>
        </div>
      </div >
      <div className="flex flex-wrap justify-center pb-28 bg-white">
        <button className="bg-blue-950 hover:bg-blue-900 text-white text-lg font-bold py-3 px-4 rounded">
          View all projects
        </button>
      </div>
    </> 
    
  );
}

export default ProjectPage;
