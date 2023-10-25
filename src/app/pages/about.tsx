// pages/about/about.tsx
import React from "react";

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
              <p className="text-lg font-['Rajdhani'] pb-5">Hello there! My name is Robert Elisc. I am a web designer & developer, and I'm very passionate and dedicated to my work.</p>
              <p className="text-lg font-['Rajdhani'] pb-5">With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
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
              <h1 className="text-5xl font-['Rajdhani'] font-bold pt-5">10+</h1>
              <p className="text-lg font-['Rajdhani']">YEARS OF EXPERIENCE</p>
          </div>
          <div className="p-5 bg-red-200 rounded-lg flex flex-wrap justify-center">
              <h1 className="text-5xl font-['Rajdhani'] font-bold pt-5">50+</h1>
              <p className="text-lg font-['Rajdhani']">PROJECT COMPLETED</p>
          </div>
          <div className="p-5 bg-green-200 rounded-lg flex flex-wrap justify-center">
              <h1 className="text-5xl font-['Rajdhani'] font-bold pt-5">30+</h1>
              <p className="text-lg font-['Rajdhani']">PROJECT COMPLETED</p>
          </div>


    </div>
  );
}

export default AboutPage;
