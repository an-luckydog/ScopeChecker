var e = require("../../b/helpers/interopRequireDefault");

require("../../b/helpers/Arrayincludes");

var t = e(require("../../b/regenerator")), a = require("../../b/helpers/asyncToGenerator"), r = require("../../constants/ajaxResCode-main"), n = require("../../constants/bizConstants-main"), i = e(require("../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), o = e(require("../../miniprogram_npm/@limo/core/index.js")), u = e(require("../../lib/mix/log")), s = require("../../lib/mix/util"), d = require("./modules/index"), c = e(require("../../api/rmsStorage-main")), l = require("../../constants/decorate"), f = require("../../lib/wx/app-info"), p = require("../../miniprogram_npm/@mtfe/rms-sdk/index.js"), m = require("../../lib/wx/page"), g = require("../../lib/wx/plugin/default"), v = require("../../lib/wx/subscribeUtil"), b = require("../../lib/wx/util"), h = require("./common"), w = require("../../lib/silentLogin"), T = "user-center-cache", C = [ "notice-config", "manual-slide", "video-module" ];

(0, m.ProxyPage)({
    data: {
        previewData: {},
        tabBarIndex: n.PORTAL_TAB_TYPE.MINE,
        hasTabBar: !1,
        customOptions: {
            addPoint: {
                MC: "b_saaspay_pjkg0rft_mc",
                MV: "b_saaspay_pjkg0rft_mv"
            }
        },
        selectedCardId: "",
        isNativeTabbarPage: !1,
        options: {},
        errorTitle: "",
        showDebug: !1,
        backStyle: ""
    },
    initialLoading: !0,
    hasReportModules: !1,
    onLoad: function(e) {
        var t, a = this;
        this.__limoCore = o.default.LimoCoreFactory(), (0, m.initPageOnLoad)(), (0, w.silentLogin)(function() {
            return a.requestDataFromServer();
        }), this.initialLoading && o.default.showDialog("common-theme-loading", {}, {
            hideTabBarHeight: !0
        }), i.default.isByteDanceMicroApp && tt.setNavigationBarTitle({
            title: "个人中心"
        }), e = (0, b.getTabbarPageOptions)(e, this.route), this.options = e, this.SubscribeUtil = new v.SubscribeUtil(), 
        o.default.registerEvent("onPushCouponSubscription", function(e) {
            return a.handleCouponSubscription(e, a);
        }), o.default.registerEvent("onSwitchCard", function(e) {
            return a.updateCurrentCardInfo(e, a);
        }), o.default.registerEvent("onJumpWithCardId", function(e) {
            var t = a.data.selectedCardId;
            (0, d.jumpWithCardId)(e, t);
        }), o.default.registerEvent("vipMiniCardClickEvent", function(e) {
            return a.vipMiniCardClickEvent(e, a);
        }), o.default.registerEvent("universalLogin-uniLoginSuccess", function() {
            a.requestDataFromServer();
        });
        var r = !!(0, f.isNativeTabbarPage)(this.route);
        this.setData({
            options: e,
            isNativeTabbarPage: r
        });
        var n = e, u = n.restaurantViewId, g = void 0 === u ? "" : u, h = n.tenantId, C = void 0 === h ? "" : h, D = n.entrance, I = void 0 === D ? "" : D, S = n.previewFlag, k = void 0 === S ? "" : S;
        (0, b.setPreviewFlag)(k), p.LazyLoad.reportComponentMountedTotal([ "tab-bar" ]);
        var x = c.default.getTabBarData(g) || [], E = {
            params: {
                restaurantViewId: g,
                tenantId: C,
                previewFlag: (0, f.getNewApp)().diancanGlobalData.getPreview(l.CONTAINER_NAME.TAB_BAR),
                entrance: I
            },
            url: (0, s.getTabBarUrl)()
        };
        k && (x = [], c.default.setTabBarData(g, [])), null != (t = x) && t.length ? this.setData({
            requestParams: {},
            catchTabBarList: x
        }) : this.setData({
            requestParams: E,
            catchTabBarList: x
        }), this.checkShowDebug(), o.default.getLimoRuntime().getStorage({
            key: T,
            success: function(e) {
                if (e && e.data) {
                    var t = e.data, r = t.previewData, n = t.date;
                    Date.now() - n >= 6048e5 || (a.reportModules(r), r && a.setData({
                        previewData: r
                    }, function() {
                        var e;
                        null == (e = a.loadSuccess) || e.call(a), o.default.closeDialog("common-theme-loading");
                    }));
                }
            }
        });
    },
    onShow: function() {
        var e = this;
        return a(t.default.mark(function a() {
            return t.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return p.LXReporter.sendPV("c_eco_di99ohvb", null, {
                        env: "wxapp"
                    }), e.setData({
                        errorTitle: ""
                    }), t.next = 4, e.requestDataFromServer();

                  case 4:
                    o.default.triggerEvent("tenementInfo", {
                        tenementId: e.data.options.tenantId,
                        domainUrl: "" + (0, s.getHost)()
                    });

                  case 5:
                  case "end":
                    return t.stop();
                }
            }, a);
        }))();
    },
    reportModules: function(e) {
        if (!this.hasReportModules && e && e.modules) {
            var t = e.modules.map(function(e) {
                return e.name;
            });
            p.LazyLoad.reportComponentMountedTotal(C.filter(function(e) {
                return t.includes(e);
            })), this.hasReportModules = !0;
        }
    },
    checkShowDebug: function() {
        var e = this;
        return a(t.default.mark(function a() {
            var r, n;
            return t.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    r = i.default.MPInfo.getAccountInfo(), "develop" !== (n = r.miniProgram).envVersion && "trial" !== n.envVersion || o.default.getLimoRuntime().request({
                        url: "https://portal-portm.meituan.com/horn_ios?version=v1&os=ios&from=TEST_APPIDS",
                        success: function(t) {
                            if (t && t.data && t.data.customer) {
                                var a = t.data.customer, r = i.default.MPInfo.getAppId();
                                a.wx && a.wx.includes(r) && e.setData({
                                    showDebug: !0
                                });
                            }
                        },
                        fail: function(e) {}
                    });

                  case 2:
                  case "end":
                    return t.stop();
                }
            }, a);
        }))();
    },
    goToDebug: function() {
        i.default.navigateTo("/diancan-menu/pages/debug/index");
    },
    handleCouponSubscription: function(e, t) {
        var a = t.data.tenantId;
        c.default.getCouponSubscriptionFlag(a) ? i.default.navigateTo({
            url: e
        }) : t.SubscribeUtil.doPushMessage(function() {
            c.default.setCouponSubscriptionFlag(a), i.default.navigateTo({
                url: e
            });
        });
    },
    handleBackgroundInfo: function(e) {
        var t = e.bgImgShowType, a = e.bgColor, r = e.bgImgUrl, i = "background-image:url('".concat(r, "');background-color:").concat(a, "; ");
        switch (t) {
          case n.PORTAL_BACKGROUND_TYPE.CONTAIN:
            i += "background-size: 100% auto;background-repeat: no-repeat;";
            break;

          case n.PORTAL_BACKGROUND_TYPE.REPEAT:
            i += "background-repeat: repeat;";
            break;

          case n.PORTAL_BACKGROUND_TYPE.COVER:
            i += "background-size: 100vw 100vh;";
        }
        return i;
    },
    updateCurrentCardInfo: function(e, t) {
        t.setData({
            selectedCardId: null == e ? void 0 : e.cardId
        });
    },
    goBackEvent: function() {
        i.default.navigateBack();
    },
    requestDataFromServer: function() {
        var e = this;
        return a(t.default.mark(function a() {
            return t.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!e.data.options.tenantId) {
                        t.next = 7;
                        break;
                    }
                    return t.next = 4, e.onGetSelfCenterInfo(!0);

                  case 4:
                    o.default.closeDialog("common-theme-loading"), t.next = 8;
                    break;

                  case 7:
                    u.default.addError("[router入参]tenantId丢失");

                  case 8:
                  case "end":
                    return t.stop();
                }
            }, a);
        }))();
    },
    getPageDataRequest: function() {
        var e = this;
        return a(t.default.mark(function a() {
            return t.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.abrupt("return", i.default.preload.getPreloadData({
                        path: "/pages/user/index",
                        key: "userPageMainRequestData"
                    }) || (0, h.createUserInfoRequest)(e.data.options));

                  case 1:
                  case "end":
                    return t.stop();
                }
            }, a);
        }))();
    },
    onGetSelfCenterInfo: function(e) {
        var i = this;
        return a(t.default.mark(function u() {
            var d, c, l, f, m;
            return t.default.wrap(function(u) {
                for (;;) switch (u.prev = u.next) {
                  case 0:
                    return d = function(e, t) {
                        e && i.setData({
                            errorTitle: t || n.DEFAULT_ERROR_TITLE
                        });
                    }, u.prev = 1, u.next = 4, i.getPageDataRequest();

                  case 4:
                    if (u.t0 = u.sent, u.t0) {
                        u.next = 7;
                        break;
                    }
                    u.t0 = {};

                  case 7:
                    if (!(c = u.t0) || c.code !== r.RES_CODE.SUCCESS) {
                        u.next = 16;
                        break;
                    }
                    return i.reportModules(c.data), l = c.data || {}, f = l.modules, m = l.pageBgVO, 
                    f && f.forEach(function(e) {
                        var t, a, r, n;
                        ("basic-canvas" === e.name && (e.data.isMemberCanvas = !1, e.data.loginCanvasConfig = e.data.canvasConfig, 
                        e.name = "member-canvas"), "user-banner" === e.name) && (null != (t = e.data) && null != (a = t.memberInfo) && a.memberId && p.LXReporter.appendCommonParam({
                            member_id: null == (r = e.data) || null == (n = r.memberInfo) ? void 0 : n.memberId
                        }), e.data.tenementInfo = {
                            tenementId: i.data.options.tenantId,
                            domainUrl: "" + (0, s.getHost)()
                        });
                    }), u.next = 14, (0, p.transactionOnce)(i)("USER_DECORATE-SET_DATA", function() {
                        var e = a(t.default.mark(function e(a) {
                            var r, n, u, s;
                            return t.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    i.setData({
                                        previewData: {
                                            modules: (null == (r = c.data) ? void 0 : r.modules) || []
                                        },
                                        backStyle: m && i.handleBackgroundInfo(m) || ""
                                    }, function() {
                                        a.success(), i.loadSuccess(), i.initialLoading = !1;
                                    }), s = ((null == (n = c.data) ? void 0 : n.modules) || []).filter(function(e) {
                                        return "limo-modal" !== e.name;
                                    }), c.data && (c.data.modules = s), o.default.getLimoRuntime().setStorage({
                                        key: T,
                                        data: {
                                            previewData: {
                                                modules: (null == (u = c.data) ? void 0 : u.modules) || []
                                            },
                                            date: Date.now()
                                        }
                                    });

                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }());

                  case 14:
                    u.next = 17;
                    break;

                  case 16:
                    d(e);

                  case 17:
                    u.next = 22;
                    break;

                  case 19:
                    u.prev = 19, u.t1 = u.catch(1), d(e, "string" == typeof u.t1 ? u.t1 : n.DEFAULT_ERROR_TITLE);

                  case 22:
                  case "end":
                    return u.stop();
                }
            }, u, null, [ [ 1, 19 ] ]);
        }))();
    },
    vipMiniCardClickEvent: function(e, r) {
        return a(t.default.mark(function a() {
            var n, i, o, u;
            return t.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (e) {
                        t.next = 2;
                        break;
                    }
                    return t.abrupt("return");

                  case 2:
                    n = r.data.options.restaurantViewId, i = e.actionBtnContent, o = e.actionBtnUrl;
                    try {
                        u = i && JSON.parse(i);
                    } catch (e) {}
                    if (t.t0 = u, !t.t0) {
                        t.next = 8;
                        break;
                    }
                    return t.next = 8, (0, d.handleCardWithoutVip)(o, {
                        restaurantViewId: n
                    }, u, function() {
                        return r.onGetSelfCenterInfo(!1);
                    });

                  case 8:
                  case "end":
                    return t.stop();
                }
            }, a);
        }))();
    },
    tabBarRenderFn: function(e) {
        this.data.hasTabBar || this.setData({
            hasTabBar: !0
        });
        var t = e.detail.tabBarList, a = void 0 === t ? [] : t, r = this.data.requestParams.params, n = (void 0 === r ? {} : r).restaurantViewId, i = void 0 === n ? "" : n;
        i && c.default.setTabBarData(i, a);
    },
    triggerScroll: function(e) {
        o.default.triggerEvent("isScroll", {
            isScroll: e
        });
    },
    touchEnd: function() {
        this.triggerScroll(!1);
    },
    touchMove: function() {
        this.triggerScroll(!0);
    }
}, g.plugins);