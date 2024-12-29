/* eslint-disable react/prop-types */

import axios from "axios";
import { useContext, useState } from "react";
import {toast} from "react-toastify"
import { context } from "../context/Context";
import edit from "../assets/edit-button.png"
import { Link } from "react-router-dom";
const Course = ({id,title,cover,price}) => {

  const [reload,setReload] =useState(false)
  if(reload){
    window.location.reload()
    setReload(false)
  }
  const deleteCourse = async (id)=>{
    try {
      const res=await axios.post("http://localhost:4000/api/courses/remove",{id})
      if(res.data.success){
       toast.success(res.data.message);
       setReload(true)
      }
      else{
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div className="flex bg-slate-300 mx-36 items-center justify-between px-4 py-4 rounded-md mb-3">
      <img src={cover} className="h-28 object-contain w-28" alt="" />
      <h2 className="text-md"><span className="text-lg font-semibold">Title: </span>{title}</h2>
      <h3><span className="text-lg font-semibold">Price: </span>{price} DT</h3>
      <Link to={`/update/${id}`}><img src={edit} alt="edit_button" /></Link>
      <button className="bg-red-600 hover:bg-red-500 rounded-md text-white  p-4" onClick={()=> deleteCourse(id)}>Delete</button>
    </div>
  );
}

export default Course