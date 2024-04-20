(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/welfare-pop/welfare-pop" ], {
    "1be2": function(e, n, o) {
        var t = o("4bef");
        o.n(t).a;
    },
    "4bef": function(e, n, o) {},
    "69d8": function(e, n, o) {
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
    "6a8c": function(e, n, o) {
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = {
                props: {
                    isBg: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        isBigScreen: getApp().globalData.isBigScreen
                    };
                },
                methods: {
                    handleRoute: function() {
                        this.handleWelfareClose(), e.navigateTo({
                            url: "/pages_120th/welfareCenter/ferrisWheel"
                        });
                    },
                    handleWelfareClose: function() {
                        this.$emit("close");
                    }
                }
            };
            n.default = o;
        }).call(this, o("543d").default);
    },
    7798: function(e, n, o) {
        o.r(n);
        var t = o("69d8"), a = o("ed9b");
        for (var f in a) [ "default" ].indexOf(f) < 0 && function(e) {
            o.d(n, e, function() {
                return a[e];
            });
        }(f);
        o("1be2");
        var l = o("f0c5"), r = Object(l.a)(a.default, t.b, t.c, !1, null, "4b5363e6", null, !1, t.a, void 0);
        n.default = r.exports;
    },
    ed9b: function(e, n, o) {
        o.r(n);
        var t = o("6a8c"), a = o.n(t);
        for (var f in t) [ "default" ].indexOf(f) < 0 && function(e) {
            o.d(n, e, function() {
                return t[e];
            });
        }(f);
        n.default = a.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/welfare-pop/welfare-pop-create-component", {
    "components/welfare-pop/welfare-pop-create-component": function(e, n, o) {
        o("543d").createComponent(o("7798"));
    }
}, [ [ "components/welfare-pop/welfare-pop-create-component" ] ] ]);