var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = require("../b/helpers/objectSpread2"), r = e(require("../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), i = {
    show: function(e) {
        var i = {};
        e && ("string" == typeof e ? i.text = e : i = e), i = t({
            text: "加载中...",
            mask: !0
        }, i), r.default.showLoading({
            title: i.text,
            mask: i.mask
        });
    },
    close: function() {
        r.default.hideLoading();
    }
};

exports.default = i;