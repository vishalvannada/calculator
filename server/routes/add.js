var express = require('express');
var router = express.Router();


router.post('/', function (req, res) {
    console.log("ADD HERE");
    var answer = parseFloat(req.param('first')) + parseFloat(req.param('second'));
    res.send(answer.toString());
});


module.exports = router;
