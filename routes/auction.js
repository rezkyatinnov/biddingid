/**
 * router for auction
 *
 * @author Rezkya Tinnov <mailme@rezkyatinnov.com>
 */

var express = require('express');
var routename = require('../utils/routename');
var utilitiesfunc = require('../utils/utilitiesfunc');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('auction', utilitiesfunc.buildLayoutParam("letsbidit", {}));
});
router.get(routename.auctionNew.replace(routename.auction, ''), function(req, res, next) {
    res.render('new-auction', utilitiesfunc.buildLayoutParam("letsbidit", {}));
});

module.exports = router;