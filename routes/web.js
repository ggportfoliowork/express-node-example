import express from 'express'

import HomeController from '../http/controllers/web/HomeController'
import AboutController from '../http/controllers/web/AboutController'
import AuthController from '../http/controllers/web/auth/AuthController'
import ContactController from '../http/controllers/web/ContactController'

let router = express.Router()

/**
 * Routes
 */
router.get('/', HomeController.index)
router.get('/about', AboutController.index)

router.get('/authenticate', AuthController.showLoginForm)
router.post('/authenticate', AuthController.doLogin)

router.get('/contact', ContactController.index)

module.exports = router