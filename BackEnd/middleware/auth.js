const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // Get the token from the header

  // const token = req.headers("x-auth-token");

  const token = req.headers.authorization;
  console.log("HEADERS ==== ", req.headers);

  // If token doesn't exist
  if (!token) {
    return res.status(401).json({ msg: "Authorization denied, token missing" });
  }
  // verify token
  try {
    const decoded = jwt.verify(token, "secret", (err, verifiedJwt) => {
      if (err) {
        res.status(401).json({ msg: "Invalid token" });
      } else {
        req.user = verifiedJwt.user;
        next();
      }
    });
  } catch (err) {
    res.status(500).json({ msg: "Something went wrong" });
  }
};
