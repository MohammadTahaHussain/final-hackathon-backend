const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./router");

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    ""
  )
  .then(() => console.log("Alhamdulillah"))
  .catch((e) => console.log("error===>", e));

app.use("/", router)

app.listen(3002, () => {
  console.log("server is running on port 3002");
});
