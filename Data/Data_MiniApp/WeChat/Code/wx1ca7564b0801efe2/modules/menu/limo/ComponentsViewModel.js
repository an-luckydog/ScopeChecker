var o = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ComponentsViewModel = void 0, exports.formatCouponAssistantSwiper = function(o) {
    var e = o.couponList, t = o.dealCoupons, u = void 0 === t ? [] : t, r = o.selectedCoupons, a = void 0 === r ? [] : r;
    return e.map(function(o) {
        return o.couponInfo ? o.couponInfo.src === i.ACTIVITY_SRC.GROUPON && o.couponInfo.type === i.SHOP_PROMOTION_TYPE.BUY_GIFT ? n(n({}, o), {}, {
            couponInfo: n(n({}, o.couponInfo), {}, {
                usedCouponCodes: (0, f.filterSelectedCouponCodes)(o.couponInfo.couponCodes, u),
                unusedCouponCodes: (0, f.filterAvailableCouponCodes)(o.couponInfo.couponCodes, u)
            })
        }) : o.couponInfo.src === i.ACTIVITY_SRC.MEMBER && o.couponInfo.type === i.SHOP_PROMOTION_TYPE.GROUPON_DISH_COUPON && o.couponInfo.subType === i.SHOP_PROMOTION_TYPE.DISCOUNT ? n(n({}, o), {}, {
            couponInfo: n(n({}, o.couponInfo), {}, {
                usedCouponCodes: o.couponInfo.couponCodes.filter(function(o) {
                    return null == a ? void 0 : a.some(function(e) {
                        return e.couponId === o;
                    });
                }),
                unusedCouponCodes: o.couponInfo.couponCodes.filter(function(o) {
                    return !(null != a && a.some(function(e) {
                        return e.couponId === o;
                    }));
                })
            })
        }) : o : o;
    });
};

var e = require("../../../b/helpers/toConsumableArray"), n = require("../../../b/helpers/objectSpread2"), t = require("../../../b/helpers/classCallCheck"), u = require("../../../b/helpers/createClass"), r = o(require("../../../api/rmsStorage")), a = o(require("../../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), i = require("../../../constants/bizConstants"), s = require("../../../constants/path"), l = require("../../../miniprogram_npm/@components/limo-menu/menu-constants/actionItem"), p = require("../../../lib/env"), c = require("../viewModel"), d = o(require("../grouponCoupon/GrouponCouponSdk")), f = require("../../groupCouponHelper"), C = function() {
    function o() {
        t(this, o);
    }
    return u(o, [ {
        key: "formatShopInfoData",
        value: function(o, e) {
            if (!o) return null;
            var t = o.headActionList, u = o.tableName, c = o.peopleCountText, d = e.shopId, f = e.tableNum, C = r.default.getPreorderInfo(d);
            if (Number(null == e ? void 0 : e.reserveMode) === i.DISH_SOURCE.RESERVE && null != C && C.peopleCount && (c = (null == C ? void 0 : C.peopleCount) + "人点餐"), 
            t) {
                var m = a.default.stringify(e, !0);
                t.forEach(function(o) {
                    switch (o.type) {
                      case l.ACTION_ITEM_TYPE.SEARCH:
                        var e = "".concat(s.PATH.search, "?").concat(m);
                        o.actionUrl = p.isNativeMp ? e : "./search?" + m;
                        break;

                      case l.ACTION_ITEM_TYPE.ORDER:
                        p.isUnionPay && (o.actionUrl = "./order-list?bizDataType=20&" + m);
                        break;

                      case l.ACTION_ITEM_TYPE.PERSONAL_CENTER:
                        o.showToastText = !o.showToastText && r.default.getIsToastFromMTLoginOnce();
                    }
                });
            }
            return n(n({}, o), {}, {
                headActionList: t,
                peopleCountText: c,
                shopId: d,
                tableNum: f,
                tableName: u,
                urlParams: e
            });
        }
    }, {
        key: "formatMemberInfoData",
        value: function(o) {
            if (!o) return null;
            var e = o.theme, t = o.layout;
            return n(n({}, o), {}, e ? {
                animationStyle: ""
            } : {
                theme: {
                    preset: 1,
                    custom: {
                        backgroundColor: null,
                        buttonColor: null,
                        buttonTextColor: null,
                        textColor: null
                    }
                },
                layout: t || {
                    radius: 16
                },
                animationStyle: ""
            });
        }
    }, {
        key: "formatAdCarouselData",
        value: function(o, n) {
            if (!o || !n) return null;
            var t = n.shopId, u = o.banners, r = o.heightImg, a = o.layout, i = o.bannerInterval, s = o.advId, l = o.autoplay;
            return Array.isArray(u) ? {
                banners: e(u),
                heightImg: r || 210,
                layout: a || {},
                shopId: t,
                bannerInterval: i,
                advId: s,
                autoplay: l
            } : null;
        }
    }, {
        key: "formatPopupWindowsData",
        value: function(o, e) {
            (0, c.saveActivityTypeList)(o);
            var t = e.spuId, u = e.shopId, a = o.adPopupDecoration, s = o.takeCoupon, l = o.buffetLimitMealTips;
            if ((t || !o) && (null == l || !l.length)) return null;
            if (a && (a.advId || !r.default.getHasShowAdBoardAtMenu(u))) return {
                adPopupDecoration: n(n({}, a), {}, {
                    show: !0
                }),
                takeCoupon: s,
                shopId: u,
                buffetLimitMealTips: l
            };
            if (!s) return {
                buffetLimitMealTips: l,
                shopId: u
            };
            var p = s.resultCode, d = s.couponListURL, f = s.buttonText, C = s.loginURL, m = s.failMainCause, I = s.failSubCauseList, v = void 0 === I ? [] : I, T = s.partFailCause, h = s.activityTypeList, y = s.givePointInfo, b = s.couponDisplayInfos;
            return p === i.TAKE_COUPON_RESULT.NO_DATA ? {
                buffetLimitMealTips: l,
                shopId: u
            } : {
                takeCoupon: {
                    resultCode: p,
                    couponListURL: d,
                    buttonText: f,
                    loginURL: C,
                    failMainCause: m,
                    failSubCauseList: v,
                    partFailCause: T,
                    activityTypeList: h,
                    givePointInfo: y,
                    show: !0,
                    couponDisplayInfos: b
                },
                adPopupDecoration: void 0,
                shopId: u,
                buffetLimitMealTips: l
            };
        }
    }, {
        key: "formatRecommendationInfoData",
        value: function(o, e) {
            var t;
            return null != o && null != (t = o.recommendTabs) && t.length ? n(n({
                urlParams: e
            }, o), {}, {
                menuUpdateTime: Date.now()
            }) : null;
        }
    }, {
        key: "formatGrouponCouponLoginData",
        value: function(o) {
            var e = o.showMTBind;
            return {
                loginMode: o.couponAssistantLoginMode,
                customClass: e ? "groupon-coupon-login-menu" : ""
            };
        }
    }, {
        key: "formatGrouponCouponSwiperData",
        value: function(o, e) {
            var t, u = o.mtUserName, a = o.grouponCouponList, i = void 0 === a ? [] : a, s = o.style, l = e.shopId, p = r.default.getDealCoupons(l);
            return d.default.grouponCouponModel = o, {
                shopId: l,
                mtUserName: u,
                couponStyle: s,
                grouponCouponList: null == i || null == (t = i.map(function(o) {
                    var e, t = o.discountTempIdList;
                    return n(n({}, o), {}, {
                        couponStatusList: null == t || null == (e = t.map(function(o) {
                            var e;
                            return {
                                discountTempId: o,
                                selectStatus: null == p || null == (e = p.find(function(e) {
                                    return e.discountTempId === o;
                                })) ? void 0 : e.selectStatus
                            };
                        })) ? void 0 : e.filter(function(o) {
                            return void 0 !== o.selectStatus;
                        })
                    });
                })) ? void 0 : t.filter(function(o) {
                    var e;
                    return null == (e = o.couponStatusList) ? void 0 : e.length;
                })
            };
        }
    }, {
        key: "formatRegisterPanelData",
        value: function(o) {
            return {
                actionUrl: o.actionUrl
            };
        }
    }, {
        key: "formatNoticeConfigData",
        value: function(o) {
            return n({}, o);
        }
    }, {
        key: "formatAddressListModalData",
        value: function(o) {
            var e = !0;
            return r.default.getUserSelectedAddressFlag() ? e = !1 : r.default.setUserSelectedAddressFlag(!0), 
            n(n({}, o), {}, {
                show: e
            });
        }
    } ]), o;
}();

exports.ComponentsViewModel = C;