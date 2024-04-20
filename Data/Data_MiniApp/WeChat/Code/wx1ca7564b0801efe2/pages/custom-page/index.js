var a = require("../../b/helpers/interopRequireDefault");

require("../../b/helpers/Arrayincludes");

var e = a(require("../../b/regenerator")), t = require("../../b/helpers/asyncToGenerator"), r = a(require("../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), n = require("../../constants/bizConstants-main"), i = a(require("../../api/rmsStorage-main")), o = a(require("../../miniprogram_npm/@limo/core/index.js")), s = require("../../lib/mix/util"), u = require("../../constants/ajaxResCode-main"), c = require("../../constants/decorate"), d = require("../../lib/wx/util"), l = require("../../lib/wx/app-info"), p = require("../../lib/geo"), f = require("../../lib/wx/page"), m = require("../../miniprogram_npm/@mtfe/rms-sdk/index.js"), g = require("../../lib/wx/plugin/default"), h = require("./common"), v = [ "shop-list-entry", "notice-config", "manual-slide", "video-module", "dish-production-progress" ];

(0, f.ProxyPage)({
    data: {
        previewData: {},
        hasTabBar: !1,
        PORTAL_TAB_TYPE: n.PORTAL_TAB_TYPE,
        titleName: "",
        backgroundInfo: "",
        shareMsg: {},
        options: {},
        isNativeTabbarPage: !1,
        errorTitle: "",
        titleInfo: {},
        titleSwitch: !0
    },
    hasReportModules: !1,
    onLoad: function(a) {
        var r = this;
        return t(e.default.mark(function t() {
            return e.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    r.__limoCore = o.default.LimoCoreFactory(), (0, f.initPageOnLoad)(), a = (0, d.getTabbarPageOptions)(a, r.route), 
                    r.opt = a, r.setData({
                        options: a,
                        isNativeTabbarPage: !!(0, l.isNativeTabbarPage)(r.route)
                    }), o.default.showDialog("common-theme-loading", {}, {
                        hideTabBarHeight: !0
                    }), (0, d.setPreviewFlag)(a.previewFlag), m.LazyLoad.reportComponentMountedTotal([ "tab-bar" ]), 
                    o.default.registerEvent("onVideoFullScreen", function(a) {
                        r.setData({
                            titleSwitch: !a
                        });
                    }), o.default.registerEvent("universalLogin-uniLoginSuccess", function() {
                        r.getPageData();
                    });

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, t);
        }))();
    },
    onShareAppMessage: function() {
        return this.data.shareMsg;
    },
    onShow: function() {
        this.getPageData(), this.handleTabbar(), this.setData({
            errorTitle: ""
        }), m.LXReporter.sendPV("c_eco_h9bm1rm1");
    },
    getPageDataRequest: function() {
        var a = this;
        return t(e.default.mark(function t() {
            return e.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", r.default.preload.getPreloadData({
                        path: "/pages/custom-page/index",
                        key: "customPageMainRequestData"
                    }) || (0, h.createCustomPageRequest)(a.opt));

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, t);
        }))();
    },
    reportModules: function(a) {
        if (!this.hasReportModules && a && a.modules) {
            var e = a.modules.map(function(a) {
                return a.name;
            });
            m.LazyLoad.reportComponentMountedTotal(v.filter(function(a) {
                return e.includes(a);
            })), this.hasReportModules = !0;
        }
    },
    getPageData: function() {
        var a = this;
        return t(e.default.mark(function r() {
            return e.default.wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    return r.next = 2, (0, m.transactionOnce)(a)("CUSTOM_PAGE_DECORATE.FIRST_SCREEN", function() {
                        var r = t(e.default.mark(function r(n) {
                            var i;
                            return e.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    return r.next = 2, (0, m.transactionOnce)(a)("CUSTOM_PAGE_DECORATE.PAGE_DATA_REQUEST", function() {
                                        var r = t(e.default.mark(function t(r) {
                                            var n;
                                            return e.default.wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                    return e.next = 2, a.getPageDataRequest();

                                                  case 2:
                                                    return n = e.sent, e.abrupt("return", (n && n.code === u.RES_CODE.SUCCESS || r.fail((null == n ? void 0 : n.code) || u.RES_CODE.ERROR), 
                                                    n));

                                                  case 4:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, t);
                                        }));
                                        return function(a) {
                                            return r.apply(this, arguments);
                                        };
                                    }());

                                  case 2:
                                    i = r.sent, o.default.closeDialog("common-theme-loading"), a.verifyData(i) && (a.reportModules(null == i ? void 0 : i.data), 
                                    a.setPageData(i, function() {
                                        n.success();
                                    }));

                                  case 4:
                                  case "end":
                                    return r.stop();
                                }
                            }, r);
                        }));
                        return function(a) {
                            return r.apply(this, arguments);
                        };
                    }(), !0);

                  case 2:
                  case "end":
                    return r.stop();
                }
            }, r);
        }))();
    },
    handleTabbar: function() {
        var a, e = (0, l.getNewApp)(), t = this.opt, r = t.restaurantViewId, n = {
            params: {
                restaurantViewId: r,
                tenantId: t.tenantId,
                entrance: t.entrance,
                previewFlag: e.diancanGlobalData.getPreview(c.CONTAINER_NAME.TAB_BAR)
            },
            url: (0, s.getTabBarUrl)()
        }, o = i.default.getTabBarData(r) || [];
        e.diancanGlobalData.getPreview(c.CONTAINER_NAME.TAB_BAR) && (o = [], i.default.setTabBarData(r, [])), 
        null != (a = o) && a.length ? this.setData({
            requestParams: {},
            catchTabBarList: o
        }) : this.setData({
            requestParams: n,
            catchTabBarList: o
        });
    },
    handleBackgroundInfo: function(a) {
        var e = a.bgImgShowType, t = a.bgColor, r = a.bgImgUrl, i = "background-image:url('".concat(r, "');background-color:").concat(t, "; ");
        switch (e) {
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
    handleShareInfo: function(a) {
        var e, t = a.data.modules, r = (null != t ? t : []).find(function(a) {
            return "customize-index-setting" === a.name;
        }), n = null != (e = null == r ? void 0 : r.data) ? e : {}, i = {};
        return n.shareSwitch && (i = {
            title: n.shareTitle,
            path: n.redirectUrl,
            imageUrl: n.shareImgUrl
        }), i;
    },
    verifyData: function(a) {
        return !(!a || a.code !== u.RES_CODE.SUCCESS) || (this.setData({
            errorTitle: "抱歉，页面获取失败，请联系商家"
        }), !1);
    },
    setPageData: function(a, r) {
        var n = this;
        if (a.data) {
            var o = (0, d.getWxPathName)() || "";
            if (/custom-page/.test(o) && a && a.data) {
                var s = a.data, u = s.modules, c = void 0 === u ? [] : u, f = s.pageBgVO;
                c.forEach(function(a) {
                    var e, t, r, o;
                    "limo-modal" === a.name && (a.data.limoModalStorage = i.default.getLimoModal(null == (e = n.opt) ? void 0 : e.tenantId)), 
                    "wx-official-account" === a.name && (a.data.position = null == (t = a.layout) ? void 0 : t.position, 
                    a.data.hasTabBar = n.data.hasTabBar, a.data.hasNativeTabBar = !!(0, l.isNativeTabbarPage)(n.route)), 
                    "limo-slide" === a.name && (a.data.componentId = a.id), "dish-production-progress" === a.name && (a.data.isMerchantWxApp = (0, 
                    l.isMerchantWxApp)(), a.data.shop = {
                        tenantId: null == (r = n.opt) ? void 0 : r.tenantId,
                        poiId: null == (o = n.opt) ? void 0 : o.poiId
                    }, a.data.locationFun = {
                        getLocation: p.getLocation
                    }), "accumulate-list" === a.name && (a.data.updateTime = Date.now()), "basic-canvas" === a.name && (a.data.isMemberCanvas = !1, 
                    a.data.loginCanvasConfig = a.data.canvasConfig, a.name = "member-canvas");
                }), (0, m.transactionOnce)(this)("CUSTOM_PAGE_DECORATE.SET_PAGE_DATA", function() {
                    var i = t(e.default.mark(function t(i) {
                        var o;
                        return e.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                n.setData({
                                    titleName: (null == (o = a.data) ? void 0 : o.titleName) || "",
                                    backgroundInfo: f && n.handleBackgroundInfo(f) || "",
                                    previewData: {
                                        modules: a.data.modules || []
                                    },
                                    shareMsg: n.handleShareInfo(a),
                                    titleInfo: f || {},
                                    titleSwitch: f && f.titleSwitch || !1
                                }, function() {
                                    n.loadSuccess(), i.success(), r && r();
                                });

                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, t);
                    }));
                    return function(a) {
                        return i.apply(this, arguments);
                    };
                }(), !0);
            }
        }
    },
    tabBarRenderFn: function(a) {
        if (!this.data.hasTabBar) {
            this.setData({
                hasTabBar: !0
            });
            var e = this.data.previewData.modules, t = void 0 === e ? [] : e;
            t.forEach(function(a) {
                "wx-official-account" === a.name && (a.data.hasTabBar = !0);
            }), this.setData({
                previewData: {
                    modules: t
                }
            });
        }
        var r = a.detail.tabBarList, n = void 0 === r ? [] : r, o = this.data.requestParams.params, s = (void 0 === o ? {} : o).restaurantViewId, u = void 0 === s ? "" : s;
        u && i.default.setTabBarData(u, n);
    },
    setLimoShowStorage: function() {
        var a, e;
        null != (a = this.opt) && a.tenantId && i.default.setLimoModal(null == (e = this.opt) ? void 0 : e.tenantId);
    }
}, g.plugins);