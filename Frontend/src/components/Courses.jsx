import React from 'react'
import Course from './Course';
import { useState } from 'react';
import axios from "axios"
import { useEffect } from 'react';
import {Link} from "react-router-dom"
const Courses = () => {
  const [courses,setCourses] =useState([])
   const getAllcourses = async () => {
     try {
       const res = await axios.get("http://localhost:4000/api/courses/all");
       if (res.data.success) {
         console.log(res.data.courses);
         setCourses(res.data.courses);
       }
     } catch (error) {
       console.log(error);
     }
   };
   useEffect(()=>{
    getAllcourses()
   },[])
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mx-16 h-44">
        <h1 className="text-4xl font-bold">Discover our Courses</h1>
        <button className="bg-[rgb(174,47,99)] px-4 py-1 rounded-full text-white">
          View More
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-8  ">
        {
          courses.map((item,index)=>{

            return (
              <Link key={index} to={`/course/${item._id}`}>
                  <Course title={item.title} content={item.content} cover={item.cover} price={item.price}  />
              </Link>
            )
            
          
          
        })
      }
        
      </div>
    </div>
  );
}

export default Courses