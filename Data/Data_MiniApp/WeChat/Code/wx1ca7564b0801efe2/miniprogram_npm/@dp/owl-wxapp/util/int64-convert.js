function r(r) {
    for (;"0" === r[0] && r.length > 1; ) r = r.slice(1);
    return r;
}

function t(r, t) {
    if (!r) return 0;
    var n = parseInt(r, t);
    if (isNaN(n)) throw Error("parse char '" + r + "' to number(" + t + ") failed");
    return n;
}

function n(r, n, e) {
    for (var o, f = "", u = r.length, i = n.length, l = 0, a = 0; a < u || a < i; ) o = t(r[u - ++a], e) + t(n[i - a], e) + l, 
    l = Math.floor(o / e), f = (o % e).toString(e) + f;
    for (;l > 0; ) f = (l % e).toString(e) + f, l = Math.floor(l / e);
    return f;
}

function e(n, o, f) {
    if (function(r, n, e) {
        if (r.length > n.length) return 1;
        if (r.length < n.length) return -1;
        for (var o = 0; o < r.length; ) {
            var f = t(r[o], e), u = t(n[o], e);
            if (f > u) return 1;
            if (f < u) return -1;
            o++;
        }
        return 0;
    }(n, o, f) < 0) return e(o, n, f);
    for (var u, i = "", l = n.length, a = o.length, g = 0, h = 0; h < l; ) (u = t(n[l - ++h], f) - t(o[a - h], f) + g) < 0 && (g = -1, 
    u += f), i = u.toString(f) + i;
    return r(i);
}

function o(r, n, e) {
    for (var o, f = "", u = 0, i = r.length; --i >= 0; ) o = t(r[i], e) * n + u, u = Math.floor(o / e), 
    f = (o % e).toString(e) + f;
    for (;u > 0; ) f = (u % e).toString(e) + f, u = Math.floor(u / e);
    return f;
}

function f(e, f, u, i) {
    e = r(e), f = f || 10, u = u || 16;
    for (var l = "0", a = "1", g = 0; g++ < e.length; ) l = n(l, o(a, t(e[e.length - g], f), u), u), 
    a = o(a, f, u);
    return i ? function(r, t) {
        for (;r.length < t; ) r = "0" + r;
        return r;
    }(l, i) : l;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0, f.signedHexToDec = function(r) {
    var n = r.length > 15 && t(r[0], 16) >= 8, o = f(n ? e("10000000000000000", r, 16) : r, 16, 10);
    return n ? "-" + o : o;
};

var u = f;

exports.default = u;