Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getOneOneImageUrl = function(t, n, c) {
    return e(t, t, n, c, 1, 1, 0, !1);
};

var t = [ "p0.meituan.net", "p1.meituan.net" ];

function e(e, n, c, o) {
    var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1, r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1, i = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0, u = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
    return e ? t.some(function(t) {
        return RegExp("//".concat(t, "/"), "i").test(e);
    }) ? "".concat(e.split("%")[0], "%40").concat(c, "w_").concat(o, "h_").concat(a, "e_").concat(r, "c_").concat(i, "l").concat(u ? "%7Cwatermark%3D0" : "") : e : n;
}