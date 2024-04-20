var e = require("../../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e, l, a) {
    var n = l && a || 0, c = l || [], v = (e = e || {}).node || r, d = void 0 !== e.clockseq ? e.clockseq : s;
    if (null == v || null == d) {
        var f = (0, u.default)();
        null == v && (v = r = [ 1 | f[0], f[1], f[2], f[3], f[4], f[5] ]), null == d && (d = s = 16383 & (f[6] << 8 | f[7]));
    }
    var q = void 0 !== e.msecs ? e.msecs : new Date().getTime(), p = void 0 !== e.nsecs ? e.nsecs : i + 1, m = q - t + (p - i) / 1e4;
    if (m < 0 && void 0 === e.clockseq && (d = d + 1 & 16383), (m < 0 || q > t) && void 0 === e.nsecs && (p = 0), 
    p >= 1e4) throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
    t = q, i = p, s = d;
    var b = (1e4 * (268435455 & (q += 122192928e5)) + p) % 4294967296;
    c[n++] = b >>> 24 & 255, c[n++] = b >>> 16 & 255, c[n++] = b >>> 8 & 255, c[n++] = 255 & b;
    var h = q / 4294967296 * 1e4 & 268435455;
    c[n++] = h >>> 8 & 255, c[n++] = 255 & h, c[n++] = h >>> 24 & 15 | 16, c[n++] = h >>> 16 & 255, 
    c[n++] = d >>> 8 | 128, c[n++] = 255 & d;
    for (var k = 0; k < 6; ++k) c[n + k] = v[k];
    return l || (0, o.default)(c);
};

var r, s, u = e(require("./rng")), o = e(require("./bytesToUuid")), t = 0, i = 0;