import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";
import { connectDatabase } from "./utils/database";

const { PORT = 3300 } = process.env;

const app = express();

//Serve storybook production bundle
app.use("/storybook", express.static("dist/storybook"));

// Serve app production bundle
app.use(express.static("dist/app"));

// Handle client routing, return all requests to the app
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "app/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}}`);
});

const start = async () => {
  if (process.env.MONGODB_URL === undefined) {
    throw new Error("Missing env MONGODB_URL");
  }

  await connectDatabase(process.env.MONGODB_URL);
};

start();
