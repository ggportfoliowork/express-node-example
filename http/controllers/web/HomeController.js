import UserModel from '../../../models/UserModel'

exports.index = function(req, res) {
    user(function (err, data) {
        if (!err && data) {
            res.render('home', {
                users: data
            });
        } else {
            res.render('error');
        }
    });
};

const user = function(cb) {
    let users = []
    let err = null
    UserModel.findOne({ name: 'jethro' }, function
        (err, user) {
            if(err)
                console.error(err)
            else
                console.log(user)
    });
    cb(err, users);
}