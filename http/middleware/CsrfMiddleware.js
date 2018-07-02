/**
 * CSRF Middleware
 * @param req
 * @param res
 * @param next
 * @constructor
 */
const CsrfMiddleware = function(req, res, next) {
    res.locals._token = req.csrfToken()
    next()
}

export default CsrfMiddleware