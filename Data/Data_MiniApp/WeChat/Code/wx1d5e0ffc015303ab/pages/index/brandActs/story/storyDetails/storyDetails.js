(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/brandActs/story/storyDetails/storyDetails" ], {
    "6c14": function(n, t, e) {
        e.d(t, "b", function() {
            return a;
        }), e.d(t, "c", function() {
            return i;
        }), e.d(t, "a", function() {});
        var a = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    },
    "6f89": function(n, t, e) {
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var e = {
                data: function() {
                    return {
                        imgUrl: getApp().globalData.imgUrl,
                        storyPic: "",
                        loadEnd: !1
                    };
                },
                onLoad: function(t) {
                    n.showLoading({
                        title: "加载中"
                    }), this.storyPic = "/hb2020/details_" + t.type + ".jpg";
                },
                onShareAppMessage: function() {
                    return {
                        title: "青岛啤酒乐享河北",
                        path: "/pages/index/index"
                    };
                },
                methods: {
                    imgLoad: function(t) {
                        n.hideLoading(), this.loadEnd = !0;
                    }
                }
            };
            t.default = e;
        }).call(this, e("543d").default);
    },
    d80d: function(n, t, e) {
        e.r(t);
        var a = e("6f89"), i = e.n(a);
        for (var o in a) [ "default" ].indexOf(o) < 0 && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(o);
        t.default = i.a;
    },
    e011: function(n, t, e) {
        e.r(t);
        var a = e("6c14"), i = e("d80d");
        for (var o in i) [ "default" ].indexOf(o) < 0 && function(n) {
            e.d(t, n, function() {
                return i[n];
            });
        }(o);
        e("eb98");
        var u = e("f0c5"), d = Object(u.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = d.exports;
    },
    eab1: function(n, t, e) {
        (function(n, t) {
            var a = e("4ea4");
            e("a7b2"), a(e("66fd"));
            var i = a(e("e011"));
            n.__webpack_require_UNI_MP_PLUGIN__ = e, t(i.default);
        }).call(this, e("bc2e").default, e("543d").createPage);
    },
    eb98: function(n, t, e) {
        var a = e("ff48");
        e.n(a).a;
    },
    ff48: function(n, t, e) {}
}, [ [ "eab1", "common/runtime", "common/vendor" ] ] ]);