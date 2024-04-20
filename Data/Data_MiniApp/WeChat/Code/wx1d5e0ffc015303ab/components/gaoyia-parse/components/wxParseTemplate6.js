(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/gaoyia-parse/components/wxParseTemplate6" ], {
    "1c05": function(e, n, o) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var t = {
            name: "wxParseTemplate6",
            props: {
                node: {}
            },
            components: {
                wxParseTemplate: function() {
                    o.e("components/gaoyia-parse/components/wxParseTemplate7").then(function() {
                        return resolve(o("544d"));
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
                        for (var t = this.$parent; !t.preview || "function" != typeof t.preview; ) t = t.$parent;
                        t.navigate(o, n, e);
                    }
                }
            }
        };
        n.default = t;
    },
    "1e16": function(e, n, o) {
        o.d(n, "b", function() {
            return t;
        }), o.d(n, "c", function() {
            return a;
        }), o.d(n, "a", function() {});
        var t = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    4543: function(e, n, o) {
        o.r(n);
        var t = o("1e16"), a = o("7774");
        for (var r in a) [ "default" ].indexOf(r) < 0 && function(e) {
            o.d(n, e, function() {
                return a[e];
            });
        }(r);
        var c = o("f0c5"), s = Object(c.a)(a.default, t.b, t.c, !1, null, null, null, !1, t.a, void 0);
        n.default = s.exports;
    },
    7774: function(e, n, o) {
        o.r(n);
        var t = o("1c05"), a = o.n(t);
        for (var r in t) [ "default" ].indexOf(r) < 0 && function(e) {
            o.d(n, e, function() {
                return t[e];
            });
        }(r);
        n.default = a.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/gaoyia-parse/components/wxParseTemplate6-create-component", {
    "components/gaoyia-parse/components/wxParseTemplate6-create-component": function(e, n, o) {
        o("543d").createComponent(o("4543"));
    }
}, [ [ "components/gaoyia-parse/components/wxParseTemplate6-create-component" ] ] ]);