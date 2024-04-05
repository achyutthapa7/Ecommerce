import jwt from "jsonwebtoken";
import { registrationModel } from "../model/registrationmodel.js";
export const authenticate = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) return res.status(404).json({ error: 1, message: "Login First" });
  const isVerify = jwt.verify(token, process.env.SECRET_KEY);
  if (!isVerify)
    return res.status(400).json({ error: 1, message: "Login First" });
  const rootUser = await registrationModel.findById({ _id: isVerify._id });
  req.rootUser = rootUser;
  next();
};
