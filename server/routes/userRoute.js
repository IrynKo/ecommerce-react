import express from "express";
import User from "../models/userModel";
import { findUserByEmail, getToken } from "../services";

const router = express.Router();

router.post("/signin", async (req, res) => {
  const signInUser = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (signInUser) {
    res.send({
      _id: signInUser.id,
      name: signInUser.name,
      email: signInUser.email,
      isAdmin: signInUser.isAdmin,
      token: getToken(signInUser),
    });
  } else {
    res.status(401).send({ message: "Invalid email or password" });
  }
});
router.post("/register", async (req, res, next) => {
  try {
    const existUser = await User.findOne({ email: req.body.email });
    if (existUser) {
      return res.status(409).json({
        status: "error",
        code: 409,
        data: "Conflict",
        message: "Email in use",
      });
    }
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const newUser = await user.save();

    if (newUser) {
      res.send({
        _id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
        token: getToken(newUser),
      });
    } else {
      res.status(401).send({ message: "Invalid user data" });
    }
  } catch (e) {
    next(e.message);
  }
});

router.get("/createadmin", async (req, res) => {
  try {
    const user = new User({
      name: "ame",
      email: "ame@gmail.com",
      password: "Ret1223",
      isAdmin: true,
    });
    const newUser = await user.save();
    console.log("newUser", newUser);
    res.send(newUser);
  } catch (error) {
    res.send({ message: error.message });
  }
});

export default router;
