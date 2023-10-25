import express from "express";
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./routes/user.route.js";
import connectDb from "./config/db.js";
const port = proces.env.PORT || 8000;

connectDb();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));
