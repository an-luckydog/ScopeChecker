var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("../miniprogram_npm/@limo/core/index.js"));

exports.default = function(e) {
    var c = e.title, o = void 0 === c ? "" : c, i = e.body, l = void 0 === i ? "" : i, n = e.buttons, r = !0, a = "#fe8c00", u = "#666666", s = "确定", f = "取消", d = function() {}, m = function() {};
    1 === n.length ? (r = !1, s = n[0].text, d = n[0].callback || d, "cancel" === n[0].type && (a = "#666")) : (f = n[0].text, 
    s = n[1].text, m = n[0].callback || m, d = n[1].callback || d, "submit" === n[0].type && (u = "#fe8c00")), 
    f = f.slice(0, 4), s = s.slice(0, 4), t.default.getLimoRuntime().showModal({
        title: o,
        content: l,
        showCancel: r,
        confirmColor: a,
        cancelColor: u,
        confirmText: s,
        cancelText: f,
        success: function(e) {
            e.confirm ? d() : e.cancel && m();
        },
        fail: function(e) {}
    });
};