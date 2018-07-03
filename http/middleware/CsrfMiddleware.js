/**
 * CSRF Middleware
 * @param req
 * @param res
 * @param next
 * @constructor
 */
const CsrfMiddleware = (req, res, next) => {
    let token = req.csrfToken()
    res.cookie('XSRF-TOKEN', token)
    res.locals._token = token;
    next()
}

export default CsrfMiddleware