(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/activitys/worldcupIndex" ], {
    "182d": function(e, t, n) {},
    "23fe": function(e, t, n) {
        (function(e, t) {
            var a = n("4ea4");
            n("a7b2"), a(n("66fd"));
            var i = a(n("66fe8"));
            e.__webpack_require_UNI_MP_PLUGIN__ = n, t(i.default);
        }).call(this, n("bc2e").default, n("543d").createPage);
    },
    "28df": function(e, t, n) {
        var a = n("89cc");
        n.n(a).a;
    },
    "5ba3": function(e, t, n) {
        (function(e) {
            var a = n("4ea4");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n("2eee")), o = a(n("c973")), c = n("0488"), r = n("8921"), u = n("9b31"), s = (n("c55f"), 
            {
                data: function() {
                    return {
                        imgUrl: c.config.imgWorldCup,
                        total: "",
                        showPrivacy: !1,
                        showToast: !1,
                        canJoinAct: !1,
                        canJoinShare: !1,
                        isShowPrivacy: !1
                    };
                },
                onLoad: function(e) {},
                onShareAppMessage: function() {
                    return {
                        path: "pages/index/index",
                        imageUrl: this.imgUrl + "share-common.png",
                        title: "为热爱举杯"
                    };
                },
                onShow: function() {
                    var e = this;
                    return (0, o.default)(i.default.mark(function t() {
                        return i.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                e.init(), e.isShowPrivacy = !1, setTimeout(function() {
                                    e.isShowPrivacy = !0;
                                }, 100);

                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                methods: {
                    queryMsgH: function() {
                        return new Promise(function(t, n) {
                            e.createSelectorQuery().selectAll("#canvas-disc-init").boundingClientRect(function(e) {
                                t({
                                    width: e[0].width,
                                    height: e[0].height
                                });
                            }).exec();
                        });
                    },
                    queryAllGiftsList: function() {
                        var t = this;
                        (0, u.requestPost)("/gifts/queryAllGiftsList", {
                            currentPage: 1,
                            count: 10
                        }).then(function(n) {
                            0 == n.result.code && 0 == n.result.businessCode ? (t.total = n.reply.total, getApp().globalData.haveTel = n.reply.phonenum) : e.showModal({
                                title: "扫码记录提示",
                                content: n.result.msg,
                                showCancel: !1
                            });
                        }).catch(function(e) {});
                    },
                    init: function() {
                        var e = this;
                        return (0, o.default)(i.default.mark(function t() {
                            return i.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, (0, r.getGHOpenid)();

                                  case 2:
                                    t.sent && (e.queryAllGiftsList(), e.queryActive(), e.queryDetails());

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    readPrivacy: function() {
                        this.showPrivacy = !1;
                    },
                    tomall: function() {
                        if ("U2" == getApp().globalData.provinceCode) {
                            var t = getApp().globalData.projectServerName, n = "pages/checkProvince/checkProvince?jumpUrl=/pages/index/index&jumpUrlType=1&projectServerName=".concat(t);
                            e.navigateToMiniProgram({
                                appId: "wx1848455ef1f030ab",
                                path: n,
                                extraData: {},
                                success: function(e) {}
                            });
                        } else e.navigateTo({
                            url: "/pages_worldcup/tomall"
                        });
                    },
                    toGame: function() {
                        e.navigateTo({
                            url: "/pages_worldcup/game"
                        });
                    },
                    toOther: function() {
                        e.navigateTo({
                            url: "/pages_other/index"
                        });
                    },
                    toLadder: function() {
                        this.canJoinAct ? (e.showLoading({
                            mask: !0
                        }), e.requestSubscribeMessage({
                            tmplIds: [ "yC8abGZlMBNxaIFCMWV6qdAdb7rA3q_y1ucgq-iAZg4" ],
                            complete: function() {
                                e.hideLoading(), e.navigateTo({
                                    url: "/pages_worldcup/ladder"
                                });
                            }
                        }), setTimeout(function() {
                            e.hideLoading();
                        }, 1e3)) : e.switchTab({
                            url: "/pages/scan/scan"
                        });
                    },
                    toShare: function() {
                        this.canJoinShare ? (e.showLoading({
                            mask: !0
                        }), e.requestSubscribeMessage({
                            tmplIds: [ "Wuh5Vdbx9Sh7pBqHyTr9CNznKzcHDzzRJMULsK4_iC8", "ZNTYODnACK89WaTqxI_ZWgXneud1YSUE39Qilnj-zuA" ],
                            complete: function(t) {
                                e.hideLoading(), console.log("requestSubscribeMessage", t), e.navigateTo({
                                    url: "/pages_worldcup/sharecash"
                                });
                            }
                        }), setTimeout(function() {
                            e.hideLoading();
                        }, 1e3)) : this.showToast = !0;
                    },
                    queryActive: function() {
                        var e = this;
                        (0, u.requestPost)("/bottleCap/checkBottleCapActivityInfo", {}).then(function(t) {
                            0 == t.result.code && 0 == t.result.businessCode ? e.canJoinAct = !0 : e.canJoinAct = !1;
                        }).catch(function(t) {
                            e.canJoinAct = !1;
                        });
                    },
                    queryDetails: function() {
                        var e = this;
                        (0, u.requestPost)("/activatePrizeRecord/queryDetails", {}).then(function(t) {
                            0 == t.result.code && 0 == t.result.businessCode && 1 == t.reply.switchFission ? e.canJoinShare = !0 : e.canJoinShare = !1;
                        }).catch(function(t) {
                            e.canJoinShare = !1;
                        });
                    }
                }
            });
            t.default = s;
        }).call(this, n("543d").default);
    },
    "5c49": function(e, t, n) {
        var a = n("182d");
        n.n(a).a;
    },
    "66fe8": function(e, t, n) {
        n.r(t);
        var a = n("8064"), i = n("6abd");
        for (var o in i) [ "default" ].indexOf(o) < 0 && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(o);
        n("5c49"), n("28df");
        var c = n("f0c5"), r = Object(c.a)(i.default, a.b, a.c, !1, null, "1202843c", null, !1, a.a, void 0);
        t.default = r.exports;
    },
    "6abd": function(e, t, n) {
        n.r(t);
        var a = n("5ba3"), i = n.n(a);
        for (var o in a) [ "default" ].indexOf(o) < 0 && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        t.default = i.a;
    },
    8064: function(e, t, n) {
        n.d(t, "b", function() {
            return i;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {
            return a;
        });
        var a = {
            privacy: function() {
                return Promise.all([ n.e("common/vendor"), n.e("components/privacy/privacy") ]).then(n.bind(null, "fc8e"));
            }
        }, i = function() {
            var e = this;
            e.$createElement;
            e._self._c, e._isMounted || (e.e0 = function(t) {
                e.showToast = !1;
            }, e.e1 = function(e) {
                this.isShowPrivacy = !1;
            });
        }, o = [];
    },
    "89cc": function(e, t, n) {}
}, [ [ "23fe", "common/runtime", "common/vendor" ] ] ]);