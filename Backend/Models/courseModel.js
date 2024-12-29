import mongoose from "mongoose";

const courseSchema =new mongoose.Schema({
    title: String,
    content:String,
    price: Number,
    cover: String,
},{timestamps: true,});
const courseModel = mongoose.models.course || mongoose.model("course",courseSchema);
export default courseModel;