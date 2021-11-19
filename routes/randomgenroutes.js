const express = require('express');
const router = express.Router()
const { getAllQuotes, createQuotes,getRandomQuotes } = require('../controllers/randomgencontroller')

router.route("/").get(getAllQuotes)
router.route("/").post(createQuotes)
router.route("/randomgen").get(getRandomQuotes)

module.exports = router