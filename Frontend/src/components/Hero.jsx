import React from 'react'

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex flex-col bg-[rgba(255,255,255,0.8)] w-3/5 h-2/5 items-center justify-center rounded-md ">
        <h1 className="text-3xl font-bold mb-2">
          Improve your skills in your own <br /> To prepare for a better future
        </h1>
        <button className="bg-[rgb(174,47,99)] px-4 py-2 rounded-full text-white">
          REGISTER NOW
        </button>
      </div>
    </div>
  );
}

export default Hero