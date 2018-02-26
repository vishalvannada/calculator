var express = require('express');
var router = express.Router();
var ejs = require('ejs');

router.post('/', function (req, res) {

    console.log("SUBTRACT");
    var first = parseFloat(req.param('username'));
    var second = parseFloat(req.param('password'));
    var answer = parseFloat(req.param('first')) - parseFloat(req.param('second'));

});

module.exports = router;
