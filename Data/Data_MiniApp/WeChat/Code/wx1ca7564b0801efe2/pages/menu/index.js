var e = require("../../b/helpers/interopRequireWildcard"), t = require("../../b/helpers/interopRequireDefault"), n = require("../../b/helpers/defineProperty"), a = require("../../b/helpers/slicedToArray");

require("../../b/helpers/Objectentries");

var o = require("../../b/helpers/objectSpread2"), r = t(require("../../b/regenerator")), i = require("../../b/helpers/asyncToGenerator"), s = t(require("../../miniprogram_npm/seamless-immutable/index.js")), u = t(require("../../api/rmsStorage")), d = t(require("../../lib/mix/toast")), l = t(require("../../miniprogram_npm/@limo/core/index.js")), c = require("../../miniprogram_npm/@mtfe/rms-sdk/index.js"), p = require("../../constants/bizConstants"), h = require("../../constants/lxConstants"), f = require("../../constants/menu"), m = require("../../lib/mix/util"), g = require("../../constants/reportConstants"), I = require("../../constants/carBarConstants"), P = require("../../modules/menu/dish/expose"), T = require("../../modules/menu/category/CategoryDataTransfer"), C = require("../../modules/menuHelper"), D = require("../../modules/cartHelper"), E = require("../../store/actions/baseCart"), _ = require("../../modules/operateCartHelper"), S = require("../../store/actions/extraInfo"), v = require("../../store/actions/add-on"), A = require("../../store/actions/cart"), y = t(require("../../modules/menu/cart/cartSdk")), L = require("../../store/actions/dish"), k = require("../../store/actions/panel"), M = require("../../lib/wx/app-info"), w = require("../../lib/wx/util"), O = require("../../modules/LXHelper"), b = t(require("../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), R = require("../../lib/wx/page"), x = require("../../lib/wx/plugin/diancan"), N = require("../../modules/menu/dish/DishDataTransfer"), F = require("../../modules/menu/dish/PropertyUtil"), q = require("../../lib/userInfo"), H = require("../../constants/decorate"), U = t(require("../../api/menuApi")), B = require("../../modules/menu/pageViewModel"), Y = t(require("../../lib/mix/log")), G = require("../../modules/menu/dish/DishDataUtil"), V = require("../../modules/menu/limo/MpPageViewModel"), W = require("../../types/IResponse"), z = require("../../lib/wx/transfer-rpx"), j = require("../../modules/menu/dataSource/point"), K = t(require("../../modules/menu/grouponCoupon/GrouponCouponSdk")), X = require("../../constants/errorTip"), Q = require("../../modules/error-tip/errorTipHelper"), Z = require("../../lib/navigator"), J = require("../../store/helpers/compose"), $ = require("../../modules/menu/scrollAnimation/index"), ee = require("./utils/point"), te = require("./utils/perfLog"), ne = require("../../types/common/URLParameters"), ae = require("../../lib/wx/weiqian-special"), oe = require("../../constants/decorConstants"), re = e(require("../../commons/entity")), ie = require("../../commons/constants"), se = t(require("../../modules/MustDishSdk")), ue = require("../../store/actions/coupon"), de = require("../../store/asyncActions/coupon"), le = require("../../components/toast/index");

(0, R.ProxyPage)((0, J.composePage)(function(e) {
    return {
        cartDishList: s.default.getIn(e, [ "cart", "cartDishList" ]) || (0, s.default)({}),
        cartDishSortMapList: s.default.getIn(e, [ "cart", "cartDishSortMapList" ]) || (0, 
        s.default)([]),
        spuDish: s.default.getIn(e, [ "cart", "spuDish" ]),
        mpUserInfo: s.default.getIn(e, [ "extraInfo", "mpUserInfo" ]),
        showContainerPanelTag: s.default.getIn(e, [ "cart", "showContainerPanelTag" ]),
        showDishInfoModal: s.default.getIn(e, [ "panel", "showDishInfoModal" ]),
        dishTimeInfoModalRequestInfo: s.default.getIn(e, [ "panel", "dishTimeInfoModalRequestInfo" ]),
        refactorLocalCart: s.default.getIn(e, [ "cart", "refactorLocalCart" ]),
        takeCouponPanelInfo: s.default.getIn(e, [ "panel", "takeCouponPanelInfo" ]) || {},
        takeCouponPanelData: s.default.getIn(e, [ "panel", "takeCouponPanelData" ]) || {},
        showPrePriceTips: s.default.getIn(e, [ "panel", "showPrePriceTips" ]),
        couponList: s.default.getIn(e, [ "coupon", "couponList" ]) || (0, s.default)([]),
        couponExtra: s.default.getIn(e, [ "coupon", "couponExtra" ]) || (0, s.default)([])
    };
}, function(e) {
    return {
        addDish: function(t, n) {
            return e((0, A.addDish)(t, n));
        },
        addToCart: function(t, n) {
            return e((0, A.addToCart)(t, n));
        },
        minusDish: function(t) {
            return e((0, A.minusDish)(t));
        },
        minusCartGrouponDish: function(t, n) {
            return e((0, A.minusCartGrouponDish)(t, n));
        },
        openDishDetail: function(t) {
            return e((0, A.openDishDetail)(t));
        },
        updateBaseInfo: function(t, n) {
            return e((0, A.updateBaseInfo)(t, n));
        },
        setDishList: function(t, n) {
            return e((0, L.setDishList)(t, n));
        },
        setExtraInfo: function(t, n) {
            return e((0, S.setExtraInfo)(t, n));
        },
        setCouponParams: function(t) {
            return e((0, ue.setCouponParamsAction)(t));
        },
        setCouponListAction: function(t) {
            return e((0, ue.setCouponListAction)(t));
        },
        getCoupons: (t = i(r.default.mark(function t() {
            var n = arguments;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, e(de.getCoupons.apply(void 0, n));

                  case 2:
                    return t.abrupt("return", t.sent);

                  case 3:
                  case "end":
                    return t.stop();
                }
            }, t);
        })), function() {
            return t.apply(this, arguments);
        }),
        initNewCart: function() {
            return e(y.default.init.apply(y.default, arguments));
        },
        setUrlParams: function(t) {
            return e((0, S.setUrlParams)(t));
        },
        setMpUserInfo: function(t) {
            return e((0, S.setMpUserInfo)(t));
        },
        showCalcPanel: function(t) {
            return e((0, A.showCalcPanel)(t));
        },
        updateCalculator: function(t) {
            return e((0, E.updateCalculator)(t));
        },
        editWeightSkuDish: function(t) {
            return e((0, A.editWeightSkuDish)(t));
        },
        toggleRegisterPanelAction: function(t) {
            return e((0, A.toggleRegisterPanelAction)(t));
        },
        updateCurrentDishId: function(t) {
            return e((0, E.updateCurrentDishId)(t));
        },
        toggleContainerPanelAction: function(t) {
            return e((0, E.toggleContainerPanelAction)(t));
        },
        setDishAddFromAction: function(t) {
            return e((0, A.setDishAddFromAction)(t));
        },
        updateEditSkuDishAction: function(t) {
            return e((0, E.updateEditSkuDishAction)(t));
        },
        toggleDishInfoModal: function(t) {
            return e((0, k.toggleDishInfoModal)(t));
        },
        showDishTimeInfoModal: function(t) {
            return e((0, k.showDishTimeInfoModal)(t));
        },
        showTakeCouponPanelAction: function(t) {
            return e((0, k.showTakeCouponPanelAction)(t));
        },
        addFixedPackage: function(t, n, a) {
            return e(y.default.addFixedPackage(t, n, a));
        },
        setAddOnShow: function(t) {
            return e((0, v.setAddOnShowAction)(t));
        },
        clearCart: function() {
            e(y.default.clearCart()), (0, O.sendMC)("b_saaspay_lxmzp99s_mc");
        },
        updatePrePriceTips: function(t) {
            return e((0, k.updatePrePriceTips)(t));
        },
        openCartPanel: function() {
            return e((0, A.openCartPanel)());
        }
    };
    var t;
}, {
    pageViewModel: {},
    defineFmpCondition: function() {
        return {
            conditions: [ "shopInfo", "recycleList" ]
        };
    },
    data: {
        showFullLoading: !0,
        dishShowType: "",
        allDishList: [],
        finishSetDishList: !1,
        firstScreenCollectEnd: !1,
        reachBoundary: "",
        menuScrollY: !0,
        categoriesList: [],
        isMember: !1,
        options: {},
        showOrderedDetailPanel: !1,
        expandedShopInfo: !1,
        resultCode: 100,
        recycleWinWidth: 0,
        isShowBigBtn: !0,
        hasTabBar: !1,
        initErrData: {},
        errorText: "",
        menuUpdateTime: 0,
        categoryStickyTop: $.FIXED_HEAD_POSITION_MP,
        hasEnoughOptions: !1,
        location: {},
        isNativeTabbarPage: !1,
        errorInfo: null,
        hideCartBarWhenEmpty: I.HIDE_CART_BAR_WHEN_EMPTY.menu,
        hideCouponAssistant: !1,
        selectedDish: []
    },
    isFirstShowToast: !0,
    realCategoryCount: 0,
    isFirstSet: !0,
    renderStartTime: 0,
    takeCouponData: {},
    isDestroy: !1,
    shareMsg: {},
    urlParams: {},
    isFirstEnterPage: !0,
    dishTimeInfoModalRequestInfo: {
        requestHost: "",
        requestParams: {}
    },
    menuDetailScrollHeight: 0,
    localHeadInfo: {},
    grouponCouponPromise: null,
    hideCouponAssistantTimer: null,
    handleLoad: function(e) {
        var t = this;
        return i(r.default.mark(function n() {
            return r.default.wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    if (n.t0 = e && Object.keys(e).length, !n.t0) {
                        n.next = 4;
                        break;
                    }
                    return n.next = 4, t._initPageShow(e);

                  case 4:
                  case "end":
                    return n.stop();
                }
            }, n);
        }))();
    },
    onPageScroll: function(e) {
        var t = null == e ? void 0 : e.scrollTop;
        t < this.menuDetailScrollHeight && "top" !== this.data.reachBoundary ? this.setData({
            reachBoundary: "top"
        }) : t >= this.menuDetailScrollHeight && this.data.reachBoundary && this.setData({
            reachBoundary: ""
        }), t < 5 && "top" !== this.data.reachBoundary && (this.setData({
            reachBoundary: "top"
        }), l.default && l.default.setModuleData("menu-shop-info", {
            searchBannerOpacity: 0
        })), t >= this.stickyContainerScrollHeight && !this.stickyContainerFixed ? (this.stickyContainerFixed = !0, 
        l.default && l.default.setModuleData("top-sticky-container", {
            fixed: !0
        })) : t < this.stickyContainerScrollHeight && this.stickyContainerFixed && (this.stickyContainerFixed = !1, 
        l.default && l.default.setModuleData("top-sticky-container", {
            fixed: !1
        })), this.data.firstScreenCollectEnd || this.setData({
            firstScreenCollectEnd: !0
        }), (0, $.setAnimation)(t, this, l.default), this.handleCouponAssistant();
    },
    onReachBottom: function() {
        this.setData({
            reachBoundary: "bottom"
        }), l.default && l.default.setModuleData("menu-shop-info", {
            searchBannerOpacity: 1
        });
    },
    switchCategory: function(e) {
        var t = this, n = b.default.MPInfo.getSystemInfo().windowWidth || 375, a = e.detail, o = this.createSelectorQuery();
        o.selectViewport().scrollOffset(), o.select(".container >>> #item-" + a).boundingClientRect(), 
        o.exec(function(e) {
            var a = e[0] && e[0].scrollTop || 0, o = e[1] && e[1].top || 0, r = t.data.dishShowType === f.DISH_ITEM_TYPE_VAL.DEFAULT || t.data.dishShowType === f.DISH_ITEM_TYPE_VAL.RIGHT_LARGE, i = t.data.categoryStickyTop + (r ? 0 : 36) / 375 * n;
            l.default.getLimoRuntime().pageScrollTo({
                scrollTop: a + o - i,
                duration: 0
            });
        }), l.default && l.default.setModuleData("menu-shop-info", {
            searchBannerOpacity: 1
        });
    },
    getSelectedPageType: function() {
        var e = this.urlParams;
        return (0, m.isTakeAwayOrSelfPick)(e.bizType) ? Number(e.bizType) === p.BIZ_TYPE_MAP.TAKEAWAY ? p.PORTAL_TAB_TYPE.TAKEAWAY : p.PORTAL_TAB_TYPE.PICKUP : Number(e.reserveMode) === p.DISH_SOURCE.RESERVE ? p.PORTAL_TAB_TYPE.PRE_ORDER : p.PORTAL_TAB_TYPE.ORDER_MENU;
    },
    loadTabBar: function(e) {
        var t, n, a = u.default.getTabBarData(e.restaurantViewId || e.shopId), o = (0, M.getNewApp)().diancanGlobalData.getPreview(H.CONTAINER_NAME.TAB_BAR), r = {
            params: {
                restaurantViewId: e.restaurantViewId || "",
                mtShopId: e.shopId || "",
                entrance: e.entrance || "",
                tenantId: e.tenantId || "",
                previewFlag: o,
                minaId: e.minaId || "",
                portalUrl: e.portalUrl || ""
            },
            url: (0, m.getTabBarUrl)()
        }, i = this.getSelectedPageType();
        return o && (a = [], u.default.setTabBarData(e.restaurantViewId || e.shopId, [])), 
        this.setData({
            requestParams: null != (t = a) && t.length ? {} : r,
            catchTabBarList: a,
            selectedPageType: i
        }), {
            isVirtualTabbar: !(null == (n = a) || !n.length)
        };
    },
    onLoad: function(e) {
        var t = this;
        return i(r.default.mark(function n() {
            var a, s, p, h, f;
            return r.default.wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    if (t.__limoCore = l.default.LimoCoreFactory(), (0, R.initPageOnLoad)(), l.default.proxy({
                        limoUseCustomHandler: {
                            sendMC: O.sendMC,
                            sendPV: O.sendPV,
                            sendMV: O.sendMV,
                            Toast: d.default,
                            Log: Y.default,
                            Triangle: b.default,
                            ThemeUtil: {
                                ICON_TYPE: oe.ICON_TYPE
                            },
                            rmsStorage: u.default,
                            appendExposeDishItem: P.appendExposeDishItem,
                            exposeDishItemNew: P.exposeDishItemNew,
                            dealOperationData: F.dealOperationData,
                            Cart: y.default,
                            MustDishSdk: se.default,
                            dealOperationCountStyle: G.dealOperationCountStyle,
                            advertiseReporter: c.advertiseReporter
                        }
                    }), e = (0, w.getTabbarPageOptions)(e, t.route), a = re.default.get(ie.TYPES.GLOBAL_OPTIONS) || new Map(Object.entries({})), 
                    e = o(o({}, (0, re.fromEntries)(a)), e), t.optionsGuard(e)) {
                        n.next = 4;
                        break;
                    }
                    return n.abrupt("return");

                  case 4:
                    return s = o(o({}, e), {}, {
                        multiShop: e.multiShop || u.default.getMultiShop()
                    }), t.setData({
                        options: s,
                        hasEnoughOptions: (0, C.hasEnoughOptions)(s),
                        extraGetDecorationRequestParam: {
                            shopCache: u.default.getShopCache()
                        },
                        isNativeTabbarPage: !!(0, M.isNativeTabbarPage)(t.route)
                    }), (0, te.updateIsFirstEnter)(t.isFirstEnterPage), (0, te.addDataUpdateListener)(t), 
                    t.pageLoadTime = Date.now(), t.options = e, (0, B.showMustDishToast)(e), t._updateCacheKey(e.cacheKey), 
                    l.default.registerEvent("openAdSpuDetailEvent", function(e) {
                        t.openAdvertiseSpuDetail(e);
                    }), l.default.registerEvent("universalLogin-uniLoginSuccess", i(r.default.mark(function e() {
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, t.handleLoad(t.urlParams);

                              case 2:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))), n.next = 16, t.handleLoad(e);

                  case 16:
                    return n.next = 18, c.LazyLoad.requireAsync("../../../async-meal/modules/panel/panelTransaction.js");

                  case 18:
                    p = n.sent, h = p.PANEL_TYPE, f = p.PanelTransaction, t.asyncFiles = {
                        PANEL_TYPE: h,
                        PanelTransaction: f
                    };

                  case 22:
                  case "end":
                    return n.stop();
                }
            }, n);
        }))();
    },
    handleCouponAssistant: function() {
        var e = this;
        this.data.hideCouponAssistant || this.setData({
            hideCouponAssistant: !0
        }), clearTimeout(this.hideCouponAssistantTimer), this.hideCouponAssistantTimer = setTimeout(function() {
            e.hideCouponAssistantTimer = null, e.setData({
                hideCouponAssistant: !1
            });
        }, 1e3);
    },
    onCouponAssistantLogin: function(e) {
        1 === e.detail ? this.gotoMemberLogin() : this.gotoThirdLogin();
    },
    toggleCouponPanel: function(e) {
        this.setData({
            showCouponPanel: "boolean" == typeof e ? e : !this.data.showCouponPanel
        });
    },
    getCouponList: function(e) {
        var t = this.urlParams, n = t.shopId, a = t.tableNum, o = this.localHeadInfo.memberInfo;
        this.getCoupons({
            tableNum: a,
            mtShopId: n,
            cardId: null == o ? void 0 : o.cardId
        }, "boolean" == typeof e && e);
    },
    checkWeiQian: function(e) {
        var t = e.tenantId;
        if (Number(t) === ae.WEI_QIAN_TANENT_ID) {
            var n = b.default.stringify(e);
            u.default.setMenuOps(n);
        }
    },
    saveUrlParameters: function(e) {
        this.setData({
            options: e,
            hasEnoughOptions: (0, C.hasEnoughOptions)(e)
        }), this.checkWeiQian(e), this.urlParams = e, this.setUrlParams(e), this.options = e;
    },
    optionsGuard: function(e) {
        return !this.checkOldPerception(e);
    },
    checkOldPerception: function(e) {
        var t = e.p, n = e.q;
        if (t || n) {
            var a = b.default.stringify(e, !1);
            return this.loadFail(j.FAIL_REASON.OLD_PERCEPTION), b.default.redirectTo({
                url: "/pages/splash/index?" + a
            }), !0;
        }
        return !1;
    },
    onShow: function() {
        var e = this;
        return i(r.default.mark(function t() {
            var n;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if ((0, O.sendPV)("c_saaspay_gzi8cqe9"), e.showTakeCouponTips = !1, e.saveWMCloudData = !1, 
                    e.isFirstEnterPage) {
                        t.next = 8;
                        break;
                    }
                    if (e.setData({
                        errorInfo: null
                    }), n = Object.assign(e.options, {}), n = (0, w.getTabbarPageOptions)({}, e.route, n), 
                    e.saveUrlParameters(n), (0, M.setTabbarPageParams)(e.route, n), !e.checkOldPerception(n)) {
                        t.next = 5;
                        break;
                    }
                    return t.abrupt("return");

                  case 5:
                    return e._updateCacheKey(e.options.cacheKey), t.next = 8, e.handleLoad(e.urlParams);

                  case 8:
                    e.searchBannerOpacity && l.default && l.default.setModuleData("menu-shop-info", {
                        searchBannerOpacity: e.searchBannerOpacity
                    });

                  case 9:
                  case "end":
                    return t.stop();
                }
            }, t);
        }))();
    },
    onReady: function() {
        var e = (0, M.getNewApp)();
        try {
            if (!e.isHide) {
                var t = Date.now() - e.report.launchTimeFromScan;
                Y.default.addPerformance(g.RAPTOR_PERFORMANCE.MP.APP_READY, t);
            }
        } catch (e) {}
        this.updateMpUserInfo();
    },
    updateComponentsScrollTop: function() {
        var e = this, t = this.createSelectorQuery(), n = this.data.categoryStickyTop, o = $.FIXED_HEAD_POSITION_MP;
        t.select(".container >>> .common-head-fixed").boundingClientRect(), t.select(".container >>> .top-sticky-container").boundingClientRect(), 
        t.select(".container >>> .menu-detail").boundingClientRect(), t.selectViewport().scrollOffset(), 
        t.exec(function(t) {
            if (Array.isArray(t)) {
                var r = a(t, 4), i = r[0], s = void 0 === i ? {} : i, u = r[1], d = r[2], c = void 0 === d ? {} : d, p = r[3].scrollTop || 0;
                s && s.height && (o = s.height, e.setData({
                    categoryStickyTop: o
                }));
                var h = u || {}, f = h.top, m = h.height;
                f && m && (f !== o && (e.stickyContainerScrollHeight = p + f - o), n = o + u.height, 
                e.setData({
                    categoryStickyTop: n
                }), l.default.setModuleData("top-sticky-container", {
                    offsetTop: o
                })), c && c.top && (e.menuDetailScrollHeight = p + c.top - n);
            }
        });
    },
    sendFstScanDuration: function() {
        var e, t = (0, M.getNewApp)();
        this.isFirstEnterPage && this.loadSuccess("recycleList"), this.urlParams.perceptionPage && ((0, 
        te.sendSplashMenuFmpDuration)(null == (e = t.report) ? void 0 : e.splashLoadTime), 
        t.report.splashLoadTime = -1);
    },
    initLimoData: function(e) {
        var t = this;
        return i(r.default.mark(function n() {
            return r.default.wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    return n.abrupt("return", (t.pageViewModel = new V.MpPageViewModel({
                        pageInstance: t,
                        Limo: l.default.getLimoRuntime(),
                        options: t.urlParams
                    }), t.pageViewModel.getMenuViewModel(e)));

                  case 1:
                  case "end":
                    return n.stop();
                }
            }, n);
        }))();
    },
    _updateCacheKey: function(e) {
        e && (0, M.setCloudDataCacheKey)(e);
    },
    _initPageShow: function(e) {
        var t = this;
        return i(r.default.mark(function n() {
            var a, s, d, h, g, I, P, T, D, E, _, S, v, A, y, L, k, O, R, x, N, F, q, H, G, V, K, X, Q, Z, J, $, ee, ae, oe, re, ie, se, ue, de, le, ce, pe, he, fe, me, ge, Ie, Pe, Te, Ce, De, Ee, _e, Se;
            return r.default.wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    if (I = Date.now(), P = (0, te.sendInitPageToRequestStart)(I), T = e.bizType, D = e.authGeo, 
                    n.t0 = (0, m.isTakeAwayOrSelfPick)(T) || D === ne.URLParams.AuthGeo.REQUIRED, !n.t0) {
                        n.next = 5;
                        break;
                    }
                    return n.next = 5, (0, c.transaction)("MENU.getLocation", i(r.default.mark(function e() {
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, (0, C.getLocationInfo)({
                                    canUseSessionCache: !0,
                                    defaultTimeout: 5e5,
                                    showAuthSettingDialog: !1
                                });

                              case 2:
                                (E = e.sent) && t.setData({
                                    location: E
                                });

                              case 4:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    })));

                  case 5:
                    return t.grouponCouponPromise = U.default.getGrouponInfo(e), n.next = 8, (0, B.getMainData)(o(o({}, e), E ? {
                        userGeoPoint: E
                    } : {}));

                  case 8:
                    if ((_ = n.sent) !== W.ResponseState.REDIRECT) {
                        n.next = 11;
                        break;
                    }
                    return n.abrupt("return", void t.loadFail(j.FAIL_REASON.REDIRECT));

                  case 11:
                    if (S = _.pageTitle, v = _.memberInfo, A = _.localHeadInfo, y = _.spuDetail, L = _.errorTips, 
                    k = _.spuPromise, O = _.moduleData, R = _.moduleSortList, x = _.userInfo, N = _.orderProductionProcessVO, 
                    F = (0, te.sendRequestStartToRequestEnd)(P), H = (q = null != A ? A : {}).shopConfig, 
                    G = q.shopInfo, V = q.fmpBizData, X = (K = null != V ? V : {}).recSceneFlag, Q = K.shopCache, 
                    Z = K.showCouponPackage, J = void 0 !== Z && Z, $ = (0, C.getCompleteParameters)({
                        shopConfig: H,
                        fmpBizData: V,
                        oldParameter: e
                    }), t.saveUrlParameters($), (0, M.setTabbarPageParams)(t.route, $), !t.isDestroy) {
                        n.next = 14;
                        break;
                    }
                    return n.abrupt("return");

                  case 14:
                    if (!L) {
                        n.next = 16;
                        break;
                    }
                    return n.abrupt("return", void t.dealErrorInfo(L));

                  case 16:
                    if (A) {
                        n.next = 18;
                        break;
                    }
                    return n.abrupt("return", void t.dealErrorInfo({
                        errorType: j.FAIL_REASON.EMPTY_HEAD,
                        errorMsg: "localHeadInfo为空"
                    }));

                  case 18:
                    return ee = t.loadTabBar($), ae = ee.isVirtualTabbar, oe = void 0 !== ae && ae, 
                    re = t.urlParams, ie = re.shopId, se = re.tableNum, ue = re.spuId, de = re.cacheKey, 
                    t._updateCacheKey(de), t.localHeadInfo = A, (0, w.setNavigationBarTitle)({
                        title: S
                    }, "/menu/"), (0, C.saveLocationInfo)({
                        bizType: T,
                        cacheKey: de,
                        location: t.data.location
                    }), Y.default.setAsyncOptions("shopId", ie), (0, B.clearLastShopInfo)($), t.setExtraInfo(ie, A), 
                    t.updateBaseInfo(ie, se), (0, B.showMemberLoginToast)(v), (0, B.saveCardInfo)(ie, v), 
                    null !== X && u.default.setRecSceneFlag(!!X), Q && u.default.setShopCache(Q), ce = (le = H || {}).menuStyle, 
                    pe = le.spuMatchRecommendPages, he = le.mtShopId, me = (fe = ce || {}).dishShowType, 
                    ge = void 0 === me ? 0 : me, Ie = fe.spuComboShowType, Pe = void 0 === Ie ? 0 : Ie, 
                    Te = ge > 0 && ge !== p.DISH_SHOW_TYPE.RIGHT_LARGE, Ce = 1, ge === p.DISH_SHOW_TYPE.TWO_IN_ROW ? Ce = 2 : ge === p.DISH_SHOW_TYPE.THREEE_IN_ROW && (Ce = 3), 
                    De = (G || {}).shopMarketings, Ee = (0, te.sendRequestEndToDataStart)(F), n.next = 28, 
                    t.initLimoData({
                        moduleData: O,
                        moduleSortList: R,
                        progressInfo: N
                    });

                  case 28:
                    _e = n.sent, t.showTakeCouponTips && O && (0, C.showTakeCouponTipsHandle)(O, v, function() {
                        t.showTakeCouponTips = !1;
                    }), Se = {
                        limoMenuData: _e,
                        userInfo: x,
                        memberInfo: v,
                        actionUrl: null == v ? void 0 : v.actionUrl,
                        pageTitle: S,
                        horizontal: Te,
                        spuMatchRecommendPages: pe,
                        column: Ce,
                        recycleWinWidth: (0, z.transformRpxToNumber)(p.MENU_PAGE_INIT_CONFIG["INIT_".concat(f.DISH_ITEM_TYPE_MAP[ge], "_RECYCLE_VIEW_WIDTH")]),
                        spuComboShowType: Pe,
                        menuUpdateTime: Date.now(),
                        currentShopId: he,
                        showCouponPackage: "false" !== (null == ce || null == (a = ce.feConfig) ? void 0 : a.showPayCouponPackage) && J,
                        payCouponDecoInfo: {
                            couponPageSize: (null == ce || null == (s = ce.feConfig) ? void 0 : s.couponPageSize) && Number(null == ce || null == (d = ce.feConfig) ? void 0 : d.couponPageSize),
                            payCouponPackageShowImgUrl: null == ce || null == (h = ce.feConfig) ? void 0 : h.payCouponPackageShowImgUrl,
                            sizeScale: null == ce || null == (g = ce.feConfig) ? void 0 : g.couponPageSizeScale
                        },
                        shopMarketings: De
                    }, (0, c.transaction)("MENU.SET_DATA.SHOP_INFO", function() {
                        var e = i(r.default.mark(function e(n) {
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    t.setData(Se, function() {
                                        n.success(), t.isFirstEnterPage && t.loadSuccess("shopInfo"), (0, te.sendElseMenuListRenderDuration)(Ee), 
                                        b.default.isByteDanceMicroApp ? setTimeout(function() {
                                            t.updateComponentsScrollTop();
                                        }, 200) : t.updateComponentsScrollTop(), l.default && l.default.setModuleData("menu-shop-info", {
                                            isVirtualTabbar: oe
                                        });
                                    });

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(), !0), t.checkNewAdvanceToast(), t.popUpDetailPanel(ue), t.isFirstEnterPage ? t.dealRenderList({
                        spuMap: y,
                        spuPromise: k
                    }) : t.updateMenuList(k);

                  case 32:
                  case "end":
                    return n.stop();
                }
            }, n);
        }))();
    },
    dealRenderList: function(e) {
        var t = e.spuMap, n = e.spuPromise, a = e.couponAssistantLoginMode, o = e.couponAssistantStyle, r = !!n, i = this.localHeadInfo, s = i.categories, u = i.shopConfig, d = i.memberInfo, l = i.shopInfo, c = i.fmpBizData, h = null == u ? void 0 : u.menuStyle, m = !(null == d || !d.cardId), g = h || {}, I = g.recommendShowType, P = void 0 === I ? p.BOSS_DISH_SHOW_TYPE.DEFAULT : I, C = g.dishShowType, D = void 0 === C ? 0 : C, E = g.menuType, _ = void 0 === E ? 0 : E, S = (null == l ? void 0 : l.shopMarketings) || [], v = c.pointBuyCampaign, A = (0, 
        T.getPluginActivityToCategory)(s, S, t);
        null != o && o.couponAssistantSwitch && (this.getCouponList(!0), "category" === o.position && (A = (0, 
        T.assembleCouponToCategory)(A, o)));
        var y = (0, T.generateCategoryList)(r, {
            categories: A,
            dishShowType: D,
            list: t,
            cartList: this.data.cartDishList,
            isLogin: m
        }), L = (0, T.categoryListHasIcon)(y), k = f.DISH_ITEM_TYPE_MAP[D] || f.DISH_ITEM_TYPE_VAL.DEFAULT, M = (0, 
        N.generateDishList)(r, {
            categories: y,
            list: t,
            dishShowType: k,
            cartList: this.data.cartDishList,
            menuStyle: h,
            pointBuyCampaign: v
        });
        this.setData({
            menuType: _,
            couponAssistantLoginMode: a,
            couponAssistantStyle: o,
            categoriesList: y,
            categoryHasIcon: r ? s.some(function(e) {
                return !!e.categoryMultimediaList;
            }) : L,
            dishShowType: k,
            recommendShowType: P
        }), n || (this.realCategoryCount = (null == M ? void 0 : M.length) || 0), this.renderDishList(M, n);
    },
    renderDishList: function(e, t) {
        var n = this;
        this.renderStartTime = this.isFirstEnterPage ? Date.now() : 0;
        var a = (0, N.sliceDataTransfer)(e), o = 0;
        a.forEach(function(e) {
            n.setData(e, function() {
                o++, n.isFirstSet && (n.sendFstScanDuration(), (0, te.sendMenuListRenderDuration)(n.renderStartTime), 
                (0, ee.setFmpMenuListSuccess)(), n.isFirstSet = !1), o === a.length && (n.updateMenuList(t), 
                n.removeExtraCategories());
            });
        });
    },
    removeExtraCategories: function() {
        if (this.realCategoryCount > 0 && this.data.allDishList.length > this.realCategoryCount) for (var e = this.realCategoryCount; e < (null == (t = this.data.allDishList) ? void 0 : t.length); e++) {
            var t;
            this.setData(n({}, "allDishList[".concat(e, "]"), null));
        }
    },
    updateMenuList: function(e) {
        var t = this;
        return i(r.default.mark(function n() {
            var a, o, i, s;
            return r.default.wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    if (e) {
                        n.next = 2;
                        break;
                    }
                    return n.abrupt("return", (l.default && l.default.setModuleData("recommendation-module", {
                        menuUpdateTime: Date.now()
                    }), t.isFirstEnterPage && (0, te.sendLVC)(t.pageLoadTime), void t.setData({
                        showFullLoading: !1,
                        finishSetDishList: !0
                    }, function() {
                        t.loadingEnd();
                    })));

                  case 2:
                    return a = t.urlParams, o = a.shopId, i = a.tenantId, n.prev = 3, n.next = 6, (0, 
                    B.getAllSpuWithCache)(t.urlParams, e);

                  case 6:
                    s = n.sent, n.next = 12;
                    break;

                  case 9:
                    n.prev = 9, n.t0 = n.catch(3), Y.default.addError("全量菜品网络异常", n.t0);

                  case 12:
                    s ? (t.setDishList(o, s), u.default.setUseMenuCacheForNonMenuPage(o, !0), t.asyncLoadGrouponCoupon({
                        allSpu: s
                    }), t.dealRenderList({
                        spuMap: s,
                        spuPromise: null
                    }), t.shopHomeShare(i), (0, B.initUser)()) : t.dealErrorInfo({
                        errorType: j.FAIL_REASON.ALL_DISH_FAIL,
                        errorMsg: p.DEFAULT_ERROR_TITLE
                    });

                  case 13:
                  case "end":
                    return n.stop();
                }
            }, n, null, [ [ 3, 9 ] ]);
        }))();
    },
    loadingEnd: function() {
        this.autoPopCartPanel();
    },
    autoPopCartPanel: function() {
        var e = this.urlParams.shopId, t = this.localHeadInfo.fmpBizData.cartAutoPopTip;
        if (e && !u.default.getHasCartAutoPop(e) && null != t && t.length) {
            this.openCartPanel();
            try {
                (0, le.showToast)(this, {
                    mask: !1,
                    title: t,
                    duration: 1e3
                });
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                Y.default.addError("showToast error: ", e);
            }
            u.default.setHasCartAutoPop(!0, e);
        }
    },
    asyncLoadGrouponCoupon: function(e) {
        var t = this;
        return i(r.default.mark(function n() {
            var a, i, s, d, l, c, p, h, f, m, g, I, P, T, C, D, E, _, S, v, A, y;
            return r.default.wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    return a = e.allSpu, i = t.urlParams, s = i.shopId, d = i.mandatoryPrompt, l = i.tableNum, 
                    c = t.localHeadInfo.shopConfig, h = (p = c || {}).mandatoryInfos, f = p.cartConfig, 
                    n.prev = 2, n.next = 5, t.grouponCouponPromise;

                  case 5:
                    if (n.t0 = m = n.sent, null == n.t0) {
                        n.next = 10;
                        break;
                    }
                    n.t1 = m, n.next = 11;
                    break;

                  case 10:
                    n.t1 = {};

                  case 11:
                    if (g = n.t1, I = g.data) {
                        n.next = 15;
                        break;
                    }
                    return n.abrupt("return");

                  case 15:
                    if (P = I.groupCouponInfo, T = I.hiddenGrouponCouponSpuDetail, C = I.moduleData, 
                    D = (C = void 0 === C ? {} : C)["groupon-coupon-login"], E = C["groupon-coupon-swiper"], 
                    !P) {
                        n.next = 25;
                        break;
                    }
                    return t.setExtraInfo(s, o(o({}, t.localHeadInfo), {}, {
                        shopInfo: o(o({}, t.localHeadInfo.shopInfo), {}, {
                            groupCouponInfo: P
                        })
                    })), _ = P.dealCoupons, n.next = 23, K.default.initDealCoupons(s, t.pageViewModel, _, l);

                  case 23:
                    return n.next = 25, K.default.initSelectedCouponFromStore(s, l);

                  case 25:
                    T && t.setDishList(s, o(o({}, T), a)), (null != E && E.data || null != D && D.data) && (null != E && E.data && (S = (0, 
                    B.addCustomLimoModule)(t.data.limoMenuData, "groupon-coupon-swiper", t.pageViewModel.menuComponentsModel.formatGrouponCouponSwiperData(E.data, t.urlParams), {})), 
                    null != D && D.data && (v = D.data, A = v.couponAssistantLoginMode, y = v.showMTBind, 
                    S = (0, B.addCustomLimoModule)(t.data.limoMenuData, "groupon-coupon-login", t.pageViewModel.menuComponentsModel.formatGrouponCouponLoginData({
                        couponAssistantLoginMode: A,
                        showMTBind: y
                    }), {})), S && t.setData({
                        limoMenuData: S
                    }), t.dealRenderList({
                        couponAssistantLoginMode: null != D && D.data ? D.data.couponAssistantLoginMode : 0,
                        couponAssistantStyle: null != E && E.data ? E.data.style : null,
                        spuMap: a,
                        spuPromise: null
                    })), t.initNewCart(h, a, null == f ? void 0 : f.openTogether, decodeURIComponent(null != d ? d : "")), 
                    K.default.showMTAccountToast(null == P ? void 0 : P.showMTBind, u.default.getGrouponCouponList(s)), 
                    n.next = 32;
                    break;

                  case 29:
                    n.prev = 29, n.t2 = n.catch(2), Y.default.addError("Error when initializing group coupon in menu page", n.t2);

                  case 32:
                  case "end":
                    return n.stop();
                }
            }, n, null, [ [ 2, 29 ] ]);
        }))();
    },
    dealErrorInfo: function(e) {
        var t = e || {}, n = t.errorType, a = t.errorMsg;
        (0, ee.menuLoadFailPoint)({
            errorType: n,
            errorMsg: a
        }), this.loadFail(n);
        var o = n === X.ERROR_TYPE.NEED_DOWNGRADE_CODE ? n : X.ERROR_TYPE.NEED_RELOAD, r = n === X.ERROR_TYPE.NEED_DOWNGRADE_CODE ? "去点餐" : "重新加载";
        this.setData({
            errorInfo: {
                errorTitle: a,
                btnConfig: {
                    buttonText: r
                },
                redirectUrl: "",
                type: o
            }
        });
    },
    handleErrorClick: function() {
        var e = this.data.errorInfo || {}, t = e.type, n = e.redirectUrl;
        switch (+t) {
          case X.ERROR_TYPE.NEED_DOWNGRADE_CODE:
            var a = (0, Z.getCurrentPagePath)();
            return void this.openIndependentApplets(a);

          case X.ERROR_TYPE.CUSTOM_JUMP:
            return void b.default.redirectTo({
                url: n
            });

          case X.ERROR_TYPE.NEED_RELOAD:
          default:
            (0, Z.customReLaunch)("menu", {});
        }
    },
    openIndependentApplets: function(e) {
        var t = "develop" === (0, Q.checkEnv)() ? "wx06a469c9bcc9f1ea" : "wx1fde2c33280d64b6";
        l.default.getLimoRuntime().navigateToMiniProgram({
            appId: t,
            path: e,
            extraData: {},
            envVersion: (0, Q.checkEnv)(),
            success: function(e) {},
            fail: function(e) {
                Y.default.addError("小程序打开失败", e);
            }
        });
    },
    checkNewAdvanceToast: function() {
        var e = this.urlParams, t = e.orderBizTag, n = e.hasOrder;
        +t === p.ORDER_BIZ_TAG.AHEAD && "true" === n && b.default.showToast({
            icon: "none",
            title: "该桌台有订单，请您联系服务员或更换桌台用餐",
            duration: 3e3
        });
    },
    shopHomeShare: function(e) {
        var t = this;
        return i(r.default.mark(function n() {
            var a;
            return r.default.wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    return t.shareMsg = {
                        title: "点餐",
                        path: "/orderPackages/pages/scan-qr-code/index?tenantId=" + e
                    }, n.prev = 1, n.next = 4, U.default.queryTableShareConfig({
                        pageCode: "tableTop-menu-share",
                        tenantId: e
                    });

                  case 4:
                    200 == (a = n.sent) && (t.shareMsg = a.data), n.next = 10;
                    break;

                  case 8:
                    n.prev = 8, n.t0 = n.catch(1);

                  case 10:
                  case "end":
                    return n.stop();
                }
            }, n, null, [ [ 1, 8 ] ]);
        }))();
    },
    onShareAppMessage: function() {
        return this.shareMsg;
    },
    getSpuById: function(e) {
        var t = this.urlParams.shopId;
        if (!e || !t) return null;
        var n = u.default.getDishList(t);
        return n ? n[e] : null;
    },
    updateMpUserInfo: function() {
        var e = (0, q.getUserInfo)(), t = e.nickname, n = e.headimgurl;
        this.setMpUserInfo({
            nickname: t,
            headimgurl: n
        });
    },
    popUpDetailPanel: function(e) {
        var t = this.getSpuById(e), n = (0, F.dealPreventSale)(t) || !t && e;
        !this.data.alreadyPopup && e && (n ? b.default.showToast({
            icon: "none",
            title: "菜品已售完, 看看其他菜品吧~",
            duration: 3e3
        }) : this.menuDetail({
            detail: t
        }), this.setData({
            alreadyPopup: !0
        }));
    },
    menuDetail: function(e) {
        var t, n, a, r, i, s, d, l = e.detail;
        if (l) {
            var c = l.spuId, f = this.urlParams.shopId, m = null == (t = (u.default.getExtraInfo(f) || {}).shopInfo) || null == (t = t.recommendInfos) || null == (t = t.boss) ? void 0 : t.title;
            this.openDishDetail(o(o({}, l), {}, {
                reportConfig: o(o(o({}, l.reportConfig || {}), l.__reportConfig__ || {}), {}, {
                    bossRecommendText: m,
                    dishType: l.dishType,
                    spuName: l.spuName,
                    adFrom: P.EXPOSE_DISH_TYPE.BOSSRECOMMEND,
                    spuId: c,
                    skuId: l.skuMenuItems ? null == (n = l.skuMenuItems[0]) ? void 0 : n.skuId : 0
                })
            }));
            var g = {
                op_type: h.OP_TYPE.RECOMMEND_DISH,
                op_name: null != (a = l.__reportConfig__) && a.fromNetRecommend ? h.OP_NAME.RECOMMEND_NET : h.OP_NAME.RECOMMEND_BOSS,
                sn: null == (r = l.__reportConfig__) ? void 0 : r.index,
                show_title: null != (i = l.__reportConfig__) && i.fromNetRecommend ? p.TITLE_CONTENT.NET : p.TITLE_CONTENT.BOSS,
                spu_id: c,
                skuId: null == l || null == (s = l.skuMenuItems[0]) ? void 0 : s.skuId
            }, I = o({}, g);
            null != (d = l.__reportConfig__) && d.fromNetRecommend || (I = o(o({
                is_defined_title: m ? 1 : 0
            }, g), {}, {
                show_title: m
            })), (0, O.sendMC)("b_saaspay_hlznku1a_mc", null, null, {
                clickData: o({}, I)
            });
        }
    },
    addDishFuncMenu: function(e) {
        var t = e.detail, n = (0, _.transToSkuDish)(t, this.data.cartDishList);
        this.addDish(n);
    },
    onClickCountNum: function(e) {
        var t = e.detail, n = (0, _.transToSkuDish)(t, this.data.cartDishList);
        this.showCalcPanel(n);
    },
    minusDishFuncMenu: function(e) {
        var t = e.detail, n = (0, _.transToSkuDish)(t, this.data.cartDishList);
        this.minusDish(n);
    },
    expandShopInfo: function(e) {
        var t = e.detail.showShopFlag;
        this.setData({
            expandedShopInfo: t,
            isShowToastFromMTLogin: !1
        });
    },
    hidePanel: function() {
        this.toggleRegisterPanelAction(!1), this.toggleContainerPanelAction(!1), this.setAddOnShow(!1), 
        this.closeTakeCouponPanel();
    },
    onHide: function() {
        this.isFirstEnterPage = !1, (0, te.updateIsFirstEnter)(this.isFirstEnterPage), this.hidePanel();
    },
    onUnload: function() {
        this.isDestroy = !0, this.hidePanel(), b.default.hideLoading();
    },
    showPanelType: function(e) {
        var t = e.detail, n = t.operationData, a = void 0 === n ? {} : n, r = t.skuId, i = void 0 === r ? "" : r, s = t.__newReportConfig__, u = t.exposeDishType, d = void 0 === u ? "" : u, l = t.menuReportConfig, c = t.scene, p = void 0 === c ? "" : c, h = a.panelType, m = a.id, g = a.reportConfig, I = a.discount, P = void 0 === I ? "" : I;
        if (h && m) {
            var T = {
                scene: p,
                reportConfig: o(o({}, l || {}), g)
            };
            switch (this.updateCurrentDishId({
                currentSpuId: m,
                currentSkuId: i,
                containerOpenExtraData: T,
                __newReportConfig__: s,
                currentDiscount: P
            }), this.toggleContainerPanelAction(!0), this.setDishAddFromAction(d), h) {
              case f.PANEL_TYPE_VAL.SPEC:
                this.asyncFiles.PanelTransaction.init(this.asyncFiles.PANEL_TYPE.MULTI_PANEL);
                break;

              case f.PANEL_TYPE_VAL.PACKAGE:
                this.asyncFiles.PanelTransaction.init(this.asyncFiles.PANEL_TYPE.PACKAGE_PANEL);
                break;

              case f.PANEL_TYPE_VAL.WEIGHT:
                this.asyncFiles.PanelTransaction.init(this.asyncFiles.PANEL_TYPE.CALCULATOR_PANEL);
            }
        }
    },
    showDishPanel: function(e) {
        var t, n, a, r, i = e.detail.dish.spuId, s = e.detail.isFirstScreen, d = e.detail.dish, l = this.getSpuById(i);
        if ((0, O.sendMC)("b_saaspay_hlznku1a_mc", null, null, {
            tab_id: d.categoryId,
            dishes_id: d.spuId,
            dishes_name: d.name,
            dishes_price: Number(d.currentPrice),
            dishes_status: l.soldOut ? 1 : l.canSaleNow ? 0 : void 0
        }), l && d) {
            var c = this.urlParams.shopId, p = u.default.getExtraInfo(c), f = null == p || null == (t = p.shopInfo) || null == (t = t.recommendInfos) || null == (t = t.boss) ? void 0 : t.title;
            this.openDishDetail(o(o({}, l), {}, {
                reportConfig: o(o(o({}, d.reportConfig || {}), d.__reportConfig__ || {}), {}, {
                    bossRecommendText: f,
                    dishType: d.dishType || l.dishType,
                    spuName: d.spuName || l.spuName,
                    adFrom: P.EXPOSE_DISH_TYPE.DISHLIST,
                    spuId: i,
                    skuId: d.skuMenuItems ? null == (n = d.skuMenuItems[0]) ? void 0 : n.skuId : 0,
                    categoryId: d.categoryId,
                    isFirstScreen: s
                })
            })), this.asyncFiles.PanelTransaction.init(this.asyncFiles.PANEL_TYPE.DISH_DETAIL_PANEL);
            var m, g = h.OP_NAME.OTHER;
            g = d.categoryId > 0 ? h.OP_NAME.RECOMMEND_CLASS : h.OP_NAME.RECOMMEND_DISH, m = null == (a = d.__reportConfig__) || null == (a = a.belongCategory) ? void 0 : a.parentName, 
            (0, O.sendMC)("b_saaspay_hlznku1a_mc", null, null, {
                clickData: {
                    op_type: h.OP_TYPE.RECOMMEND_CLASS,
                    op_name: g,
                    show_title: m,
                    spu_id: i,
                    sn: null == (r = d.__reportConfig__) ? void 0 : r.index
                }
            });
        }
    },
    onDishSelect: function(e) {
        var t = e.detail, n = t.dish, a = t.containerOpenExtraData, r = n.__currentSkuInfo, i = this.data.couponDishList.map(function(e) {
            var t = function(e) {
                var t = e.__currentSkuInfo;
                return r && t ? r.skuId === t.skuId : n.skuId && t ? t.skuId === n.skuId : e.spuId === n.spuId;
            }(e);
            return o(o({}, e), {}, {
                selected: t,
                __currentDishInfo: t ? n : null
            });
        }), s = i.find(function(e) {
            return e.selected;
        });
        this.setData({
            selectedDish: s ? [ s ] : [],
            couponDishList: i
        }), (null == a ? void 0 : a.scene) === P.EXPOSE_DISH_TYPE.COUPON_DISH && s && this.onCouponDishAddToCart({
            detail: [ s ]
        });
    },
    addToCartCoupon: function(e) {
        var t = this, n = e.detail.dish, a = n.spuId, o = n.skuId, r = n.count;
        K.default.autoUseCouponAddToCart(a, o, r, function() {
            t.addToCart(n);
        }, function() {
            t.addToCart(n);
        });
    },
    operateCartDish: function(e) {
        var t = this, n = e.detail, a = n.type, o = n.id, r = n.showCal, i = void 0 !== r && r, u = n.skuId, d = void 0 === u ? "" : u, l = n.discount, c = void 0 === l ? "" : l, h = this.getSpuById(o);
        if (h) {
            var f = (0, _.transToSkuDish)(h, this.data.cartDishList, d);
            return f ? i ? (this.updateCurrentDishId({
                currentSpuId: o,
                currentDiscount: c
            }), this.toggleContainerPanelAction(!0), this.updateCalculator({
                isShowCountCalc: !0
            }), void this.updateEditSkuDishAction({
                editDishSpuId: f.spuId,
                editDishGoodsNo: f.goodsNo
            })) : void ("plus" === a ? K.default.autoUseCouponAddToCart(f.spuId, f.skuId, 1, function() {
                t.addDish(f);
            }, function(e) {
                if (e.dishType === p.DISH_TYPE.PACKAGE) (0, D.judgeFixedPackage)(e) ? t.addFixedPackage(e, t.data.refactorLocalCart) : (t.updateCurrentDishId({
                    currentSpuId: e.spuId
                }), t.toggleContainerPanelAction(!0)); else if ((0, D.judgeComplexSpuDish)(e)) t.updateCurrentDishId({
                    currentSpuId: e.spuId
                }), t.toggleContainerPanelAction(!0); else {
                    var n = s.default.getIn(e, [ "skuMenuItems", 0 ]);
                    t.addDish(n);
                }
            }) : "minus" === a && this.minusDish(f)) : void 0;
        }
    },
    tabBarRenderFn: function(e) {
        var t = e.detail.tabBarList, n = void 0 === t ? [] : t;
        !this.data.hasTabBar && n.length && (l.default && l.default.setModuleData("menu-shop-info", {
            isVirtualTabbar: !0
        }), this.setData({
            hasTabBar: !0
        }));
        var a = this.data.requestParams.params || {}, o = a.restaurantViewId, r = void 0 === o ? "" : o, i = a.mtShopId, s = void 0 === i ? "" : i;
        (r || s) && u.default.setTabBarData(r || s, n);
    },
    openAdvertiseSpuDetail: function(e) {
        var t = e.exposeDishType, n = e.adType, a = e.spu, r = e.reportConfig;
        if (this.setDishAddFromAction(t), n === p.AD_TYPE.SPU) {
            if (!a) return;
            this.openDishDetail(o(o({}, a), {}, {
                reportConfig: r
            }));
        }
    },
    showDishTimeInfoModalFn: function(e) {
        var t = e.detail.spuId;
        this.showDishTimeInfoModal(t);
    },
    dishTimeInfoModalEvent: function() {
        this.toggleDishInfoModal(!1);
    },
    gotoThirdLogin: function() {
        this.pageViewModel.gotoThirdLoginClick();
    },
    gotoMemberLogin: function() {
        l.default.getLimoRuntime().navigateTo({
            url: this.data.actionUrl
        });
    },
    useCoupon: function(e) {
        var t = e.detail, n = t.couponDisplay, a = t.couponInfo, r = a || {}, i = r.skuList, s = r.unusedCouponCodes, d = r.src, c = r.type, h = r.subType;
        if (null != i && i.length && null != s && s.length) if (d === p.ACTIVITY_SRC.GROUPON && c === p.SHOP_PROMOTION_TYPE.BUY_GIFT) this.useGrouponCoupon({
            detail: {
                discountTempId: s[0],
                spuId: i[0].spuId,
                skuId: i[0].skuId
            }
        }); else if (d === p.ACTIVITY_SRC.MEMBER && c === p.SHOP_PROMOTION_TYPE.GROUPON_DISH_COUPON && h === p.SHOP_PROMOTION_TYPE.DISCOUNT) {
            var f = this.urlParams.shopId, m = u.default.getDishList(f);
            if (!m) return;
            for (var g = [], I = function(e) {
                var t = i[e], n = t.spuId, a = t.skuId, r = m[n];
                if (!r) return "continue";
                var s = null == r || null == (C = r.skuMenuItems) ? void 0 : C.find(function(e) {
                    return e.skuId === a;
                });
                g.push(o(o({}, r), {}, {
                    __currentSkuInfo: s
                }));
            }, T = 0; T < i.length; T++) {
                var C;
                I(T);
            }
            if (!g.length) return void l.default.getLimoRuntime().showToast({
                title: "当前没有可兑换的菜品",
                icon: "none",
                duration: 1e3
            });
            if (this.currentCouponInfo = a, 1 === g.length) {
                var E = g[0], _ = E.__currentSkuInfo;
                this.setData({
                    couponDishList: g
                }), E.dishType === p.DISH_TYPE.PACKAGE ? (0, D.judgeFixedPackage)(E) ? this.onCouponDishAddToCart({
                    detail: [ E ]
                }) : (this.updateCurrentDishId({
                    currentSpuId: E.spuId,
                    currentSkuId: null == _ ? void 0 : _.skuId,
                    containerOpenExtraData: {
                        scene: P.EXPOSE_DISH_TYPE.COUPON_DISH,
                        customAddToCart: !0
                    }
                }), this.toggleContainerPanelAction(!0)) : (0, D.judgeComplexSpuDish)(E) ? (this.updateCurrentDishId({
                    currentSpuId: E.spuId,
                    currentSkuId: null == _ ? void 0 : _.skuId,
                    containerOpenExtraData: {
                        scene: P.EXPOSE_DISH_TYPE.COUPON_DISH,
                        customAddToCart: !0
                    }
                }), this.toggleContainerPanelAction(!0)) : this.onCouponDishAddToCart({
                    detail: [ E ]
                });
            } else {
                var S;
                this.setData({
                    couponDishPanelTitle: (null == n || null == (S = n.data) ? void 0 : S.name) || "商品兑换券",
                    couponDishList: g,
                    showCouponDishPanel: !0
                });
            }
        }
    },
    onCloseCouponDishPanel: function() {
        this.setData({
            showCouponDishPanel: !1,
            couponDishList: [],
            selectedDish: []
        });
    },
    onCouponDishCheck: function(e) {
        var t = e.detail, n = null == t ? void 0 : t.__currentSkuInfo;
        t && (t.dishType === p.DISH_TYPE.PACKAGE ? (0, D.judgeFixedPackage)(t) ? this.onDishSelect({
            detail: {
                dish: t
            }
        }) : (this.updateCurrentDishId({
            currentSpuId: t.spuId,
            currentSkuId: null == n ? void 0 : n.skuId,
            containerOpenExtraData: {
                scene: P.EXPOSE_DISH_TYPE.COUPON_DISH_PANEL,
                customAddToCart: !0
            }
        }), this.toggleContainerPanelAction(!0)) : (0, D.judgeComplexSpuDish)(t) ? (this.updateCurrentDishId({
            currentSpuId: t.spuId,
            currentSkuId: null == n ? void 0 : n.skuId,
            containerOpenExtraData: {
                scene: P.EXPOSE_DISH_TYPE.COUPON_DISH_PANEL,
                customAddToCart: !0
            }
        }), this.toggleContainerPanelAction(!0)) : this.onDishSelect({
            detail: {
                dish: t
            }
        }));
    },
    onCouponDishAddToCart: function(e) {
        var t, n = this, a = e.detail[0], o = (a || {}).spuId, r = a.__currentDishInfo, i = a.__currentSkuInfo, s = a.skuMenuItems[0].skuId, d = this.urlParams.shopId, l = u.default.getDishList(d);
        if (l) {
            var c = l[o], h = null == c || null == (t = c.skuMenuItems) ? void 0 : t.find(function(e) {
                return e.skuId === s;
            }), f = K.default.getSelectedCoupon(this.currentCouponInfo), m = f.couponId;
            K.default.addMemberCouponToCart(f, c, h, function(e) {
                K.default.setCurrentMemberCouponId(m), e.dishType === p.DISH_TYPE.PACKAGE ? (0, 
                D.judgeFixedPackage)(e) ? n.addFixedPackage(e, n.data.refactorLocalCart, m) : (n.updateCurrentDishId({
                    currentSpuId: e.spuId
                }), n.addToCart(r, m)) : (0, D.judgeComplexSpuDish)(e) ? (n.updateCurrentDishId({
                    currentSpuId: e.spuId
                }), n.addToCart(r, m)) : n.addDish(i, m), n.onCloseCouponDishPanel(), n.toggleCouponPanel(!1);
            });
        }
    },
    useGrouponCoupon: function(e) {
        var t, n = this, a = e.detail || {}, o = a.discountTempId, r = a.spuId, i = a.skuId;
        if (o && r && i) {
            var d = this.urlParams.shopId, l = u.default.getDishList(d);
            if (l) {
                var c = l[r], h = null == c || null == (t = c.skuMenuItems) ? void 0 : t.find(function(e) {
                    return e.skuId === i;
                });
                K.default.addGrouponCouponDishToCart([ o ], c, h, !1, function(e) {
                    if (e.dishType === p.DISH_TYPE.PACKAGE) (0, D.judgeFixedPackage)(e) ? n.addFixedPackage(e, n.data.refactorLocalCart) : (n.updateCurrentDishId({
                        currentSpuId: e.spuId,
                        currentSkuId: i
                    }), n.toggleContainerPanelAction(!0)); else if ((0, D.judgeComplexSpuDish)(e)) n.updateCurrentDishId({
                        currentSpuId: e.spuId,
                        currentSkuId: i
                    }), n.toggleContainerPanelAction(!0); else {
                        var t = s.default.getIn(e, [ "skuMenuItems", 0 ]);
                        n.addDish(t);
                    }
                });
            }
        }
    },
    cancelGrouponCoupon: function(e) {
        var t = e.detail || {}, n = t.discountTempId, a = t.spuId, o = K.default.cancelDealCoupon(n);
        o && this.minusCartGrouponDish(a, o);
    },
    closeTakeCouponPanel: function() {
        this.showTakeCouponPanelAction({
            takeCouponPanelTag: !1
        });
    },
    openCouponPanel: function(e) {
        this.showTakeCouponPanelAction({
            takeCouponPanelTag: !0,
            sourceType: e.detail.from
        });
    },
    handleTakeCoupon: function() {
        var e = this;
        return i(r.default.mark(function t() {
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return e.showTakeCouponTips = !0, t.next = 3, e._initPageShow(e.urlParams);

                  case 3:
                  case "end":
                    return t.stop();
                }
            }, t);
        }))();
    },
    updateDishList: function(e) {
        var t = e.detail.categoryId, n = (0, N.getSetObj)(this.data.allDishList, t, this.data.dishShowType);
        this.setData(n);
    },
    modifyDishList: function(e) {
        var t = e.detail.modifyObj;
        t && this.setData(t);
    },
    onTapTipsBannerButton: function(e) {
        var t = this;
        return i(r.default.mark(function n() {
            return r.default.wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    return n.next = 2, (0, C.handleTapTipsBannerButton)({
                        event: e,
                        onGotLocation: function(e) {
                            t.urlParams.authGeo !== ne.URLParams.AuthGeo.REQUIRED && t.saveUrlParameters(o(o({}, t.urlParams), {}, {
                                authGeo: ne.URLParams.AuthGeo.REQUIRED
                            })), t.setData({
                                location: e
                            }), t._initPageShow(t.urlParams);
                        },
                        Limo: l.default
                    });

                  case 2:
                  case "end":
                    return n.stop();
                }
            }, n);
        }))();
    },
    closeOrderProgress: function() {
        u.default.setOrderProgress(this.urlParams.shopId);
    },
    updatePrePriceTipsFn: function() {
        this.data.showPrePriceTips && this.updatePrePriceTips(!1);
    }
}), x.plugins);