import { uploadModel } from "../model/uploadmodel.js";

export default async function getAllProducts(req, res) {
  try {
    const products = await uploadModel.find();
    res.status(200).json({ success: 1, products });
  } catch (error) {
    res.status(500).json({ error: 1, message: error.message });
  }
}
