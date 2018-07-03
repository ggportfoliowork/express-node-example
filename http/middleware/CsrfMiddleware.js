/**
 * CSRF Middleware
 * @param req
 * @param res
 * @param next
 * @constructor
 */
const CsrfMiddleware = function(req, res, next) {
    let token = req.csrfToken()
    res.cookie('XSRF-TOKEN', token)
    res.cookie('CSRF-TOKEN', token)
    res.cookie('X-CSRF-Token', token)
    res.locals._token = token;
    next()
}

export default CsrfMiddleware