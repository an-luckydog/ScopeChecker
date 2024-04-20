(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/module/imgWrap" ], {
    "0e8f": function(t, e, n) {
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
        var a = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    "20dd": function(t, e, n) {},
    "563b": function(t, e, n) {
        n.r(e);
        var a = n("734f"), o = n.n(a);
        for (var c in a) [ "default" ].indexOf(c) < 0 && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(c);
        e.default = o.a;
    },
    "6bc7": function(t, e, n) {
        var a = n("20dd");
        n.n(a).a;
    },
    "734f": function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                data: function() {
                    return {
                        target: "",
                        safeAreaTop: getApp().globalData.safeAreaTop ? getApp().globalData.safeAreaTop + "px" : "64rpx"
                    };
                },
                onLoad: function(e) {
                    t.showLoading({
                        title: ""
                    }), e.target ? this.target = e.target : t.navigateBack();
                },
                created: function() {},
                methods: {
                    imgLoad: function(e) {
                        e.detail && t.hideLoading();
                    }
                }
            };
            e.default = n;
        }).call(this, n("543d").default);
    },
    b3cc: function(t, e, n) {
        n.r(e);
        var a = n("0e8f"), o = n("563b");
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        n("6bc7");
        var f = n("f0c5"), u = Object(f.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = u.exports;
    },
    e797: function(t, e, n) {
        (function(t, e) {
            var a = n("4ea4");
            n("a7b2"), a(n("66fd"));
            var o = a(n("b3cc"));
            t.__webpack_require_UNI_MP_PLUGIN__ = n, e(o.default);
        }).call(this, n("bc2e").default, n("543d").createPage);
    }
}, [ [ "e797", "common/runtime", "common/vendor" ] ] ]);