import express from "express";
import {
  readCourseData,
  readSingleCourseData,
  saveChoiceData,
  saveCourseData,
} from "./utils/coursedata";

const router = express.Router();

router.get("/courses", async (_request, response) => {
  const coursedata = await readCourseData();
  response.json(coursedata);
});

router.get("/courses/:title", async (request, response) => {
  const singleCourseData = await readSingleCourseData(request.params.title);
  response.json(singleCourseData);
});

router.post("/courses", async (request, response) => {
  await saveCourseData(request.body);
  response.send("CourseData saved in db");
});

router.post("/choices", async (request, response) => {
  await saveChoiceData(request.body);
  response.send("ChoiceData saved in db");
});

export default router;
