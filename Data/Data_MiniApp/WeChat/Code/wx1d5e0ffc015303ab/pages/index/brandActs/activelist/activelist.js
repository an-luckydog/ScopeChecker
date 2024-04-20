(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/brandActs/activelist/activelist" ], {
    "0639": function(a, t, n) {
        n.r(t);
        var e = n("fdbb"), l = n("5115");
        for (var i in l) [ "default" ].indexOf(i) < 0 && function(a) {
            n.d(t, a, function() {
                return l[a];
            });
        }(i);
        n("ba93");
        var r = n("f0c5"), u = Object(r.a)(l.default, e.b, e.c, !1, null, "5d01d306", null, !1, e.a, void 0);
        t.default = u.exports;
    },
    2914: function(a, t, n) {
        (function(a, t) {
            var e = n("4ea4");
            n("a7b2"), e(n("66fd"));
            var l = e(n("0639"));
            a.__webpack_require_UNI_MP_PLUGIN__ = n, t(l.default);
        }).call(this, n("bc2e").default, n("543d").createPage);
    },
    "4d5f": function(a, t, n) {
        (function(a) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                data: function() {
                    return {
                        imgUrl: getApp().globalData.imgUrl,
                        activeList: [ {
                            url: getApp().globalData.imgUrl + "/hb2020/active12022.png",
                            flag: "spring"
                        }, {
                            url: getApp().globalData.imgUrl + "/hb2020/2.0/active2.png",
                            flag: "8"
                        }, {
                            url: getApp().globalData.imgUrl + "/hb2020/2.0/active31-2023.png",
                            flag: "active31-2023"
                        }, {
                            url: getApp().globalData.imgUrl + "/hb2020/2.0/active3-2023.png",
                            flag: "2020"
                        }, {
                            url: getApp().globalData.imgUrl + "/hb2020/activeLaoshan2023.png",
                            flag: "laoshan2023"
                        } ]
                    };
                },
                onShareAppMessage: function() {
                    return {
                        title: "青岛啤酒乐享河北",
                        path: "/pages/index/index"
                    };
                },
                methods: {
                    toRule: function(t) {
                        a.navigateTo({
                            url: "/pages/index/brandActs/rule/rule?type=" + t
                        });
                    }
                }
            };
            t.default = n;
        }).call(this, n("543d").default);
    },
    5115: function(a, t, n) {
        n.r(t);
        var e = n("4d5f"), l = n.n(e);
        for (var i in e) [ "default" ].indexOf(i) < 0 && function(a) {
            n.d(t, a, function() {
                return e[a];
            });
        }(i);
        t.default = l.a;
    },
    ba93: function(a, t, n) {
        var e = n("fc5d");
        n.n(e).a;
    },
    fc5d: function(a, t, n) {},
    fdbb: function(a, t, n) {
        n.d(t, "b", function() {
            return e;
        }), n.d(t, "c", function() {
            return l;
        }), n.d(t, "a", function() {});
        var e = function() {
            this.$createElement;
            this._self._c;
        }, l = [];
    }
}, [ [ "2914", "common/runtime", "common/vendor" ] ] ]);