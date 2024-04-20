var r, t, e, n, i;

r = require("./utils/crypt"), t = require("./utils/charenc").utf8, e = require("./utils/is-buffer"), 
n = require("./utils/charenc").bin, (i = function(o, s) {
    o.constructor == String ? o = s && "binary" === s.encoding ? n.stringToBytes(o) : t.stringToBytes(o) : e(o) ? o = Array.prototype.slice.call(o, 0) : Array.isArray(o) || o.constructor === Uint8Array || (o = o.toString());
    for (var u = r.bytesToWords(o), a = 8 * o.length, c = 1732584193, g = -271733879, l = -1732584194, f = 271733878, y = 0; y < u.length; y++) u[y] = 16711935 & (u[y] << 8 | u[y] >>> 24) | 4278255360 & (u[y] << 24 | u[y] >>> 8);
    u[a >>> 5] |= 128 << a % 32, u[14 + (a + 64 >>> 9 << 4)] = a;
    var h = i._ff, _ = i._gg, v = i._hh, b = i._ii;
    for (y = 0; y < u.length; y += 16) {
        var d = c, T = g, p = l, q = f;
        c = h(c, g, l, f, u[y + 0], 7, -680876936), f = h(f, c, g, l, u[y + 1], 12, -389564586), 
        l = h(l, f, c, g, u[y + 2], 17, 606105819), g = h(g, l, f, c, u[y + 3], 22, -1044525330), 
        c = h(c, g, l, f, u[y + 4], 7, -176418897), f = h(f, c, g, l, u[y + 5], 12, 1200080426), 
        l = h(l, f, c, g, u[y + 6], 17, -1473231341), g = h(g, l, f, c, u[y + 7], 22, -45705983), 
        c = h(c, g, l, f, u[y + 8], 7, 1770035416), f = h(f, c, g, l, u[y + 9], 12, -1958414417), 
        l = h(l, f, c, g, u[y + 10], 17, -42063), g = h(g, l, f, c, u[y + 11], 22, -1990404162), 
        c = h(c, g, l, f, u[y + 12], 7, 1804603682), f = h(f, c, g, l, u[y + 13], 12, -40341101), 
        l = h(l, f, c, g, u[y + 14], 17, -1502002290), c = _(c, g = h(g, l, f, c, u[y + 15], 22, 1236535329), l, f, u[y + 1], 5, -165796510), 
        f = _(f, c, g, l, u[y + 6], 9, -1069501632), l = _(l, f, c, g, u[y + 11], 14, 643717713), 
        g = _(g, l, f, c, u[y + 0], 20, -373897302), c = _(c, g, l, f, u[y + 5], 5, -701558691), 
        f = _(f, c, g, l, u[y + 10], 9, 38016083), l = _(l, f, c, g, u[y + 15], 14, -660478335), 
        g = _(g, l, f, c, u[y + 4], 20, -405537848), c = _(c, g, l, f, u[y + 9], 5, 568446438), 
        f = _(f, c, g, l, u[y + 14], 9, -1019803690), l = _(l, f, c, g, u[y + 3], 14, -187363961), 
        g = _(g, l, f, c, u[y + 8], 20, 1163531501), c = _(c, g, l, f, u[y + 13], 5, -1444681467), 
        f = _(f, c, g, l, u[y + 2], 9, -51403784), l = _(l, f, c, g, u[y + 7], 14, 1735328473), 
        c = v(c, g = _(g, l, f, c, u[y + 12], 20, -1926607734), l, f, u[y + 5], 4, -378558), 
        f = v(f, c, g, l, u[y + 8], 11, -2022574463), l = v(l, f, c, g, u[y + 11], 16, 1839030562), 
        g = v(g, l, f, c, u[y + 14], 23, -35309556), c = v(c, g, l, f, u[y + 1], 4, -1530992060), 
        f = v(f, c, g, l, u[y + 4], 11, 1272893353), l = v(l, f, c, g, u[y + 7], 16, -155497632), 
        g = v(g, l, f, c, u[y + 10], 23, -1094730640), c = v(c, g, l, f, u[y + 13], 4, 681279174), 
        f = v(f, c, g, l, u[y + 0], 11, -358537222), l = v(l, f, c, g, u[y + 3], 16, -722521979), 
        g = v(g, l, f, c, u[y + 6], 23, 76029189), c = v(c, g, l, f, u[y + 9], 4, -640364487), 
        f = v(f, c, g, l, u[y + 12], 11, -421815835), l = v(l, f, c, g, u[y + 15], 16, 530742520), 
        c = b(c, g = v(g, l, f, c, u[y + 2], 23, -995338651), l, f, u[y + 0], 6, -198630844), 
        f = b(f, c, g, l, u[y + 7], 10, 1126891415), l = b(l, f, c, g, u[y + 14], 15, -1416354905), 
        g = b(g, l, f, c, u[y + 5], 21, -57434055), c = b(c, g, l, f, u[y + 12], 6, 1700485571), 
        f = b(f, c, g, l, u[y + 3], 10, -1894986606), l = b(l, f, c, g, u[y + 10], 15, -1051523), 
        g = b(g, l, f, c, u[y + 1], 21, -2054922799), c = b(c, g, l, f, u[y + 8], 6, 1873313359), 
        f = b(f, c, g, l, u[y + 15], 10, -30611744), l = b(l, f, c, g, u[y + 6], 15, -1560198380), 
        g = b(g, l, f, c, u[y + 13], 21, 1309151649), c = b(c, g, l, f, u[y + 4], 6, -145523070), 
        f = b(f, c, g, l, u[y + 11], 10, -1120210379), l = b(l, f, c, g, u[y + 2], 15, 718787259), 
        g = b(g, l, f, c, u[y + 9], 21, -343485551), c = c + d >>> 0, g = g + T >>> 0, l = l + p >>> 0, 
        f = f + q >>> 0;
    }
    return r.endian([ c, g, l, f ]);
})._ff = function(r, t, e, n, i, o, s) {
    var u = r + (t & e | ~t & n) + (i >>> 0) + s;
    return (u << o | u >>> 32 - o) + t;
}, i._gg = function(r, t, e, n, i, o, s) {
    var u = r + (t & n | e & ~n) + (i >>> 0) + s;
    return (u << o | u >>> 32 - o) + t;
}, i._hh = function(r, t, e, n, i, o, s) {
    var u = r + (t ^ e ^ n) + (i >>> 0) + s;
    return (u << o | u >>> 32 - o) + t;
}, i._ii = function(r, t, e, n, i, o, s) {
    var u = r + (e ^ (t | ~n)) + (i >>> 0) + s;
    return (u << o | u >>> 32 - o) + t;
}, i._blocksize = 16, i._digestsize = 16, module.exports = function(t, e) {
    if (null == t) throw Error("Illegal argument " + t);
    var o = r.wordsToBytes(i(t, e));
    return e && e.asBytes ? o : e && e.asString ? n.bytesToString(o) : r.bytesToHex(o);
};