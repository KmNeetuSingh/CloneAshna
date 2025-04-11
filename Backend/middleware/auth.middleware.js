const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  // Check if Authorization header exists
  const token = req.header("Authorization")?.split(" ")[1]; // Get token from Authorization header

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    // Make sure the secret used in sign and verify is the same
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "Neetu@123"); // Use a secret from environment or default

    // Store user ID from token in the request object
    req.userId = decoded.id; 
    next(); // Proceed to the next middleware or route
  } catch (err) {
    return res.status(400).json({ message: "Invalid Token" });
  }
};

module.exports = auth;
