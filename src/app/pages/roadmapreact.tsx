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
import { SiReactrouter } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiStorybook } from "react-icons/si";
import { SiReacttable } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiReacthookform } from "react-icons/si";

function RoadmapReact() {
  return (
    <div className="grid grid-cols-2 px-20 bg-white flex">
        <div className="flex flex-wrap mt-5 bg-white col-span-2 rounded-full p-3 justify-between border-4 border-blue-100 hover:bg-slate-200">
            <div className="flex flex-wrap pl-5">
                <BiLogoReact size={32} color="orange" />
                <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-3">Fundamental of React</p>
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
                <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-3">React Hooks</p>
            </div> 
            <div className="flex pr-5">
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex">
                    <button className="bg-gray-400 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded-full">
                        English
                    </button>                      
                </a>   
            </div>
        </div>
        <div className="flex flex-wrap mt-3 bg-white col-span-2 rounded-full p-3 justify-between border-4 border-blue-100 hover:bg-slate-200">
            <div className="flex flex-wrap pl-5">
                <SiReactrouter size={32} color="orange" />
                <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-3">React Router</p>
            </div> 
            <div className="flex pr-5">
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex">
                    <button className="bg-gray-400 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded-full">
                        English
                    </button>                      
                </a>   
            </div>
        </div>
        <div className="flex flex-wrap mt-3 bg-white col-span-2 rounded-full p-3 justify-between border-4 border-blue-100 hover:bg-slate-200">
            <div className="flex flex-wrap pl-5">
                <SiRedux size={32} color="orange" />
                <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-3">React Redux</p>
            </div> 
            <div className="flex pr-5">
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex">
                    <button className="bg-gray-400 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded-full">
                        English
                    </button>                      
                </a>   
            </div>
        </div>
        <div className="flex flex-wrap mt-3 bg-white col-span-2 rounded-full p-3 justify-between border-4 border-blue-100 hover:bg-slate-200">
            <div className="flex flex-wrap pl-5">
                <BiLogoReact size={32} color="orange" />
                <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-3">Practical React</p>
            </div> 
            <div className="flex pr-5">
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex">
                    <button className="bg-gray-400 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded-full">
                        English
                    </button>                      
                </a>   
            </div>
        </div>
        <div className="flex flex-wrap mt-3 bg-white col-span-2 rounded-full p-3 justify-between border-4 border-blue-100 hover:bg-slate-200">
            <div className="flex flex-wrap pl-5">
                <BiLogoReact size={32} color="orange" />
                <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-3">React Formik</p>
            </div> 
            <div className="flex pr-5">
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex">
                    <button className="bg-gray-400 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded-full">
                        English
                    </button>                      
                </a>   
            </div>
        </div>
        <div className="flex flex-wrap mt-3 bg-white col-span-2 rounded-full p-3 justify-between border-4 border-blue-100 hover:bg-slate-200">
            <div className="flex flex-wrap pl-5">
                <SiStorybook size={32} color="orange" />
                <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-3">React Storybook</p>
            </div> 
            <div className="flex pr-5">
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex">
                    <button className="bg-gray-400 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded-full">
                        English
                    </button>                      
                </a>   
            </div>
        </div>
        <div className="flex flex-wrap mt-3 bg-white col-span-2 rounded-full p-3 justify-between border-4 border-blue-100 hover:bg-slate-200">
            <div className="flex flex-wrap pl-5">
                <BiLogoReact size={32} color="orange" />
                <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-3">React Render</p>
            </div> 
            <div className="flex pr-5">
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex">
                    <button className="bg-gray-400 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded-full">
                        English
                    </button>                      
                </a>   
            </div>
        </div>
        <div className="flex flex-wrap mt-3 bg-white col-span-2 rounded-full p-3 justify-between border-4 border-blue-100 hover:bg-slate-200">
            <div className="flex flex-wrap pl-5">
                <SiReacttable size={32} color="orange" />
                <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-3">React Table</p>
            </div> 
            <div className="flex pr-5">
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex">
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
                        English
                    </button>                      
                </a>   
            </div>
        </div>
        <div className="flex flex-wrap mt-3 bg-white col-span-2 rounded-full p-3 justify-between border-4 border-blue-100 hover:bg-slate-200">
            <div className="flex flex-wrap pl-5">
                <SiReactquery size={32} color="orange" />
                <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-3">React Query</p>
            </div> 
            <div className="flex pr-5">
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex">
                    <button className="bg-gray-400 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded-full">
                        English
                    </button>                      
                </a>   
            </div>
        </div>
        <div className="flex flex-wrap mt-3 bg-white col-span-2 rounded-full p-3 justify-between border-4 border-blue-100 hover:bg-slate-200">
            <div className="flex flex-wrap pl-5">
                <BiLogoReact size={32} color="orange" />
                <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-3">React Material UI</p>
            </div> 
            <div className="flex pr-5">
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex">
                    <button className="bg-gray-400 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded-full">
                        English
                    </button>                      
                </a>    
            </div>
        </div>
        <div className="flex flex-wrap mt-3 bg-white col-span-2 rounded-full p-3 justify-between border-4 border-blue-100 hover:bg-slate-200">
            <div className="flex flex-wrap pl-5">
                <BiLogoReact size={32} color="orange" />
                <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-3">React Redux Toolkit</p>
            </div> 
            <div className="flex pr-5">
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex">
                    <button className="bg-gray-400 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded-full">
                        English
                    </button>                      
                </a>   
            </div>
        </div>
        <div className="flex flex-wrap mt-3 bg-white col-span-2 rounded-full p-3 justify-between border-4 border-blue-100 hover:bg-slate-200">
            <div className="flex flex-wrap pl-5">
                <SiReacthookform size={32} color="orange" />
                <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-3">React Hook Form</p>
            </div> 
            <div className="flex pr-5">
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex">
                    <button className="bg-gray-400 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded-full">
                        English
                    </button>                      
                </a>   
            </div>
        </div>
        <div className="flex flex-wrap mt-3 bg-white col-span-2 rounded-full p-3 justify-between border-4 border-blue-100 hover:bg-slate-200">
            <div className="flex flex-wrap pl-5">
                <BiLogoReact size={32} color="orange" />
                <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-3">React Testing</p>
            </div> 
            <div className="flex pr-5">
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex">
                    <button className="bg-gray-400 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded-full">
                        English
                    </button>                      
                </a>   
            </div>
        </div>
        <div className="flex flex-wrap mt-3 bg-white col-span-2 rounded-full p-3 justify-between border-4 border-blue-100 hover:bg-slate-200">
            <div className="flex flex-wrap pl-5">
                <BiLogoReact size={32} color="orange" />
                <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-3">React Native</p>
            </div> 
            <div className="flex pr-5">
                <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F&ab_channel=WebProgrammingUNPAS" className="flex">
                    <button className="bg-gray-400 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded-full">
                        English
                    </button>                      
                </a>      
            </div>
        </div>
        <div className="flex flex-wrap mt-3 bg-white col-span-2 rounded-full p-3 justify-between border-4 border-blue-100 hover:bg-slate-200">
            <div className="flex flex-wrap pl-5">
                <SiNextdotjs size={32} color="orange" />
                <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-3">Next Js</p>
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

export default RoadmapReact;
