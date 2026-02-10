const {UserModel} = require('../model/UserModel')

exports.createUser = async data => {
    return UserModel.create(data)
}

exports.getUserById = async (id, res) => {
    const user = await User.findByPk(id)

    if (!user) {
       return res.status(404).json({message: "User not found"})
    }

    return res.status(200).json({data: user})
}