/**
 * Authentication Middleware
 * @param req
 * @param res
 * @param next
 * @constructor
 */
const AuthMiddleware = function(req, res, next) {
    if(req.isAuthenticated()){
        next();
    } else{
        res.redirect("/login");
    }
}

export default AuthMiddleware