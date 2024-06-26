import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//port
dotenv.config();
const PORT = process.env.PORT;

//database connectivity
const URI = process.env.MONGODB_URI;
try {
  mongoose.connect(URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log(error);
}

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//routes
app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
