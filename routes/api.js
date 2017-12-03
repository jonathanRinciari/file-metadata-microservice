var express = require('express');
var router = express.Router();
var api_controller = require('../controllers/api_controller')

router.get('/', api_controller.index)

router.get('/upload', api_controller.upload)

router.get('/results', api_controller.results)

module.exports = router;