(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/gaoyia-parse/components/wxParseTemplate8" ], {
    "8d32": function(e, n, o) {
        o.d(n, "b", function() {
            return a;
        }), o.d(n, "c", function() {
            return t;
        }), o.d(n, "a", function() {});
        var a = function() {
            this.$createElement;
            this._self._c;
        }, t = [];
    },
    "99a28": function(e, n, o) {
        o.r(n);
        var a = o("a20a"), t = o.n(a);
        for (var r in a) [ "default" ].indexOf(r) < 0 && function(e) {
            o.d(n, e, function() {
                return a[e];
            });
        }(r);
        n.default = t.a;
    },
    a20a: function(e, n, o) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var a = {
            name: "wxParseTemplate8",
            props: {
                node: {}
            },
            components: {
                wxParseTemplate: function() {
                    o.e("components/gaoyia-parse/components/wxParseTemplate9").then(function() {
                        return resolve(o("68e7"));
                    }.bind(null, o)).catch(o.oe);
                },
                wxParseImg: function() {
                    o.e("components/gaoyia-parse/components/wxParseImg").then(function() {
                        return resolve(o("d41e"));
                    }.bind(null, o)).catch(o.oe);
                },
                wxParseVideo: function() {
                    o.e("components/gaoyia-parse/components/wxParseVideo").then(function() {
                        return resolve(o("d559"));
                    }.bind(null, o)).catch(o.oe);
                },
                wxParseAudio: function() {
                    o.e("components/gaoyia-parse/components/wxParseAudio").then(function() {
                        return resolve(o("b27f"));
                    }.bind(null, o)).catch(o.oe);
                },
                wxParseTable: function() {
                    o.e("components/gaoyia-parse/components/wxParseTable").then(function() {
                        return resolve(o("2f0a"));
                    }.bind(null, o)).catch(o.oe);
                }
            },
            methods: {
                wxParseATap: function(e, n) {
                    var o = n.currentTarget.dataset.href;
                    if (o) {
                        for (var a = this.$parent; !a.preview || "function" != typeof a.preview; ) a = a.$parent;
                        a.navigate(o, n, e);
                    }
                }
            }
        };
        n.default = a;
    },
    c8ed9: function(e, n, o) {
        o.r(n);
        var a = o("8d32"), t = o("99a28");
        for (var r in t) [ "default" ].indexOf(r) < 0 && function(e) {
            o.d(n, e, function() {
                return t[e];
            });
        }(r);
        var c = o("f0c5"), s = Object(c.a)(t.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = s.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/gaoyia-parse/components/wxParseTemplate8-create-component", {
    "components/gaoyia-parse/components/wxParseTemplate8-create-component": function(e, n, o) {
        o("543d").createComponent(o("c8ed9"));
    }
}, [ [ "components/gaoyia-parse/components/wxParseTemplate8-create-component" ] ] ]);