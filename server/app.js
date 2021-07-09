
import express from "express";
//import data from "./data";
//import dotenv from "dotenv";
//import config from "./config";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
import orderRoute from "./routes/orderRoute";
import productRoute from "./routes/productRoute";
import bodyParser from "body-parser";

require("dotenv").config();

const app = express();

app.use(bodyParser.json());

app.use("/api/users", userRoute);
app.use("/api/orders", orderRoute);
app.use("/api/products", productRoute);

const MONGODB_URL = process.env.MONGODB_URL;

const connection = mongoose.connect(MONGODB_URL, {
  promiseLibrary: global.Promise,
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.on("connected", (err) => {
  console.log(`"Database connection successful"`);
});

mongoose.connection.on("error", (err) => {
  console.log(`Database connection error: ${err.message}`);
});

mongoose.connection.on("disconnected", (err) => {
  console.log(`Database disconnected`);
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server runs at http://localhost:5000");
});
