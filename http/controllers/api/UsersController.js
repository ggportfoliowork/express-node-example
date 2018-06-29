import UserModel from '../../../models/UserModel'

exports.index = function(req, res) {
    return res.json(UserModel.find())
};