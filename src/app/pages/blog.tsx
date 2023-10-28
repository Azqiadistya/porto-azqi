// pages/about/about.tsx
import React from "react";
import Image from 'next/image'

function BlogPage() {
  return (
      <div className="grid grid-cols-3 gap-4 px-20 pt-28 pb-32 bg-blue-50">
          <div>
              <h1 className="font-['Rajdhani'] text-lg font-semibold pb-1 text-blue-950">- BLOG</h1>
              <h1 className="font-['Rajdhani'] text-5xl font-black text-blue-950">My blog & news</h1>

              <button className="bg-blue-950 hover:bg-blue-900 text-white text-lg font-bold py-2 px-4 rounded">
                Get in touch
              </button>
          </div>
          <div className="col-span-2">
            <div className="p-5 bg-white rounded-lg flex flex-wrap justify-center grid grid-cols-4 gap-4">
                <div>
                   <Image src="/blog1.png" width={500} height={500} alt="Picture of the author" className="rounded-lg h-full" /> 
                </div>
                <div className="col-span-3">
                    <p className="text-lg font-['Rajdhani'] font-semibold text-blue-950">SPAs vs MPAs in Web Development</p>   
                    <p className="text-xs font-['Rajdhani'] pb-1 text-blue-900">Aug 26, 2023</p> 
                    <p className="text-sm font-['Rajdhani'] text-blue-900 truncate">In the vast landscape of web development, two prominent architectural approaches stand out: Single Page Applications (SPAs) and Multiple Page Applications (MPAs)</p> 
                    <div className="flex pt-2 ">
                      <a className="font-['Rajdhani'] text-red-600 text-sm font-bold pt-1" href="#">READ MORE </a>
                    </div>
                </div>
            </div>
            <div className="p-5 mt-5 bg-white rounded-lg flex flex-wrap justify-center grid grid-cols-4 gap-4 ">
                <div>
                   <Image src="/blog1.png" width={500} height={500} alt="Picture of the author" className="rounded-lg h-full" /> 
                </div>
                <div className="col-span-3">
                    <p className="text-lg font-['Rajdhani'] font-semibold text-blue-950">SPAs vs MPAs in Web Development</p>   
                    <p className="text-xs font-['Rajdhani'] pb-1 text-blue-900">Aug 26, 2023</p> 
                    <p className="text-sm font-['Rajdhani'] text-blue-900 truncate">In the vast landscape of web development, two prominent architectural approaches stand out: Single Page Applications (SPAs) and Multiple Page Applications (MPAs)</p> 
                    <div className="flex pt-2 ">
                      <a className="font-['Rajdhani'] text-red-600 text-sm font-bold pt-1" href="#">READ MORE </a>
                    </div>
                </div>
            </div>
            <div className="p-5 mt-5 bg-white rounded-lg flex flex-wrap justify-center grid grid-cols-4 gap-4 ">
                <div>
                   <Image src="/blog1.png" width={500} height={500} alt="Picture of the author" className="rounded-lg h-full" /> 
                </div>
                <div className="col-span-3">
                    <p className="text-lg font-['Rajdhani'] font-semibold text-blue-950">SPAs vs MPAs in Web Development</p>   
                    <p className="text-xs font-['Rajdhani'] pb-1 text-blue-900">Aug 26, 2023</p> 
                    <p className="text-sm font-['Rajdhani'] text-blue-900 truncate">In the vast landscape of web development, two prominent architectural approaches stand out: Single Page Applications (SPAs) and Multiple Page Applications (MPAs)</p> 
                    <div className="flex pt-2 ">
                      <a className="font-['Rajdhani'] text-red-600 text-sm font-bold pt-1" href="#">READ MORE </a>
                    </div>
                </div>
            </div>
            <div className="p-5 mt-5 bg-white rounded-lg flex flex-wrap justify-center grid grid-cols-4 gap-4 ">
                <div>
                   <Image src="/blog1.png" width={500} height={500} alt="Picture of the author" className="rounded-lg h-full" /> 
                </div>
                <div className="col-span-3">
                    <p className="text-lg font-['Rajdhani'] font-semibold text-blue-950">SPAs vs MPAs in Web Development</p>   
                    <p className="text-xs font-['Rajdhani'] pb-1 text-blue-900">Aug 26, 2023</p> 
                    <p className="text-sm font-['Rajdhani'] text-blue-900 truncate">In the vast landscape of web development, two prominent architectural approaches stand out: Single Page Applications (SPAs) and Multiple Page Applications (MPAs)</p> 
                    <div className="flex pt-2 ">
                      <a className="font-['Rajdhani'] text-red-600 text-sm font-bold pt-1" href="#">READ MORE </a>
                    </div>
                </div>
            </div>
          </div>
    </div>
  );
}

export default BlogPage;
