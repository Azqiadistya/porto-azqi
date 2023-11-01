// pages/about/about.tsx
import React from "react";
import { BsFillBootstrapFill, BsGithub } from "react-icons/bs";
import { GrMysql, GrGraphQl } from "react-icons/gr";
import { FiFigma } from "react-icons/fi";
import { FaLaravel, FaVuejs, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiVuetify, SiJavascript } from "react-icons/si";
import { BiLogoReact, BiLogoPhp, BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";

function AboutPage() {
  return (
      <div className="grid grid-cols-3 gap-4 px-20 pt-32 pb-32 bg-white">
          <div>
              <h1 className="font-['Rajdhani'] text-lg font-semibold pb-1 text-blue-950">- NICE TO MEET YOU</h1>
              <h1 className="font-['Rajdhani'] text-5xl font-black text-blue-950">Azqiadistya</h1>
              <p className="font-['Rajdhani'] text-lg font-semibold text-blue-950">Frontend Developer</p>

              <button className="bg-blue-950 hover:bg-blue-900 text-white text-lg font-bold py-2 px-4 rounded">
                Got a Project?
              </button>
          </div>
          <div className="col-span-2 pl-10">
              <p className="text-lg font-['Rajdhani'] pb-5">Hello there! My name is Azqia Adistya. I am a frontend developer, and I&apos;m very passionate and dedicated to my work.</p>
              <p className="text-lg font-['Rajdhani'] pb-5">I&apos;m proud to have successfully completed several freelance projects, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of development process, from discussion and collaboration.</p>
              <div className="grid grid-cols-10 pt-8 pb-8">
                <div className="">
                      <p className="text-lg font-['Rajdhani'] underline decoration-solid">AGE</p>
                      <p className="text-base font-['Rajdhani'] pb-5 font-semibold">22</p>
                </div>
                  <div className="col-span-2">
                      <p className="text-lg font-['Rajdhani'] underline decoration-solid">BORN IN</p>
                      <p className="text-base font-['Rajdhani'] pb-5 font-semibold">Wonogiri</p>
                  </div>
                  <div className="col-span-4">
                      <p className="text-lg font-['Rajdhani'] underline decoration-solid">MAIL</p>
                      <p className="text-base font-['Rajdhani'] pb-5 font-semibold">azqiabdillah@gmail.com</p>
                  </div>
                  <div className="col-span-3">
                      <p className="text-lg font-['Rajdhani'] underline decoration-solid">PHONE</p>
                      <p className="text-base font-['Rajdhani'] pb-5 font-semibold">+62 8232 2302 193</p>
                  </div>
              </div>
          </div>
          <div className="p-5 bg-blue-200 rounded-lg flex flex-wrap justify-center">
              <h1 className="text-5xl font-['Rajdhani'] font-bold pt-5">30+</h1>
              <p className="text-lg font-['Rajdhani']">YEARS OF EXPERIENCE</p>
          </div>
          <div className="p-5 bg-red-200 rounded-lg flex flex-wrap justify-center">
              <h1 className="text-5xl font-['Rajdhani'] font-bold pt-5">100+</h1>
              <p className="text-lg font-['Rajdhani']">PROJECT COMPLETED</p>
          </div>
          <div className="p-5 bg-green-200 rounded-lg flex flex-wrap justify-center">
              <h1 className="text-5xl font-['Rajdhani'] font-bold pt-5">30+</h1>
              <p className="text-lg font-['Rajdhani']">PROJECT COMPLETED</p>
          </div>
        <div className="col-span-3 pt-12">
            <h1 className="font-['Rajdhani'] text-lg font-semibold pb-1 text-blue-950">- SKILLS</h1>
            <p className="font-['Rajdhani'] text-5xl font-black text-blue-950">My coding skills.</p>
            <div className="grid grid-cols-5 gap-4 mt-7">
                <div className="bg-white rounded-full w-full h-12 pt-1.5 px-3 flex flex-wrap border-4 border-blue-100">
                    <BsFillBootstrapFill size={30} color="orange" className="pl-3" />
                    <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-2">Bootstrap</p>  
                </div>
                <div className="bg-white rounded-full w-full h-12 pt-1.5 px-3 flex flex-wrap border-4 border-blue-100">
                    <FaLaravel size={30} color="orange" className="pl-3" />
                    <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-2">Laravel</p>  
                </div>
                <div className="bg-white rounded-full w-full h-12 pt-1.5 px-3 flex flex-wrap border-4 border-blue-100">
                    <GrMysql size={30} color="orange" className="pl-3" />
                    <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-2">MySQL</p>  
                </div>
                <div className="bg-white rounded-full w-full h-12 pt-1.5 px-3 flex flex-wrap border-4 border-blue-100">
                    <FiFigma size={30} color="orange" className="pl-3" />
                    <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-2">Figma</p>  
                </div>
                <div className="bg-white rounded-full w-full h-12 pt-1.5 px-3 flex flex-wrap border-4 border-blue-100">
                    <FaVuejs size={30} color="orange" className="pl-3" />
                    <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-2">Vue JS</p>  
                </div>
                <div className="bg-white rounded-full w-full h-12 pt-1.5 px-3 flex flex-wrap border-4 border-blue-100">
                    <SiVuetify size={30} color="orange" className="pl-3" />
                    <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-2">Vuetify</p>  
                </div>
                <div className="bg-white rounded-full w-full h-12 pt-1.5 px-3 flex flex-wrap border-4 border-blue-100">
                    <BiLogoReact size={30} color="orange" className="pl-3" />
                    <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-2">React Js</p>  
                </div>
                <div className="bg-white rounded-full w-full h-12 pt-1.5 px-3 flex flex-wrap border-4 border-blue-100">
                    <BiLogoPhp size={30} color="orange" className="pl-3" />
                    <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-2">PHP</p>  
                </div>
                <div className="bg-white rounded-full w-full h-12 pt-1.5 px-3 flex flex-wrap border-4 border-blue-100">
                    <FaCss3Alt size={30} color="orange" className="pl-3" />
                    <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-2">CSS</p>  
                </div>
                <div className="bg-white rounded-full w-full h-12 pt-1.5 px-3 flex flex-wrap border-4 border-blue-100">
                    <SiJavascript size={30} color="orange" className="pl-3" />
                    <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-2">JavaScript</p>  
                </div>
                <div className="bg-white rounded-full w-full h-12 pt-1.5 px-3 flex flex-wrap border-4 border-blue-100">
                    <BsGithub size={30} color="orange" className="pl-3" />
                    <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-2">Github</p>  
                </div>
                <div className="bg-white rounded-full w-full h-12 pt-1.5 px-3 flex flex-wrap border-4 border-blue-100">
                    <FaHtml5 size={30} color="orange" className="pl-3" />
                    <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-2">HTML</p>  
                </div>
                <div className="bg-white rounded-full w-full h-12 pt-1.5 px-3 flex flex-wrap border-4 border-blue-100">
                    <BiLogoTypescript size={30} color="orange" className="pl-3" />
                    <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-2">TypeScript</p>  
                </div>
                <div className="bg-white rounded-full w-full h-12 pt-1.5 px-3 flex flex-wrap border-4 border-blue-100">
                    <BiLogoTailwindCss size={30} color="orange" className="pl-3" />
                    <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-2">Tailwind</p>  
                </div>
                <div className="bg-white rounded-full w-full h-12 pt-1.5 px-3 flex flex-wrap border-4 border-blue-100">
                    <GrGraphQl size={30} color="orange" className="pl-3" />
                    <p className="font-['Rajdhani'] text-lg font-bold text-blue-950 pl-2">GraphQL</p>  
                </div>
            </div>  
        </div>
    </div>
  );
}

export default AboutPage;
