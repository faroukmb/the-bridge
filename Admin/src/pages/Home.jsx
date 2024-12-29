import {  useContext, useEffect, useState } from "react";
import Course from "../components/Course";
import axios from "axios";
import {context} from "../context/Context"
const Home = () => {
    const {courses,setCourses} = useContext(context) 
    const getAllcourses = async ()=>{
      try {
         const res = await axios.get("http://localhost:4000/api/courses/all");
         if(res.data.success){
          console.log(res.data.courses);
          setCourses(res.data.courses)
         }
      } catch (error) {
        console.log(error);
        
      }
    }

    useEffect(()=>{
      getAllcourses()
    },[])
 
  return (
    <div className="flex flex-col w-3/4 items-center h-full ">
      <h1 className="text-center font-bold text-3xl mt-7"> Your Courses</h1>
      <div className="flex flex-col w-full mt-20" >
        
        {
          courses.map((value,index)=>{
             return  <Course key={index} title={value.title} content={value.content} price={value.price} cover={value.cover} id={value._id}/>
          }
          
          )
        }
      </div>
      ;
    </div>
  );
};

export default Home;
