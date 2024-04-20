function r(r) {
    return h(n(i(r), r.length * A));
}

function n(r, n) {
    r[n >> 5] |= 128 << n % 32, r[14 + (n + 64 >>> 9 << 4)] = n;
    for (var t = 1732584193, a = -271733879, i = -1732584194, h = 271733878, l = 0; l < r.length; l += 16) {
        var v = t, g = a, A = i, d = h;
        a = c(a = c(a = c(a = c(a = o(a = o(a = o(a = o(a = e(a = e(a = e(a = e(a = u(a = u(a = u(a = u(a, i = u(i, h = u(h, t = u(t, a, i, h, r[l + 0], 7, -680876936), a, i, r[l + 1], 12, -389564586), t, a, r[l + 2], 17, 606105819), h, t, r[l + 3], 22, -1044525330), i = u(i, h = u(h, t = u(t, a, i, h, r[l + 4], 7, -176418897), a, i, r[l + 5], 12, 1200080426), t, a, r[l + 6], 17, -1473231341), h, t, r[l + 7], 22, -45705983), i = u(i, h = u(h, t = u(t, a, i, h, r[l + 8], 7, 1770035416), a, i, r[l + 9], 12, -1958414417), t, a, r[l + 10], 17, -42063), h, t, r[l + 11], 22, -1990404162), i = u(i, h = u(h, t = u(t, a, i, h, r[l + 12], 7, 1804603682), a, i, r[l + 13], 12, -40341101), t, a, r[l + 14], 17, -1502002290), h, t, r[l + 15], 22, 1236535329), i = e(i, h = e(h, t = e(t, a, i, h, r[l + 1], 5, -165796510), a, i, r[l + 6], 9, -1069501632), t, a, r[l + 11], 14, 643717713), h, t, r[l + 0], 20, -373897302), i = e(i, h = e(h, t = e(t, a, i, h, r[l + 5], 5, -701558691), a, i, r[l + 10], 9, 38016083), t, a, r[l + 15], 14, -660478335), h, t, r[l + 4], 20, -405537848), i = e(i, h = e(h, t = e(t, a, i, h, r[l + 9], 5, 568446438), a, i, r[l + 14], 9, -1019803690), t, a, r[l + 3], 14, -187363961), h, t, r[l + 8], 20, 1163531501), i = e(i, h = e(h, t = e(t, a, i, h, r[l + 13], 5, -1444681467), a, i, r[l + 2], 9, -51403784), t, a, r[l + 7], 14, 1735328473), h, t, r[l + 12], 20, -1926607734), i = o(i, h = o(h, t = o(t, a, i, h, r[l + 5], 4, -378558), a, i, r[l + 8], 11, -2022574463), t, a, r[l + 11], 16, 1839030562), h, t, r[l + 14], 23, -35309556), i = o(i, h = o(h, t = o(t, a, i, h, r[l + 1], 4, -1530992060), a, i, r[l + 4], 11, 1272893353), t, a, r[l + 7], 16, -155497632), h, t, r[l + 10], 23, -1094730640), i = o(i, h = o(h, t = o(t, a, i, h, r[l + 13], 4, 681279174), a, i, r[l + 0], 11, -358537222), t, a, r[l + 3], 16, -722521979), h, t, r[l + 6], 23, 76029189), i = o(i, h = o(h, t = o(t, a, i, h, r[l + 9], 4, -640364487), a, i, r[l + 12], 11, -421815835), t, a, r[l + 15], 16, 530742520), h, t, r[l + 2], 23, -995338651), i = c(i, h = c(h, t = c(t, a, i, h, r[l + 0], 6, -198630844), a, i, r[l + 7], 10, 1126891415), t, a, r[l + 14], 15, -1416354905), h, t, r[l + 5], 21, -57434055), i = c(i, h = c(h, t = c(t, a, i, h, r[l + 12], 6, 1700485571), a, i, r[l + 3], 10, -1894986606), t, a, r[l + 10], 15, -1051523), h, t, r[l + 1], 21, -2054922799), i = c(i, h = c(h, t = c(t, a, i, h, r[l + 8], 6, 1873313359), a, i, r[l + 15], 10, -30611744), t, a, r[l + 6], 15, -1560198380), h, t, r[l + 13], 21, 1309151649), i = c(i, h = c(h, t = c(t, a, i, h, r[l + 4], 6, -145523070), a, i, r[l + 11], 10, -1120210379), t, a, r[l + 2], 15, 718787259), h, t, r[l + 9], 21, -343485551), 
        t = f(t, v), a = f(a, g), i = f(i, A), h = f(h, d);
    }
    return Array(t, a, i, h);
}

function t(r, n, t, u, e, o) {
    return f(a(f(f(n, r), f(u, o)), e), t);
}

function u(r, n, u, e, o, c, f) {
    return t(n & u | ~n & e, r, n, o, c, f);
}

function e(r, n, u, e, o, c, f) {
    return t(n & e | u & ~e, r, n, o, c, f);
}

function o(r, n, u, e, o, c, f) {
    return t(n ^ u ^ e, r, n, o, c, f);
}

function c(r, n, u, e, o, c, f) {
    return t(u ^ (n | ~e), r, n, o, c, f);
}

function f(r, n) {
    var t = (65535 & r) + (65535 & n);
    return (r >> 16) + (n >> 16) + (t >> 16) << 16 | 65535 & t;
}

function a(r, n) {
    return r << n | r >>> 32 - n;
}

function i(r) {
    for (var n = Array(), t = (1 << A) - 1, u = 0; u < r.length * A; u += A) n[u >> 5] |= (r.charCodeAt(u / A) & t) << u % 32;
    return n;
}

function h(r) {
    for (var n = v ? "0123456789ABCDEF" : "0123456789abcdef", t = "", u = 0; u < 4 * r.length; u++) t += n.charAt(r[u >> 2] >> u % 4 * 8 + 4 & 15) + n.charAt(r[u >> 2] >> u % 4 * 8 & 15);
    return t;
}

function l(r) {
    for (var n = "", t = 0; t < 4 * r.length; t += 3) for (var u = (r[t >> 2] >> t % 4 * 8 & 255) << 16 | (r[t + 1 >> 2] >> (t + 1) % 4 * 8 & 255) << 8 | r[t + 2 >> 2] >> (t + 2) % 4 * 8 & 255, e = 0; e < 4; e++) 8 * t + 6 * e > 32 * r.length ? n += g : n += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(u >> 6 * (3 - e) & 63);
    return n;
}

var v = 0, g = "", A = 8;

module.exports = {
    hex_md5: r,
    b64_md5: function(r) {
        return l(n(i(r), r.length * A));
    }
};