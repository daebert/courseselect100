import type { Choice, Courses } from "../types";
import { getChoiceDataCollection, getCourseDataCollection } from "./database";

export const readCourseData = async (): Promise<Courses[]> => {
  return await getCourseDataCollection().find().sort({ service: 1 }).toArray();
};

export const readSingleCourseData = async (title: string): Promise<Courses> => {
  const singleCourseData = await getCourseDataCollection().findOne({
    title,
  });
  if (!singleCourseData) {
    throw new Error(`Course does not exist: ${title}`);
  }
  return singleCourseData;
};

export const saveCourseData = async (coursedata: Courses): Promise<void> => {
  await getCourseDataCollection().insertOne({
    ...coursedata,
  });
};

export const saveChoiceData = async (choicedata: Choice): Promise<void> => {
  await getChoiceDataCollection().insertOne({
    ...choicedata,
  });
};
