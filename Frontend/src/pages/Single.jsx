import React from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'
const Single = () => {
    const {id} = useParams()
    const [courseData,setCourseData] = useState({})
    const getCoursebyId = async (id)=>{
         try {
            const res =await axios.post("http://localhost:4000/api/courses/single",{id})
            if(res.data.success){
                console.log(res.data);
                setCourseData(res.data.course)
            }
         } catch (error) {
            console.log(error);
            
         }
    }
    useEffect(()=>{
        getCoursebyId(id)
    },[])
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative">
        
          <img
            src={courseData.cover}
            alt={courseData.title}
            className="w-full h-64 object-contain"
          />
        </div>
        <div className="p-6">
        
          <h1 className="text-2xl font-semibold text-gray-800">
            {courseData.title}
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            <span className="font-bold text-green-600">${courseData.price}</span>
          </p>

          
          <p className="text-gray-700 mt-4 leading-relaxed max-w-72">
            Description: {courseData.content}
          </p>
          <div className="mt-6 flex justify-between items-center">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition duration-200">
              Buy Now
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md shadow hover:bg-gray-300 transition duration-200">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Single