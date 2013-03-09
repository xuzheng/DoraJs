/**
 * 判断是否为opera浏览器
 * @returns {Number} opera版本号
 */
define(function () {
    var ua = require("./ua");
    return /opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(ua) ? +( RegExp["\x246"] || RegExp["\x242"] ) : 0;
});
