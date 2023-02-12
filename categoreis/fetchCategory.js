const Categories = require("../modals/categories");

async function fetchCategory(req, res) {
    try {
        console.log(req.query)
        let categories = await Categories.find({});
        res.send({ status: 200, message: "product fetched successfully", data: categories });
    } catch (e) {
        res.send({ status: 204, message: e });
    }
}

module.exports = fetchCategory;