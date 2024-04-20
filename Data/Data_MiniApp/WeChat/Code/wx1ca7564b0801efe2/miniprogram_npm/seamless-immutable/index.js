var t, e = require("../../b/helpers/typeof");

t = function t(r) {
    function n(t) {
        var e = Object.getPrototypeOf(t);
        return e ? Object.create(e) : {};
    }
    function i(t, e, r) {
        Object.defineProperty(t, e, {
            enumerable: !1,
            configurable: !1,
            writable: !1,
            value: r
        });
    }
    function o(t) {
        return "object" != e(t) || null === t || Boolean(Object.getOwnPropertyDescriptor(t, Y));
    }
    function s(t, e) {
        return t === e || t != t && e != e;
    }
    function a(t) {
        return !(null === t || "object" != e(t) || Array.isArray(t) || t instanceof Date);
    }
    function u(t) {
        this.name = "MyError", this.message = t, this.stack = new Error().stack;
    }
    function c(t, e) {
        return function(t) {
            i(t, Y, !0);
        }(t), t;
    }
    function f(t, e) {
        var r = t[e];
        i(t, e, function() {
            return U(r.apply(t, arguments));
        });
    }
    function l(t, e, r) {
        var n = r && r.deep;
        if (t in this && (n && this[t] !== e && a(e) && a(this[t]) && (e = U.merge(this[t], e, {
            deep: !0,
            mode: "replace"
        })), s(this[t], e))) return this;
        var i = m.call(this);
        return i[t] = U(e), p(i);
    }
    function h(t, r, n) {
        var i = t[0];
        if (1 === t.length) return l.call(this, i, r, n);
        var o, s = t.slice(1), a = this[i];
        if ("object" == e(a) && null !== a) o = U.setIn(a, s, r); else {
            var u = s[0];
            o = "" !== u && isFinite(u) ? h.call(N, s, r) : I.call(q, s, r);
        }
        if (i in this && a === o) return this;
        var c = m.call(this);
        return c[i] = o, p(c);
    }
    function p(t) {
        for (var e in J) J.hasOwnProperty(e) && f(t, J[e]);
        $.use_static || (i(t, "flatMap", v), i(t, "asObject", g), i(t, "asMutable", m), 
        i(t, "set", l), i(t, "setIn", h), i(t, "update", M), i(t, "updateIn", D), i(t, "getIn", _));
        for (var r = 0, n = t.length; r < n; r++) t[r] = U(t[r]);
        return c(t);
    }
    function y(t) {
        return $.use_static || i(t, "asMutable", d), c(t);
    }
    function d() {
        return new Date(this.getTime());
    }
    function v(t) {
        if (0 === arguments.length) return this;
        var e, r = [], n = this.length;
        for (e = 0; e < n; e++) {
            var i = t(this[e], e, this);
            Array.isArray(i) ? r.push.apply(r, i) : r.push(i);
        }
        return p(r);
    }
    function b(t) {
        if (void 0 === t && 0 === arguments.length) return this;
        if ("function" != typeof t) {
            var e = Array.isArray(t) ? t.slice() : Array.prototype.slice.call(arguments);
            e.forEach(function(t, e, r) {
                "number" == typeof t && (r[e] = t.toString());
            }), t = function(t, r) {
                return -1 !== e.indexOf(r);
            };
        }
        var r = n(this);
        for (var i in this) this.hasOwnProperty(i) && !1 === t(this[i], i) && (r[i] = this[i]);
        return C(r);
    }
    function m(t) {
        var e, r, n = [];
        if (t && t.deep) for (e = 0, r = this.length; e < r; e++) n.push(w(this[e])); else for (e = 0, 
        r = this.length; e < r; e++) n.push(this[e]);
        return n;
    }
    function g(t) {
        "function" != typeof t && (t = function(t) {
            return t;
        });
        var e, r = {}, n = this.length;
        for (e = 0; e < n; e++) {
            var i = t(this[e], e, this), o = i[0], s = i[1];
            r[o] = s;
        }
        return C(r);
    }
    function w(t) {
        return !t || "object" != e(t) || !Object.getOwnPropertyDescriptor(t, Y) || t instanceof Date ? t : U.asMutable(t, {
            deep: !0
        });
    }
    function O(t, e) {
        for (var r in t) Object.getOwnPropertyDescriptor(t, r) && (e[r] = t[r]);
        return e;
    }
    function j(t, r) {
        function i(t, e, i) {
            var o, c = U(e[i]), f = p && p(t[i], c, r), h = t[i];
            void 0 === u && void 0 === f && t.hasOwnProperty(i) && s(c, h) || s(h, o = void 0 !== f ? f : l && a(h) && a(c) ? U.merge(h, c, r) : c) && t.hasOwnProperty(i) || (void 0 === u && (u = O(t, n(t))), 
            u[i] = o);
        }
        function o(t, e) {
            for (var r in t) e.hasOwnProperty(r) || (void 0 === u && (u = O(t, n(t))), delete u[r]);
        }
        if (0 === arguments.length) return this;
        if (null === t || "object" != e(t)) throw new TypeError("Immutable#merge can only be invoked with objects or arrays, not " + JSON.stringify(t));
        var u, c, f = Array.isArray(t), l = r && r.deep, h = r && r.mode || "merge", p = r && r.merger;
        if (f) for (var y = 0, d = t.length; y < d; y++) {
            var v = t[y];
            for (c in v) v.hasOwnProperty(c) && i(void 0 !== u ? u : this, v, c);
        } else {
            for (c in t) Object.getOwnPropertyDescriptor(t, c) && i(this, t, c);
            "replace" === h && o(this, t);
        }
        return void 0 === u ? this : C(u);
    }
    function A(t, r) {
        var n = r && r.deep;
        if (0 === arguments.length) return this;
        if (null === t || "object" != e(t)) throw new TypeError("Immutable#replace can only be invoked with objects or arrays, not " + JSON.stringify(t));
        return U.merge(this, t, {
            deep: n,
            mode: "replace"
        });
    }
    function I(t, r, i) {
        if (!Array.isArray(t) || 0 === t.length) throw new TypeError('The first argument to Immutable#setIn must be an array containing at least one "key" string.');
        var o = t[0];
        if (1 === t.length) return P.call(this, o, r, i);
        var s, a = t.slice(1), u = this[o];
        if (s = this.hasOwnProperty(o) && "object" == e(u) && null !== u ? U.setIn(u, a, r) : I.call(q, a, r), 
        this.hasOwnProperty(o) && u === s) return this;
        var c = O(this, n(this));
        return c[o] = s, C(c);
    }
    function P(t, e, r) {
        var i = r && r.deep;
        if (this.hasOwnProperty(t) && (i && this[t] !== e && a(e) && a(this[t]) && (e = U.merge(this[t], e, {
            deep: !0,
            mode: "replace"
        })), s(this[t], e))) return this;
        var o = O(this, n(this));
        return o[t] = U(e), C(o);
    }
    function M(t, e) {
        var r = Array.prototype.slice.call(arguments, 2), n = this[t];
        return U.set(this, t, e.apply(n, [ n ].concat(r)));
    }
    function T(t, e) {
        for (var r = 0, n = e.length; null != t && r < n; r++) t = t[e[r]];
        return r && r == n ? t : void 0;
    }
    function D(t, e) {
        var r = Array.prototype.slice.call(arguments, 2), n = T(this, t);
        return U.setIn(this, t, e.apply(n, [ n ].concat(r)));
    }
    function _(t, e) {
        var r = T(this, t);
        return void 0 === r ? e : r;
    }
    function E(t) {
        var e, r = n(this);
        if (t && t.deep) for (e in this) this.hasOwnProperty(e) && (r[e] = w(this[e])); else for (e in this) this.hasOwnProperty(e) && (r[e] = this[e]);
        return r;
    }
    function S() {
        return {};
    }
    function C(t) {
        return $.use_static || (i(t, "merge", j), i(t, "replace", A), i(t, "without", b), 
        i(t, "asMutable", E), i(t, "set", P), i(t, "setIn", I), i(t, "update", M), i(t, "updateIn", D), 
        i(t, "getIn", _)), c(t);
    }
    function U(t, r, n) {
        if (o(t) || function(t) {
            return "object" == e(t) && null !== t && (t.$$typeof === B || t.$$typeof === F);
        }(t) || function(t) {
            return "undefined" != typeof File && t instanceof File;
        }(t) || function(t) {
            return "undefined" != typeof Blob && t instanceof Blob;
        }(t) || function(t) {
            return t instanceof Error;
        }(t)) return t;
        if (function(t) {
            return "object" == e(t) && "function" == typeof t.then;
        }(t)) return t.then(U);
        if (Array.isArray(t)) return p(t.slice());
        if (t instanceof Date) return y(new Date(t.getTime()));
        var i = r && r.prototype, s = (i && i !== Object.prototype ? function() {
            return Object.create(i);
        } : S)();
        for (var a in t) Object.getOwnPropertyDescriptor(t, a) && (s[a] = U(t[a], void 0, n));
        return C(s);
    }
    function k(t) {
        return function() {
            var e = [].slice.call(arguments), r = e.shift();
            return t.apply(r, e);
        };
    }
    function x(t, e) {
        return function() {
            var r = [].slice.call(arguments), n = r.shift();
            return Array.isArray(n) ? e.apply(n, r) : t.apply(n, r);
        };
    }
    var F = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element"), B = 60103, $ = {
        use_static: !1
    };
    (function(t) {
        return "object" == e(t) && !Array.isArray(t) && null !== t;
    })(r) && void 0 !== r.use_static && ($.use_static = Boolean(r.use_static));
    var Y = "__immutable_invariants_hold", H = [ "setPrototypeOf" ], J = (H.concat([ "push", "pop", "sort", "splice", "shift", "unshift", "reverse" ]), 
    [ "keys" ].concat([ "map", "filter", "slice", "concat", "reduce", "reduceRight" ]));
    H.concat([ "setDate", "setFullYear", "setHours", "setMilliseconds", "setMinutes", "setMonth", "setSeconds", "setTime", "setUTCDate", "setUTCFullYear", "setUTCHours", "setUTCMilliseconds", "setUTCMinutes", "setUTCMonth", "setUTCSeconds", "setYear" ]), 
    u.prototype = new Error(), u.prototype.constructor = Error;
    var N = U([]), q = U({});
    return U.from = U, U.isImmutable = o, U.ImmutableError = u, U.merge = k(j), U.replace = k(A), 
    U.without = k(b), U.asMutable = function(t, e, r) {
        return function() {
            var n = [].slice.call(arguments), i = n.shift();
            return Array.isArray(i) ? e.apply(i, n) : i instanceof Date ? r.apply(i, n) : t.apply(i, n);
        };
    }(E, m, d), U.set = x(P, l), U.setIn = x(I, h), U.update = k(M), U.updateIn = k(D), 
    U.getIn = k(_), U.flatMap = k(v), U.asObject = k(g), $.use_static || (U.static = t({
        use_static: !0
    })), Object.freeze(U), U;
}(), "function" == typeof define && define.amd ? define(function() {
    return t;
}) : "object" == ("undefined" == typeof module ? "undefined" : e(module)) ? module.exports = t : "object" == ("undefined" == typeof exports ? "undefined" : e(exports)) ? exports.Immutable = t : "object" == ("undefined" == typeof window ? "undefined" : e(window)) ? window.Immutable = t : "object" == ("undefined" == typeof global ? "undefined" : e(global)) && (global.Immutable = t);