"use client";

import React, { useEffect, useState } from 'react'

const page = () => {
  const [lastKeyPressed, setLastKeyPressed] = useState<string>('');
  
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Check if the pressed key is a single letter
      if (event.key.length === 1 && event.key.match(/[a-z]/i)) {
        setLastKeyPressed(event.key);
        // add logic here to handle the key press
        console.log('Key pressed:', event.key);
      }
    };

    // Add event listener
    window.addEventListener('keydown', handleKeyPress);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className='relative bg-white'>
      <div className='bg-gray-300 top-0 right-0 absolute w-1/3 h-24 mt-5 mr-5 text-black'>
        <div className='m-2'>
          A B C
        </div>
      </div>
      <div className='flex flex-col justify-center items-center h-screen'>
        <img src='assets/hangman.png' className='scale-[2]'/>
        <div className="flex space-x-4 mt-20">
          <div className="w-16 h-16 bg-slate-300 border-black border-b-2"></div>
          <div className="w-16 h-16 bg-slate-300 border-black border-b-2"></div>
          <div className="w-16 h-16 bg-slate-300 border-black border-b-2"></div>
          <div className="w-16 h-16 bg-slate-300 border-black border-b-2"></div>
          <div className="w-16 h-16 bg-slate-300 border-black border-b-2"></div>
        </div>
      <button className="absolute bottom-0 mb-28 px-6 py-2 bg-black text-white rounded-md hover:bg-slate-700 transition-colors">
        New Game
      </button>
      <div className="text-2xl text-black">
        Your Guess: {lastKeyPressed || ''}
      </div>
      </div>
    </div>
  )
}

export default page