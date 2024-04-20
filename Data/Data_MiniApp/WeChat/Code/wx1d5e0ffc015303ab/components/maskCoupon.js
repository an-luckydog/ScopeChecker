(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/maskCoupon" ], {
    "546b": function(o, t, e) {
        (function(o) {
            var n = e("4ea4");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(e("278c")), l = e("0488"), u = {
                data: function() {
                    return {
                        imgUrl: getApp().globalData.imgUrl + "/hb2020/coupon/",
                        requestUrl: l.config.requestUrl,
                        couponDetail: {},
                        isShowCoupon: !1,
                        couponGoodsTypeName: ""
                    };
                },
                props: {
                    couponNo: {
                        type: String,
                        default: ""
                    }
                },
                watch: {
                    couponNo: function(o, t) {
                        o ? (console.log("请求接口"), this.ticketCenter()) : this.isShowCoupon = !1;
                    }
                },
                methods: {
                    butHandle: function(o) {
                        console.log(o), 0 == o ? (console.log("调用领取接口"), this.lingquTick()) : 1 == o && (console.log("跳转"), 
                        this.toUse(), this.isShowCoupon = !1);
                    },
                    toUse: function() {
                        var t = this.couponDetail.couponGoodsType;
                        0 == t ? o.switchTab({
                            url: "/pagesMall/mall/mall"
                        }) : 1 == t ? o.navigateTo({
                            url: "/pagesMall/mall/goodsDetail?id=" + this.couponDetail.goodsId
                        }) : 2 != t && 3 != t || o.switchTab({
                            url: "/pagesMall/mall/mall"
                        });
                    },
                    ticketCenter: function() {
                        var t = this;
                        o.showLoading({
                            title: "加载中"
                        }), o.request({
                            url: this.requestUrl + "/vpoints/coupon/couponCenter",
                            method: "POST",
                            data: {
                                goodsId: "",
                                couponNo: this.couponNo,
                                openid: getApp().globalData.openid,
                                projectServerName: "hebei"
                            }
                        }).then(function(e) {
                            o.hideLoading(), console.log(e);
                            var n = (0, a.default)(e, 2), l = n[0], u = n[1];
                            u ? 0 == u.data.result.code && 0 == u.data.result.businessCode && t.couponResult(u.data.reply.otherCouponLst[0]) : console.log(l);
                        });
                    },
                    lingquTick: function() {
                        var t = this;
                        o.showLoading({
                            title: "领取中..."
                        }), o.request({
                            url: this.requestUrl + "/vpoints/coupon/receiveCoupon",
                            method: "POST",
                            data: {
                                openid: getApp().globalData.openid,
                                couponKey: this.couponDetail.couponKey,
                                longitude: getApp().globalData.longitude ? getApp().globalData.longitude : "",
                                latitude: getApp().globalData.latitude ? getApp().globalData.latitude : "",
                                projectServerName: "hebei"
                            }
                        }).then(function(e) {
                            o.hideLoading(), console.log(e);
                            var n = (0, a.default)(e, 2), l = n[0], u = n[1];
                            u ? 0 == u.data.result.code && 0 == u.data.result.businessCode ? (t.notice(), o.showToast({
                                icon: "none",
                                title: "领取成功，快去使用吧~",
                                duration: 2e3
                            }), t.isShowCoupon = !1) : o.showModal({
                                title: "提示",
                                content: u.data.result.msg
                            }) : console.log(l);
                        });
                    },
                    notice: function() {
                        o.requestSubscribeMessage({
                            tmplIds: [ "Xr2dsLhxjooO8glZK7vU0zvlay6BVYG1Lr4DyA4adP0" ],
                            complete: function(o) {
                                console.log(o);
                            }
                        });
                    },
                    couponResult: function(o) {
                        o ? (this.couponDetail = o, this.isShowCoupon = !0) : this.isShowCoupon = !1;
                    }
                }
            };
            t.default = u;
        }).call(this, e("543d").default);
    },
    "5d8a": function(o, t, e) {
        e.r(t);
        var n = e("546b"), a = e.n(n);
        for (var l in n) [ "default" ].indexOf(l) < 0 && function(o) {
            e.d(t, o, function() {
                return n[o];
            });
        }(l);
        t.default = a.a;
    },
    adf4: function(o, t, e) {},
    b4f9: function(o, t, e) {
        e.d(t, "b", function() {
            return n;
        }), e.d(t, "c", function() {
            return a;
        }), e.d(t, "a", function() {});
        var n = function() {
            var o = this, t = (o.$createElement, o._self._c, o.isShowCoupon ? o.couponDetail.startDateForShow.replace(/-/g, ".") : null), e = o.isShowCoupon ? o.couponDetail.endDateForShow.replace(/-/g, ".") : null;
            o._isMounted || (o.e0 = function(t) {
                o.isShowCoupon = !1;
            }), o.$mp.data = Object.assign({}, {
                $root: {
                    g0: t,
                    g1: e
                }
            });
        }, a = [];
    },
    bc591: function(o, t, e) {
        var n = e("adf4");
        e.n(n).a;
    },
    d684: function(o, t, e) {
        e.r(t);
        var n = e("b4f9"), a = e("5d8a");
        for (var l in a) [ "default" ].indexOf(l) < 0 && function(o) {
            e.d(t, o, function() {
                return a[o];
            });
        }(l);
        e("bc591");
        var u = e("f0c5"), i = Object(u.a)(a.default, n.b, n.c, !1, null, "1cc05a6b", null, !1, n.a, void 0);
        t.default = i.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/maskCoupon-create-component", {
    "components/maskCoupon-create-component": function(o, t, e) {
        e("543d").createComponent(e("d684"));
    }
}, [ [ "components/maskCoupon-create-component" ] ] ]);