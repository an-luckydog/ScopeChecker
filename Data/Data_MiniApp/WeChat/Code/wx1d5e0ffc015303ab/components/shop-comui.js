(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/shop-comui" ], {
    "3bbe": function(n, o, t) {
        t.d(o, "b", function() {
            return e;
        }), t.d(o, "c", function() {
            return a;
        }), t.d(o, "a", function() {});
        var e = function() {
            var n = this, o = (n.$createElement, n._self._c, n.__map(n.shopLists, function(o, t) {
                return {
                    $orig: n.__get_orig(o),
                    g0: o.goodsUrl.split(","),
                    m0: 1 == o.halfPriceType ? parseFloat(o.discount) : null,
                    f0: 0 != o.realPay ? n._f("toThousands")(n._f("keepTwoNum")(o.realPay / 100)) : null,
                    f1: 0 != o.realVpoints ? n._f("toThousands")(o.realVpoints) : null
                };
            }));
            n.$mp.data = Object.assign({}, {
                $root: {
                    l0: o
                }
            });
        }, a = [];
    },
    ad03: function(n, o, t) {},
    bd05: function(n, o, t) {
        t.r(o);
        var e = t("3bbe"), a = t("d4b2");
        for (var i in a) [ "default" ].indexOf(i) < 0 && function(n) {
            t.d(o, n, function() {
                return a[n];
            });
        }(i);
        t("e8a2");
        var l = t("f0c5"), s = Object(l.a)(a.default, e.b, e.c, !1, null, "e7d03128", null, !1, e.a, void 0);
        o.default = s.exports;
    },
    c58a: function(n, o, t) {
        (function(n) {
            var e = t("4ea4");
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0;
            var a = e(t("2eee")), i = e(t("c973")), l = t("0488"), s = {
                components: {
                    timeCount: function() {
                        t.e("components/timeCount").then(function() {
                            return resolve(t("556b"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                data: function() {
                    return {
                        qpImgUrl: l.qpImgUrl,
                        goodsImgRoot: l.config.goodsImgRoot,
                        actList: [ {
                            url: l.qpImgUrl + "index/shili1.png"
                        }, {
                            url: l.qpImgUrl + "index/shili1.png"
                        }, {
                            url: l.qpImgUrl + "index/shili3.png"
                        }, {
                            url: l.qpImgUrl + "index/shili3.png"
                        } ]
                    };
                },
                props: {
                    shopLists: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    source: {
                        type: String,
                        default: ""
                    }
                },
                computed: {},
                watch: {
                    shopLists: function() {
                        console.log("this.shopLists"), console.log(this.shopLists), this.shopLists.forEach(function(n) {
                            console.log(n.secKill), "0" == n.secKill && (console.log(n), n.hou = "2", n.min = "2", 
                            n.sec = "2");
                        });
                    }
                },
                created: function() {},
                methods: {
                    toGoodsDetail: function(o, t) {
                        0 == t ? n.navigateTo({
                            url: "/pagesMall/mall/goodsDetailZunXiang?id=" + o + "&type=" + this.categoryParent
                        }) : n.navigateTo({
                            url: "/pagesMall/mall/goodsDetail?id=" + o + "&type=" + this.categoryParent
                        });
                    },
                    addSku: function(n, o, t) {
                        var e = this;
                        return (0, i.default)(a.default.mark(function i() {
                            return a.default.wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                  case 0:
                                    e.$emit("addSku", n, o, t);

                                  case 1:
                                  case "end":
                                    return a.stop();
                                }
                            }, i);
                        }))();
                    }
                }
            };
            o.default = s;
        }).call(this, t("543d").default);
    },
    d4b2: function(n, o, t) {
        t.r(o);
        var e = t("c58a"), a = t.n(e);
        for (var i in e) [ "default" ].indexOf(i) < 0 && function(n) {
            t.d(o, n, function() {
                return e[n];
            });
        }(i);
        o.default = a.a;
    },
    e8a2: function(n, o, t) {
        var e = t("ad03");
        t.n(e).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/shop-comui-create-component", {
    "components/shop-comui-create-component": function(n, o, t) {
        t("543d").createComponent(t("bd05"));
    }
}, [ [ "components/shop-comui-create-component" ] ] ]);