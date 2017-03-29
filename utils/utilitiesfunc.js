/**
 * collection of utilities functions
 *
 * @author Rezkya Tinnov <mailme@rezkyatinnov.com>
 */

var routename = require('./routename');

module.exports = {
    buildLayoutParam: function(title, data) {
        return {
            title: title,
            routename: routename,
            data: data
        }
    }

};