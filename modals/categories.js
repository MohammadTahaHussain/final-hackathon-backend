const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
    {
        image: { required: true, type: String },
        categoryName: { required: true, type: String, unique: true },
    },
    {
        timestamps: true,
    }
);

const Categories = mongoose.model("categoreis", categorySchema);

module.exports = Categories;