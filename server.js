import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { PORT } from "./config/env.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Welcome to the Subscription Tracker API!");
});

app.listen(PORT, () => {
  console.log(`Server Running on PORT: ${PORT}`);
});

export default app;
