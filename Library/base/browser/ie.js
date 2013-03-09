/**
 * 判断是否为ie浏览器
 * @returns {Number} IE版本号
 */
define(function (require) {
    var ua = require("./ua");
    return /msie (\d+\.\d+)/i.test(ua) ? (document.documentMode || +RegExp['\x241']) : 0;
});
