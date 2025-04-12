const jwt = require("jsonwebtoken");

// Use environment variable or fallback to hardcoded secret
const JWT_SECRET = process.env.JWT_SECRET;

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Token not provided!" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (decoded) {
      req.userId = decoded.id; // ✅ pass user ID to next handlers
      console.log("Authenticated:", decoded);
      next();
    } else {
      res.status(403).json({ msg: "You are not authorised!" });
    }
  } catch (err) {
    res.status(403).json({ msg: "Invalid token!", error: err.message });
  }
};

module.exports = { auth };
