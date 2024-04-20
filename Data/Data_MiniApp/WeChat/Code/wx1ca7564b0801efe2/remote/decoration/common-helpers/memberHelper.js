var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getStorageData = function(e) {
    var a = e.key, t = e.success;
    r.default.getLimoRuntime().getStorage({
        key: a,
        success: function(e) {
            if (e && e.data) {
                var a = e.data, r = a.data, o = a.expireTime;
                Date.now() - o >= 864e5 || !r || t(r);
            }
        }
    });
}, exports.request = function(e) {
    var l = e.url, s = e.params, u = e.method, n = e.completeCallbacks, c = e.failCallbacks, d = t(e, i);
    r.default.getLimoRuntime().request(a(a({
        url: "".concat((0, o.getDefaultHost)()).concat(l),
        method: u || "GET",
        data: a({}, s)
    }, d), {}, {
        complete: function(e) {
            var a, t;
            e.data && 200 === e.data.code && e.data.data ? n(e.data.data) : c && c((null == e || null == (a = e.data) ? void 0 : a.msg) || (null == e || null == (t = e.data) ? void 0 : t.message));
        },
        fail: function(e) {
            c && c(e);
        }
    }));
};

var a = require("../../../b/helpers/objectSpread2"), t = require("../../../b/helpers/objectWithoutProperties"), r = e(require("../../../miniprogram_npm/@limo/core/index.js")), o = require("../../../miniprogram_npm/@mtfe/rms-sdk/index.js"), i = [ "url", "params", "method", "completeCallbacks", "failCallbacks" ];