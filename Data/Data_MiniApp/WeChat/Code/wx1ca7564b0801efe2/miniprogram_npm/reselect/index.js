var e = require("../../b/helpers/typeof");

!function(e, r) {
    if ("function" == typeof define && define.amd) define("Reselect", [ "exports" ], r); else if ("undefined" != typeof exports) r(exports); else {
        var t = {
            exports: {}
        };
        r(t.exports), (void 0).Reselect = t.exports;
    }
}(0, function(r) {
    function t(e, r) {
        return e === r;
    }
    function n(e, r, t) {
        if (null === r || null === t || r.length !== t.length) return !1;
        for (var n = r.length, o = 0; o < n; o++) if (!e(r[o], t[o])) return !1;
        return !0;
    }
    function o(e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t, o = null, u = null;
        return function() {
            return n(r, o, arguments) || (u = e.apply(null, arguments)), o = arguments, u;
        };
    }
    function u(r) {
        var t = Array.isArray(r[0]) ? r[0] : r;
        if (!t.every(function(e) {
            return "function" == typeof e;
        })) {
            var n = t.map(function(r) {
                return e(r);
            }).join(", ");
            throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: [" + n + "]");
        }
        return t;
    }
    function c(e) {
        for (var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
        return function() {
            for (var r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
            var c = 0, i = n.pop(), l = u(n), a = e.apply(void 0, [ function() {
                return c++, i.apply(null, arguments);
            } ].concat(t)), f = e(function() {
                for (var e = [], r = l.length, t = 0; t < r; t++) e.push(l[t].apply(null, arguments));
                return a.apply(null, e);
            });
            return f.resultFunc = i, f.dependencies = l, f.recomputations = function() {
                return c;
            }, f.resetRecomputations = function() {
                return c = 0;
            }, f;
        };
    }
    r.__esModule = !0, r.defaultMemoize = o, r.createSelectorCreator = c, r.createStructuredSelector = function(r) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
        if ("object" !== e(r)) throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a " + e(r));
        var n = Object.keys(r);
        return t(n.map(function(e) {
            return r[e];
        }), function() {
            for (var e = arguments.length, r = Array(e), t = 0; t < e; t++) r[t] = arguments[t];
            return r.reduce(function(e, r, t) {
                return e[n[t]] = r, e;
            }, {});
        });
    };
    var i = r.createSelector = c(o);
});