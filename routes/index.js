const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const records = require('./modules/records')
const category = require('./modules/category')

router.use('/', home)
router.use('/records', records)
router.use('/records/category', category)

module.exports = router