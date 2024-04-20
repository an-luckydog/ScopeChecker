var t = require("../../../@babel/runtime/helpers/typeof"), r = Object.getPrototypeOf || function(t) {
    return t.__proto__;
}, o = Object.prototype.hasOwnProperty, e = o.toString, n = e.call(Object), c = function(t) {
    var c, i;
    return !(!t || "[object Object]" !== toString.call(t) || (c = r(t)) && ("function" != typeof (i = o.call(c, "constructor") && c.constructor) || e.call(i) !== n));
}, i = function(t) {
    return "function" == typeof t;
};

module.exports = {
    extend: function r() {
        var o, e, n, u, l, a, f = arguments[0] || {}, p = 1, y = arguments.length, s = !1;
        for ("boolean" == typeof f && (s = f, f = arguments[p] || {}, p++), "object" == t(f) || i(f) || (f = {}), 
        p === y && (f = this, p--); p < y; p++) if (null != (o = arguments[p])) for (e in o) n = f[e], 
        f !== (u = o[e]) && (s && u && (c(u) || (l = Array.isArray(u))) ? (l ? (l = !1, 
        a = n && Array.isArray(n) ? n : []) : a = n && c(n) ? n : {}, f[e] = r(s, a, u)) : void 0 !== u && (f[e] = u));
        return f;
    }
};