var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getAppIdWithPlatform = function() {
    if (u) return (0, t.getAppId)();
    var e = (0, i.getMixUrlParam)("appId");
    if (e) return e;
    if (d || f || p) {
        var r = (0, n.getUserInfo)();
        if (r && r.appId) return r.appId;
    }
    var a = void 0;
    if (a.appid) return a.appid;
    var s = o.default.getRandomAppId();
    return s || (s = l(), o.default.setRandomAppId(s)), s;
}, exports.getThirdUserInfo = function() {
    try {
        return u || d || f || p ? (0, n.getUserInfo)() : void 0;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return {};
    }
}, exports.getUserIdWithPlatform = function() {
    if (u) return (0, r.getOpenIdSync)();
    if (d || f || p) {
        var e = (0, n.getUserInfo)();
        if (e && e.openId) return e.openId;
    }
    var t = void 0;
    if (t.openid) return t.openid;
    var i = o.default.getRandomUserId();
    return i || (i = l(), o.default.setRandomUserId(i)), i;
};

var r = require("../lib/wx/auth"), t = require("../lib/wx/app-info"), i = require("../lib/mix/util"), n = require("../lib/userInfo"), a = e(require("../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), o = e(require("../api/rmsStorage-main")), u = a.default.isNativeMp, d = a.default.isWX, f = a.default.isAliPay, p = a.default.isUnionPay;

function l() {
    for (var e = Date.now().toString().slice(-10), r = "", t = 0; t < 10 - e.length; t++) r += "0";
    return "".concat(r).concat(e).concat(function(e) {
        for (var r, t = (r = Math.pow(10, e), Math.floor(Math.random() * Math.floor(r))).toString(), i = "", n = 0; n < e - t.length; n++) i += "0";
        return "".concat(i).concat(t);
    }(10));
}