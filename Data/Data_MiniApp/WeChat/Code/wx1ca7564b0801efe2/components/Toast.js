var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var o = require("../b/helpers/objectSpread2"), t = e(require("../miniprogram_npm/@limo/core/index.js")), r = e(require("../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), i = {
    show: function(e) {
        var t = {};
        "string" == typeof e ? t.content = e : t = e, (t = o({
            duration: 2e3,
            icon: "none"
        }, t)).beforeClose && setTimeout(function() {
            t.beforeClose();
        }, t.duration), r.default.showToast({
            title: t.content,
            icon: t.icon,
            duration: t.duration,
            mask: t.hasMask
        });
    },
    close: function() {
        t.default.getLimoRuntime().hideToast();
    }
};

exports.default = i;