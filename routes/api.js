var express = require('express')
var router = express.Router()

router.get('/users', function (req, res) {
    res.send('List of users')
})

router.get('/pets', function (req, res) {
    res.send('List of pets')
})

module.exports = router