/**
 * router for index
 *
 * @author Rezkya Tinnov <mailme@rezkyatinnov.com>
 */

var express = require('express');
var routename = require('../utils/routename');
var utilitiesfunc = require('../utils/utilitiesfunc');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', utilitiesfunc.buildLayoutParam("letsbidit", {}));
});

module.exports = router;