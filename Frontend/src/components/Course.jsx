import React from 'react'
import course from "../assets/course.jpg"
const Course = ({title,cover,price}) => {
  return (
    <div className="flex flex-col ">
      <img src={cover} className='h-60 object-cover ' alt="course" />
      <div className="flex flex-col items-left">
        <h1 className='text-3xl font-bold mx-5 mb-2 '>{title}</h1>
        <h2 className="text-[rgb(174,47,99)] text-xl font-medium mx-8">{price}/Month</h2>
      </div>
    </div>
  );
}

export default Course