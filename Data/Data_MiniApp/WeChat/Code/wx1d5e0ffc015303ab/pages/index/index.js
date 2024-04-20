(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/index" ], {
    3197: function(e, n, t) {
        (function(e) {
            var o = t("4ea4");
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = o(t("2eee")), a = o(t("c973")), i = o(t("9523")), c = t("0488"), s = (t("4514"), 
            t("9b31")), u = t("8921"), l = o(t("8ea76")), f = t("c703"), p = (t("46db"), t("9005")), d = t("b9d5"), v = t("3d25"), g = o(t("2a18"));
            function m(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    n && (o = o.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable;
                    })), t.push.apply(t, o);
                }
                return t;
            }
            function h(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? m(Object(t), !0).forEach(function(n) {
                        (0, i.default)(e, n, t[n]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                    });
                }
                return e;
            }
            var b = !0, y = {
                mixins: [ l.default, g.default ],
                components: {
                    progressBar: function() {
                        t.e("components/progress-bar/progress-bar").then(function() {
                            return resolve(t("8a3c"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    AdDialog: function() {
                        t.e("components/ad-dialog/ad-dialog").then(function() {
                            return resolve(t("b051"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    mainTitle: function() {
                        t.e("components/main-title/main-title").then(function() {
                            return resolve(t("c29d"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    actCom: function() {
                        t.e("components/act-com/act-com").then(function() {
                            return resolve(t("c7c5"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    shopComui: function() {
                        t.e("components/shop-comui").then(function() {
                            return resolve(t("bd05"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    appTitle: function() {
                        Promise.all([ t.e("common/vendor"), t.e("components/app-title") ]).then(function() {
                            return resolve(t("f252"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    brandAct: function() {
                        t.e("components/brand-act").then(function() {
                            return resolve(t("48c7"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    indexACTList: function() {
                        t.e("components/indexCom/indexACTList").then(function() {
                            return resolve(t("d8fd"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    maskCoupon: function() {
                        t.e("components/maskCoupon").then(function() {
                            return resolve(t("d684"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    zdmkefu: function() {
                        t.e("components/zdmkefu").then(function() {
                            return resolve(t("3b32"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    redPackMoneyScan: function() {
                        t.e("components/red-pack-scan/red-pack-scan").then(function() {
                            return resolve(t("5b03"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                data: function() {
                    return {
                        qpImgUrl: c.qpImgUrl + "index/",
                        swiperList: [],
                        userList: [],
                        canIUseGetUserProfile: !1,
                        userInfo: {},
                        shopLists: [],
                        safeAreaTop: getApp().globalData.safeAreaTop ? getApp().globalData.safeAreaTop + "px" : "64rpx",
                        actLists: [],
                        showTipWindow: !1,
                        showComfrim: !1,
                        longitude: "",
                        latitude: "",
                        provinceListArr: [],
                        vpsConsumerMemberInfo: {},
                        surplusVpoints: 0,
                        isShowPrivacy: !1,
                        isHaiProvince: !1,
                        adPic: {},
                        showDialog_index: !1,
                        actList: [],
                        bkStyle: "1",
                        couponDetail: {},
                        couponNo: "",
                        videoUrl: "",
                        videoContext: null,
                        videoplay: !1,
                        terminalInfo: "",
                        newUserStatus: "",
                        isActivation: !1,
                        waitActivation: ""
                    };
                },
                onReady: function() {
                    this.videoContext = e.createVideoContext("myvideo", this);
                },
                onLoad: function(e) {
                    var n = this;
                    if (e.projectServerName && e.drainagePopStatus && e.skuKey) {
                        var t = h({}, e);
                        this.terminalInfo = t;
                    }
                    this.setTabBarIndex(0), setTimeout(function() {
                        n.couponNo = e.couponNo;
                    }, 500), b = !0;
                },
                onHide: function() {
                    this.couponNo = "";
                },
                onShow: function() {
                    var n = this;
                    return (0, a.default)(r.default.mark(function t() {
                        var o;
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, (0, u.getXCXOpenid)();

                              case 2:
                                return t.sent, t.next = 5, (0, u.getGHOpenid)();

                              case 5:
                                o = t.sent, console.log("getApp().globalData.openid"), console.log(getApp().globalData.openid), 
                                console.log(e.getStorageSync("openid")), o && n.init();

                              case 10:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                methods: {
                    handleJumpEvent: function(n) {
                        console.log(n, "点击播放"), "video" == n.type && (this.videoUrl = n.jumpUrl || "https://xcxsite.vjifen.com/v/videos/yylx/bannerVideo.mp4", 
                        e.navigateTo({
                            url: "/pages/module/videoWebView?videoUrl=" + this.videoUrl
                        }));
                    },
                    toModifyUserInfo: function() {
                        if (!(getApp().globalData.openid || e.getStorageSync("openid").openid)) return e.showModal({
                            title: "提示",
                            content: "你还未参与过扫码活动",
                            showCancel: !1
                        });
                        e.navigateTo({
                            url: "/pages/module/userinfo"
                        });
                    },
                    checkUserLocationNewHandel: function() {
                        (0, d.checkUserLocationNew)(function(e) {});
                    },
                    init: function() {
                        var e = this;
                        return (0, a.default)(r.default.mark(function n() {
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return e.isShowPrivacy = !1, setTimeout(function() {
                                        e.isShowPrivacy = !0;
                                    }, 100), e.getSwiper(), e.getUserInfo(), e.getMemberUserInHandel(), e.getQueryMarqueeInfo(), 
                                    e.getStorageUserInfo(), n.next = 9, e.getHomePageTemplateType();

                                  case 9:
                                    e.getgoods(), e.getActivityZoneInfoHandel(), e.getAdInfoByType(), e.handleGetRedEnvelope();

                                  case 13:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getMemberUserInHandel: function() {
                        var e = this;
                        return (0, a.default)(r.default.mark(function n() {
                            var t, o, a;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, (0, f.getMemberUserInfo)();

                                  case 2:
                                    t = n.sent, o = t.reply, 0 == (a = t.result).code && 0 == a.businessCode && (e.vpsConsumerMemberInfo = o.vpsConsumerMemberInfo);

                                  case 6:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getUserInfo: function() {
                        var e = this;
                        return (0, a.default)(r.default.mark(function n() {
                            var t, o, a, i;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, (0, f.userInfo)();

                                  case 2:
                                    t = n.sent, o = t.result, a = t.reply, 0 == o.businessCode && 0 == o.code && (i = (null == a ? void 0 : a.userInfo) || {}, 
                                    e.userInfo = i, e.surplusVpoints = a.accountInfo.surplusVpoints, e.newUserStatus = a.newUserStatus);

                                  case 6:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getActivityZoneInfoHandel: function() {
                        var e = this;
                        return (0, a.default)(r.default.mark(function n() {
                            var t;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, e.getActivityZoneInfo(0);

                                  case 2:
                                    t = n.sent, e.actLists = (null == t ? void 0 : t.adPubDTOList) || [];

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getSwiper: function() {
                        var n = this;
                        console.log("getApp().globalData.projectServerName");
                        var t = getApp().globalData.projectServerName || e.getStorageSync("projectServerName");
                        console.log(t), this.querySwiperlist("1").then(function(e) {
                            var t = [];
                            e && e.forEach(function(e, n) {
                                var o = Object.assign(e, {
                                    id: n,
                                    type: -1 != e.jumpUrl.indexOf(".mp4") ? "video" : "image",
                                    url: e.picUrl,
                                    className: "home-" + (n + 1)
                                });
                                t.push(o);
                            }), console.log(t), n.swiperList = t, getApp().globalData.swiperList = t;
                        });
                    },
                    toTask: function() {
                        e.switchTab({
                            url: "/pages/activitys/task"
                        });
                    },
                    toMall: function() {
                        e.switchTab({
                            url: "/pages/mall/mall"
                        });
                    },
                    getQueryMarqueeInfo: function() {
                        var e = this;
                        return (0, a.default)(r.default.mark(function n() {
                            var t, o, a, i;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return t = {
                                        winType: "0"
                                    }, n.next = 3, (0, f.queryMarqueeInfo)(t);

                                  case 3:
                                    o = n.sent, a = o.result, i = o.reply, 0 == a.code && 0 == a.businessCode && (e.userList = i);

                                  case 7:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getStorageUserInfo: function() {
                        var n = this;
                        e.getStorage({
                            key: "userInfo",
                            success: function(e) {
                                console.log(e);
                                var t = e.data;
                                n.userInfo.avatarUrl = t.avatarUrl, n.userInfo.nickName = t.nickName, n.isHasUserInfo = !0;
                            },
                            fail: function(e) {
                                n.userInfo.avatarUrl = "", n.userInfo.nickName = "微信用户", n.isHasUserInfo = !1;
                            }
                        });
                    },
                    getHomePageTemplateType: function() {
                        var e = this;
                        return (0, a.default)(r.default.mark(function n() {
                            var t, o, a;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, (0, p.homePageTemplateType)();

                                  case 2:
                                    t = n.sent, o = t.result, a = t.reply, 0 == o.code && 0 == o.businessCode && (e.bkStyle = a.hotMoneyActivity);

                                  case 6:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getgoods: function() {
                        var n = this;
                        return (0, a.default)(r.default.mark(function t() {
                            var o, a, i, c;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return o = {
                                        youPinFlag: "1",
                                        goodShowFlag: "5"
                                    }, "hebei" == (getApp().globalData.projectServerName || e.getStorageSync("projectServerName")) && (o.exchangeChannel = "6"), 
                                    t.next = 5, (0, p.hotRecommend)(o);

                                  case 5:
                                    (a = t.sent).result, i = a.reply, c = a.replyTime, getApp().globalData.replyTime = c, 
                                    n.shopLists = i;

                                  case 11:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getAdInfoByType: function() {
                        var n = this;
                        return (0, a.default)(r.default.mark(function t() {
                            var o, a, i, c, s, u, l, p, d, g;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (b) {
                                        t.next = 2;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 2:
                                    return b = !1, o = n, a = {
                                        flag: 4
                                    }, (i = getApp().globalData.userLocation || e.getStorageSync("userLocation")) && (c = i.longitude, 
                                    s = i.latitude, a.latitude = s, a.longitude = c), t.next = 9, (0, f.adInfoByType)(a);

                                  case 9:
                                    u = t.sent, l = u.result, p = u.reply, 0 == (null == l ? void 0 : l.code) && (getApp().globalData.getIndexAd = !0, 
                                    d = v.tool.cache("adNum"), v.tool.cache("adNum", d += 1), g = p.filter(function(e) {
                                        return "" === e.popNum || e.popNum >= d;
                                    }), o.adPic = o.$refs.adaialog.handleAdPicData(g), o.showDialog_index = !0);

                                  case 13:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    openScan: function() {
                        e.navigateTo({
                            url: "/pages/scan/scan"
                        });
                    },
                    handleGetRedEnvelope: function() {
                        var e = this;
                        return new Promise(function(n, t) {
                            console.log("this.terminalInfo"), console.log(e.terminalInfo);
                            var o = h({
                                newUserStatus: e.newUserStatus
                            }, e.terminalInfo);
                            (0, s.requestPost)("/turntable/drainagePop", o).then(function(t) {
                                var o = t.result, r = t.reply;
                                0 == o.businessCode && 0 == o.code && 2 == r.pop && r.waitActivation && r.waitActivation.earnMoney ? (e.waitActivation = r.waitActivation, 
                                e.isActivation = !0) : e.isActivation = !1, n(!0);
                            }).catch(function(t) {
                                e.isActivation = !1, n(!0);
                            });
                        });
                    }
                }
            };
            n.default = y;
        }).call(this, t("543d").default);
    },
    "498c": function(e, n, t) {
        t.r(n);
        var o = t("3197"), r = t.n(o);
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(a);
        n.default = r.a;
    },
    6320: function(e, n, t) {
        t.r(n);
        var o = t("e381"), r = t("498c");
        for (var a in r) [ "default" ].indexOf(a) < 0 && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(a);
        t("88cf");
        var i = t("f0c5"), c = Object(i.a)(r.default, o.b, o.c, !1, null, "75380894", null, !1, o.a, void 0);
        n.default = c.exports;
    },
    "88cf": function(e, n, t) {
        var o = t("b652");
        t.n(o).a;
    },
    b652: function(e, n, t) {},
    ba48: function(e, n, t) {
        (function(e, n) {
            var o = t("4ea4");
            t("a7b2"), o(t("66fd"));
            var r = o(t("6320"));
            e.__webpack_require_UNI_MP_PLUGIN__ = t, n(r.default);
        }).call(this, t("bc2e").default, t("543d").createPage);
    },
    e381: function(e, n, t) {
        t.d(n, "b", function() {
            return r;
        }), t.d(n, "c", function() {
            return a;
        }), t.d(n, "a", function() {
            return o;
        });
        var o = {
            progressBar: function() {
                return t.e("components/progress-bar/progress-bar").then(t.bind(null, "8a3c"));
            },
            mainTitle: function() {
                return t.e("components/main-title/main-title").then(t.bind(null, "c29d"));
            },
            actCom: function() {
                return t.e("components/act-com/act-com").then(t.bind(null, "c7c5"));
            },
            privacy: function() {
                return Promise.all([ t.e("common/vendor"), t.e("components/privacy/privacy") ]).then(t.bind(null, "fc8e"));
            }
        }, r = function() {
            var e = this, n = (e.$createElement, e._self._c, Number(e.vpsConsumerMemberInfo.showScanBefore) || 0), t = Number(e.vpsConsumerMemberInfo.showScan) || 0, o = Number(e.vpsConsumerMemberInfo.upgradeScan) || 0, r = e.userList.length > 0 || e.actLists.length > 0, a = r ? e.userList.length : null, i = e.shopLists.length > 0 && e.bkStyle > 1, c = e.shopLists.length > 0 && 1 == e.bkStyle;
            e._isMounted || (e.e0 = function(e) {
                this.isShowPrivacy = !1;
            }, e.e1 = function(n) {
                e.isActivation = !1;
            }), e.$mp.data = Object.assign({}, {
                $root: {
                    m0: n,
                    m1: t,
                    m2: o,
                    g0: r,
                    g1: a,
                    g2: i,
                    g3: c
                }
            });
        }, a = [];
    }
}, [ [ "ba48", "common/runtime", "common/vendor" ] ] ]);