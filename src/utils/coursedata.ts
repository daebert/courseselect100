import type { Choice, CourseData } from "../types";
import { getChoiceDataCollection, getCourseDataCollection } from "./database";

export const readCourseData = async (): Promise<CourseData[]> => {
  return await getCourseDataCollection().find().sort({ service: 1 }).toArray();
};

export const readSingleCourseData = async (
  courseName: string
): Promise<CourseData> => {
  const singleCourseData = await getCourseDataCollection().findOne({
    courseName,
  });
  if (!singleCourseData) {
    throw new Error(`Course does not exist: ${courseName}`);
  }
  return singleCourseData;
};

export const saveCourseData = async (coursedata: CourseData): Promise<void> => {
  await getCourseDataCollection().insertOne({
    ...coursedata,
  });
};

export const saveChoiceData = async (choicedata: Choice): Promise<void> => {
  await getChoiceDataCollection().insertOne({
    ...choicedata,
  });
};
