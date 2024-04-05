import mongoose from "mongoose";

const URL =
  "mongodb+srv://achyut777thapa:xPwmljS4i1GrMcGT@cluster0.or2jkvo.mongodb.net/Ecommerce_Website?retryWrites=true&w=majority&appName=ecommerce";

mongoose
  .connect(URL)
  .then(() => console.log("Connected to database Successfully."))
  .catch((Error) =>
    console.log(`Error while connecting to database: ${Error}.`)
  );
