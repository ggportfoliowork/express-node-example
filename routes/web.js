import express from 'express'

import HomeController from '../http/controllers/web/HomeController'
import AboutController from '../http/controllers/web/AboutController'
import ContactController from '../http/controllers/web/ContactController'

let router = express.Router()

/**
 * Routes
 */
router.get('/', HomeController.index)
router.get('/about', AboutController.index)
router.get('/contact', ContactController.index)

module.exports = router