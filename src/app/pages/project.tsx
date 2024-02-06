"use client";
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import Image from 'next/image';

const cardsData = [
  { id: 1, title: 'ziraymedia.com', tech:'Laravel, MYSQL, Bootstrap, HTML', content: 'The solution to get your business location on everyone\'s screens. With a virtual tour, potential visitors can see and walk around your place without having to leave their place', image: '/porto1.png' },
  { id: 2, title: 'Virtual Tour', tech:'Laravel, MYSQL, Bootstrap, HTML', content: 'The solution to get your business location on everyone\'s screens. With a virtual tour, potential visitors can see and walk around your place without having to leave their place', image: '/porto3.png' },
  { id: 3, title: 'Induro Internasional',tech:'Laravel, MYSQL, Bootstrap, HTML', content: 'The solution to get your business location on everyone\'s screens. With a virtual tour, potential visitors can see and walk around your place without having to leave their place', image: '/porto2.png' },
];

function App() {
  return (
    <div className="px-20 pt-5 pb-10 bg-blue-50" id="project">
      <h1 className="font-['Rajdhani'] text-lg font-semibold pb-1 text-blue-950">- PROJECT</h1>
      <h1 className="font-['Rajdhani'] text-5xl font-black text-blue-950">Project is Complete</h1>
      <div className="container mx-auto py-4 pt-10 grid grid-cols-2 gap-4" >
        {cardsData.map(card => (
          <animated.div key={card.id} className="card p-8 rounded-lg flex flex-col overflow-y-auto bg-white">
            <Image src={card.image} alt={card.title} width={150} height={100} className="rounded-lg mb-4 flex-shrink-0 w-full" />
            <div className="card-body flex-grow">
              <h5 className="card-title text-xl font-bold mb-1">{card.title}</h5>
              <p className="card-text text-gray-600 text-sm mb-4">{card.tech}</p>
              <p className="card-text text-gray-600 text-base">{card.content}</p>
              <a href="#" className="btn btn-primary mt-4 text-base">Lihat Detail</a>
            </div>
          </animated.div>
        ))}
        </div>
      </div>
  );
}

export default App;
