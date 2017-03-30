/**
 * js func used in all pages on client side put here
 *
 * @author Rezkya Tinnov <mailme@rezkyatinnov.com>
 */

function showDomById(id) {
    $('#' + id).removeClass('hide');
}

function hideDomById(id) {
    $('#' + id).addClass('hide');
}