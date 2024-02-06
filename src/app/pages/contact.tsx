// pages/about/about.tsx
import React from "react";

function ContactPage() {
  return (
      <div className="grid grid-cols-2 gap-4 px-20 pt-20 pb-24 bg-blue-50" id="contact">
          <div>
              <h1 className="font-['Rajdhani'] text-lg font-semibold pb-1 text-blue-950">- LET&apos;S CONNECT</h1>
              <h1 className="font-['Rajdhani'] text-5xl font-black text-blue-950">Get in touch</h1>
              <p className="font-['Rajdhani'] text-lg text-blue-950">I&apos;m currently avaliable to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7</p>

              <p className="font-['Rajdhani'] text-base font-semibold text-blue-950 pt-16">+62 8232 2302 193</p>
              <p className="font-['Rajdhani'] text-base font-semibold text-blue-950">azqiabdillah@gmail.com</p>
              <p className="font-['Rajdhani'] text-base font-semibold text-blue-950 pb-28">Maguwoharjo, Sleman, Yogyakarta</p>
              
          </div>
          <div className="pl-10 pt-7">
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required></input>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-3" placeholder="Your email" required></input>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-28 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-3" placeholder="Write something.." required></input>
              
            <button className="bg-blue-950 hover:bg-blue-900 text-white text-base font-bold py-2 px-4 mt-1 rounded">
                Submit now
            </button>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.2410920898783!2d110.42620887219957!3d-7.784818260062518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5baa16c2f499%3A0xa95a6b9f8e49d77c!2sKOSJOYO!5e1!3m2!1sid!2sid!4v1698735162774!5m2!1sid!2sid" width="840" height="300" className="border:0;"  loading="lazy"></iframe>
    </div>
  );
}

export default ContactPage;
