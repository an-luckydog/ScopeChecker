var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.sharkSwitch = exports.isEqual = exports.getIn = void 0;

var r = require("../b/helpers/createClass"), t = require("../b/helpers/classCallCheck"), i = require("../b/helpers/typeof"), n = (e(require("../miniprogram_npm/@limo/core/index.js")), 
e(require("../miniprogram_npm/@mtfe/rms-triangle-c/index.js"))), u = (require("./env"), 
e(require("./mix/toast")), n.default.getH5UrlParam, n.default.throttle, n.default.urlAddQueryParams, 
n.default.filterEmojiReg, n.default.Cookie.setCookie, n.default.get, n.default.getIn);

exports.getIn = u;

exports.isEqual = function e(r, t) {
    if (r === t) return !0;
    if ("object" != i(r) || null == r || "object" != i(t) || null == t) return !1;
    if (Object.keys(r).length !== Object.keys(t).length) return !1;
    for (var n = 0; n < Object.keys(r).length; n++) {
        var u = Object.keys(r)[n];
        if (!t.hasOwnProperty(u)) return !1;
        if (!e(r[u], t[u])) return !1;
    }
    return !0;
};

var a = new (function() {
    return r(function e() {
        var r = this;
        t(this, e), this.openSharkSwitch = void 0, this.updateSharkSwitch = function(e) {
            r.openSharkSwitch = e;
        }, this.getSharkSwitch = function() {
            return r.openSharkSwitch;
        }, this.openSharkSwitch = !0;
    });
}())();

exports.sharkSwitch = a;