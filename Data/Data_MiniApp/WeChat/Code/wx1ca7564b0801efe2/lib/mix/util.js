var t = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getAppCode = void 0, exports.getEnv = m, exports.getMixPathName = exports.getMemberHost = exports.getLoginHost = exports.getHost = void 0, 
exports.getMixUrlParam = c, exports.isUnitePage = exports.isTakeAwayOrSelfPick = exports.isInMustDishPage = exports.isInMenuPage = exports.getTakeAwayHost = exports.getTabBarUrl = exports.getShopId = exports.getScanCodePath = void 0;

var e = require("../../miniprogram_npm/@mtfe/rms-sdk/index.js"), r = require("../wx/app-info"), s = require("../../miniprogram_npm/@mtfe/saas-user-auth/index.js"), n = require("../../constants/bizConstants-main"), a = require("../env"), o = t(require("../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), i = require("../wx/util"), u = o.default.getH5UrlParam, p = function() {
    return a.isNativeMp ? (0, i.getWxPathName)() : window.location.pathname;
};

function c(t) {
    return a.isNativeMp ? (0, i.getWxUrlParam)(t) : u(t);
}

function m() {
    return a.isNativeMp ? (0, e.getEnv)() : "localhost:3000" === (null == (t = window) || null == (r = t.location) ? void 0 : r.host) ? void 0 : "TEST";
    var t, r;
}

exports.getMixPathName = p;

var g = function() {
    var t = m();
    return (0, s.getMenuOrderHost)(t || "production");
};

exports.getHost = g;

exports.getTakeAwayHost = function() {
    var t = m(), e = "https://canting.sjst.test.meituan.com";
    switch (t) {
      case "production":
        e = "https://rmstakeaway.meituan.com";
        break;

      case "test":
        e = "https://canting.sjst.test.meituan.com";
        break;

      case "ST":
      case "staging":
        e = "https://canting.sjst.st.meituan.com";
        break;

      default:
        e = e.replace(/^(.*\/\/)?(.*?)\./, "$1".concat(t, "-sl-$2."));
    }
    return e;
};

exports.getMemberHost = function() {
    var t = m();
    return (0, s.getLoginHost)(t || "production");
};

exports.getScanCodePath = function() {
    return g() + "/diancan/web/scan-qrcode";
};

exports.getLoginHost = function() {
    var t = m(), e = "https://rms.sjst.test.meituan.com";
    switch (t) {
      case "production":
        e = "https://pos.meituan.com";
        break;

      case "development":
      case "test":
        e = "https://rms.sjst.test.meituan.com";
        break;

      case "ST":
      case "staging":
        e = "https://rms.sjst.st.meituan.com";
        break;

      default:
        e = e.replace(/^(.*\/\/)?(.*?)\./, "$1".concat(t, "-sl-$2."));
    }
    return e;
};

exports.getTabBarUrl = function() {
    return g() + "/diancan/api/apps/queryTabBar";
};

exports.isInMenuPage = function() {
    return /(\/menu)/.test(p());
};

exports.isInMustDishPage = function() {
    return /(\/must-dish)/.test(p());
};

exports.isTakeAwayOrSelfPick = function(t) {
    return (t = Number(t)) === n.BIZ_TYPE_MAP.TAKEAWAY || t === n.BIZ_TYPE_MAP.PICKUP;
};

exports.getShopId = function() {
    var t, e, s, n;
    return a.isNativeMp ? null == (t = (0, r.getNewApp)()) || null == (e = t.rmsDiancanStore) || null == (s = e.getState()) || null == (n = s.cart) ? void 0 : n.shopId : +c("shopId") || 0;
};

exports.getAppCode = function() {
    var t = +c("bizType") || 0, e = 51;
    return t === n.BIZ_TYPE_MAP.TAKEAWAY ? e = 61 : t === n.BIZ_TYPE_MAP.PICKUP && (e = 67), 
    e;
};

exports.isUnitePage = function() {
    var t = +c("bizType") || 0, e = !1, r = p();
    return /\/address/.test(r) && (e = !0), t !== n.BIZ_TYPE_MAP.TAKEAWAY && t !== n.BIZ_TYPE_MAP.PICKUP || (/\/menu/.test(r) || /\/search/.test(r) || /\/recommend-list/.test(r) || /\/dish-detail/.test(r)) && (e = !0), 
    e;
};