var express = require('express');
var router = express.Router();
var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({storage: storage});

var api_controller = require('../controllers/api_controller');


router.get('/', api_controller.index)

router.get('/upload', api_controller.upload)

router.post('/results', upload.single('userFile'), api_controller.results)

module.exports = router;