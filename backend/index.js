export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    if (email === "test@gmail.com" && password === "123456") {
      return res.status(200).json({
        success: true,
        message: "Login successful"
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }
  }

  return res.status(200).json({ message: "API working" });
}