/**
 * constant file contain all available express routes
 *
 * @author Rezkya Tinnov <mailme@rezkyatinnov.com>
 */


module.exports = {
    // root routes
    index: '/',
    auth: '/auth',
    auction: '/auction',

    // sub routes
    auctionSession: '/auction/:session',
    auctionNew: '/auction/new'

};