exports.index = function(req, res) {
    console.log(req.user)
    res.render('home', {
        user: req
    });
};