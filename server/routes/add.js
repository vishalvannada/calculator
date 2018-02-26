var express = require('express');
var router = express.Router();


router.post('/', function (req, res) {
    console.log("ADD HERE");
    var first = parseFloat(req.param('first'));
    var second = parseFloat(req.param('second'));
    console.log(first);
    console.log(second);
    var answer = parseFloat(req.param('first')) + parseFloat(req.param('second'));
    console.log(answer);

    res.send(answer.toString());

});


module.exports = router;
