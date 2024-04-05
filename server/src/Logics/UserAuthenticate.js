export default async function UserAuthenticate(req, res) {
  res.status(200).json({ success: 1, rootUser: req.rootUser });
}
