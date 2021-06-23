import express from "express";
import { saveChoiceData } from "./utils/courseChoice";
import {
  readCourseData,
  readSingleCourseData,
  saveCourseData,
} from "./utils/coursedata";

const router = express.Router();

router.get("/courses", async (_request, response) => {
  const coursedata = await readCourseData();
  response.json(coursedata);
});

router.get("/courses/:courseName", async (request, response) => {
  const singleCourseData = await readSingleCourseData(
    request.params.courseName
  );
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
