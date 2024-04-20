var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.setPreviewFlag = exports.setNavigationBarTitle = exports.getWxUrlParam = exports.getWxPathName = exports.getWxPageOptions = exports.getWxCurrentPage = exports.getTabbarPageOptions = exports.getCurrentPageList = void 0;

var t = e(require("../../miniprogram_npm/@limo/core/index.js")), r = require("./app-info");

exports.getCurrentPageList = function() {
    return "undefined" != typeof getCurrentPages && getCurrentPages() || [];
};

var n = function() {
    var e = "undefined" != typeof getCurrentPages && getCurrentPages() || [];
    return e.length > 0 ? e[e.length - 1] || {} : {
        route: "app",
        options: t.default.getLimoRuntime().getEnterOptionsSync && t.default.getLimoRuntime().getEnterOptionsSync() && t.default.getLimoRuntime().getEnterOptionsSync().query || {}
    };
};

exports.getWxCurrentPage = n;

exports.getWxPathName = function() {
    return n().route || "Unknown";
};

exports.setNavigationBarTitle = function(e, r) {
    var a = n().route || "Unknown";
    t.default.getLimoRuntime().setNavigationBarTitle && a.indexOf(r) > -1 && t.default.getLimoRuntime().setNavigationBarTitle(e);
};

exports.getWxPageOptions = function() {
    return n().options || {};
};

exports.getWxUrlParam = function(e) {
    var t = n().options || {};
    return e ? decodeURIComponent(t[e] || "") : t;
};

exports.setPreviewFlag = function(e) {
    var t = getApp();
    e && t.diancanGlobalData.setPreview && t.diancanGlobalData.setPreview(e);
};

exports.getTabbarPageOptions = function(e, t, n) {
    var a = {};
    if (0 === Object.keys(e).length) if (t) {
        var o = (0, r.getTabbarPageParams)(t);
        a = 0 === Object.keys(o).length ? n && Object.keys(n).length > 0 ? n : (0, r.getTabbarPageInfo)() : o;
    } else a = (0, r.getTabbarPageInfo)(); else a = e;
    return a;
};