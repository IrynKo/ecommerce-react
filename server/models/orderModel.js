import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    orderItems: { type: Array },
    itemsQty: { type: Number },
    totalPrice: { type: Number },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

const orderModel = mongoose.model("Order", orderSchema);
export default orderModel;
