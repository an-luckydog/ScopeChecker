var t = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0, require("../../../b/helpers/Arrayincludes");

var e = require("../../../b/helpers/createForOfIteratorHelper"), r = t(require("../../../miniprogram_npm/seamless-immutable/index.js")), i = t(require("../../../api/rmsStorage")), a = t(require("../../../api/cartPike")), u = t(require("../../../lib/mix/toast")), n = t(require("../../../lib/mix/confirm")), o = require("../../../constants/cartConstants"), l = require("../../../lib/mix/util"), s = t(require("../../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), d = require("../../../lib/env"), c = require("../../../store/actions/mustDish"), p = require("../../../store/actions/cart"), f = require("../../../store/asyncActions/cart"), h = require("../../../store/actions/newCart"), C = require("../../dishHelper"), m = require("../../cartHelper"), g = require("../../../lib/wx/app-info"), v = require("./cartDataTransfer"), D = t(require("../../MustDishSdk")), S = t(require("../grouponCoupon/GrouponCouponSdk")), L = require("../dish/DishSdk"), I = require("../../panel/package/utils"), M = function() {
    var t;
    return d.isNativeMp ? null == (t = (0, g.getNewApp)()) || null == (t = t.rmsDiancanStore) || null == (t = t.getState()) || null == (t = t.cart) ? void 0 : t.tableNum : (0, 
    l.getMixUrlParam)("tableNum") || "";
}, k = {
    version: 0,
    refactorCartDishMap: {}
}, b = {
    lastSeqId: 0,
    operationList: []
}, T = {
    cartDishList: {},
    cartDishSortMapList: []
}, q = {
    init: function(t, e, r, u) {
        var n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        return function(o) {
            var d = n.shopId || (0, l.getShopId)(), c = n.tableNum || M(), C = i.default.getUserOperation(d);
            !s.default.isNullOrUndefined(C) && Object.keys(C).length || (C = {
                lastSeqId: 0,
                operationList: []
            }), o((0, h.updateUserOperation)(d, C)), D.default.initMustDish(t, e), o((0, p.generateLocalCart)(d, c, u)), 
            a.default.close(), (r || i.default.getNewAdvanceFlag(d) || i.default.getHasOpenTogether(d)) && o((0, 
            f.getCloudCartDishList)(d, c, !1, (0, l.isInMenuPage)()));
        };
    },
    clearCart: function(t) {
        return S.default.clearSelectedCoupon(), function(e, r) {
            var i = r().cart.cartDishList, a = (0, C.getDishListFromStore)(r()), n = D.default.getFixedMustDishList({}, a), s = (0, 
            v.batchDishWithTempCartDishList)(n, T), d = s.cartDishList, c = s.cartDishSortMapList;
            t ? e((0, p.updateCart)((0, l.getShopId)(), M(), d, c, {
                type: o.UPDATE_CART_TYPE.FROM_CLOUD_CART
            })) : (e((0, h.operationDispatch)(o.OPERATE_TYPE.CLEAR_CART, null, i, d)), e((0, 
            p.updateCart)((0, l.getShopId)(), M(), d, c)));
            var f = 0 === Object.keys(d).length;
            f ? e((0, p.closeCartPanel)()) : f || t || u.default.show({
                content: o.MUST_DISH_CANNOT_MINUS_TEXT
            }), S.default.setApplyCouponId(null), S.default.setCancelCouponId(null), S.default.setCurrentMemberCouponId(null);
        };
    },
    clearLocalCartAndRelatedInfos: function(t, e) {
        var a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (t && (i.default.setCartDishList(t, e, {}), i.default.setCartDishSortMapList(t, e, []), 
        i.default.setRefactorLocalCart(t, e, k), i.default.setPartialCloudCartInfo(t, {}), 
        a && (i.default.setCartDishList(t, "", {}), i.default.setCartDishSortMapList(t, "", []), 
        i.default.setRefactorLocalCart(t, "", k), i.default.setCartPrice(t, (0, r.default)({})), 
        i.default.setUserOperation(t, b), d.isNativeMp))) {
            var u, n = (0, g.getNewApp)();
            null == n || null == (u = n.rmsDiancanStore) || u.dispatch(function(t, e) {
                return function(i) {
                    (0, m.stopPollTask)(), i((0, c.updateMustDishEnoughAction)(!0)), i((0, p.updateCart)(t, e, (0, 
                    r.default)({}), (0, r.default)([]), null)), i((0, h.updateUserOperation)(t, b)), 
                    S.default.setApplyCouponId(null), S.default.setCancelCouponId(null), S.default.setCurrentMemberCouponId(null);
                };
            }(t, e));
        }
    },
    getRefactorCartDishMap: function(t) {
        var e, r, a = null == t || null == (e = t.cart) ? void 0 : e.refactorLocalCart;
        return void 0 === a && (a = i.default.getRefactorLocalCart((0, l.getShopId)(), M())), 
        (null == (r = a) ? void 0 : r.refactorCartDishMap) || {};
    },
    batchDish: function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return function(i, a) {
            if (t && null != e && e.length) {
                var u, n = a().cart, s = n.cartDishList, d = n.cartDishSortMapList;
                u = t === o.OPERATE_TYPE.MODIFY ? (0, v.batchUpdateDish)(e, {
                    cartDishList: s,
                    cartDishSortMapList: d
                }) : (0, v.batchDishWithTempCartDishList)(e, {
                    cartDishList: s,
                    cartDishSortMapList: d
                }), i((0, h.operationDispatch)(t, null, s, u.cartDishList, r)), i((0, p.updateCart)((0, 
                l.getShopId)(), M(), u.cartDishList, u.cartDishSortMapList));
            }
        };
    },
    computeCount: function(t, e) {
        var r = null == e ? void 0 : e[t.toString()];
        return (null == r ? void 0 : r.reduce(function(t, e) {
            return t + Number(e.count);
        }, 0)) || 0;
    },
    computeWeight: function(t, e) {
        var r = e[t.toString()];
        return (null == r ? void 0 : r.reduce(function(t, e) {
            return t + Number(e.weight);
        }, 0)) || 0;
    },
    validateAddDish: function(t, r) {
        var i, a, o, s, d, c = null == t || null == (i = t.spuId) ? void 0 : i.toString(), p = null == t || null == (a = t.skuId) ? void 0 : a.toString(), f = (0, 
        L.GetDishSdkSingleton)((0, l.getShopId)()), h = f.findOriginalSpuDetail(c), m = f.findOriginalSkuDetail(c, t.skuId);
        if (!h || !m) return !1;
        var g, v = m.orderedCount, D = m.specAttrs, S = -1 === m.limitCount ? 1 / 0 : m.limitCount, I = -1 === m.stockCount ? 1 / 0 : m.stockCount, M = h.incBoughtCount, k = h.spuName, b = h.minBoughtCount, T = k;
        Array.isArray(D) && null != (o = D[0]) && o.value && (T += "-" + (null == (g = D[0]) ? void 0 : g.value));
        var q = -1 === b ? M : b, A = ((null == r || null == (s = r.cart) ? void 0 : s.refactorLocalCart).refactorCartDishMap[c] || []).filter(function(t) {
            return t.skuId === p;
        }).reduce(function(t, e) {
            return t + (Number(e.count) || 0);
        }, 0) || 0;
        if (I < q || A > 0 && I < A + M) return u.default.show({
            content: "当前库存不足",
            duration: 1e3
        }), !1;
        if (!(0, C.verifySimpleSkuLimitCount)({
            limitCount: S,
            skuIdDishCountInCart: A,
            orderedCount: v,
            incBoughtCount: M,
            minBoughtCount: b
        })) return u.default.show({
            content: (0, C.jointExceedLimitCountMessage)({
                dishName: T,
                limitCount: S,
                orderedCount: v
            }),
            duration: C.LIMIT_COUNT_MESSAGE_DURATION
        }), !1;
        var P = ((null == r || null == (d = r.extraInfo) || null == (d = d.headInfo) ? void 0 : d.fmpBizData) || {}).promoLimitActivityVO;
        if (P && p) {
            var N, O, y = e(null == P ? void 0 : P.limitRuleTag);
            try {
                for (y.s(); !(O = y.n()).done; ) {
                    var x, _ = O.value, E = _.skuIdList, R = _.limitValue, U = _.limitActivityType, w = _.limitValuePerPerson;
                    if (E.includes(+p)) {
                        var V = (0, C.computeSkuDishListInCart)(E, null == r || null == (x = r.cart) ? void 0 : x.cartDishList), j = V.skusCountInCart, B = V.skuNames;
                        if (-1 === B.indexOf(T) && B.unshift(T), !(0, C.verifyLimitCount)((0, C.convertAssociatedSkuLimitData)({
                            limitCount: R,
                            incBoughtCount: M,
                            isSkuIdDishInCart: !!A,
                            minBoughtCount: b,
                            skusCountInCart: j
                        }))) {
                            var F;
                            N = {
                                limitValue: R,
                                limitValuePerPerson: w,
                                limitMessageTpl: null == P || null == (F = P.limitTextMode) ? void 0 : F["" + U],
                                skuNames: B
                            };
                            break;
                        }
                    }
                }
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                y.e(t);
            } finally {
                y.f();
            }
            if (N) {
                var H = {
                    dishName: N.skuNames,
                    limitCount: N.limitValue,
                    orderedCount: 0,
                    limitValuePerPerson: N.limitValuePerPerson,
                    limitMessageTpl: N.limitMessageTpl
                };
                return (0, n.default)({
                    title: "温馨提示",
                    body: (0, C.jointExceedLimitCountMessage)(H),
                    buttons: [ {
                        text: "我知道了",
                        type: "submit"
                    } ]
                }), !1;
            }
        }
        return !0;
    },
    computeSkuDishCountInCart: function(t, e, r) {
        return (r[t] || []).reduce(function(t, r) {
            return r.skuId === e && r.count ? t + r.count : t;
        }, 0);
    },
    addFixedPackage: function(t, e, r) {
        return function(i) {
            var a = (0, I.initPackage)(t, e).cartPackageSku;
            i((0, p.addToCart)(a, r));
        };
    }
};

exports.default = q;