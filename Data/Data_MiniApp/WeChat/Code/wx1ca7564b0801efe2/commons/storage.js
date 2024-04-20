var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.storage = void 0;

var r = e(require("../miniprogram_npm/@limo/core/index.js")), t = {
    set: function(e, t, n) {
        return function(e, t, n) {
            return function() {
                var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6e4, i = n ? Date.now() + n * o : void 0;
                try {
                    r.default.getLimoRuntime().setStorageSync(e, JSON.stringify({
                        value: t,
                        expire: i
                    }));
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    console.error(e);
                }
            };
        }(e, t, n)();
    },
    get: function(e) {
        try {
            var t = r.default.getLimoRuntime().getStorageSync(e);
            if (!t) return null;
            var n = JSON.parse(t);
            if (!n) return null;
            var o = n.value, i = n.expire;
            if (!i || i > Date.now()) return o;
            r.default.getLimoRuntime().removeStorageSync(e);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            console.error(e);
        }
        return null;
    },
    remove: function(e) {
        r.default.getLimoRuntime().removeStorageSync(e);
    }
};

exports.storage = t;