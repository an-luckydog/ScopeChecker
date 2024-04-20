var e = require("../../../../b/helpers/interopRequireDefault"), t = e(require("../../../../b/regenerator")), a = require("../../../../b/helpers/asyncToGenerator"), i = e(require("../../../@limo/core/index.js")), o = require("../../../@limo/container/behaviors/index"), n = e(require("../../../../api/rmsStorage")), r = require("../menu-constants/actionItem"), s = require("../common-lib/utils"), u = require("../../../../lib/wx/app-info"), l = e(require("../../../@mtfe/rms-triangle-c/index.js")), d = require("../../../../lib/mix/util");

Component({
    behaviors: [ o.commonBehavior, o.limoShim ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        backgroundImgUrl: {
            type: String,
            value: ""
        },
        backgroundColor: {
            type: String,
            value: ""
        },
        pageTitle: {
            type: String,
            value: "欢迎点餐"
        },
        shopLogo: {
            type: String,
            value: ""
        },
        peopleCountText: {
            type: String,
            value: ""
        },
        tableName: {
            type: String,
            value: ""
        },
        headActionList: {
            type: Array,
            value: [],
            observer: function(e, t) {
                if (e !== t && Array.isArray(e)) {
                    var a = e.find(function(e) {
                        return e.type === r.ACTION_ITEM_TYPE.SEARCH;
                    }) || {};
                    e.find(function(e) {
                        return e.type === r.ACTION_ITEM_TYPE.MEMBER_COUPON;
                    }) && i.default.getLimoRuntime().sendMC && i.default.getLimoRuntime().sendMC({
                        valLab: null,
                        bid: "b_saaspay_i65ce0ox_mv",
                        options: {}
                    }), this.setData({
                        hasSearchIcon: a.showItem
                    });
                }
            }
        },
        shopId: {
            type: String,
            value: ""
        },
        tableNum: {
            type: Number
        },
        searchBannerOpacity: {
            type: Number,
            value: 0,
            observer: function(e) {
                var t = this, a = !!e;
                a !== this.data.showFixedHeader && this.setData({
                    showFixedHeader: a
                }), 1 === e ? setTimeout(function() {
                    t.setData({
                        showCouponIcon: !0
                    });
                }, 300) : 0 === e && this.setData({
                    showCouponIcon: !1
                });
            }
        },
        hideSearch: {
            type: Boolean,
            value: !1
        },
        takeawayTips: {
            type: String,
            value: "",
            observer: function() {
                this.getTopHeadTxt();
            }
        },
        multiShop: {
            type: Number,
            value: 0
        },
        progressInfo: {
            type: Object,
            value: {}
        },
        progressType: {
            type: Number,
            value: 0
        },
        isVirtualTabbar: {
            type: Boolean,
            value: !1,
            observer: function(e) {
                this.initTabPage(e);
            }
        }
    },
    data: {
        ACTION_ITEM_TYPE: r.ACTION_ITEM_TYPE,
        isH5Page: !1,
        isTT: i.default.getLimoRuntime().isByteDanceMicroApp,
        isPreviewPage: !1,
        commonHeadStyle: "",
        disableVipDiamondAnimation: !1,
        commonTitleOverflow: !1,
        topHeadTxt: "",
        showCouponIcon: !1,
        iconType: "",
        isTabPage: !1,
        peopleCount: 1
    },
    ready: function() {
        this.limoReady();
    },
    attached: function() {
        this.limoAttached();
    },
    observers: {
        "backgroundImgUrl, backgroundColor": function(e, t) {
            this.setHeaderStyle(e, t);
        }
    },
    methods: {
        limoReady: function() {
            this.setData({
                isH5Page: i.default.getLimoRuntime().isH5,
                isPreviewPage: this.isPreview
            }), this.initShopTitleFormat(), this.getTopHeadTxt();
        },
        limoAttached: function() {
            if (this.setHeaderStyle(this.data.backgroundImgUrl, this.data.backgroundColor), 
            this.isPreview || (this.setData({
                disableVipDiamondAnimation: n.default.getDisableVipDiamondAnimation()
            }), n.default.setDisableVipDiamondAnimation()), this.data.shopId) {
                var e, t, a = this.data.shopId, i = ((null == n.default || null == (e = n.default.getExtraInfo(a)) ? void 0 : e.shopConfig) || {}).fastFoodCanSelectNumOfCustomer, o = void 0 !== i && i, r = (null == (t = n.default.getPreorderInfo(a)) ? void 0 : t.peopleCount) || 1;
                o && (r = n.default.getMenuOrderPeopleCount(a) || 1), this.setData({
                    peopleCount: r,
                    fastFoodCanSelectNumOfCustomer: o
                });
            }
            var s = this.data.isVirtualTabbar, u = void 0 !== s && s;
            u || this.initTabPage(u);
        },
        getTopHeadTxt: function() {
            var e, t = this.data, a = t.pageTitle, o = t.shopLogo, n = t.takeawayTips;
            e = i.default.getLimoRuntime().isH5 || this.isPreview || !n ? n && this.isPreview ? "" : o ? "欢迎点餐" : a : "", 
            this.setData({
                topHeadTxt: e
            });
        },
        initShopTitleFormat: function() {
            var e = i.default.getLimoRuntime().isH5 ? [] : getCurrentPages(), t = this.data, a = t.pageTitle, o = t.shopLogo, n = (0, 
            s.getStrCount)(a);
            this.setData({
                iconType: e[e.length - 2] ? "back-light" : "home-light",
                commonTitleOverflow: n > 14 && !o
            });
        },
        initTabPage: function(e) {
            var t = !1;
            this.getTabBar && this.getTabBar() && (t = !!this.getTabBar()), this.setData({
                isTabPage: t || e
            });
        },
        setHeaderStyle: function(e, t) {
            var a = i.default.getLimoRuntime().getSystemInfoSync().statusBarHeight, o = void 0 === a ? 44 : a, n = 2 * o + "rpx";
            i.default.getLimoRuntime().isByteDanceMicroApp || this.isPreview ? n = "40rpx" : i.default.getLimoRuntime().isH5 ? n = "30rpx" : i.default.getLimoRuntime().isIOS && (n = o + "px");
            var r = "";
            e && (r = "background-image:url(".concat(e, ");")), t && (r = "background-color: ".concat(t, ";")), 
            this.setData({
                commonHeadStyle: "".concat(r, "; padding-top:").concat(n)
            });
        },
        onHeadIconClick: function(e) {
            var i = this;
            return a(t.default.mark(function a() {
                var o;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        o = e.currentTarget.item || e.currentTarget.dataset.item, i.headActionItemClickHandler(o);

                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, a);
            }))();
        },
        headActionItemClickHandler: function(e) {
            var o = this;
            return a(t.default.mark(function a() {
                var n, s, u, d, c, p, m;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        n = e.type, s = e.actionUrl, t.t0 = (i.default.getLimoRuntime().sendMC({
                            valLab: {
                                clickData: {
                                    type: n,
                                    actionUrl: s
                                }
                            },
                            bid: "b_saaspay_z1lp1tn0_mc",
                            options: {}
                        }), n), t.next = t.t0 === r.ACTION_ITEM_TYPE.BELLS ? 4 : t.t0 === r.ACTION_ITEM_TYPE.MEMBER_LOGIN ? 7 : t.t0 === r.ACTION_ITEM_TYPE.SEARCH ? 10 : 11;
                        break;

                      case 4:
                        return t.next = 6, o.callWaiter();

                      case 6:
                        return t.abrupt("break", 12);

                      case 7:
                        return u = l.default.parse(s), d = u.tenantId, c = u.poiId, p = u.poiType, m = u.orgId, 
                        o.showDialog("universal-login", {
                            isDialog: !0,
                            useNewAuthVersion: !0,
                            commonHeaders: {
                                tenantId: d,
                                poiId: c,
                                poiType: p,
                                orgId: m
                            },
                            agreementParams: [ {
                                sceneType: 10
                            } ],
                            useRevoke: !0,
                            revokePrefix: "universalLogin"
                        }, {
                            position: "bottom"
                        }), t.abrupt("break", 12);

                      case 10:
                        i.default.getLimoRuntime().sendMC && i.default.getLimoRuntime().sendMC({
                            valLab: null,
                            bid: "b_saaspay_vkmkhsdx_mc",
                            options: {}
                        });

                      case 11:
                        s && i.default.getLimoRuntime().navigateTo({
                            url: s
                        });

                      case 12:
                      case "end":
                        return t.stop();
                    }
                }, a);
            }))();
        },
        callWaiter: function() {
            var e = this;
            return a(t.default.mark(function o() {
                var n, r, s;
                return t.default.wrap(function(o) {
                    for (;;) switch (o.prev = o.next) {
                      case 0:
                        n = e.data, r = n.shopId, s = n.tableNum, i.default.getLimoRuntime().showModal({
                            title: "",
                            content: "呼叫服务员小姐姐吗？",
                            success: function(e) {
                                return a(t.default.mark(function a() {
                                    return t.default.wrap(function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                          case 0:
                                            e.confirm && i.default.getLimoRuntime().request({
                                                url: (0, d.getHost)() + "/diancan/api/odc/waiter/call-waiter",
                                                data: {
                                                    mtShopId: r,
                                                    tableNum: s
                                                },
                                                complete: function(e) {
                                                    if (e) {
                                                        var t = e.data || {}, a = t.code, o = t.msg;
                                                        200 === a ? i.default.getLimoRuntime().showToast({
                                                            title: o || "呼叫成功",
                                                            icon: "none"
                                                        }) : i.default.getLimoRuntime().showToast({
                                                            title: "呼叫失败，请稍后再试",
                                                            icon: "none"
                                                        });
                                                    }
                                                },
                                                fail: function(e) {
                                                    i.default.getLimoRuntime().showToast({
                                                        title: "呼叫失败，请稍后再试",
                                                        icon: "none"
                                                    });
                                                }
                                            });

                                          case 2:
                                          case "end":
                                            return t.stop();
                                        }
                                    }, a);
                                }))();
                            }
                        });

                      case 2:
                      case "end":
                        return o.stop();
                    }
                }, o);
            }))();
        },
        jumpToSearch: function() {
            var e = this.data.headActionList.find(function(e) {
                return e.type === r.ACTION_ITEM_TYPE.SEARCH;
            }) || {};
            this.headActionItemClickHandler(e);
        },
        openUserCouponPanel: function() {
            i.default.getLimoRuntime().sendMC && i.default.getLimoRuntime().sendMC({
                valLab: null,
                bid: "b_saaspay_i65ce0ox_mc",
                options: {}
            }), this.triggerEvent("openUserCouponsPanelEvent");
        },
        closeOrderProgress: function() {
            this.triggerEvent("closeProgress");
        },
        goBackHome: function() {
            if ("back-light" === this.data.iconType) i.default.getLimoRuntime().navigateBack({
                delta: 1
            }); else {
                var e = getCurrentPages(), t = e[e.length - 1].options, a = "/pages/index/index?&shopId=" + t.shopId;
                (0, u.isMerchantWxApp)() ? a += "&tenantId=".concat(t.tenantId, "&restaurantViewId=").concat(t.restaurantViewId) : a += "&decorateType=1", 
                l.default.redirectTo({
                    url: a
                });
            }
        }
    }
});