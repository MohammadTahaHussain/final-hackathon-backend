const Users = require("../modals/users");

async function signupUser(req, res) {
  try {
    let user = await Users.create(req.body);
    res.send({ status: 200, message: "user added successfully" });
  } catch (e) {
    res.send({ status: 204, message: e });
  }
}

module.exports = signupUser;