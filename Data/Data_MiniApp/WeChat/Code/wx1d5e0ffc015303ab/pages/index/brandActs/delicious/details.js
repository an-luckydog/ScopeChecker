(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/brandActs/delicious/details" ], {
    "126f": function(n, e, t) {
        (function(n, e) {
            var a = t("4ea4");
            t("a7b2"), a(t("66fd"));
            var i = a(t("6978"));
            n.__webpack_require_UNI_MP_PLUGIN__ = t, e(i.default);
        }).call(this, t("bc2e").default, t("543d").createPage);
    },
    "313f": function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0, e.default = {
            data: function() {
                return {
                    src: ""
                };
            },
            methods: {},
            onLoad: function(n) {
                var e = n.id;
                this.src = "https://xcxsite.vjifen.com/v/hbqp/delicious.html?id=" + e;
            },
            onShareAppMessage: function() {
                return {
                    title: "青岛啤酒乐享河北",
                    path: "/pages/index/index"
                };
            }
        };
    },
    6978: function(n, e, t) {
        t.r(e);
        var a = t("9041"), i = t("a654");
        for (var u in i) [ "default" ].indexOf(u) < 0 && function(n) {
            t.d(e, n, function() {
                return i[n];
            });
        }(u);
        var c = t("f0c5"), o = Object(c.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = o.exports;
    },
    9041: function(n, e, t) {
        t.d(e, "b", function() {
            return a;
        }), t.d(e, "c", function() {
            return i;
        }), t.d(e, "a", function() {});
        var a = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    },
    a654: function(n, e, t) {
        t.r(e);
        var a = t("313f"), i = t.n(a);
        for (var u in a) [ "default" ].indexOf(u) < 0 && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(u);
        e.default = i.a;
    }
}, [ [ "126f", "common/runtime", "common/vendor" ] ] ]);