import express from "express";
import { readCourseData, saveCourseData } from "./utils/coursedata";

const router = express.Router();

router.get("/coursedata", async (_request, response) => {
  const coursedata = await readCourseData();
  response.json(coursedata);
});

router.post("/coursedata", async (request, response) => {
  await saveCourseData(request.body);
  response.send("CourseData saved in db");
});

export default router;
