import { Choice } from "../../types";

export async function saveChoiceData(choicedata: Choice): Promise<Choice> {
  const response = await fetch("/api/choices", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(choicedata),
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw errorMessage;
  }
  const result: Choice = await response.json();
  return result;
}
