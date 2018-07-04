import express from 'express'
import passport from "passport"

/**
 * Controllers
 */
import HomeController from '../http/controllers/web/HomeController'
import AuthController from '../http/controllers/web/Auth/AuthController'

/**
 * Middlewares
 */
import AuthMiddleware from '../http/middleware/AuthMiddleware'
import CsrfMiddleware from '../http/middleware/CsrfMiddleware'

let router = express.Router()
/**
 * Apply CSRF Middleware to all web routes
 */
router.all('*', CsrfMiddleware)

/**
 * Routes
 */
router.get('/', AuthMiddleware, HomeController.index)

/**
 * Registration
 */
router.post('/register', AuthController.storeRegistration)
router.get('/register', AuthController.showRegistrationForm)

/**
 * Authentication
 */

router.post('/logout', AuthController.logout)
router.get('/login', AuthController.showLoginForm)
router.post('/login', AuthController.authenticate)

module.exports = router