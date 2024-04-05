import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { registrationModel } from "../model/registrationmodel.js";

export default async function login(req, res) {
  try {
    const { emailAddress, password } = req.body;
    const userExist = await registrationModel.findOne({ emailAddress });
    if (!userExist) {
      return res
        .status(404)
        .json({ error: 1, message: "User with this email doesn't exist" });
    }
    const isVerify = await bcrypt.compare(password, userExist.password);
    if (isVerify) {
      const token = jwt.sign({ _id: userExist._id }, process.env.SECRET_KEY);
      res.cookie("jwt", token);
      return res
        .status(200)
        .json({ success: 1, message: "Login Successfull", token });
    } else if (!isVerify) {
      return res
        .status(400)
        .json({ error: 1, message: "Password is Incorrect" });
    }
  } catch (error) {
    res.status(500).json({ error: 1, message: error.message });
  }
}
