import { registrationModel } from "../model/registrationmodel.js";
import bcrypt from "bcrypt";

export default async function registration(req, res) {
  try {
    const { firstName, lastName, emailAddress, password, confirmPassword } =
      req.body;
    const userExist = await registrationModel.findOne({ emailAddress });

    if (
      !firstName ||
      !lastName ||
      !emailAddress ||
      !password ||
      !confirmPassword
    ) {
      return res
        .status(400)
        .json({ error: 1, message: "Must fill Everything" });
    } else {
      if (userExist)
        return res
          .status(400)
          .json({
            error: 1,
            message: "User Already Exist with this Email, try using another",
          });

      if (password === confirmPassword) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const hashedConfirmPassword = await bcrypt.hash(confirmPassword, salt);

        const users = new registrationModel({
          firstName,
          lastName,
          emailAddress,
          password: hashedPassword, // Store hashed password in the user object
          confirmPassword: hashedConfirmPassword, // Store hashed confirm password in the user object
        });

        await users.save();
        res
          .status(200)
          .json({ success: 1, message: "saved to database", users });
      } else {
        return res
          .status(400)
          .json({ error: 1, message: "Passwords do not match, try again" });
      }
    }
  } catch (error) {
    res.status(500).json({ error: 1, message: error.message });
  }
}
