import Image from 'next/image'
import { ImInstagram, ImWhatsapp, ImLinkedin } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import AboutPage from './pages/about';
import ExperienceComponent from './pages/experience';

export default function home () {
  return (
    <body className="bg-white dark:bg-black">
      <div className="mx-auto grid grid-cols-4 gap-0">
        <div className="pt-10 px-5">
          <div className="flex flex-wrap justify-center">
            <div className="w-2/5 sm:w-2/5 px-4 pt-5">
              <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png" alt="..." className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" />
            </div>
          </div>
          <div className="flex flex-wrap justify-center pt-9">
            <p className="font-['Rajdhani'] text-2xl font-bold pb-5 text-blue-950">Azqia Adistya</p>
          </div>
          
          <div className="flex flex-wrap justify-center pt-5 pb-2 font-['Rajdhani'] text-blue-950 font-semibold text-lg">
            <a href="#">Home</a>
          </div>
          <div className="flex flex-wrap justify-center pb-2 font-['Rajdhani'] text-blue-950 font-semibold text-lg">
            <a href="#">About</a>
          </div>
          <div className="flex flex-wrap justify-center pb-2 font-['Rajdhani'] text-blue-950 font-semibold text-lg">
            <a href="#">Project</a>
          </div>
          <div className="flex flex-wrap justify-center pb-2 font-['Rajdhani'] text-blue-950 font-semibold text-lg">
            <a href="#">Blog</a>
          </div>
          <div className="flex flex-wrap justify-center pb-2 font-['Rajdhani'] text-blue-950 font-semibold text-lg">
            <a href="#">Roadmap</a>
          </div>
          <div className="flex flex-wrap justify-center pb-2 font-['Rajdhani'] text-blue-950 font-semibold text-lg">
            <a href="#">Contact</a>
          </div>

          <div className="flex flex-wrap justify-center pt-16">
            <a className="text-blue-950 px-2" href="https://www.instagram.com/azqiadistya/"><ImInstagram/> </a>
            <a className="text-blue-950 px-2" href="https://wa.me/6282322302193"><ImWhatsapp/> </a>
            <a className="text-blue-950 px-2" href="https://www.linkedin.com/in/azqiadistya/"><ImLinkedin/> </a>
            <a className="text-blue-950 px-2" href="https://github.com/Azqiadistya"><AiFillGithub/> </a>
          </div>

          <div className="flex flex-wrap justify-center pt-5">
            <h3 className="text-blue-950">Copyright © 2023 Azqiadistya.</h3>
            <h3 className="text-blue-950">All rights reserved.</h3>
          </div>
        </div>
        
        <div className="col-span-3 text-7xl bg-blue-50 pt-10 h-screen overflow-y-scroll">
          <div className="grid grid-cols-2 gap-3 px-20">
            <div className="pt-28">
              <h1 className="font-['Rajdhani'] font-black text-blue-950">Hi, I' m</h1>
              <h1 className="font-['Rajdhani'] font-black text-blue-400">Azqiadistya</h1>
              <p className="font-['Rajdhani'] text-lg font-semibold pb-5 italic text-blue-950">Frontend Developer  |  Based in Yogyakarta</p>
              <p className="text-base font-['Rajdhani'] pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae optio ratione aperiam minima consequuntur autem necessitatibus repellat molestias, quasi impedit dolor, distinctio, odit alias minus praesentium inventore tenetur aliquam.</p>
              
              <button className="bg-blue-950 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded">
                Download CV
              </button>
              <button className="bg-transparent hover:bg-blue-950 font-bold text-blue-950 ml-2 text-sm hover:text-white py-2 px-4 border border-blue-950 hover:border-transparent rounded">
                Let's Talk
              </button>

              <p className="font-['Rajdhani'] text-base font-semibold text-blue-950 pt-16">+62 8232 2302 193</p>
              <p className="font-['Rajdhani'] text-base font-semibold text-blue-950">azqiabdillah@gmail.com</p>
              <p className="font-['Rajdhani'] text-base font-semibold text-blue-950 pb-28">Maguwoharjo, Sleman, Yogyakarta</p>

            </div>
            <div className="px-7 pt-20">
              <Image src="/person1.png" width={500} height={500} alt="Picture of the author"/>
            </div>
          </div>
        <AboutPage />
        <ExperienceComponent/>
        </div>
      </div>
    </body>
  )
}
