(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/brandActs/story/story" ], {
    "1a9e": function(e, n, t) {
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var t = {
                data: function() {
                    return {
                        imgUrl: getApp().globalData.imgUrl
                    };
                },
                onShareAppMessage: function() {
                    return {
                        title: "青岛啤酒乐享河北",
                        path: "/pages/index/index"
                    };
                },
                methods: {
                    toStory: function(n) {
                        e.navigateTo({
                            url: "./storyDetails/storyDetails?type=" + n
                        });
                    }
                }
            };
            n.default = t;
        }).call(this, t("543d").default);
    },
    "24e6": function(e, n, t) {
        (function(e, n) {
            var a = t("4ea4");
            t("a7b2"), a(t("66fd"));
            var o = a(t("5f00"));
            e.__webpack_require_UNI_MP_PLUGIN__ = t, n(o.default);
        }).call(this, t("bc2e").default, t("543d").createPage);
    },
    "5f00": function(e, n, t) {
        t.r(n);
        var a = t("b20e"), o = t("925f");
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(r);
        t("62e3");
        var u = t("f0c5"), f = Object(u.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = f.exports;
    },
    "62e3": function(e, n, t) {
        var a = t("ee6f");
        t.n(a).a;
    },
    "925f": function(e, n, t) {
        t.r(n);
        var a = t("1a9e"), o = t.n(a);
        for (var r in a) [ "default" ].indexOf(r) < 0 && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(r);
        n.default = o.a;
    },
    b20e: function(e, n, t) {
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
    ee6f: function(e, n, t) {}
}, [ [ "24e6", "common/runtime", "common/vendor" ] ] ]);