const mongoose = require("mongoose");

const productsSchema = mongoose.Schema(
  {
    image: { required: true, type: String},
    itemName: { required: true, type: String },
    category: { required: true, type: String },
    description: { required: true, type: String},
    price: { required: true, type: Number},
    unit: { required: true, type: String},
  },
  {
    timestamps: true,
  }
);

const Products = mongoose.model("products", productsSchema);

module.exports = Products;