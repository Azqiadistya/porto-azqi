import React from "react";
import Image from "next/image";
import { ImInstagram, ImWhatsapp, ImLinkedin } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";

const Page = () => {
  const imageUrl = "/blog1.png";

  return (
    <div className="bg-blue-50 w-screen h-full pb-14">
      <div className="container pt-7">
        <nav className="flex pt-5" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <a
                  href="#"
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                >
                  Blog
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                  SPA vs MPA
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <div style={{ width: "100%" }}>
          <Image
            src={imageUrl}
            alt="Picture of the author"
            width={500}
            height={500}
            className="pt-5"
            style={{ width: "100%" }}
          />
        </div>
        <h4 className="p-3 bg-gray-200">
          <strong>By:</strong> Azqiadistya, <strong>at</strong> Aug 26, 2023
        </h4>
        <h1 className="font-['Rajdhani'] text-5xl font-black text-blue-950 py-5">
          SPA vs MPA, Mana yang lebih baik?
        </h1>
        <p className="font-['Rajdhani'] text-justify mb-5">
          Jika belum familiar dengan apa itu MPA. maka, MPA itu singkatan dari
          Multiple Page Application. Untuk mengerti secara mendasar apa itu MPA,
          silahkan buka situs www.google.com situs besutan google ini masih
          menerapkan konsep MPA. Maksud dari MPA adalah, sebuah pengembangan
          antar muka website yang masih berdiri sendiri dari tiap pembuatan
          halamannya, dan ketika browser melakukan request ke server untuk
          berpindah halaman, maka browser akan kembali menarik resources baru
          walaupun ada beberapa halaman yang tetap sama-seperti Header website.
          Kebalikan dari MPA, SPA atau single Page Application mengusung konsep
          untuk memakai resources yang dibutuhkan saja. Hal ini menyebabkan,
          ketika berpindah halaman maka hanya bagian Konten saja yang berubah,
          dan bagian lain masih tetap sama. Contoh nyata, adalah penggunaan
          Gmail.com. Itu merupakan contoh dari SPA.
        </p>
        <div className="border-b-2 border-gray-300 mb-2 pb-7"></div>
        <h2 className="font-['Rajdhani'] text-center text-blue-950">
          <strong>Share Berita Ini</strong>
        </h2>
        <div className="flex flex-wrap justify-center mt-auto">
          <a
            className="text-blue-950 px-2"
            href="https://www.instagram.com/azqiadistya/"
          >
            <ImInstagram />{" "}
          </a>
          <a className="text-blue-950 px-2" href="https://wa.me/6282322302193">
            <ImWhatsapp />{" "}
          </a>
          <a
            className="text-blue-950 px-2"
            href="https://www.linkedin.com/in/azqiadistya/"
          >
            <ImLinkedin />{" "}
          </a>
          <a
            className="text-blue-950 px-2 pb-5"
            href="https://github.com/Azqiadistya"
          >
            <AiFillGithub />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
