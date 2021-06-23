import { Choice } from "../types";
import { getChoiceDataCollection } from "./database";

export const saveChoiceData = async (choicedata: Choice): Promise<void> => {
  await getChoiceDataCollection().insertOne({
    ...choicedata,
  });
};
