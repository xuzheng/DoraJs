/**
 * 判断是否为safari浏览器, 支持ipad
 * @returns {Number} safari版本号
 */
define(function () {
    var ua = require("./ua");
    return /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(ua) && !/chrome/i.test(ua) ? +(RegExp['\x241'] || RegExp['\x242']) : 0;
});
