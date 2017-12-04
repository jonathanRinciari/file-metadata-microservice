
exports.index = function(req, res){
    res.render('apiIndex')
}

exports.upload = function(req, res){
    res.render('upload')
}

exports.results = function(req, res){
    res.render('results', {size: req.file.size, name: req.file.originalname})
}