const Products = require("../modals/products");

async function addProduct(req, res) {
  try {
    let product = await Products.create(req.body);
    res.send({ status: 200, message: "product added successfully" });
  } catch (e) {
    res.send({ status: 204, message: e });
  }
}

module.exports = addProduct;