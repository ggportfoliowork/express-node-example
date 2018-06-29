import UserModel from '../../../models/UserModel'

exports.index = function(req, res) {
    getUsers(function (err, data) {
        if (!err && data) {
            res.render('home', {
                users: data
            });
        } else {
            res.render('error');
        }
    });
};

const getUsers = function(cb) {
    let users = []
    let err = false
    UserModel.find(function
        (err, users) {
            cb(err, users);
    });
}