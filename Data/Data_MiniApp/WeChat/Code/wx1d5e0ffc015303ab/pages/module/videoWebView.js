(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/module/videoWebView" ], {
    "0b96": function(e, n, t) {
        t.r(n);
        var a = t("66fe"), o = t("761c");
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(i);
        t("dacb");
        var c = t("f0c5"), f = Object(c.a)(o.default, a.b, a.c, !1, null, "482ac7b1", null, !1, a.a, void 0);
        n.default = f.exports;
    },
    2929: function(e, n, t) {},
    "66fe": function(e, n, t) {
        t.d(n, "b", function() {
            return a;
        }), t.d(n, "c", function() {
            return o;
        }), t.d(n, "a", function() {});
        var a = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    "761c": function(e, n, t) {
        t.r(n);
        var a = t("fb83"), o = t.n(a);
        for (var i in a) [ "default" ].indexOf(i) < 0 && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(i);
        n.default = o.a;
    },
    aef6: function(e, n, t) {
        (function(e, n) {
            var a = t("4ea4");
            t("a7b2"), a(t("66fd"));
            var o = a(t("0b96"));
            e.__webpack_require_UNI_MP_PLUGIN__ = t, n(o.default);
        }).call(this, t("bc2e").default, t("543d").createPage);
    },
    dacb: function(e, n, t) {
        var a = t("2929");
        t.n(a).a;
    },
    fb83: function(e, n, t) {
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var t = {
                data: function() {
                    return {
                        backImg: "https://xcxsite.vjifen.com/v/static/changchengjiuhao/icon_back.png",
                        safeAreaTop: getApp().globalData.safeAreaTop ? getApp().globalData.safeAreaTop + "px" : "64rpx",
                        videoUrl: "",
                        videoContext: null,
                        videoplay: !1
                    };
                },
                onLoad: function(e) {
                    this.videoUrl = e.videoUrl;
                },
                onReady: function() {
                    this.videoContext = e.createVideoContext("myvideo", this);
                },
                methods: {
                    screenChange: function(e) {
                        var n = e.detail.fullScreen;
                        console.log(e, "qweeee========================================"), n || (this.videoplay = !1);
                    },
                    play: function() {
                        this.videoContext.play(), this.videoplay = !0;
                    },
                    showDefinitionOption: function() {
                        e.navigateBack({
                            delta: 1
                        });
                    }
                }
            };
            n.default = t;
        }).call(this, t("543d").default);
    }
}, [ [ "aef6", "common/runtime", "common/vendor" ] ] ]);