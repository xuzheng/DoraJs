/**
 * 判断是否为chrome浏览器
 * @return {Number} chrome版本号
 */
define(function (require) {
    var ua = require("./ua");
    return /chrome\/(\d+\.\d+)/i.test(ua) ? +RegExp['\x241'] : 0;
});
