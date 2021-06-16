import dotenv from "dotenv";
dotenv.config();

import express from "express";
// import path from "path";
import { connectDatabase } from "./utils/database";
import { readCredentials, saveCredential } from "./utils/credentials";

if (process.env.MONGODB_URL === undefined) {
  throw new Error("Missing env MONGODB_URL");
}

const app = express();
const { PORT = 3300 } = process.env;

//Serve storybook production bundle
app.use("/storybook", express.static("dist/storybook"));

// Serve app production bundle
app.use(express.static("dist/app"));

// // Handle client routing, return all requests to the app
// app.get("*", (_req, res) => {
//   res.sendFile(path.join(__dirname, "app/index.html"));
// });

// app.listen(PORT, () => {
//   console.log(`Server listening at http://localhost:${PORT}}`);
// });

app.use(express.json());

app.get("/api/credentials", async (_request, response) => {
  const credentials = await readCredentials();
  response.json(credentials);
});

app.post("/api/credentials", async (request, response) => {
  await saveCredential(request.body);
  response.send("Credential saved in db");
});

connectDatabase(process.env.MONGODB_URL).then(() => {
  console.log("Database connected");
  app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}}`);
  });
});
