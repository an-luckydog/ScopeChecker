(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/user" ], {
    "0216": function(e, t, n) {
        (function(e) {
            n("6cdc"), a(n("66fd"));
            var t = a(n("59ea"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, e(t.default);
        }).call(this, n("543d").createPage);
    },
    "3b7d": function(e, t, n) {},
    "546e": function(e, t, n) {
        var a = n("b5f9");
        n.n(a).a;
    },
    "59ea": function(e, t, n) {
        n.r(t);
        var a = n("8a0b"), i = n("e2f5");
        for (var o in i) [ "default" ].indexOf(o) < 0 && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(o);
        n("546e"), n("ad0f");
        var r = n("f0c5"), s = Object(r.a)(i.default, a.b, a.c, !1, null, "b030337c", null, !1, a.a, void 0);
        t.default = s.exports;
    },
    "8a0b": function(e, t, n) {
        n.d(t, "b", function() {
            return i;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {
            return a;
        });
        var a = {
            uIcon: function() {
                return n.e("node-modules/uview-ui/components/u-icon/u-icon").then(n.bind(null, "f86b"));
            }
        }, i = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    ad0f: function(e, t, n) {
        var a = n("3b7d");
        n.n(a).a;
    },
    b5f9: function(e, t, n) {},
    bec4: function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                data: function() {
                    return {
                        imgUrl: this.$store.state.env.VUE_APP_RESOURCE_URL,
                        hasGoAuth: !1,
                        waitPayOrderNum: 0,
                        menu: {
                            order: [ {
                                id: "pay",
                                name: "待支付",
                                iconPath: "index/user/ic_order_pay.png",
                                pagePath: "/pages/person/order/list",
                                pageParams: {
                                    orderStatus: 1
                                }
                            }, {
                                id: "going",
                                name: "进行中",
                                iconPath: "index/user/ic_order_going.png",
                                pagePath: "/pages/person/order/list",
                                pageParams: {
                                    orderStatus: 2
                                }
                            }, {
                                id: "completed",
                                name: "已完成",
                                iconPath: "index/user/ic_order_completed.png",
                                pagePath: "/pages/person/order/list",
                                pageParams: {
                                    orderStatus: 3
                                }
                            }, {
                                id: "all",
                                name: "全部订单",
                                iconPath: "index/user/ic_order_all.png",
                                pagePath: "/pages/person/order/list",
                                pageParams: {
                                    orderStatus: 0
                                }
                            } ],
                            service: [ {
                                id: "equity",
                                name: "服务权益",
                                iconPath: "index/user/ic_service.png",
                                pagePath: "/pages/doctor/service-package/equity",
                                pageParams: {}
                            }, {
                                id: "doctor",
                                name: "我的医生",
                                iconPath: "index/user/ic_doctor.png",
                                pagePath: "/pages/doctor/my-doctor/index",
                                pageParams: {}
                            }, {
                                id: "prescription",
                                name: "医嘱记录",
                                iconPath: "index/user/ic_other_doctor_advice.png",
                                pagePath: "/pages/prescription/list/index",
                                pageParams: {}
                            }, {
                                id: "consult",
                                name: "问诊记录",
                                iconPath: "index/user/ic_consult.png",
                                pagePath: "/pages/person/consult/list",
                                pageParams: {}
                            }, {
                                id: "payment",
                                name: "缴费记录",
                                iconPath: "index/user/ic_payment.png",
                                pagePath: "/pages/payment/order/list",
                                pageParams: {}
                            }, {
                                id: "registration",
                                name: "挂号记录",
                                iconPath: "index/user/ic_registration.png",
                                pagePath: "/pages/registration/order/list",
                                pageParams: {}
                            } ],
                            more: [ {
                                id: "family",
                                name: "全部就诊人",
                                iconPath: "index/user/ic_family.png",
                                pagePath: "/pages/person/family/list",
                                pageParams: {}
                            }, {
                                id: "address",
                                name: "收货地址",
                                iconPath: "index/user/ic_address.png",
                                pagePath: "/pages/person/address/addressList",
                                pageParams: {}
                            } ]
                        },
                        textrea: "",
                        openTest: 0
                    };
                },
                computed: {
                    userInfo: function() {
                        return this.$store.state.user.userInfo;
                    },
                    mdTel: function() {
                        var e = this.userInfo.tel;
                        return e ? e.substr(0, 3) + "****" + e.substr(-4) : "";
                    }
                },
                onLoad: function() {},
                onShow: function() {
                    if (!this.$util.isLogin()) return this.hasGoAuth ? (this.hasGoAuth = !1, this.$Router.pushTab({
                        path: "/pages/index/index"
                    })) : (this.hasGoAuth = !0, this.$util.toLogin()), !1;
                    this.userInfo.tel || this.getUserInfo(), this.$util.isLogin() && this.featchWaitPayOrder();
                },
                onHide: function() {
                    this.openTest = 0;
                },
                methods: {
                    signIn: function() {
                        this.$util.toLogin();
                    },
                    getUserInfo: function() {
                        var e = this;
                        this.$util.showLoading(), this.$service.login.getAccountInfo().then(function(t) {
                            var n, a, i, o = {
                                nickName: (null === (n = t.data.userInfo) || void 0 === n ? void 0 : n.nickname) || "",
                                tel: (null === (a = t.data.userInfo) || void 0 === a ? void 0 : a.tel) || "",
                                avatar: (null === (i = t.data.userInfo) || void 0 === i ? void 0 : i.avatar) || ""
                            };
                            e.$store.dispatch("user/setUserInfo", t.data.userInfo ? o : {});
                        }).finally(function() {
                            e.$util.hideLoading();
                        });
                    },
                    featchWaitPayOrder: function() {
                        var e = this;
                        this.$service.user.getWaitPayOrderNum().then(function(t) {
                            e.waitPayOrderNum = t.data.waitPayOrderNum;
                        }).finally(function() {
                            e.$util.hideLoading();
                        });
                    },
                    goPage: function(e) {
                        this.$Router.push({
                            path: e.pagePath,
                            query: e.pageParams
                        });
                    },
                    clickFive: function() {
                        this.openTest = this.openTest + 1;
                    },
                    openSetting: function() {
                        e.openSetting();
                    },
                    logStro: function() {
                        this.textrea = "当前环境为： " + this.$store.state.env.VUE_APP_RESOURCE_URL + ", 用户accessToken: " + this.$util.cache.get("accessToken") + ", IM账号imTokenList: " + this.$util.cache.get("imTokenList");
                    },
                    editPerson: function() {
                        this.$Router.push({
                            path: "/platforms/h5/personDetail"
                        });
                    }
                }
            };
            t.default = n;
        }).call(this, n("543d").default);
    },
    e2f5: function(e, t, n) {
        n.r(t);
        var a = n("bec4"), i = n.n(a);
        for (var o in a) [ "default" ].indexOf(o) < 0 && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        t.default = i.a;
    }
}, [ [ "0216", "common/runtime", "common/vendor" ] ] ]);