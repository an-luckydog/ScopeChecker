var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.setTabbarPageParams = exports.setPerceptionFrom = exports.setLocalAddress = exports.setCookieInfo = exports.setCloudDataCacheKey = exports.isNativeTabbarPage = exports.isMerchantWxApp = exports.getTabbarPageParams = exports.getTabbarPageInfo = exports.getPerceptionFrom = exports.getNewApp = exports.getCookieInfo = exports.getCloudDataCacheKey = exports.getAppId = exports.clearSessionStorage = void 0;

var a = e(require("../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), t = function() {
    return getApp({
        allowDefault: !0
    });
};

exports.getNewApp = t;

exports.getAppId = function() {
    return a.default.MPInfo.getAppId();
};

exports.getPerceptionFrom = function() {
    var e;
    return null == (e = t().diancanGlobalData) ? void 0 : e.getPerceptionFrom();
};

exports.setPerceptionFrom = function(e) {
    var a;
    null == (a = t().diancanGlobalData) || a.setPerceptionFrom(e);
};

exports.clearSessionStorage = function() {
    var e;
    null == (e = t().diancanGlobalData) || e.clearSessionStorage();
};

exports.isMerchantWxApp = function() {
    return a.default.MPInfo.isMerchant();
};

exports.setCloudDataCacheKey = function(e) {
    var a;
    null == (a = t().diancanGlobalData) || a.setCloudDataCacheKey(e);
};

exports.getCloudDataCacheKey = function() {
    var e;
    return (null == (e = t().diancanGlobalData) ? void 0 : e.getCloudDataCacheKey()) || "";
};

exports.setCookieInfo = function(e) {
    var a;
    null == (a = t().diancanGlobalData) || a.setCookieInfo(e);
};

exports.getCookieInfo = function() {
    var e;
    return null == (e = t().diancanGlobalData) ? void 0 : e.getCookieInfo();
};

exports.getTabbarPageParams = function(e) {
    var a;
    return null == (a = t().miniProgramData) ? void 0 : a.getTabbarPageParams(e);
};

exports.setTabbarPageParams = function(e, a) {
    var r;
    return null == (r = t().miniProgramData) ? void 0 : r.setTabbarPageParams(e, a);
};

exports.getTabbarPageInfo = function() {
    var e;
    return null == (e = t().miniProgramData) ? void 0 : e.getTabbarPageInfo();
};

exports.isNativeTabbarPage = function(e) {
    var a;
    return null == (a = t().miniProgramData) ? void 0 : a.isNativeTabbarPage(e);
};

exports.setLocalAddress = function(e) {
    var a;
    null == (a = t().diancanGlobalData) || a.setLocalAddress(e);
};