import express from "express";
import { readCredentials, saveCredential } from "./utils/credentials";

const router = express.Router();

router.get("/credentials", async (_request, response) => {
  const credentials = await readCredentials();
  response.json(credentials);
});

router.post("/credentials", async (request, response) => {
  await saveCredential(request.body);
  response.send("Credential saved in db");
});

export default router;
