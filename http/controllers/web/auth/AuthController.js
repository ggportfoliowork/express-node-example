import UserModel from "../../../../models/UserModel";

/**
 * Show the login form
 * @param req
 * @param res
 */
exports.showLoginForm = function(req, res) {
    res.render('login', {
        session: req.session
    })
};

/**
 * Process login request
 * @param req
 * @param res
 */
exports.doLogin = function(req, res) {
    authenticateUser(req, function (err, data) {
        console.log("ERR", err)
        console.log("DATA", data)
        if (!err && data) {
            res.render('home', {
                session: req.session,
            });
        } else {
            res.render('login', {
                session: req.session,
                error: err
            });
        }
    });
}

/**
 * Authenticate the user
 * @param req
 * @param cb
 */
const authenticateUser = function(req, cb) {
    let users = []
    let err = false
    console.log("FIDING USER ", req.body.username)
    UserModel.find()
        .where('username')
        .equals(req.body.username)
        .exec(function
                (err, users) {
                cb(err, users)
        })
}