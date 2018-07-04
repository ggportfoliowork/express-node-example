import passport from 'passport'
import UserModel from '../../../../models/UserModel'

/**
 * Show the registration form
 * @param req
 * @param res
 */
exports.showRegistrationForm = function(req, res) {
    res.render('auth/sign-up', {title: 'Sign Up'})
}

/**
 * Show the login form
 * @param req
 * @param res
 */
exports.showLoginForm = function(req, res) {
    res.render('auth/login', {title: 'Login'})
}

/**
 * Store a registration
 * @param req
 * @param res
 */
exports.storeRegistration = function(req, res) {
    UserModel.register(new UserModel({ username : req.body.username }), req.body.password, function(err, user) {
        if (err) {
            console.error(err)
            return res.render('auth/sign-up', { errors: err });
        }
        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
}

/**
 * Authenticate a user
 * @param req
 * @param res
 */
exports.authenticate = function(req, res) {
    passport.authenticate('local')(req, res, function () {
        res.redirect('/');
    });
}

/**
 * Logout
 * @param req
 * @param res
 */
exports.logout = function(req, res) {
    req.logout();
    res.redirect('/');
}