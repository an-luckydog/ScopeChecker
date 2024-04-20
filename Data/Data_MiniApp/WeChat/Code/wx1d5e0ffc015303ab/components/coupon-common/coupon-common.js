(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/coupon-common/coupon-common" ], {
    "22e4": function(n, o, e) {},
    2822: function(n, o, e) {
        (function(n) {
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0;
            var t = e("0488"), c = {
                name: "couponCommon",
                props: {
                    goodsInfo: {
                        type: Object,
                        default: {}
                    }
                },
                components: {
                    coupon: function() {
                        e.e("components/coupon/coupon").then(function() {
                            return resolve(e("ea48"));
                        }.bind(null, e)).catch(e.oe);
                    }
                },
                data: function() {
                    return {
                        goodsImgRoot: t.config.goodsImgRoot,
                        img120Th: t.config.img120Th
                    };
                },
                mounted: function() {},
                methods: {
                    handleOpen: function() {
                        this.$refs.coupon_pup.open("center");
                    },
                    handleClosePop: function() {
                        this.$refs.coupon_pup.close();
                    },
                    handleGoRed: function() {
                        this.handleClosePop(), n.navigateTo({
                            url: "/pages_center/details"
                        });
                    },
                    handleGoBtn: function() {
                        var o = "", e = this.goodsInfo.diyPrizeType;
                        2 == e || 3 == e ? o = "/pages/personal/personal" : 6 == e && (o = "/pagesMall/getCoupon/myCoupon"), 
                        this.handleClosePop(), o && (2 == e ? n.switchTab({
                            url: o
                        }) : n.navigateTo({
                            url: o
                        }));
                    }
                },
                computed: {
                    btnText: function() {
                        return 4 == this.goodsInfo.diyPrizeType ? "开心收下" : "立即使用";
                    }
                }
            };
            o.default = c;
        }).call(this, e("543d").default);
    },
    "4d4f": function(n, o, e) {
        e.d(o, "b", function() {
            return c;
        }), e.d(o, "c", function() {
            return u;
        }), e.d(o, "a", function() {
            return t;
        });
        var t = {
            uniPopup: function() {
                return e.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(e.bind(null, "0dae"));
            },
            coupon: function() {
                return e.e("components/coupon/coupon").then(e.bind(null, "ea48"));
            }
        }, c = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
    },
    "4f3f": function(n, o, e) {
        e.r(o);
        var t = e("4d4f"), c = e("942a");
        for (var u in c) [ "default" ].indexOf(u) < 0 && function(n) {
            e.d(o, n, function() {
                return c[n];
            });
        }(u);
        e("c4ef");
        var p = e("f0c5"), a = Object(p.a)(c.default, t.b, t.c, !1, null, "5340ce92", null, !1, t.a, void 0);
        o.default = a.exports;
    },
    "942a": function(n, o, e) {
        e.r(o);
        var t = e("2822"), c = e.n(t);
        for (var u in t) [ "default" ].indexOf(u) < 0 && function(n) {
            e.d(o, n, function() {
                return t[n];
            });
        }(u);
        o.default = c.a;
    },
    c4ef: function(n, o, e) {
        var t = e("22e4");
        e.n(t).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/coupon-common/coupon-common-create-component", {
    "components/coupon-common/coupon-common-create-component": function(n, o, e) {
        e("543d").createComponent(e("4f3f"));
    }
}, [ [ "components/coupon-common/coupon-common-create-component" ] ] ]);