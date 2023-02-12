const express = require("express");
const router = express.Router();
const signupUser = require("../users/signup");
const loginUser = require("../users")
const addProduct = require("../products/addProduct")
const fetchProducts = require("../products/fetchProduct")
const addCategory = require("../categoreis/addCategory")
const fetchCategory = require("../categoreis/fetchCategory")
const updateUser = require("../users/updateUser")

router.post("/signup", signupUser);
router.post("/login", loginUser)
router.post("/updateProfile", updateUser)

router.post("/products", addProduct)
router.get("/products", fetchProducts)

router.post("/category", addCategory)
router.get("/category", fetchCategory)


module.exports = router;