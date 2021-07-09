import express from "express";
import Order from "../models/orderModel";
import { isAdmin, isAuth } from "../services";

require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;
const router = express.Router();

router.post(
  "/",
  isAuth,
  /* isAdmin,*/ async (req, res) => {
    const newOrder = new Order({
      orderItems: req.body.orderItems,
      user: req.user._id,
      itemsQty: req.body.itemsQty,
      totalPrice: req.body.totalPrice,
    });
    const newOrderCreated = await newOrder.save();
    res
      .status(201)
      .send({ message: "New Order Created", data: newOrderCreated });
  }
);
router.get("/mine", isAuth, async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.send(orders);
});
router.get("/", isAuth, isAdmin, async (req, res) => {
  const orders = await Order.find({}).populate("user");
  res.send(orders);
});

router.get("/:id", isAuth, async (req, res) => {
  const order = await Order.findOne({ _id: req.params.id });
  if (order) {
    res.send(order);
  } else {
    res.status(404).send("Order Not Found.");
  }
});
router.delete("/:id", isAuth, isAdmin, async (req, res) => {
  const order = await Order.findOne({ _id: req.params.id });
  if (order) {
    await order.remove();
    res.send({ message: "Order deleted" });
    //res.send(deletedOrder);
  } else {
    res.status(404).send("Order Not Found.");
  }
});
router.put("/:id", isAuth, isAdmin, async (req, res) => {
  const orderId = req.params.id;
  const order = await Order.findById(orderId);
  if (order) {
    order.isDelivered = req.body.isDelivered;
    order.orderItems = req.body.orderItems;
    order.totalPrice = req.body.totalPrice;
    order.itemsQty = req.body.itemsQty;

    const updatedOrder = await order.save();
    if (updatedOrder) {
      return res
        .status(200)
        .send({ message: "Order Updated", data: updatedOrder });
    }
  }
  return res.status(500).send({ message: " Error in Updating Product." });
});

export default router;
