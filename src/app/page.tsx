import Image from 'next/image'
import { ImInstagram, ImWhatsapp, ImLinkedin } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import AboutPage from './pages/about';
import ExperienceComponent from './pages/experience';
import ProjectPage from './pages/project';
import BlogPage from './pages/blog';
import RoadmapPage from './pages/roadmap';
import ContactPage from './pages/contact';

export default function home () {
  return (
    <body className="bg-white dark:bg-black">
      <div className="mx-auto grid grid-cols-4 gap-0">
        {/* SIDEBAR */}
        <div className="pt-10 mt-auto px-5 h-screen flex flex-col justify-between overflow-hidden ">
          <div className="flex flex-wrap justify-center">
            <div className="w-2/5 sm:w-2/5 px-4 pt-5">
              <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png" alt="..." className="shadow-lg rounded-full max-w-full h-auto align-middle border-4 border-blue-200" />
            </div>
          </div>
          <div className="flex flex-wrap justify-center pt-9">
            <p className="font-['Rajdhani'] text-2xl font-bold pb-5 text-blue-950">Azqia Adistya</p>
          </div>

          <div className='my-auto'>
            <div className="flex flex-wrap justify-center pt-2 pb-2 font-['Rajdhani'] text-blue-950 font-semibold text-lg rounded-xl hover:bg-slate-200">
              <a href="">Home</a>
            </div>
            <div className="flex flex-wrap justify-center pt-2 pb-2 font-['Rajdhani'] text-blue-950 font-semibold text-lg rounded-xl hover:bg-slate-200">
              <a href="#about">About</a>
            </div>
            <div className="flex flex-wrap justify-center pt-2 pb-2 font-['Rajdhani'] text-blue-950 font-semibold text-lg rounded-xl hover:bg-slate-200">
              <a href="#project">Project</a>
            </div>
            <div className="flex flex-wrap justify-center pt-2 pb-2 font-['Rajdhani'] text-blue-950 font-semibold text-lg rounded-xl hover:bg-slate-200">
              <a href="#blog">Blog</a>
            </div>
            <div className="flex flex-wrap justify-center pt-2 pb-2 font-['Rajdhani'] text-blue-950 font-semibold text-lg rounded-xl hover:bg-slate-200">
              <a href="#roadmap">Roadmap</a>
            </div>
            <div className="flex flex-wrap justify-center pt-2 pb-2 font-['Rajdhani'] text-blue-950 font-semibold text-lg rounded-xl hover:bg-slate-200">
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="flex flex-wrap justify-center mt-auto pb-10">
            <a className="text-blue-950 px-2" href="https://www.instagram.com/azqiadistya/"><ImInstagram/> </a>
            <a className="text-blue-950 px-2" href="https://wa.me/6282322302193"><ImWhatsapp/> </a>
            <a className="text-blue-950 px-2" href="https://www.linkedin.com/in/azqiadistya/"><ImLinkedin/> </a>
            <a className="text-blue-950 px-2 pb-5" href="https://github.com/Azqiadistya"><AiFillGithub /> </a>
            <div className=''>
              <h3 className="text-blue-950 text-center">Copyright © 2023 Azqiadistya.</h3>
              <h3 className="text-blue-950 text-center">All rights reserved.</h3>
            </div>
          </div>
        </div>
        
        <div className="col-span-3 text-7xl bg-blue-50 pt-10 h-screen overflow-y-scroll">
          <div className="grid grid-cols-2 gap-3 px-20">
            <div className="pt-20">
              <h1 className="font-['Rajdhani'] font-black text-blue-950">Hi, I&apos;m</h1>
              <h1 className="font-['Rajdhani'] font-black text-blue-400">Azqiadistya</h1>
              <p className="font-['Rajdhani'] text-lg font-semibold pb-5 italic text-blue-950">Frontend Developer  |  Based in Yogyakarta</p>
              <p className="text-base font-['Rajdhani'] pb-5">I&apos;m a Computer Science student with a strong passion for becoming a frontend web developer. My journey into web development has seen me building websites with various frameworks like Laravel, Vue JS, React JS and Next JS while also diving into CSS frameworks such as Bootstrap, Vuetify, BootstrapVue, and Tailwindcss. I&apos;m proud to have successfully completed several freelance projects, including websites for PT. Induro Internasional, Ziraymedia.com, Latech.site, etc.</p>
              <a href="https://drive.google.com/file/d/1U_Ky0g6RHKLRY2LhuxXuLIMyXgXE4OfS/view?usp=sharing">
                <button className="bg-blue-950 hover:bg-blue-900 text-white text-sm font-bold py-2 px-4 rounded">
                  Download CV
                </button>
              </a>
              <a href="https://wa.me/6282322302193?text=Hi%20azqi,%20aku%20ingin%20berkolaborasi">
                <button className="bg-transparent hover:bg-blue-950 font-bold text-blue-950 ml-2 text-sm hover:text-white py-2 px-4 border border-blue-950 hover:border-transparent rounded">
                  Let&apos;s Talk
                </button>
              </a>

              <p className="font-['Rajdhani'] text-base font-semibold text-blue-950 pt-16">+62 8232 2302 193</p>
              <p className="font-['Rajdhani'] text-base font-semibold text-blue-950">azqiabdillah@gmail.com</p>
              <p className="font-['Rajdhani'] text-base font-semibold text-blue-950 pb-28">Maguwoharjo, Sleman, Yogyakarta</p>

            </div>
            <div className="px-7 pt-20">
              <Image src="/person1.png" width={500} height={500} alt="Picture of the author"/>
            </div>
          </div>
          <AboutPage />
          <ExperienceComponent />
          <ProjectPage />
          <BlogPage />
          <RoadmapPage />
          <ContactPage />
        </div>
      </div>
    </body>
  )
}
