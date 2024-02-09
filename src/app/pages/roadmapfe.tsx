// pages/about/about.tsx
import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { BsFillBootstrapFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";

function RoadmapFe() {
  return (
    <div className="grid grid-cols-2 px-20 bg-white flex pb-16">
        <div className="flex flex-wrap mt-5 bg-white col-span-2 rounded-full p-3 justify-between border-4 border-blue-100 hover:bg-slate-200">
            <div className="flex flex-wrap pl-5">
                <FaHtml5 size={32} color="orange" />
                <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-3">HTML</p>
            </div> 
            <div className="flex pr-5">
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex">
                    <button className="bg-gray-400 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded-full">
                        Indonesia
                    </button>                      
                </a>   
            </div>
        </div>
        <div className="flex flex-wrap mt-3 bg-white col-span-2 rounded-full p-3 justify-between border-4 border-blue-100 hover:bg-slate-200">
            <div className="flex flex-wrap pl-5">
                <FaCss3Alt size={32} color="orange" />
                <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-3">CSS Dasar</p>
            </div> 
            <div className="flex pr-5">
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex">
                    <button className="bg-gray-400 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded-full">
                        Indonesia
                    </button>                      
                </a>   
            </div>
        </div>
        <div className="flex flex-wrap mt-3 bg-white col-span-2 rounded-full p-3 justify-between border-4 border-blue-100 hover:bg-slate-200">
            <div className="flex flex-wrap pl-5">
                <FaCss3Alt size={32} color="orange" />
                <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-3">CSS Layouting</p>
            </div> 
            <div className="flex pr-5">
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex">
                    <button className="bg-gray-400 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded-full">
                        Indonesia
                    </button>                      
                </a>   
            </div>
        </div>
        <div className="flex flex-wrap mt-3 bg-white col-span-2 rounded-full p-3 justify-between border-4 border-blue-100 hover:bg-slate-200">
            <div className="flex flex-wrap pl-5">
                <FaCss3Alt size={32} color="orange" />
                <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-3">CSS 3</p>
            </div> 
            <div className="flex pr-5">
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex">
                    <button className="bg-gray-400 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded-full">
                        Indonesia
                    </button>                      
                </a>   
            </div>
        </div>
        <div className="flex flex-wrap mt-3 bg-white col-span-2 rounded-full p-3 justify-between border-4 border-blue-100 hover:bg-slate-200">
            <div className="flex flex-wrap pl-5">
                <BsFillBootstrapFill size={32} color="orange" />
                <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-3">Bootstrap</p>
            </div> 
            <div className="flex pr-5">
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex">
                    <button className="bg-gray-400 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded-full">
                        Indonesia
                    </button>                      
                </a>   
            </div>
        </div>
        <div className="flex flex-wrap mt-3 bg-white col-span-2 rounded-full p-3 justify-between border-4 border-blue-100 hover:bg-slate-200">
            <div className="flex flex-wrap pl-5">
                <FaHtml5 size={32} color="orange" />
                <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-3">Flexbox CSS</p>
            </div> 
            <div className="flex pr-5">
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex">
                    <button className="bg-gray-400 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded-full">
                        Indonesia
                    </button>                      
                </a>   
            </div>
        </div>
        <div className="flex flex-wrap mt-3 bg-white col-span-2 rounded-full p-3 justify-between border-4 border-blue-100 hover:bg-slate-200">
            <div className="flex flex-wrap pl-5">
                <BsGithub size={32} color="orange" />
                <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-3">Git & Github</p>
            </div> 
            <div className="flex pr-5">
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex">
                    <button className="bg-gray-400 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded-full">
                        Indonesia
                    </button>                      
                </a>   
            </div>
        </div>
        <div className="flex flex-wrap mt-3 bg-white col-span-2 rounded-full p-3 justify-between border-4 border-blue-100 hover:bg-slate-200">
            <div className="flex flex-wrap pl-5">
                <BiLogoTailwindCss size={32} color="orange" />
                <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-3">Tailwind CSS</p>
            </div> 
            <div className="flex pr-5">
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex">
                    <button className="bg-gray-400 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded-full">
                        Indonesia
                    </button>                      
                </a>   
            </div>
        </div>
        <div className="flex flex-wrap mt-3 bg-white col-span-2 rounded-full p-3 justify-between border-4 border-blue-100 hover:bg-slate-200">
            <div className="flex flex-wrap pl-5">
                <BiLogoJavascript size={32} color="orange" />
                <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-3">Javascipt Dasar</p>
            </div> 
            <div className="flex pr-5">
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex">
                    <button className="bg-gray-400 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded-full">
                        Indonesia
                    </button>                      
                </a>   
            </div>
        </div>
        <div className="flex flex-wrap mt-3 bg-white col-span-2 rounded-full p-3 justify-between border-4 border-blue-100 hover:bg-slate-200">
            <div className="flex flex-wrap pl-5">
                <BiLogoJavascript size={32} color="orange" />
                <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-3">Javascript DOM</p>
            </div> 
            <div className="flex pr-5">
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex">
                    <button className="bg-gray-400 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded-full">
                        Indonesia
                    </button>                      
                </a>   
            </div>
        </div>
        <div className="flex flex-wrap mt-3 bg-white col-span-2 rounded-full p-3 justify-between border-4 border-blue-100 hover:bg-slate-200">
            <div className="flex flex-wrap pl-5">
                <BiLogoJavascript size={32} color="orange" />
                <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-3">Javascript Lanjutan</p>
            </div> 
            <div className="flex pr-5">
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex">
                    <button className="bg-gray-400 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded-full">
                        Indonesia
                    </button>                      
                </a>   
            </div>
        </div>
        <div className="flex flex-wrap mt-3 bg-white col-span-2 rounded-full p-3 justify-between border-4 border-blue-100 hover:bg-slate-200">
            <div className="flex flex-wrap pl-5">
                <BiLogoReact size={32} color="orange" />
                <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-3">React JS</p>
            </div> 
            <div className="flex pr-5">
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex">
                    <button className="bg-gray-400 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded-full">
                        Indonesia
                    </button>                      
                </a>   
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex pl-2">
                    <button className="bg-gray-400 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded-full">
                        English
                    </button>                      
                </a>  
            </div>
        </div>
        <div className="flex flex-wrap mt-3 bg-white col-span-2 rounded-full p-3 justify-between border-4 border-blue-100 hover:bg-slate-200">
            <div className="flex flex-wrap pl-5">
                <BiLogoTypescript size={32} color="orange" />
                <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-3">Typescript</p>
            </div> 
            <div className="flex pr-5">
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex">
                    <button className="bg-gray-400 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded-full">
                        Indonesia
                    </button>                      
                </a>   
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex pl-2">
                    <button className="bg-gray-400 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded-full">
                        English
                    </button>                      
                </a> 
            </div>
        </div>
        <div className="flex flex-wrap mt-3 bg-white col-span-2 rounded-full p-3 justify-between border-4 border-blue-100 hover:bg-slate-200">
            <div className="flex flex-wrap pl-5">
                <BiLogoReact size={32} color="orange" />
                <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-3">React Typescript</p>
            </div> 
            <div className="flex pr-5">
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex">
                    <button className="bg-gray-400 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded-full">
                        Indonesia
                    </button>                      
                </a>   
            </div>
        </div>
        <div className="flex flex-wrap mt-3 bg-white col-span-2 rounded-full p-3 justify-between border-4 border-blue-100 hover:bg-slate-200">
            <div className="flex flex-wrap pl-5">
                <SiNextdotjs size={32} color="orange" />
                <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-3">Next JS</p>
            </div> 
            <div className="flex pr-5">
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex">
                    <button className="bg-gray-400 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded-full">
                        Indonesia
                    </button>                      
                </a>   
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex pl-2">
                    <button className="bg-gray-400 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded-full">
                        English
                    </button>                      
                </a>   
            </div>
        </div>
    </div>
  );
}

export default RoadmapFe;
