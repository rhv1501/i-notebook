import express from "express";
import path from "path";
export const app = express();
import { mongodb } from "./database/db.js";
import auth from "./routes/auth.js";
import dotenv from "dotenv";
import note from "./routes/notes.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";
app.use(morgan("dev"));
app.use(cookieParser());
dotenv.config();
app.use(express.json());
const __dirname = path.resolve();
//routes
app.use("/api/auth", auth);
app.use("/api/notes", note);
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

//server
app.listen(process.env.PORT || 5000, () => {
  console.log("server up and running on", process.env.PORT);
  mongodb();
});
