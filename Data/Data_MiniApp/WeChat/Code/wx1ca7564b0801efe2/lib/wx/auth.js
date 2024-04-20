var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.silentLogin = exports.getUserInfoSync = exports.getToken = exports.getSessionKeySync = exports.getOpenIdSync = void 0;

var r = e(require("../../b/regenerator")), t = require("../../b/helpers/asyncToGenerator"), n = require("../../constants/index-main"), a = require("../../constants/ajaxResCode-main"), o = require("./app-info"), u = e(require("./log")), s = e(require("../storage")), i = e(require("../../miniprogram_npm/@mtfe/saas-user-auth/index.js")), d = require("../response"), p = (0, 
o.getNewApp)() || {};

exports.getToken = function() {
    return s.default.get(n.storageKey.token) || "";
};

exports.getSessionKeySync = function() {
    return i.default.getSessionKey();
};

exports.getOpenIdSync = function() {
    return i.default.getOpenId();
};

exports.getUserInfoSync = function() {
    var e, r, t = ((null == p ? void 0 : p.diancanGlobalData) || {}).getUserInfo, a = t && t();
    return a && (null != (e = a) && e.nickname || null != (r = a) && r.headimgurl) || (a = s.default.get(n.storageKey.userInfo)), 
    a || {};
};

var l = function() {
    var e = t(r.default.mark(function e(t, n) {
        var o;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (e.prev = 0, !t.data || !t.data.needOpenId && t.data.code !== a.RES_CODE.NEED_SILENCE_LOGIN) {
                    e.next = 6;
                    break;
                }
                return e.next = 4, i.default.initRequestSilenceLogin();

              case 4:
                return o = e.sent, e.abrupt("return", o && o.userToken && !o.userToken.token ? void u.default.addError("静默登录失败", "可能已经登陆过了但是信息丢失") : ((0, 
                d.handleResponseTips)(t.data, (null == n ? void 0 : n.url) || ""), t.data));

              case 6:
                return e.abrupt("return", ((0, d.handleResponseTips)(t.data, (null == n ? void 0 : n.url) || ""), 
                t.data));

              case 9:
                return e.prev = 9, e.t0 = e.catch(0), e.abrupt("return", void u.default.addError("静默登录失败", {
                    msg: "" + JSON.stringify(e.t0)
                }));

              case 12:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 0, 9 ] ]);
    }));
    return function(r, t) {
        return e.apply(this, arguments);
    };
}();

exports.silentLogin = l;