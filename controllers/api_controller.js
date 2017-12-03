
exports.index = function(req, res){
    res.send('api route from controller')
}

exports.upload = function(req, res){
    res.render('upload')
}

exports.results = function(req, res){
    res.render('results', {size: req.file.size})
}