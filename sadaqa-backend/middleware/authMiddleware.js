const jwt = require("jsonwebtoken");
require("dotenv").config(); // Load environment variables

// Middleware to authenticate users using JWT
const authenticateUser = (req, res, next) => {
    try {
        // Extract token from HTTP-only cookie
        const token = req.cookies?.access_token;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        // Verify JWT token
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: "Forbidden: Invalid token" });
            }
            // Attach user data to request object
            req.user = { id: decoded.id, role: decoded.role };
            next(); // Proceed to the next middleware or route
        });

        

    } catch (error) {
        console.error("Auth Middleware Error:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};




exports.authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};

exports.isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') return res.status(403).json({ message: "Forbidden" });
  next();
};

module.exports = authenticateUser;
