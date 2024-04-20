var e, t, n = require("../../b/helpers/typeof");

e = void 0, t = function() {
    return function(e) {
        var t = {};
        function n(o) {
            if (t[o]) return t[o].exports;
            var r = t[o] = {
                exports: {},
                id: o,
                loaded: !1
            };
            return e[o].call(r.exports, r, r.exports, n), r.loaded = !0, r.exports;
        }
        return n.m = e, n.c = t, n.p = "", n(0);
    }([ function(e, t, n) {
        e.exports = n(1);
    }, function(e, t) {
        function n(e) {
            return function(t) {
                var n = t.dispatch, o = t.getState;
                return function(t) {
                    return function(r) {
                        return "function" == typeof r ? r(n, o, e) : t(r);
                    };
                };
            };
        }
        t.__esModule = !0;
        var o = n();
        o.withExtraArgument = n, t.default = o;
    } ]);
}, "object" === ("undefined" == typeof exports ? "undefined" : n(exports)) && "object" === ("undefined" == typeof module ? "undefined" : n(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" === ("undefined" == typeof exports ? "undefined" : n(exports)) ? exports.ReduxThunk = t() : e.ReduxThunk = t();