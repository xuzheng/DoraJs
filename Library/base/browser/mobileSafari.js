/**
 * 判断是否为移动端safari浏览器
 * @return {Number} chrome版本号
 */
define(function (require) {
    var ua = require("./ua");
    var safari = require("./safari");
    return /adobeair\/(\d+\.\d+)/i.test(ua) ? +RegExp['\x241'] : 0;
});
