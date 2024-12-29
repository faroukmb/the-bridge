import express from "express"
import { createCourse, deleteCourse, getAllCourses,getCourseById, updateCourse } from "../controllers/courseController.js";
import upload from "../Middlewares/multer.js";
const courseRouter = express.Router();

courseRouter.post("/create", upload.single("image"), createCourse);
courseRouter.get("/all", getAllCourses);
courseRouter.post("/single", getCourseById);
courseRouter.post("/remove",deleteCourse)
courseRouter.post("/edit", upload.single("image"), updateCourse);

export default courseRouter