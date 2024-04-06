import dotenv from "dotenv";
dotenv.config();
import "./connection/conn.js";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import login from "./Routes/route.js";
import registration from "./Routes/route.js";
import uploadImage from "./Routes/route.js";
import uploadProduct from "./Routes/route.js";
import deleteProduct from "./Routes/route.js";
import getAllProducts from "./Routes/route.js";
import UserAuthenticate from "./Routes/route.js";
import logout from "./Routes/route.js";

const port = process.env.port || 3000;
const app = express();

//middlewares
const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];
app.use("/image", express.static("./images"));
app.use(cors({ credentials: true, origin: allowedOrigins }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/", registration);
app.use("/", login);
app.use("/", uploadImage);
app.use("/", uploadProduct);
app.use("/", deleteProduct);
app.use("/", getAllProducts);
app.use("/", UserAuthenticate);
app.use("/", logout);

app.listen(port, () => {
  console.log(`Server is Live at port no. ${port}.`);
});
