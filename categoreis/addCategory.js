const Categories = require("../modals/categories");

async function addCategory(req, res) {
  try {
    let category = await Categories.create(req.body);
    res.send({ status: 200, message: "category added successfully" });
  } catch (e) {
    res.send({ status: 204, message: e });
  }
}

module.exports = addCategory;