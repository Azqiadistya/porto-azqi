// pages/about/about.tsx
import React from "react";

function ExperienceComponent() {
  return (
    <div className="px-20 pt-32 pb-32 bg-blue-50">
        <div>
            <h1 className="font-['Rajdhani'] text-lg font-semibold pb-1 text-blue-950">- EXPERIENCE</h1>
            <h1 className="font-['Rajdhani'] text-5xl font-black text-blue-950">Everything about me!</h1>
        </div>
          <div className="grid grid-cols-2 gap-5">
              <div className="bg-white p-7 rounded-lg mt-7 grid grid-cols-2 gap-4 place-content-between">
                <div>
                    <p className="text-base font-['Rajdhani'] pb-1 font-semibold text-yellow-400 ">-2022 - Present</p>
                </div>
                <div>
                    <p className="text-base font-['Rajdhani'] pb-1 font-semibold text-blue-950 text-end ">- Ziray Media</p>
                </div>
                <div className="col-span-2">
                    <h3 className="text-2xl font-['Rajdhani'] font-semibold text-blue-950">Web Developer</h3>  
                </div>
                <div className="col-span-2">
                    <p className="text-base font-['Rajdhani'] text-blue-900 line-clamp-2">ZirayMedia is a web development service that specializes in corporate websites and solutions for small and medium-sized enterprises (UMKM). Additionally, ZirayMedia offers services for creating virtual tour websites.</p>  
                </div>
              </div>
              <div className="bg-white p-7 rounded-lg mt-7 grid grid-cols-2 gap-4 place-content-between">
                <div>
                    <p className="text-base font-['Rajdhani'] pb-1 font-semibold text-yellow-400 ">-Feb 2022 - July 2022</p>
                </div>
                <div>
                    <p className="text-base font-['Rajdhani'] pb-1 font-semibold text-blue-950 text-end ">-Alterra Academy</p>
                </div>
                <div className="col-span-2">
                    <h3 className="text-2xl font-['Rajdhani'] font-semibold text-blue-950">Frontend with VueJs</h3>  
                </div>
                <div className="col-span-2">
                    <p className="text-base font-['Rajdhani'] text-blue-900 line-clamp-2">Alterra Academy offers an internship program with a curriculum tailored to the demands of the professional workforce.</p>  
                </div>
              </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
              <div className="bg-white p-7 rounded-lg mt-7 grid grid-cols-2 gap-4 place-content-between">
                <div>
                    <p className="text-base font-['Rajdhani'] pb-1 font-semibold text-yellow-400 ">-Jan 2022 - Feb 2023</p>
                </div>
                <div>
                    <p className="text-base font-['Rajdhani'] pb-1 font-semibold text-blue-950 text-end ">-Sanbercode</p>
                </div>
                <div className="col-span-2">
                    <h3 className="text-2xl font-['Rajdhani'] font-semibold text-blue-950">Laravel Web Development</h3>  
                </div>
                <div className="col-span-2">
                    <p className="text-base font-['Rajdhani'] text-blue-900 line-clamp-2">I am currently enrolled in the Sanbercode bootcamp, where I am gaining expertise in Laravel. The program provides comprehensive knowledge and practical skills in Laravel, equipping me for a successful career in web development</p>  
                </div>
              </div>
              <div className="bg-white p-7 rounded-lg mt-7 grid grid-cols-2 gap-4 place-content-between">
                <div>
                    <p className="text-base font-['Rajdhani'] pb-1 font-semibold text-yellow-400 ">-Des 2021 - Des 2022</p>
                </div>
                <div>
                    <p className="text-base font-['Rajdhani'] pb-1 font-semibold text-blue-950 text-end ">-Imagiri Jogja</p>
                </div>
                <div className="col-span-2">
                    <h3 className="text-2xl font-['Rajdhani'] font-semibold text-blue-950">Chairman</h3>  
                </div>
                <div className="col-span-2">
                    <p className="text-base font-['Rajdhani'] text-blue-900 line-clamp-2">Imagiri Jogja is a student organization consisting of students from the Wonogiri region who are currently studying in Yogyakarta.</p>  
                </div>
              </div>
          </div>
    </div>
  );
}

export default ExperienceComponent;
