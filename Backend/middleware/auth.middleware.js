const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Get token from Authorization header
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, "Neetu@123"); // Your JWT secret
    req.userId = decoded.id; // Store user ID from token in the request
    next(); // Proceed to the next middleware or route
  } catch (err) {
    return res.status(400).json({ message: "Invalid Token" });
  }
};

module.exports = auth;
