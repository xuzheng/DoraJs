/**
 * 判断是否为firefox浏览器
 * @return {Number} firefox版本号
 */
define(function (require) {
    var ua = require("./ua");
    return /firefox\/(\d+\.\d+)/i.test(ua) ? +RegExp['\x241'] : 0;
});
