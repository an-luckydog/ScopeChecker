var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("../miniprogram_npm/@limo/core/index.js")), r = require("./env"), i = {
    set: function(e, i, o) {
        var a = {
            value: i,
            expiredTime: o = o || 1 / 0
        };
        if (r.isNativeMp) try {
            t.default.getLimoRuntime().setStorageSync(e, JSON.stringify(a));
        } catch (e) {} else window.localStorage.setItem(e, JSON.stringify(a));
    },
    get: function(e) {
        try {
            var i;
            i = r.isNativeMp ? t.default.getLimoRuntime().getStorageSync(e) : window.localStorage.getItem(e);
            try {
                var o = JSON.parse(i);
                return !o.expiredTime || o.expiredTime > Date.now() ? o.value : (this.remove(e), 
                null);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return i;
            }
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            return null;
        }
    },
    remove: function(e) {
        r.isNativeMp ? t.default.getLimoRuntime().removeStorageSync(e) : window.localStorage.removeItem(e);
    },
    getAllStorage: function() {
        return r.isNativeMp ? t.default.getLimoRuntime().getStorageInfoSync() : window.localStorage;
    }
};

exports.default = i;