/**
 * 判断是否为adobe的air内嵌浏览器
 * @return {Number} chrome版本号
 */
define(function (require) {
    var ua = require("./ua");
    return /adobeair\/(\d+\.\d+)/i.test(ua) ? +RegExp['\x241'] : 0;
});
