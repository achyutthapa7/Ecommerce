import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
mongoose
  .connect(process.env.URI)
  .then(() => console.log("Connected to database Successfully."))
  .catch((Error) =>
    console.log(`Error while connecting to database: ${Error}.`)
  );
// mongodb://127.0.0.1:27017/EcommerceWebsite
