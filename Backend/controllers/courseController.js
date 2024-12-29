import courseModel from "../Models/courseModel.js";
import { v2 as cloudinary } from "cloudinary";
const createCourse = async (req,res)=>{
   try {
    const {title,content,price} = req.body;
    const image = req.file;
     if (!image) {
       return res.json({ success: false, message: "image not found" });
     }
     if (!title) {
       return res.json({ success: false, message: "Title not provided!" });
     }
     if (!price) {
       return res.json({ success: false, message: "Price not provided!" });
     }
     if (!content) {
       return res.json({ success: false, message: "Content not provided!" });
     }
     const result = await cloudinary.uploader.upload(image.path, {
       resource_type: "image",
     });
     const imageUrl = result.secure_url;
     const courseData = {
        title,
        content,
        price,
        cover: imageUrl
     }
     const newCourse =new courseModel(courseData);
     await newCourse.save()
     res.json({success:true,newCourse});
   } catch (error) {
    console.log(error);
   }
}
const getAllCourses = async (req, res) => {
  try {
    const courses = await courseModel.find({});
    if (courses.length > 0) {
      res.json({ success: true, courses });
    }
  } catch (error) {
    console.log(error);
  }
};
 const getCourseById = async (req, res) => {
   try {
     const { id } = req.body;
     const course = await courseModel.findById(id);
     if (course) {
       res.json({ success: true, course });
     } else {
       res.json({ success: false, message: "course does not exist" });
     }
   } catch (error) {
     res.json({ success: false, message: error.message });
   }
 };
 const deleteCourse = async (req, res) => {
   try {
     const { id } = req.body;
     await courseModel.findByIdAndDelete(id);
     res.json({ success: true, message: "Course Deleted Successfully!" });
   } catch (error) {
     res.json({ success: false, message: error.message });
   }
 };
 const updateCourse = async (req, res) => {
   try {
     const { id, title, price, content } = req.body;
     const image = req.file;

     if(!image && !title && !price && !content){
      return res.json({success:false, message: "You have to modify something!"})
     }

     let imageUrl;
     if (image) {
       const result = await cloudinary.uploader.upload(image.path, {
         resource_type: "image",
       });
       imageUrl = result.secure_url;
       
     }

     const editedData = {
       ...(title && { title }), 
       ...(content && { content }),
       ...(price && { price }),
       ...(image && { cover: imageUrl }),
     };

     
     const updatedCourse = await courseModel.findByIdAndUpdate(id, editedData, {
       new: true,
       runValidators: true,
     });

     if (!updatedCourse) {
       return res.json({ success: false, message: "Course not found" });
     }

     res.json({
       success: true,
       message: "Post edited successfully",
       post: updatedCourse,
     });
   } catch (error) {
     res.status(500).json({ success: false, message: error.message });
   }
 };


 export {createCourse,getAllCourses,getCourseById,updateCourse,deleteCourse}