(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/gaoyia-parse/components/wxParseAudio" ], {
    "69c3": function(n, e, o) {
        o.r(e);
        var t = o("d970"), a = o.n(t);
        for (var c in t) [ "default" ].indexOf(c) < 0 && function(n) {
            o.d(e, n, function() {
                return t[n];
            });
        }(c);
        e.default = a.a;
    },
    b27f: function(n, e, o) {
        o.r(e);
        var t = o("ce32"), a = o("69c3");
        for (var c in a) [ "default" ].indexOf(c) < 0 && function(n) {
            o.d(e, n, function() {
                return a[n];
            });
        }(c);
        var r = o("f0c5"), u = Object(r.a)(a.default, t.b, t.c, !1, null, null, null, !1, t.a, void 0);
        e.default = u.exports;
    },
    ce32: function(n, e, o) {
        o.d(e, "b", function() {
            return t;
        }), o.d(e, "c", function() {
            return a;
        }), o.d(e, "a", function() {});
        var t = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    d970: function(n, e, o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var t = {
            name: "wxParseAudio",
            props: {
                node: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                }
            }
        };
        e.default = t;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/gaoyia-parse/components/wxParseAudio-create-component", {
    "components/gaoyia-parse/components/wxParseAudio-create-component": function(n, e, o) {
        o("543d").createComponent(o("b27f"));
    }
}, [ [ "components/gaoyia-parse/components/wxParseAudio-create-component" ] ] ]);