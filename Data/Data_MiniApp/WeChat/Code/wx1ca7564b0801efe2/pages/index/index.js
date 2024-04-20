var e = require("../../b/helpers/interopRequireDefault"), a = require("../../b/helpers/objectSpread2");

require("../../b/helpers/Arrayincludes");

var t = e(require("../../b/regenerator")), n = require("../../b/helpers/asyncToGenerator"), r = require("../../api/portal"), i = require("../../constants/bizConstants-main"), o = e(require("../../api/rmsStorage-main")), s = e(require("../../miniprogram_npm/@limo/core/index.js")), u = require("../../lib/mix/util"), l = require("../../constants/ajaxResCode-main"), c = require("../../constants/decorate"), d = require("../../constants/path"), f = require("../../lib/wx/util"), p = require("../../lib/wx/app-info"), g = require("../../lib/geo"), h = require("../../lib/wx/page"), m = require("../../miniprogram_npm/@mtfe/rms-sdk/index.js"), v = require("../../lib/wx/plugin/default"), b = require("../../lib/silentLogin"), T = e(require("../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), E = require("../../modules/homeHelper"), S = [ "shop-list-entry", "notice-config", "manual-slide", "video-module", "dish-production-progress" ];

(0, h.ProxyPage)({
    data: {
        previewData: {},
        hasTabBar: !1,
        PORTAL_TAB_TYPE: i.PORTAL_TAB_TYPE,
        titleName: "",
        customOptions: {
            addPoint: {
                MC: "b_saaspay_pjkg0rft_mc",
                MV: "b_saaspay_pjkg0rft_mv"
            }
        },
        options: {},
        isNativeTabbarPage: !1,
        errorTitle: "",
        titleInfo: {},
        titleSwitch: !0
    },
    shareMsg: {},
    isFirstEnterPage: !0,
    hasValidData: !1,
    hasReportModules: !1,
    onLoad: function(e) {
        var a = this;
        return n(t.default.mark(function r() {
            return t.default.wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    a.__limoCore = s.default.LimoCoreFactory(), (0, h.initPageOnLoad)(), a.handleTabBarVisible(!1), 
                    e = (0, f.getTabbarPageOptions)(e, a.route), a.options = e, (0, m.transaction)("INDEX.SILENT_LOGIN", n(t.default.mark(function e() {
                        return t.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                (0, b.silentLogin)(function() {
                                    return a.getPageData();
                                });

                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))), a.setData({
                        options: e,
                        isNativeTabbarPage: !!(0, p.isNativeTabbarPage)(a.route)
                    }), s.default.showDialog("common-theme-loading", {}, {
                        hideTabBarHeight: !0
                    }), (0, f.setPreviewFlag)(e.previewFlag), m.LazyLoad.reportComponentMountedTotal([ "tab-bar" ]), 
                    (0, m.transaction)("INDEX.STORAGE_FIRST_SCREEN", function() {
                        var e = n(t.default.mark(function e(n) {
                            return t.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    s.default.getLimoRuntime().getStorage({
                                        key: "portal-info",
                                        success: function(e) {
                                            if (e && e.data) {
                                                var t = e.data, r = t.resData, i = t.date;
                                                Date.now() - i >= 6048e5 ? n.fail(400) : (a.reportModules(null == r ? void 0 : r.data), 
                                                r && a.setPageData(r, function() {
                                                    s.default.closeDialog("common-theme-loading"), a.hasValidData = !0, n.success(), 
                                                    m.Log.addCustom("indexHasStorageCount", 1);
                                                }, !0));
                                            } else n.fail(404);
                                        },
                                        fail: function() {
                                            n.fail(404);
                                        }
                                    });

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }));
                        return function(a) {
                            return e.apply(this, arguments);
                        };
                    }(), !0), s.default.registerEvent("onVideoFullScreen", function(e) {
                        a.setData({
                            titleSwitch: !e
                        });
                    }), s.default.registerEvent("universalLogin-uniLoginSuccess", function() {
                        a.getPageData();
                    });

                  case 1:
                  case "end":
                    return r.stop();
                }
            }, r);
        }))();
    },
    getShareInfo: function() {
        var e = this;
        return n(t.default.mark(function a() {
            var n, i, o, s, u, c;
            return t.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    return n = e.options, i = n.tenantId, o = n.restaurantViewId, a.prev = 1, a.next = 4, 
                    (0, r.getShareInfo)({
                        tenantId: i,
                        restaurantViewId: o,
                        containerName: "portal-index",
                        pageCode: "portal-index"
                    });

                  case 4:
                    s = a.sent, u = s.code, c = s.data, u === l.RES_CODE.SUCCESS && (e.shareMsg = c), 
                    a.next = 13;
                    break;

                  case 10:
                    a.prev = 10, a.t0 = a.catch(1), m.Log.addError({
                        name: "获取小程序首页分享信息异常",
                        msg: JSON.stringify(a.t0)
                    }, {
                        category: "ajaxError"
                    });

                  case 13:
                  case "end":
                    return a.stop();
                }
            }, a, null, [ [ 1, 10 ] ]);
        }))();
    },
    onShareAppMessage: function() {
        return m.LXReporter.sendMC("b_saaspay_ua8kms8y_mc"), this.shareMsg;
    },
    onShow: function() {
        if (!this.isFirstEnterPage) {
            var e = Object.assign(this.options, {});
            this.options = (0, f.getTabbarPageOptions)({}, this.route, e), this.setData({
                options: this.options,
                errorTitle: ""
            });
        }
        var a;
        if (this.options.decorateType || (m.LXReporter.sendPV("c_eco_seggwc08", null, {
            env: "wxapp"
        }), this.getPageData(), this.handleTabbar()), +this.options.decorateType) return null == (a = this.loadSuccess) || a.call(this), 
        void T.default.redirectTo({
            url: "".concat(d.PATH["shop-homepage"], "?").concat(T.default.stringify(this.options)),
            fail: function(e) {
                m.Log.addError({
                    name: "兜底跳转新门店主页path失败",
                    msg: JSON.stringify(e)
                });
            }
        });
        this.isFirstEnterPage && m.Log.addCustom("indexLoadCount", 1);
    },
    onHide: function() {
        this.isFirstEnterPage = !1, (0, p.setTabbarPageParams)(this.route, {});
    },
    silentCacheLocation: function() {
        s.default.getSetting({
            success: function(e) {
                var a;
                null != e && null != (a = e.authSetting) && a["scope.userLocation"] && (0, g.getLocation)({}).then(function(e) {
                    m.Log.addLog("首页-静默获取定位成功-" + e);
                }).catch(function(e) {
                    m.Log.addError({
                        name: "首页-静默获取定位失败",
                        msg: JSON.stringify(e)
                    });
                });
            },
            fail: function(e) {
                m.Log.addError({
                    name: "首页-获取用户设置失败",
                    msg: JSON.stringify(e)
                });
            }
        });
    },
    reportModules: function(e) {
        if (!this.hasReportModules && e && e.modules) {
            var a = e.modules.map(function(e) {
                return e.name;
            });
            m.LazyLoad.reportComponentMountedTotal(S.filter(function(e) {
                return a.includes(e);
            })), this.hasReportModules = !0;
        }
    },
    getPageData: function() {
        var e = this;
        return n(t.default.mark(function a() {
            return t.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    return a.next = 2, (0, m.transactionOnce)(e)("INDEX.REQUEST_FIRST_SCREEN", function() {
                        var a = n(t.default.mark(function a(i) {
                            var u, d, f, g, h, v, b, T, E;
                            return t.default.wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                  case 0:
                                    return d = (0, p.getNewApp)(), f = e.options, g = f.restaurantViewId, h = f.tenantId, 
                                    a.next = 6, (0, m.transactionOnce)(e)("INDEX.PAGE_DATA_REQUEST", function() {
                                        var a = n(t.default.mark(function a(n) {
                                            var i, s, u, f;
                                            return t.default.wrap(function(a) {
                                                for (;;) switch (a.prev = a.next) {
                                                  case 0:
                                                    return a.prev = 0, a.next = 3, (0, r.getDecoratePortalInfo)({
                                                        restaurantViewId: g,
                                                        tenantId: h,
                                                        previewFlag: d.diancanGlobalData.getPreview(c.CONTAINER_NAME.PORTAL),
                                                        customChannel: o.default.getCustomChannel()
                                                    });

                                                  case 3:
                                                    s = a.sent, a.next = 9;
                                                    break;

                                                  case 6:
                                                    a.prev = 6, a.t0 = a.catch(0), ((null == a.t0 || null == (u = a.t0.errMsg) ? void 0 : u.indexOf("timeout")) > -1 || (null == a.t0 || null == (f = a.t0.errMsg) ? void 0 : f.indexOf("fail")) > -1) && (s = {
                                                        netWorkErr: !0
                                                    });

                                                  case 9:
                                                    return a.abrupt("return", (e.getShareInfo(), s && s.code === l.RES_CODE.SUCCESS || n.fail((null == (i = s) ? void 0 : i.code) || l.RES_CODE.ERROR), 
                                                    s));

                                                  case 10:
                                                  case "end":
                                                    return a.stop();
                                                }
                                            }, a, null, [ [ 0, 6 ] ]);
                                        }));
                                        return function(e) {
                                            return a.apply(this, arguments);
                                        };
                                    }());

                                  case 6:
                                    if (v = a.sent, e.verifyData(v)) {
                                        a.next = 9;
                                        break;
                                    }
                                    return a.abrupt("return", void s.default.closeDialog("common-theme-loading"));

                                  case 9:
                                    b = v.data, e.reportModules(b), T = {};
                                    try {
                                        T = JSON.parse(JSON.stringify(v));
                                    } catch (e) {
                                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                        m.Log.addError({
                                            name: "首页-深拷贝装修数据失败",
                                            msg: JSON.stringify(e)
                                        });
                                    }
                                    e.setData({
                                        titleName: (null == b ? void 0 : b.titleName) || ""
                                    }), e.setPageData(v, function() {
                                        s.default.closeDialog("common-theme-loading"), i.success(), e.isFirstEnterPage && e.silentCacheLocation();
                                    }, !1), E = ((null == (u = T.data) ? void 0 : u.modules) || []).filter(function(e) {
                                        return "limo-modal" !== e.name && "open-screen" !== e.name && "member-coupon-pop-up" !== e.name;
                                    }), T.data && (T.data.modules = E), s.default.getLimoRuntime().setStorage({
                                        key: "portal-info",
                                        data: {
                                            resData: T,
                                            date: Date.now()
                                        }
                                    });

                                  case 16:
                                  case "end":
                                    return a.stop();
                                }
                            }, a);
                        }));
                        return function(e) {
                            return a.apply(this, arguments);
                        };
                    }(), !0);

                  case 2:
                  case "end":
                    return a.stop();
                }
            }, a);
        }))();
    },
    handleTabbar: function() {
        var e, a = (0, p.getNewApp)(), t = this.options, n = t.restaurantViewId, r = {
            params: {
                restaurantViewId: n,
                tenantId: t.tenantId,
                entrance: t.entrance,
                previewFlag: a.diancanGlobalData.getPreview(c.CONTAINER_NAME.TAB_BAR)
            },
            url: (0, u.getTabBarUrl)()
        }, i = o.default.getTabBarData(n) || [];
        a.diancanGlobalData.getPreview(c.CONTAINER_NAME.TAB_BAR) && (i = [], o.default.setTabBarData(n, [])), 
        null != (e = i) && e.length ? this.setData({
            requestParams: {},
            catchTabBarList: i
        }) : this.setData({
            requestParams: r,
            catchTabBarList: i
        });
    },
    handleBackgroundInfo: function(e) {
        var a = e.bgImgShowType, t = e.bgColor, n = e.bgImgUrl, r = "background-image:url('".concat(n, "');background-color:").concat(t, "; ");
        switch (a) {
          case i.PORTAL_BACKGROUND_TYPE.CONTAIN:
            r += "background-size: 100% auto;background-repeat: no-repeat;";
            break;

          case i.PORTAL_BACKGROUND_TYPE.REPEAT:
            r += "background-repeat: repeat;";
            break;

          case i.PORTAL_BACKGROUND_TYPE.COVER:
            r += "background-size: 100vw 100vh;";
        }
        return r;
    },
    verifyData: function(e) {
        return !(!e || e.code !== l.RES_CODE.SUCCESS) || (null != e && e.netWorkErr && this.hasValidData || this.setData({
            errorTitle: (null == e ? void 0 : e.msg) || "页面加载失败，请稍后重试"
        }), !1);
    },
    setPageData: function(e, r, i) {
        var s = this;
        if (e.data) {
            var u = (0, f.getWxPathName)() || "";
            if (/pages\/index\/index/.test(u) && e && e.data) {
                var l = e.data, c = l.modules, d = void 0 === c ? [] : c, h = l.pageBgVO, v = !0;
                d.forEach(function(e) {
                    var t, n, r, i;
                    if ("limo-modal" === e.name && (e.data.limoModalStorage = o.default.getLimoModal(null == (t = s.options) ? void 0 : t.tenantId)), 
                    "wx-official-account" === e.name && (e.data.position = null == (n = e.layout) ? void 0 : n.position, 
                    e.data.hasTabBar = s.data.hasTabBar, e.data.hasNativeTabBar = !!(0, p.isNativeTabbarPage)(s.route)), 
                    "limo-slide" === e.name && (e.data.componentId = e.id), "dish-production-progress" === e.name && (e.data.isMerchantWxApp = (0, 
                    p.isMerchantWxApp)(), e.data.shop = {
                        tenantId: null == (r = s.options) ? void 0 : r.tenantId,
                        poiId: null == (i = s.options) ? void 0 : i.poiId
                    }, e.data.locationFun = {
                        getLocation: g.getLocation
                    }), "accumulate-list" === e.name && (e.data.updateTime = Date.now()), "open-screen" === e.name) {
                        var u, l = !o.default.getOpenScreen(null == (u = s.options) ? void 0 : u.tenantId);
                        e.data.show = l, v = !l, e.layout = a(a({}, e.layout), {}, {
                            zIndex: 2e3,
                            position: "relative"
                        });
                    }
                    "basic-canvas" === e.name && (e.data.isMemberCanvas = !1, e.data.loginCanvasConfig = e.data.canvasConfig, 
                    e.name = "member-canvas");
                }), this.handleTabBarVisible(v), (0, m.transaction)(i ? "INDEX.SET_PAGE_DATA_STORAGE" : "INDEX.SET_PAGE_DATA", function() {
                    var a = n(t.default.mark(function a(n) {
                        var i, o;
                        return t.default.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                i = e.data, Array.isArray(i.modules) && i.modules.push({
                                    name: "agreement-confirm",
                                    data: {},
                                    layout: {
                                        zIndex: 999
                                    }
                                }), o = (0, E.sortModulesByFixedComp)(d), s.setData({
                                    backgroundInfo: h && s.handleBackgroundInfo(h) || "",
                                    previewData: {
                                        modules: s.isFirstEnterPage ? (0, E.getChunkedModuleData)(o, 0, 4) : o
                                    },
                                    titleInfo: h || {},
                                    titleSwitch: h && h.titleSwitch || !1
                                }, function() {
                                    s.loadSuccess(), n.success(), r && r();
                                }), s.isFirstEnterPage && s.setModuleBatch(1, o);

                              case 4:
                              case "end":
                                return a.stop();
                            }
                        }, a);
                    }));
                    return function(e) {
                        return a.apply(this, arguments);
                    };
                }(), !0);
            }
        }
    },
    setModuleBatch: function(e, a) {
        var t = this;
        setTimeout(function() {
            var n = (0, E.paginateModuleData)(a, 4, e, "previewData.modules");
            n && (t.setData(n), t.setModuleBatch(e + 1, a));
        }, 0);
    },
    tabBarRenderFn: function(e) {
        if (!this.data.hasTabBar) {
            this.setData({
                hasTabBar: !0
            });
            var a = this.data.previewData.modules, t = void 0 === a ? [] : a;
            t.forEach(function(e) {
                "wx-official-account" === e.name && (e.data.hasTabBar = !0);
            }), this.setData({
                previewData: {
                    modules: t
                }
            });
        }
        var n = e.detail.tabBarList, r = void 0 === n ? [] : n, i = this.data.requestParams.params, s = (void 0 === i ? {} : i).restaurantViewId, u = void 0 === s ? "" : s;
        u && o.default.setTabBarData(u, r);
    },
    setLimoShowStorage: function() {
        var e, a;
        null != (e = this.options) && e.tenantId && o.default.setLimoModal(null == (a = this.options) ? void 0 : a.tenantId);
    },
    triggerScroll: function(e) {
        s.default.triggerEvent("isScroll", {
            isScroll: e
        });
    },
    touchEnd: function() {
        this.triggerScroll(!1);
    },
    touchMove: function() {
        this.triggerScroll(!0);
    },
    closeFullScreenAd: function() {
        this.handleTabBarVisible(!0);
    },
    handleTabBarVisible: function(e) {
        var a = this.getTabBar && this.getTabBar();
        a && a.setData({
            showNativeTabBar: e
        });
    },
    setOpenScreenStorage: function() {
        var e = (this.options || {}).tenantId;
        e && o.default.setOpenScreen(e);
    }
}, v.plugins);