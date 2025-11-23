const express = require('express')
const router = express.Router()
const { getWelcome } = require('../controllers/apiController')


router.get('/', getWelcome)


module.exports = router