import { uploadModel } from "../model/uploadmodel.js";

export default async function deleteProduct(req, res) {
  try {
    const products = await uploadModel.findByIdAndDelete({ _id: req.body._id });
    const allProducts = await uploadModel.find();

    if (!products)
      return res.status(404).json({ error: 1, message: "Product not found" });
    res.status(200).json({
      success: 1,
      message: "Product Deleted Successfully",
      products: allProducts,
    });
  } catch (error) {
    res.status(500).json({ error: 1, message: error.message });
  }
}
