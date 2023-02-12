const Products = require("../modals/products");

async function fetchProduct(req, res) {
    try {
        if (req.query && Object.keys(req.query).length > 0) {
            let filteredProducts = await Products.find(req.query)
            if (filteredProducts.length) {
                res.status(200).send(filteredProducts)
            } else {
                res.send({ status: 204, message: "Products of this category doesn't exist" })
            }
        } else {
            let products = await Products.find();
            res.send({ status: 200, message: "product fetched successfully", data: products });
        }
    } catch (e) {
        res.send({ status: 204, message: e });
    }
}

module.exports = fetchProduct;