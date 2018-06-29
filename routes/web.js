import express from 'express'

import HomeController from '../http/controllers/web/HomeController'
import AboutController from '../http/controllers/web/AboutController'

let router = express.Router()

/**
 * Routes
 */
router.get('/', HomeController.index)
router.get('/about', AboutController.index)

module.exports = router