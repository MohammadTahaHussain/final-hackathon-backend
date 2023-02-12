const Users = require("../modals/users");

async function loginUser(req, res) {
  let data = req.body;
  let user = await Users.find({ email: data.email });
  if (user.length) {
    if (user[0].password == data.password) {
      // res.send({ status: 200, message: "Alhamdulillah logged in" });
      res.status(200).send({ status: 200, message: "logged in" })
    } else {
      // res.send({ status: 204, message: "wrong password" });
      res.status(404).send({ status: 204, message: "wrong password" })
    }
  } else {
    res.status(404).send({ status: 404, messgae: "user not found" });
  }
}

module.exports = loginUser