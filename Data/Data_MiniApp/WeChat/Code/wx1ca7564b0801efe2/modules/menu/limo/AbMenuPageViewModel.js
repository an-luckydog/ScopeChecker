var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.AbMenuPageViewModel = void 0;

var o = require("../../../b/helpers/objectSpread2"), n = require("../../../b/helpers/classCallCheck"), a = require("../../../b/helpers/createClass"), t = require("../../../miniprogram_npm/seamless-immutable/index.js"), i = require("../../../lib/accountBindUtil"), r = require("../../../constants/bizConstants"), s = e(require("../../../api/rmsStorage")), u = require("./ComponentsViewModel"), l = require("../pageViewModel"), m = e(require("../grouponCoupon/GrouponCouponSdk")), d = e(require("../../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), p = function() {
    function e(o) {
        n(this, e), this.pageInstance = void 0, this.Limo = void 0, this.menuComponentsModel = new u.ComponentsViewModel(), 
        this.urlParams = void 0, this.formatFunctionCollection = {
            "menu-shop-info": this.menuComponentsModel.formatShopInfoData,
            "member-info": this.menuComponentsModel.formatMemberInfoData,
            "advertising-carousel": this.menuComponentsModel.formatAdCarouselData,
            "menu-popup-windows": this.menuComponentsModel.formatPopupWindowsData,
            "recommendation-module": this.menuComponentsModel.formatRecommendationInfoData,
            "notice-config": this.menuComponentsModel.formatNoticeConfigData,
            "register-panel": this.menuComponentsModel.formatRegisterPanelData
        };
        var a = o.pageInstance, t = o.Limo;
        this.pageInstance = a, this.Limo = t;
    }
    return a(e, [ {
        key: "getMenuViewModel",
        value: function(e) {
            for (var n, a, i, r = [], u = (0, t.asMutable)(e, {
                deep: !0
            }), l = u.moduleSortList, m = void 0 === l ? [] : l, d = u.moduleData, p = e.progressInfo, c = 0; c < m.length; c++) {
                var h = m[c];
                if (this.formatFunctionCollection[h]) {
                    var f, C, g = o(o({}, null == (f = d[h]) ? void 0 : f.layout), {}, {
                        zIndex: "auto"
                    });
                    switch (h) {
                      case "register-panel":
                        g = {
                            zIndex: 96
                        };
                        break;

                      case "menu-popup-windows":
                        g = {
                            zIndex: 97
                        };
                        break;

                      case "member-info":
                        null != (n = d[h]) && n.layout || (g = {
                            marginHorizontal: 30,
                            zIndex: "auto"
                        });
                        break;

                      case "menu-shop-info":
                        null != (a = d[h]) && a.data && p && !s.default.getOrderProgress(null == (i = this.urlParams) ? void 0 : i.shopId) && (d[h].data.progressInfo = p);
                    }
                    r.push({
                        name: h,
                        data: this.formatFunctionCollection[h](null == (C = d[h]) ? void 0 : C.data, this.urlParams),
                        layout: g
                    });
                } else {
                    var M, v, b = (null == (M = d[h]) ? void 0 : M.layout) || {}, I = (null == (v = d[h]) ? void 0 : v.data) || {};
                    switch (h) {
                      case "top-sticky-container":
                        b = o(o({}, b), {}, {
                            zIndex: 3
                        });
                        break;

                      case "basic-canvas":
                        I.isMemberCanvas = !1, I.loginCanvasConfig = I.canvasConfig, h = "member-canvas";
                    }
                    r.push({
                        name: h,
                        data: I,
                        layout: b
                    });
                }
            }
            r.push({
                name: "panel-container-menu",
                data: {},
                layout: {
                    zIndex: 1e3
                }
            });
            var w = {
                modules: r
            };
            return w = this.updateMenuLimoModules({
                limoMenuData: w
            });
        }
    }, {
        key: "updateMenuLimoModules",
        value: function(e) {
            var o = e.limoMenuData, n = [];
            return d.default.isWxNative || n.push({
                name: "agreement-confirm",
                data: {
                    shopId: this.urlParams.shopId,
                    fromMenu: !0
                },
                layout: {
                    zIndex: 999
                }
            }), n.reduce(function(e, o) {
                return (0, l.addCustomLimoModule)(e, o.name, o.data, o.layout);
            }, o || []), (0, t.asMutable)(o, {
                deep: !0
            });
        }
    }, {
        key: "gotoThirdLoginClick",
        value: function() {
            (0, i.gotoThirdLoginPath)(r.ACCOUNT_BIND_CODE.MT, !1);
        }
    }, {
        key: "updateGrouponCouponSwiperModule",
        value: function(e, o) {
            var n, a = null == (n = this.pageInstance) ? void 0 : n.data.couponList;
            if ((e || o) && a) {
                var t, i = (0, u.formatCouponAssistantSwiper)({
                    couponList: a,
                    dealCoupons: e,
                    selectedCoupons: o
                });
                null == (t = this.pageInstance) || t.setCouponListAction(i);
            }
            m.default.grouponCouponModel && this.Limo.setModuleData("groupon-coupon-swiper", this.menuComponentsModel.formatGrouponCouponSwiperData(m.default.grouponCouponModel, this.urlParams));
        }
    } ]), e;
}();

exports.AbMenuPageViewModel = p;