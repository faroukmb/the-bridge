import { useContext, useState } from "react";
import axios from "axios";
import { context } from "../context/Context";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const Update = () => {
  const {id} =useParams()
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const { navigate } = useContext(context);
  const updateCourse = async (e)=>{
    e.preventDefault()
    try {
       const formData = new FormData();
       formData.append("id", id); 
       formData.append("title", title); 
       formData.append("content", content); 
       formData.append("price", price); 

       if (image) {
         formData.append("image", image);
       }
       const res = await axios.post("http://localhost:4000/api/courses/edit",formData);
       if(res.data.success){
         toast.success(res.data.message)
         setTitle("")
         setContent("")
         setImage(false)
         setPrice("")
         navigate("/")
       }
       else{
         toast.error(res.data.message)
       }
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <form className=" flex flex-col w-3/4 items-center justify-center" onSubmit={updateCourse}
    >
      <div className="flex flex-col bg-[rgb(239,184,104)] p-10 rounded-md items-center justify-center w-3/4">
        <h1 className="text-3xl mb-2 font-bold">Update course</h1>
        <div className="flex flex-col items-start mb-3 w-full">
          <label className="font-semibold text-xl mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-3 w-full rounded-md "
            placeholder="Write your title Here"
          />
        </div>
        <div className="flex flex-col items-start mb-3 w-full">
          <label className="font-semibold text-xl mb-2">Content</label>
          <textarea
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="p-3 w-full rounded-md"
            placeholder="Write your Content Here"
          />
        </div>
        <div className="flex flex-col items-start mb-3 w-full">
          <label className="font-semibold text-xl mb-2">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="p-3 w-full rounded-md"
            placeholder="Write the price Here"
          />
        </div>
        <div className="flex flex-col items-start mb-3 w-full">
          <input
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
        </div>

        <button className="p-4 bg-[rgb(169,61,102)] text-white rounded-md">
          Update
        </button>
      </div>
    </form>
  );
};

export default Update;
