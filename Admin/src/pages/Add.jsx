import { useContext, useState } from "react";
import axios from "axios";
import { context } from "../context/Context";
import { toast } from "react-toastify";
const Add = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const {navigate} = useContext(context)

  const createCourse = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("price", price);
      image && formData.append("image", image);
      const res = await axios.post(
        `http://localhost:4000/api/courses/create`,
        formData
      );
      console.log(res);

      if (res.data.success) {
        console.log(res.data);
        toast.success("Course Successfully Added!");
        setContent("");
        setTitle("");
        setPrice("");
        setImage(false);
        navigate("/")
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={createCourse}
      className=" flex flex-col w-3/4 items-center justify-center  "
    >
      <div className="flex flex-col bg-[rgb(239,184,104)] p-10 rounded-md items-center justify-center w-3/4">
        <h1 className="text-3xl mb-2 font-bold">Create new course</h1>
        <div className="flex flex-col items-start mb-3 w-full">
          <label className="font-semibold text-xl mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-3 w-full rounded-md"
            placeholder="Write your title Here"
            required
          />
        </div>
        <div className="flex flex-col items-start mb-3 w-full">
          <label className="font-semibold text-xl mb-2">Content</label>
          <textarea type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="p-3 w-full rounded-md"
            placeholder="Write your Content Here"
            required
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
            required
          />
        </div>
        <div className="flex flex-col items-start mb-3 w-full">
          <input
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            required
          />
        </div>

        <button className="p-4 bg-[rgb(169,61,102)] text-white rounded-md">
          Create
        </button>
      </div>
    </form>
  );
};

export default Add;
