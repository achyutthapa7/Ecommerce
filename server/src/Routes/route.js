import deleteProduct from "../Logics/deleteProduct.js";
import getAllProducts from "../Logics/getAllProducts.js";
import login from "../Logics/login.js";
import registration from "../Logics/registration.js";
import uploadProduct from "../Logics/uploadProduct.js";
import express from "express";
const router = express.Router();
import multer from "multer";
import uploadImage from "../Logics/uploadImage.js";
import UserAuthenticate from "../Logics/UserAuthenticate.js";
import { authenticate } from "../auth/auth.js";
import logout from "../Logics/logout.js";

//setting multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const uploadMiddleware = multer({ storage });
router.post("/login", login);
router.post("/registration", registration);
router.post("/uploadImage", uploadMiddleware.single("products"), uploadImage);
router.post("/uploadProduct", uploadProduct);
router.delete("/deleteProduct", deleteProduct);
router.get("/getAllProducts", getAllProducts);
router.get("/authenticate", authenticate, UserAuthenticate);
router.get("/logout", logout);
export default router;
