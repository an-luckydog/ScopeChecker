var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.calculateGrouponPromotion = exports.calculateCartPromotion = void 0, 
require("../../b/helpers/Arrayincludes");

var t = require("../../b/helpers/objectSpread2"), o = require("../../b/helpers/toConsumableArray"), n = e(require("../../miniprogram_npm/seamless-immutable/index.js")), u = e(require("../../lib/mix/toast")), a = e(require("../../lib/mix/loading")), r = require("../../lib/number"), i = require("../actions/newCart"), c = require("../actions/baseCart"), l = require("../actions/panel"), s = require("../../modules/operateCartHelper"), d = require("../../modules/dishHelper"), f = require("../../modules/commonHelper"), I = require("../../constants/bizConstants"), m = require("../../constants/reportConstants"), p = require("../../constants/ajaxResCode"), C = require("../../lib/env"), D = e(require("../../lib/mix/log")), P = require("../../modules/LXHelper"), h = require("../../modules/menu/cart/cartReport"), g = e(require("../../api/calculate")), T = e(require("../../modules/menu/grouponCoupon/GrouponCouponSdk")), O = e(require("../../api/rmsStorage")), _ = require("../actions/report"), R = require("../../constants/cartConstants");

function E(e) {
    var n, u = e.promotionCalculateVersion, a = e.memberInfo, r = e.dishList, i = e.applyCouponViewId, c = e.cancelCouponViewId, l = e.mtShopId, d = e.tableNum, I = e.reserveMode, m = e.bizMode, p = e.autoUseDealCoupon, C = e.posOrderId, D = e.openTableInfo, P = e.dealCoupons, h = e.cartDishList, g = e.cartDishSortMapList, _ = (0, 
    f.getPreOrderInfo)(l, I).peopleCount, R = O.default.getMenuCalculateCache(l) || {};
    h = h || O.default.getCartDishList(l, d), g = g || O.default.getCartDishSortMapList(l, d);
    var E = (0, s.transToCloudCartDishList)(h, g, r).reduce(function(e, t) {
        try {
            return e.some(function(e) {
                return !(null == e || !e.itemNo) && e.itemNo === (null == t ? void 0 : t.itemNo);
            }) ? e : [].concat(o(e), [ t ]);
        } catch (n) {
            n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
            return [].concat(o(e), [ t ]);
        }
    }, []), v = a.memberPriceBenefitCardName, N = a.memberPriceBenefitSource, A = {
        memberId: a.memberId,
        memberCardId: a.cardId,
        memberCardToken: a.memberCardToken,
        usableMemberPrice: a.memberPriceAvailable || a.canUseMemberPrice,
        autoUseFullAssetDiscount: a.autoUseFullAssetDiscount,
        memberOrderDiscountRate: a.memberOrderDiscountRate,
        memberConflict: a.memberConflict,
        memberCampaignRule: a.memberCampaignRule,
        availableDiscount: a.availableDiscount,
        fullAssetUseDiscount: a.fullAssetUseDiscount,
        assetUseDiscountType: a.assetUseDiscountType,
        vipPriceDiscountTogether: a.vipPriceDiscountTogether,
        userConflict: a.userConflict,
        memberPriceBenefitCardName: v,
        memberPriceBenefitSource: N
    };
    P && P.length || (P = O.default.getDealCoupons(l));
    var S = O.default.getUserSelectedAddress(), b = O.default.getDeliveryInfo(l), M = null == b || null == (n = b.takeAwayDeliveryFeeRule) ? void 0 : n.deliveryFee, L = T.default.getSelectedCoupons();
    return t(t({
        autoApplyDiscount: !0,
        cartChangeVersion: u,
        mtShopId: l,
        tableNum: d,
        peopleCount: (null == D ? void 0 : D.peopleCount) || _,
        memberInfo: A,
        additionDishInfos: E,
        requestSource: 0,
        applyCouponViewId: i,
        cancelCouponViewId: c,
        dealCoupons: P,
        reserveMode: I,
        autoUseDealCoupon: p
    }, R), {}, {
        bizMode: m,
        posOrderId: C || "",
        selectedAddressId: (null == S ? void 0 : S.id) || 0,
        deliveryFee: M,
        selectedCoupons: L
    });
}

function v(e, t, o) {
    if (t) if (o) {
        var n = "PROMOTION_TOASTED";
        O.default.getMemberPriceTip(e) !== n && (u.default.show({
            content: t,
            duration: t.length > 8 ? 5e3 : 2e3
        }), O.default.setMemberPriceTip(e, n));
    } else u.default.show({
        content: t,
        duration: t.length > 8 ? 5e3 : 2e3
    });
}

exports.calculateCartPromotion = function(e) {
    return function(t, s) {
        var f = n.default.getIn(s(), [ "cart", "shopId" ]) || 0, N = n.default.getIn(s(), [ "cart", "tableNum" ]) || "", A = n.default.getIn(s(), [ "cart", "processId" ]) || "", S = +n.default.getIn(s(), [ "extraInfo", "urlParams" ]).reserveMode, b = n.default.getIn(s(), [ "extraInfo", "headInfo", "orderInfo", "posOrderId" ]), M = n.default.getIn(s(), [ "extraInfo", "headInfo", "shopConfig", "bizMode" ]), L = n.default.getIn(s(), [ "cart", "cartDishList" ]), y = n.default.getIn(s(), [ "cart", "cartDishSortMapList" ]), U = n.default.getIn(s(), [ "cart", "promotionCalculateVersion" ]) + 1, x = (0, 
        d.getDishListFromStore)(s()), H = n.default.getIn(s(), [ "extraInfo", "headInfo", "memberInfo" ]) || (0, 
        n.default)({}), q = n.default.getIn(s(), [ "extraInfo", "headInfo", "orderInfo", "orderCreateTime" ]) || "", V = n.default.getIn(s(), [ "extraInfo", "headInfo", "calculateInfo" ]), w = n.default.getIn(s(), [ "extraInfo", "headInfo", "openTableInfo" ]), F = T.default.getAutoUseDealCoupon(), Y = T.default.getApplyCouponId(), B = T.default.getCancelCouponId(), k = T.default.getDealCoupons();
        Y && (k = k.map(function(e) {
            return e.discountTempId === Y && (e = n.default.set(e, "selectStatus", 1)), e;
        })), B && (k = k.map(function(e) {
            return e.discountTempId === B && (e = n.default.set(e, "selectStatus", 0)), e;
        })), t((0, c.updatePromotionCalculateVersion)(U));
        var G = E({
            promotionCalculateVersion: U,
            memberInfo: H,
            dishList: x,
            applyCouponViewId: Y,
            cancelCouponViewId: B,
            mtShopId: f,
            tableNum: N,
            reserveMode: S,
            bizMode: M,
            dealCoupons: k,
            cartDishList: L,
            cartDishSortMapList: y,
            autoUseDealCoupon: F,
            posOrderId: b,
            openTableInfo: w
        });
        null != e && e.skuId && (G.menuOperateData = e), G.orderCreateTime = q, G.calculateInfo = V, 
        G.usedPoint = n.default.getIn(s(), [ "orderInfo", "usedPoint" ]), G.usedPointAmount = n.default.getIn(s(), [ "orderInfo", "usedPointAmount" ]), 
        G.calculateInfo = {
            processId: A
        }, g.default.requestPromotionCalculate(G).then(function(g) {
            var E, N, A, S, M;
            (0, h.sendCartCalculatePoint)(h.CART_ORDER_CALCULATOR_PROCEDURE.CART_ORDER_CALCULATE_CALLBACK), 
            g = (0, n.default)(g || {}), a.default.close();
            var L = g.data || (0, n.default)({});
            g.code === p.RES_CODE.LIMIT_ORDER_DISH && (null == e ? void 0 : e.type) === R.UPDATE_CART_TYPE.ADD_DISH && (0, 
            d.limitOrderDishHandle)(g.msg), g.code === p.RES_CODE.POINT_FAIL && u.default.show(g.msg);
            var y = L.menuCacheId, U = L.menuCacheVal;
            O.default.setMenuCalculateCache(f, {
                menuCacheId: y,
                menuCacheVal: U
            });
            var x = L.dealCoupons || (0, n.default)([]), H = L.selectedCoupons;
            (null == H ? void 0 : H.length) > 0 && T.default.setSelectedCoupons(H), T.default.setDealCoupons(x, H), 
            T.default.updateGrouponDishInfo(x);
            var q = L.additionDishInfos || (0, n.default)([]);
            if (t((0, c.updateCalculateProcessIdAction)((null == L || null == (E = L.calculateInfo) ? void 0 : E.processId) || "")), 
            L.cartChangeVersion === n.default.getIn(s(), [ "cart", "promotionCalculateVersion" ])) {
                (0, h.sendCartCalculatePoint)(h.CART_ORDER_CALCULATOR_PROCEDURE.CART_ORDER_CALCULATE_VALIDATION);
                var V = (0, n.default)({}), w = (0, n.default)({}), F = (0, n.default)({});
                q.forEach(function(e) {
                    var t, o = e.sourceItemNo ? e.sourceItemNo : e.itemNo, u = !!((t = e) && t.discounts && t.discounts.length) && (t.discounts.includes(I.DISH_PROMOTION_TYPE_SRC.KOU_BEI_DISH_COUPON) || t.discounts.includes(I.DISH_PROMOTION_TYPE_SRC.GROUP_COUPON_DISH_COUPON) || t.discounts.includes(I.DISH_PROMOTION_TYPE_SRC.KOU_BEI_TIMES_CARD) || t.discounts.includes(I.DISH_PROMOTION_TYPE_SRC.DOUYIN_TIMES_CARD) || t.discounts.includes(I.DISH_PROMOTION_TYPE_SRC.DOUYIN_DISH_COUPON)), a = function(e) {
                        return !!(e && e.discounts && e.discounts.length) && e.discounts.includes(I.DISH_PROMOTION_TYPE_SRC.DISH_EXCHANGE_COUPON);
                    }(e), i = e.count || 0;
                    if (o) {
                        (u || a) && (w = u ? w[o] ? n.default.setIn(w, [ o, "count" ], +n.default.getIn(w, [ o, "count" ]) + i) : n.default.setIn(w, [ o, "count" ], i) : w[o] ? n.default.setIn(w, [ o, "exchangeCount" ], +n.default.getIn(w, [ o, "exchangeCount" ]) + i) : n.default.setIn(w, [ o, "exchangeCount" ], i));
                        var c = e.unitOrgPrice, l = e.unitPrice, s = e.totalPrice;
                        if (e.canWeight) {
                            var d = e.weight, f = e.methods.reduce(function(e, t) {
                                return e + t.items.reduce(function(e, t) {
                                    return t.priceType === I.PRICE_TYPE.FIXED ? e + t.unitPrice : e + t.unitPrice * d;
                                }, 0);
                            }, 0), m = e.tastes.reduce(function(e, t) {
                                return e + t.items.reduce(function(e, t) {
                                    return e + t.unitOrgPrice * t.count;
                                }, 0);
                            }, 0);
                            c = e.unitRawPrice * d + f + m;
                            var p = e.tastes.reduce(function(e, t) {
                                return e + t.items.reduce(function(e, t) {
                                    return e + t.unitPrice * t.count;
                                }, 0);
                            }, 0);
                            l = e.unitBasePrice * d + f + p;
                        }
                        (u || a) && (l = e.totalPrice - e.discountPayAmount);
                        var C, D = n.default.getIn(V, [ o, "originPrice" ]) || 0, P = n.default.getIn(V, [ o, "actualPrice" ]) || 0, h = c * e.count || 0;
                        C = u || a || null == s ? l * e.count || 0 : s, V = n.default.set(V, o, (0, n.default)({
                            originPrice: (0, r.roundFloat)(D + h, 2),
                            actualPrice: (0, r.roundFloat)(P + C, 2)
                        })), F = n.default.set(F, e.itemNo, (0, n.default)({
                            originPrice: (0, r.roundFloat)(h, 2),
                            actualPrice: (0, r.roundFloat)(C, 2),
                            cartItemsCount: e.count,
                            unitPrice: l,
                            unitOriginPrice: c
                        }));
                    }
                });
                var Y = L.toSelectDiscounts || (0, n.default)([]);
                Y = Y.filter(function(e) {
                    return e.selectStatus === I.PROMOTION_SELECT_STATUS.SELECTED || e.selectStatus === I.PROMOTION_SELECT_STATUS.DEFAULT_SELECTED;
                });
                var B = (0, n.default)({
                    discountAmount: L.discountAmount || 0,
                    pointTotalDiscountAmount: L.pointTotalDiscountAmount || 0,
                    cartItemPrice: V,
                    selectDiscounts: Y,
                    realCartItemPrice: F
                });
                t((0, c.updateCartPrice)(B)), t((0, c.updatePromotionMap)(w)), O.default.setCartPrice(f || 0, B), 
                t((0, c.updateCartDiscountData)(L.cartDiscountData)), function(e, t, u) {
                    var a = n.default.getIn(u(), [ "cart", "shopId" ]) || 0, c = n.default.getIn(u(), [ "cart", "tableNum" ]) || "", l = n.default.getIn(u(), [ "cart", "cartDishList" ]) || (0, 
                    n.default)([]), s = n.default.getIn(e, [ "additionDishInfos" ]) || (0, n.default)([]), d = n.default.getIn(e, [ "fullDiscountSuit" ]) || (0, 
                    n.default)([]), f = n.default.getIn(e, [ "cartItemRealPrice" ]) || (0, n.default)({}), m = n.default.getIn(e, [ "buyFreeSuit" ]) || (0, 
                    n.default)([]);
                    n.default.getIn(e, [ "dealCoupons" ]) || (0, n.default)([]);
                    var p = JSON.parse(JSON.stringify(l)), C = n.default.getIn(e, [ "couponDiscountInfos" ]) || (0, 
                    n.default)({}), D = {};
                    s.forEach(function(e) {
                        D[e.itemNo] = {
                            sourceItemNo: e.sourceItemNo ? e.sourceItemNo : e.itemNo,
                            itemCount: e.count
                        };
                    }), Object.keys(p).forEach(function(t) {
                        var u = p[t];
                        Object.keys(u).map(function(t) {
                            var a = u[t], i = [];
                            s.forEach(function(e) {
                                a.goodsNo !== e.itemNo && a.goodsNo !== e.sourceItemNo || i.push(e.itemNo);
                            });
                            var c = [];
                            a.dishType === I.DISH_TYPE.NORMAL && d.forEach(function(e) {
                                var t = e.conditionItemNos || (0, n.default)([]), o = [], u = !1;
                                t.forEach(function(e) {
                                    -1 !== i.indexOf(e) && (u = !0);
                                }), u && (t.forEach(function(e) {
                                    o.push({
                                        sourceItemNo: D[e].sourceItemNo,
                                        itemNo: e,
                                        itemCount: D[e].itemCount,
                                        itemPrice: {
                                            originPrice: f[e].originPrice,
                                            actualPrice: f[e].actualPrice
                                        }
                                    });
                                }), c.push({
                                    discountType: e.discountType,
                                    conditionCount: e.currentThreshold,
                                    discountValue: e.currentDiscount,
                                    conditionItems: o
                                }));
                            });
                            var l = [];
                            null == m || m.forEach(function(e) {
                                var t = e.conditionItemNos || (0, n.default)([]), o = e.discountItemNos || (0, n.default)([]), u = [];
                                o.forEach(function(e) {
                                    var t = u.find(function(t) {
                                        return t.sourceItemNo === D[e].sourceItemNo;
                                    });
                                    t ? t.itemCount += D[e].itemCount : u.push({
                                        itemNo: e,
                                        itemCount: D[e].itemCount,
                                        sourceItemNo: D[e].sourceItemNo
                                    });
                                });
                                var a = [], r = !1;
                                t.forEach(function(e) {
                                    -1 !== i.indexOf(e) && (r = !0);
                                }), r && (t.forEach(function(e) {
                                    a.push({
                                        sourceItemNo: D[e].sourceItemNo,
                                        itemNo: e,
                                        itemCount: D[e].itemCount,
                                        itemPrice: {
                                            originPrice: f[e].originPrice,
                                            actualPrice: f[e].actualPrice
                                        }
                                    });
                                }), u.forEach(function(e) {
                                    var t = e.itemNo, o = e.itemCount, n = e.sourceItemNo;
                                    a.push({
                                        sourceItemNo: n,
                                        itemNo: t,
                                        itemCount: o,
                                        itemPrice: {
                                            originPrice: f[t].originPrice * o,
                                            actualPrice: f[t].actualPrice * o
                                        }
                                    });
                                }), l.push({
                                    discountType: 15,
                                    discountDishItem: a,
                                    campaignId: e.campaignId,
                                    src: e.src
                                }));
                            });
                            var p = [];
                            C.forEach(function(e) {
                                var t = e.sourceItemNo, o = e.couponDiscountItems, n = [], u = [], a = 0;
                                o.forEach(function(e) {
                                    var t = e.couponTemplateId, o = e.itemNos, r = e.couponsAmount, i = e.count, c = e.couponCodes, l = e.remainingCouponCount, s = e.type, d = e.couponGroupId, I = {
                                        itemCount: i,
                                        itemPrice: {
                                            originPrice: f[o[0]].originPrice * i,
                                            actualPrice: f[o[0]].actualPrice * i
                                        },
                                        discount: {
                                            couponTemplateId: t,
                                            couponsAmount: r,
                                            couponCodes: c,
                                            useGroupCoupon: !0,
                                            campaignDishes: [],
                                            allDiscount: [],
                                            remainingCouponCount: l,
                                            disabledPlus: !l,
                                            type: s,
                                            couponGroupId: d
                                        }
                                    };
                                    u.concat(o), a += i, n.push(I);
                                }), p.push({
                                    sourceItemNo: t,
                                    itemNoList: u,
                                    itemCount: a,
                                    conditionItems: n
                                });
                            });
                            var P = function(e, t, o) {
                                var u = o || {}, a = u.memberDiscounts, r = u.cartItemRealPrice, i = [];
                                return Array.isArray(a) ? (a.filter(function(e) {
                                    var t, o;
                                    return (null == e || null == (t = e.discountDetail) ? void 0 : t.src) === I.ACTIVITY_SRC.MEMBER && (null == e || null == (o = e.discountDetail) ? void 0 : o.discountType) === I.SHOP_PROMOTION_TYPE.SPECIAL_PRICE;
                                }).forEach(function(o) {
                                    var u, a = (null == o ? void 0 : o.discountDetail) || {}, c = (null == o || null == (u = o.discountDetail) || null == (u = u.conditionItems) ? void 0 : u.map(function(e) {
                                        return null == e ? void 0 : e.itemNo;
                                    })) || (0, n.default)([]), l = [], s = !1;
                                    if (c.forEach(function(e) {
                                        -1 !== t.indexOf(e) && (s = !0);
                                    }), s) {
                                        var d = c.map(function(t) {
                                            var o = e[t].sourceItemNo;
                                            return o === t ? void 0 : o;
                                        });
                                        c.concat(d).forEach(function(t) {
                                            t && l.push({
                                                sourceItemNo: e[t].sourceItemNo,
                                                itemNo: t,
                                                itemCount: e[t].itemCount,
                                                itemPrice: {
                                                    originPrice: r[t].originPrice,
                                                    actualPrice: r[t].actualPrice
                                                }
                                            });
                                        });
                                        var f = a.discountType;
                                        i.push({
                                            discountType: f,
                                            conditionItems: l
                                        });
                                    }
                                }), i) : i;
                            }(D, i, e), h = function(e, t, o) {
                                var n = o || {}, u = n.nthDiscountSuit, a = n.cartItemRealPrice, i = [];
                                return null != u && u.length ? (u.forEach(function(o) {
                                    var n = o.conditionItemNos || [], u = o.discountItemNos || [], c = n.concat(u), l = [], s = !1;
                                    c.forEach(function(e) {
                                        -1 !== t.indexOf(e.itemNo) && (s = !0);
                                    }), s && (c.forEach(function(t) {
                                        var o, n, u = t.count, i = t.itemNo, c = a[i], s = c.cartItemsCount, d = c.originPrice, f = c.actualPrice, I = c.unitPrice, m = c.unitOriginPrice;
                                        s === u ? (o = d, n = f) : (o = (0, r.roundFloat)(m * u, 2), n = (0, r.roundFloat)(I * u, 2)), 
                                        l.push({
                                            sourceItemNo: e[i].sourceItemNo,
                                            itemNo: i,
                                            itemCount: u,
                                            itemPrice: {
                                                originPrice: o,
                                                actualPrice: n
                                            }
                                        });
                                    }), i.push({
                                        discountType: o.discountType,
                                        conditionItems: l,
                                        discountTexts: o.discountTexts,
                                        labelList: o.labelList
                                    }));
                                }), i) : [];
                            }(D, i, e);
                            return c.push.apply(c, o(P).concat(o(h))), a.allDiscount = c, a.allBuyFreeDiscount = l, 
                            a.allCouponDiscount = p, a.itemPrice = f[a.goodsNo], a;
                        });
                    }), t((0, i.updateCartBySRP)(a, c, p));
                }({
                    additionDishInfos: q,
                    fullDiscountSuit: L.fullDiscountSuit,
                    dealCoupons: L.dealCoupons,
                    selectedCoupons: L.selectedCoupons,
                    cartItemTotalPrice: V,
                    cartItemRealPrice: F,
                    buyFreeSuit: b ? [] : null == L || null == (N = L.cartDiscountData) ? void 0 : N.buyFreeSuit,
                    memberDiscounts: L.memberDiscounts,
                    promotionMap: w,
                    couponDiscountInfos: (null == L || null == (A = L.cartDiscountData) ? void 0 : A.couponDiscountInfos) || [],
                    nthDiscountSuit: (null == L || null == (S = L.cartDiscountData) ? void 0 : S.nthDiscountSuit) || []
                }, t, s), v(f, L.warnTips, L.warnTipsType), (0, h.sendCartCalculatePoint)(h.CART_ORDER_CALCULATOR_PROCEDURE.CART_ORDER_CALCULATE_FINISH), 
                t((0, l.updateRegisterActivity)((null == L || null == (M = L.memberInfo) ? void 0 : M.registerActivity) || {})), 
                function(e, t) {
                    var o = n.default.getIn(t(), [ "report", "dishOperationType" ]) || 0, u = n.default.getIn(t(), [ "report", "dishOperationTime" ]) || 0;
                    if (o && u) {
                        var a = Date.now() - u;
                        o === m.DISH_OPERATION_TYPE.ADD ? ((0, P.sendDuration)(C.isNativeMp ? "b_saaspay_i9gdk9h6_mv" : "b_saaspay_dqtf64xa_mv", a), 
                        D.default.addPerformance(C.isNativeMp ? m.RAPTOR_PERFORMANCE.MP.ALL.ADD_DISH_DURATION : m.RAPTOR_PERFORMANCE.H5.ADD_DISH_DURATION, a)) : o === m.DISH_OPERATION_TYPE.MINUS && ((0, 
                        P.sendDuration)(C.isNativeMp ? "b_saaspay_di8t27t0_mv" : "b_saaspay_giqk6ieh_mv", a), 
                        D.default.addPerformance(C.isNativeMp ? m.RAPTOR_PERFORMANCE.MP.ALL.MINUS_DISH_DURATION : m.RAPTOR_PERFORMANCE.H5.MINUS_DISH_DURATION, a)), 
                        e((0, _.setDishOperationAction)(0, 0));
                    }
                }(t, s);
            }
        }).catch(function(e) {
            a.default.close(), D.default.addError("购物车算价失败: ", e, {
                level: "info"
            });
        }), (0, h.sendCartCalculatePoint)(h.CART_ORDER_CALCULATOR_PROCEDURE.CART_ORDER_CALCULATE_START);
    };
};

exports.calculateGrouponPromotion = function(e, t, o, r) {
    return function(i, l) {
        a.default.show();
        var s = +n.default.getIn(l(), [ "extraInfo", "urlParams" ]).reserveMode, f = n.default.getIn(l(), [ "extraInfo", "headInfo", "shopConfig", "bizMode" ]), I = n.default.getIn(l(), [ "cart", "promotionCalculateVersion" ]) + 1, m = (0, 
        d.getDishListFromStore)(l()), C = n.default.getIn(l(), [ "extraInfo", "headInfo", "memberInfo" ]) || (0, 
        n.default)({}), P = n.default.getIn(l(), [ "extraInfo", "headInfo", "orderInfo", "orderCreateTime" ]) || "", h = n.default.getIn(l(), [ "extraInfo", "headInfo", "calculateInfo" ]), _ = T.default.getApplyCouponId(), N = T.default.getCancelCouponId(), A = T.default.getAutoUseDealCoupon(), S = T.default.getDealCoupons(), b = n.default.getIn(l(), [ "cart", "shopId" ]), M = n.default.getIn(l(), [ "cart", "tableNum" ]), L = n.default.getIn(l(), [ "cart", "processId" ]) || "", y = n.default.getIn(l(), [ "extraInfo", "headInfo", "orderInfo", "posOrderId" ]), U = n.default.getIn(l(), [ "extraInfo", "headInfo", "openTableInfo" ]);
        _ && (S = S.map(function(e) {
            return e.discountTempId === _ && (e = n.default.set(e, "selectStatus", 1)), e;
        })), N && (S = S.map(function(e) {
            return e.discountTempId === N && (e = n.default.set(e, "selectStatus", 0)), e;
        })), i((0, c.updatePromotionCalculateVersion)(I));
        var x = E({
            promotionCalculateVersion: I,
            memberInfo: C,
            dishList: m,
            applyCouponViewId: _,
            cancelCouponViewId: N,
            mtShopId: b,
            tableNum: M,
            reserveMode: s,
            dealCoupons: S,
            cartDishList: t,
            cartDishSortMapList: o,
            autoUseDealCoupon: A,
            bizMode: f,
            posOrderId: y,
            openTableInfo: U
        });
        x.orderCreateTime = P, x.calculateInfo = h, x.usedPoint = n.default.getIn(l(), [ "orderInfo", "usedPoint" ]), 
        x.usedPoint = n.default.getIn(l(), [ "orderInfo", "usedPointAmount" ]), x.calculateInfo = {
            processId: L
        }, null != e && e.skuId && (x.menuOperateData = e), g.default.requestPromotionCalculate(x).then(function(t) {
            var o = (t = (0, n.default)(t || {})).data || (0, n.default)({}), l = t.code;
            t.code === p.RES_CODE.LIMIT_ORDER_DISH && (null == e ? void 0 : e.type) === R.UPDATE_CART_TYPE.ADD_DISH && (0, 
            d.limitOrderDishHandle)(t.msg), t.code === p.RES_CODE.POINT_FAIL && u.default.show(t.msg);
            var s = o.menuCacheId, f = o.menuCacheVal;
            if (O.default.setMenuCalculateCache(b, {
                menuCacheId: s,
                menuCacheVal: f
            }), l !== p.RES_CODE.SUCCESS && l !== p.RES_CODE.LIMIT_ORDER_DISH) T.default.recoverCouponStatus(x.applyCouponViewId, x.cancelCouponViewId), 
            a.default.close(), u.default.show(t.msg); else {
                var I;
                i((0, c.updateCalculateProcessIdAction)((null == o || null == (I = o.calculateInfo) ? void 0 : I.processId) || ""));
                var m = o.additionDishInfos || (0, n.default)([]), C = o.dealCoupons, D = o.selectedCoupons, P = C.filter(function(e) {
                    return e.discountTempId === _;
                })[0];
                if (P) {
                    var h = n.default.getIn(P, [ "discountDetail", "discountItems" ]);
                    if (h && h.length) {
                        var g = (0, n.default)([]);
                        h.forEach(function(e) {
                            g = g.concat([ e.itemNo ]);
                        }), m.filter(function(e) {
                            return g.includes(e.itemNo);
                        }).length || u.default.show("团购券匹配到线下菜品，下单页可确认使用");
                    }
                }
                v(b, o.warnTips, o.warnTipsType), T.default.setDealCoupons(C, D), r();
            }
        }).catch(function(e) {
            a.default.close(), T.default.recoverCouponStatus(x.applyCouponViewId, x.cancelCouponViewId), 
            D.default.addError("团购算价失败: ", e, {
                level: "info"
            });
        });
    };
};