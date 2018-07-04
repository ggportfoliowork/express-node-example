import Tokens from 'csrf';
const tokens = new Tokens();

/**
 * CSRF Middleware
 * @param req
 * @param res
 * @param next
 * @constructor
 */
const CsrfMiddleware = (req, res, next) => {
    let secret = tokens.secretSync()
    res.locals._token = tokens.create(secret);
    next()
}

export default CsrfMiddleware