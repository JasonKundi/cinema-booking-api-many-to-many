const express = require('express');
const controller = require('./controllers/screen');

const router = express.Router()


router.get("/id/seats", controller.getScreenSeatsById)



module.exports = router