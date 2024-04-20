(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/indexCom/indexACTList" ], {
    "0139": function(n, t, o) {
        o.r(t);
        var e = o("b0e7"), i = o.n(e);
        for (var a in e) [ "default" ].indexOf(a) < 0 && function(n) {
            o.d(t, n, function() {
                return e[n];
            });
        }(a);
        t.default = i.a;
    },
    "7de5": function(n, t, o) {
        var e = o("85d6");
        o.n(e).a;
    },
    "85d6": function(n, t, o) {},
    8853: function(n, t, o) {
        o.d(t, "b", function() {
            return e;
        }), o.d(t, "c", function() {
            return i;
        }), o.d(t, "a", function() {});
        var e = function() {
            var n = this, t = (n.$createElement, n._self._c, n.__map(n.actList, function(t, o) {
                return {
                    $orig: n.__get_orig(t),
                    m0: 1 == t.halfPriceType ? parseFloat(t.discount) : null,
                    g0: 1 == t.isGiftCard ? t.goodsActivityUrl.split(",") : null,
                    g1: 1 != t.isGiftCard ? t.goodsActivityUrl.split(",") : null
                };
            }));
            n.$mp.data = Object.assign({}, {
                $root: {
                    l0: t
                }
            });
        }, i = [];
    },
    b0e7: function(n, t, o) {
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var e = o("0488"), i = {
                name: "indexMiaoshaList",
                props: {
                    actList: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    }
                },
                data: function() {
                    return {
                        imgUrl: getApp().globalData.imgUrl,
                        goodsImgRoot: e.config.goodsImgRoot,
                        qpImgUrl: e.qpImgUrl
                    };
                },
                methods: {
                    toKillDetail: function(t, o) {
                        console.log("------------goodsId------------"), console.log(t), n.navigateTo({
                            url: "/pagesMall/mall/goodsDetail?id=" + t
                        });
                    }
                }
            };
            t.default = i;
        }).call(this, o("543d").default);
    },
    d8fd: function(n, t, o) {
        o.r(t);
        var e = o("8853"), i = o("0139");
        for (var a in i) [ "default" ].indexOf(a) < 0 && function(n) {
            o.d(t, n, function() {
                return i[n];
            });
        }(a);
        o("7de5");
        var l = o("f0c5"), c = Object(l.a)(i.default, e.b, e.c, !1, null, "a9df2c9a", null, !1, e.a, void 0);
        t.default = c.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/indexCom/indexACTList-create-component", {
    "components/indexCom/indexACTList-create-component": function(n, t, o) {
        o("543d").createComponent(o("d8fd"));
    }
}, [ [ "components/indexCom/indexACTList-create-component" ] ] ]);