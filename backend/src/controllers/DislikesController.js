const Users = require("../models/UsersModel");
const Tables = require("../models/TableModels");

module.exports = {
    async store(req, res) {
        const {
            id,
            mesa
        } = req.headers;
        console.log(id);
        const user = await Users.findById(id);
        const tableExists = await Tables.findById(mesa);
        if (!tableExists) return res.status(400).json("mesa nao existe");

        user.dislikes.push(tableExists._id);
        await user.save();
        return res.status(200).json(user);
    }
}