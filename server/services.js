import jwt from "jsonwebtoken";
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

export const getToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    JWT_SECRET,
    {
      expiresIn: "48h",
    }
  );
};

export const isAuth = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (token) {
    const onlyToken = token.slice(7, token.length);
    jwt.verify(onlyToken, JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({ message: "Invalid Token" });
      }
      req.user = decode;
      next();
      return;
    });
  } else {
    return res.status(401).send({ message: "Token is not supplied" });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    return next();
  } else return res.status(401).send({ message: "Admin token is not valid" });
};
