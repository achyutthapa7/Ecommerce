export default async function (req, res) {
  res.cookie("jwt", "");
  res.status(200).json({ message: "Logout Successfully" });
}
