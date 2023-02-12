const Users = require("../modals/users");

async function updateUser(req, res) {
    try {
        let user = await Users.findById(req.body._id)
        console.log(user)
        user.name = req.body.updatedName
        console.log(user)
        let updatedUser = await Users.findByIdAndUpdate(req.body._id, {
            ...user
        })
        res.send({ status: 200, message: "user updated successfully" });
    } catch (e) {
        res.send({ status: 204, message: e });
    }
}

module.exports = updateUser;