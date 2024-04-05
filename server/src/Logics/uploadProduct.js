import { uploadModel } from "../model/uploadmodel.js";

export default async function upload(req, res) {
  try {
    const {
      productTitle,
      productDescription,
      category,
      oldPrice,
      newPrice,
      productImage,
    } = req.body;

    if (
      !productTitle ||
      !productDescription ||
      !category ||
      !oldPrice ||
      !newPrice
    ) {
      return res
        .status(400)
        .json({ error: 1, message: "All field are required" });
    }
    const Products = new uploadModel({
      productTitle,
      productDescription,
      oldPrice,
      newPrice,
      category,
      productImage,
    });
    await Products.save();
    res.status(200).json({
      success: 1,
      message: "saved to database successfully.",
      Products,
    });
  } catch (error) {
    res.status(500).json({ error: 1, message: error.message });
  }
}
