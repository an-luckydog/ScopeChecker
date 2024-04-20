(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/brandActs/delicious/delicious" ], {
    "042c": function(n, e, t) {},
    4392: function(n, e, t) {
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
    "62df": function(n, e, t) {
        (function(n, e) {
            var a = t("4ea4");
            t("a7b2"), a(t("66fd"));
            var i = a(t("9e57"));
            n.__webpack_require_UNI_MP_PLUGIN__ = t, e(i.default);
        }).call(this, t("bc2e").default, t("543d").createPage);
    },
    7651: function(n, e, t) {
        var a = t("042c");
        t.n(a).a;
    },
    "851d": function(n, e, t) {
        t.r(e);
        var a = t("ce22"), i = t.n(a);
        for (var u in a) [ "default" ].indexOf(u) < 0 && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(u);
        e.default = i.a;
    },
    "9e57": function(n, e, t) {
        t.r(e);
        var a = t("4392"), i = t("851d");
        for (var u in i) [ "default" ].indexOf(u) < 0 && function(n) {
            t.d(e, n, function() {
                return i[n];
            });
        }(u);
        t("7651");
        var c = t("f0c5"), o = Object(c.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = o.exports;
    },
    ce22: function(n, e, t) {
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var t = {
                data: function() {
                    return {
                        imgUrl: getApp().globalData.imgUrl,
                        list: [ "6道工序铸就「神仙锅底」，不蘸料也能更“有料”！", "3年500家，凌晨2点还在排队的 「串界」大佬 ！", "城市深处的「田野小院儿」治愈系 神店竟然Made IN 东北？", "从植物园到万象城，出道10年冀菜 “老炮儿”还没过气，你得追着吃！", "东北「硬菜」收割机，多少人为 这一口热锅上了头？", "火锅也泼墨？一锅铸起城市中的 江湖侠义！", "三顾【茅庐】都不过瘾？高Bigger 的地道川菜，每天都想续一次！", "石门之光  深入4060公里的西藏墨 脱，石锅松茸鸡一口太有“料”！", "网络爆款美食，让你的夏日充满无 限“鸡”情！" ]
                    };
                },
                onShareAppMessage: function() {
                    return {
                        title: "青岛啤酒乐享河北",
                        path: "/pages/index/index"
                    };
                },
                methods: {
                    toDetails: function(e) {
                        n.navigateTo({
                            url: "./details?id=" + e
                        });
                    }
                }
            };
            e.default = t;
        }).call(this, t("543d").default);
    }
}, [ [ "62df", "common/runtime", "common/vendor" ] ] ]);