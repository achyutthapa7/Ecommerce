export default async function uploadImage(req, res) {
  try {
    const productImage = `${req.get("host")}/image/${req.file.filename}`;
    if (!productImage) {
      return res
        .status(404)
        .json({ error: 1, message: "All field is required" });
    }
    res.status(200).json({ success: 1, url: `http://${productImage}` });
  } catch (error) {
    res.status(500).json({ error: 1, message: error.message });
  }
}
