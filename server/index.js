import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import cors from "cors";
import userRoute from "../server/routes/user.routes.js"
import cookieParser from "cookie-parser";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3030;

//api calls

app.use("/api/v1/user",userRoute);


app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
