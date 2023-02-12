const mongoose = require("mongoose");

const ordersSchema = mongoose.Schema(
    {
        userName: { required: true, type: String },
        userPhone: { required: true, type: String },
        total: { required: true, type: Number },
        status: { type: String, required: true },
        email: { type: String, required: true },
        items: { type: Array, required: true }
    },
    {
        timestamps: true,
    }
);

const Orders = mongoose.model("orders", ordersSchema);

module.exports = Orders;