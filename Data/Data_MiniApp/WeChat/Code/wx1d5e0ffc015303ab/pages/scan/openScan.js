(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/scan/openScan" ], {
    "1c5e": function(n, e, o) {
        (function(n, e) {
            var t = o("4ea4");
            o("a7b2"), t(o("66fd"));
            var c = t(o("902d"));
            n.__webpack_require_UNI_MP_PLUGIN__ = o, e(c.default);
        }).call(this, o("bc2e").default, o("543d").createPage);
    },
    "1d2c": function(n, e, o) {
        o.d(e, "b", function() {
            return t;
        }), o.d(e, "c", function() {
            return c;
        }), o.d(e, "a", function() {});
        var t = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
    },
    "592a": function(n, e, o) {
        o.r(e);
        var t = o("d390"), c = o.n(t);
        for (var a in t) [ "default" ].indexOf(a) < 0 && function(n) {
            o.d(e, n, function() {
                return t[n];
            });
        }(a);
        e.default = c.a;
    },
    "902d": function(n, e, o) {
        o.r(e);
        var t = o("1d2c"), c = o("592a");
        for (var a in c) [ "default" ].indexOf(a) < 0 && function(n) {
            o.d(e, n, function() {
                return c[n];
            });
        }(a);
        var u = o("f0c5"), i = Object(u.a)(c.default, t.b, t.c, !1, null, null, null, !1, t.a, void 0);
        e.default = i.exports;
    },
    d390: function(n, e, o) {
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = null, t = {
                data: function() {
                    return {
                        openscan: !0
                    };
                },
                methods: {},
                onLoad: function() {},
                onShow: function() {
                    var e = this;
                    console.log(this.openscan), clearTimeout(o), o = setTimeout(function() {
                        e.openscan = !0;
                    }, 1e4), this.openscan && (this.openscan = !1, console.log("onShow", this.openscan), 
                    n.scanCode({
                        complete: function(o) {
                            console.log(o), -1 != o.errMsg.indexOf("ok") ? (getApp().globalData.qrcode = encodeURIComponent(o.result), 
                            n.redirectTo({
                                url: "/pages/scan/scan?q=" + encodeURIComponent(o.result) + "&innerScan=Y",
                                complete: function(n) {
                                    console.log("跳转前回调", n), e.openscan = !0;
                                }
                            })) : (setTimeout(function() {
                                e.openscan = !0;
                            }, 100), n.switchTab({
                                url: "/pages/index/index"
                            }));
                        }
                    }));
                },
                onHide: function() {
                    clearTimeout(o);
                },
                onUnload: function() {
                    clearTimeout(o);
                }
            };
            e.default = t;
        }).call(this, o("543d").default);
    }
}, [ [ "1c5e", "common/runtime", "common/vendor" ] ] ]);