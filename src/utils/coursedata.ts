import type { CourseData } from "../types";
import { getCourseDataCollection } from "./database";

export const readCourseData = async (): Promise<CourseData[]> => {
  return await getCourseDataCollection().find().sort({ service: 1 }).toArray();
};

export const saveCourseData = async (coursedata: CourseData): Promise<void> => {
  await getCourseDataCollection().insertOne({
    ...coursedata,
  });
};
