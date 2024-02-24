import React from 'react';
import Image from 'next/image';
import { ImInstagram, ImWhatsapp, ImLinkedin } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";

const Page = () => {
  const imageUrl = '/blog1.png';

  return (
    <div className='bg-blue-50 w-screen h-full'>
      <div className='container pt-7'>
        <div style={{ width: '100%' }}>
          <Image src={imageUrl} alt="Picture of the author" width={500} height={500} className="pt-10" style={{ width: '100%' }} />
        </div>
        <h4 className='p-3 bg-gray-200'><strong>By:</strong> Azqiadistya, <strong>at</strong>  Aug 26, 2023</h4>
        <h1 className="font-['Rajdhani'] text-5xl font-black text-blue-950 py-5">SPA vs MPA, Mana yang lebih baik?</h1>
        <p className="font-['Rajdhani'] text-justify mb-5">Jika belum familiar dengan apa itu MPA. maka, MPA itu singkatan dari Multiple Page Application. Untuk mengerti secara mendasar apa itu MPA, silahkan buka situs www.google.com
situs besutan google ini masih menerapkan konsep MPA. Maksud dari MPA adalah, sebuah pengembangan antar muka website yang masih berdiri sendiri dari tiap pembuatan halamannya, dan ketika browser melakukan request ke server untuk berpindah halaman, maka browser akan kembali menarik resources baru walaupun ada beberapa halaman yang tetap sama-seperti Header website. 

Kebalikan dari MPA, SPA atau single Page Application mengusung konsep untuk memakai resources yang dibutuhkan saja. Hal ini menyebabkan, ketika berpindah halaman maka hanya bagian Konten saja yang berubah, dan bagian lain masih tetap sama. Contoh nyata, adalah penggunaan Gmail.com. Itu merupakan contoh dari SPA.</p>
        <div className="border-b-2 border-gray-300 mb-2"></div> 
        <h2 className="font-['Rajdhani'] text-center text-blue-950"><strong>Share Berita Ini</strong></h2>
          <div className="flex flex-wrap justify-center mt-auto">
            <a className="text-blue-950 px-2" href="https://www.instagram.com/azqiadistya/"><ImInstagram/> </a>
            <a className="text-blue-950 px-2" href="https://wa.me/6282322302193"><ImWhatsapp/> </a>
            <a className="text-blue-950 px-2" href="https://www.linkedin.com/in/azqiadistya/"><ImLinkedin/> </a>
            <a className="text-blue-950 px-2 pb-5" href="https://github.com/Azqiadistya"><AiFillGithub /> </a>
          </div>
      </div>
    </div>
  );
};

export default Page;
