var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.verifyLimitCountRuleInOperation = exports.dealOperationCountStyle = void 0, 
exports.verifyMemberLogin = function() {
    var e = a.default.getShopServiceData().memberInfo || {}, i = e.cardId, t = e.actionUrl;
    return !!i || ((0, l.default)({
        body: "请登录后再加购积分换购商品",
        buttons: [ {
            text: d.CONFIRM_TEXT,
            type: "submit",
            callback: function() {
                /dish-detail/.test((0, r.getMixPathName)()) && s.default.setUseMenuCacheForNonMenuPage((0, 
                r.getShopId)(), !1), m.default.navigateTo({
                    url: t
                });
            }
        } ]
    }), !1);
}, require("../../../b/helpers/Arrayincludes");

var i = require("../../../b/helpers/createForOfIteratorHelper"), t = require("../../../b/helpers/objectSpread2"), r = require("../../../lib/mix/util"), u = e(require("../cart/cartSdk")), n = require("./DishSdk"), o = require("../../dishHelper"), a = e(require("../shop/shopService")), s = e(require("../../../api/rmsStorage")), l = e(require("../../../lib/mix/confirm")), d = require("../../../constants/bizConstants"), m = e(require("../../../miniprogram_npm/@mtfe/rms-triangle-c/index.js"));

exports.dealOperationCountStyle = function(e, i) {
    var t = (0, n.GetDishSdkSingleton)((0, r.getShopId)()), u = null == t || null == t.findOriginalSpuDetail ? void 0 : t.findOriginalSpuDetail(e);
    return i && !(null == u || !u.showMultipleInput);
};

exports.verifyLimitCountRuleInOperation = function(e) {
    var l = e.spuDishId, d = e.skuDishId, m = void 0 === d ? "" : d, p = e.showCount, C = void 0 === p ? 0 : p, h = e.temporaryDishCount, f = void 0 !== h && h, c = e.promoDishLimitCount, g = void 0 === c ? -1 : c, v = (0, 
    n.GetDishSdkSingleton)((0, r.getShopId)()), I = null == v || null == v.findOriginalSpuDetail ? void 0 : v.findOriginalSpuDetail(l);
    if (!I) return {
        passVerification: !0
    };
    var k = I.skuMenuItems.find(function(e) {
        return e.skuId === m;
    }) || I.skuMenuItems[0], S = function(e, i) {
        var t, r = u.default.getRefactorCartDishMap(), n = u.default.computeSkuDishCountInCart(i.spuId, i.skuId, r), o = i.limitCount, a = i.orderedCount, s = i.skuName, l = i.specAttrs, d = e.incBoughtCount, m = e.minBoughtCount, p = s;
        return Array.isArray(l) && null != (t = l[0]) && t.value && (p += "-" + l[0].value), 
        {
            limitCount: o,
            orderedCount: a,
            skuName: p,
            skuIdDishCountInCart: n,
            incBoughtCount: d,
            minBoughtCount: m
        };
    }(I, k), D = t(t({}, S), {}, {
        skuIdDishCountInCart: S.skuIdDishCountInCart + (f ? C : 0)
    });
    if (!(0, o.verifySimpleSkuLimitCount)(D)) {
        var y = D.skuName, M = D.orderedCount, b = D.limitCount;
        return {
            passVerification: !1,
            errorMessage: (0, o.jointExceedLimitCountMessage)({
                dishName: y,
                limitCount: b,
                orderedCount: M
            })
        };
    }
    if (!(0, o.verifySimpleSkuLimitCount)({
        limitCount: g,
        incBoughtCount: D.incBoughtCount,
        minBoughtCount: D.minBoughtCount,
        skuIdDishCountInCart: f ? C : 0,
        orderedCount: 0
    })) {
        var x = D.skuName;
        return {
            passVerification: !1,
            errorMessage: (0, o.jointExceedLimitCountMessage)({
                dishName: x,
                limitCount: g,
                orderedCount: 0
            })
        };
    }
    var N = a.default.getShopServiceData(), L = N.fmpBizData, q = N.shopConfig, B = null == L ? void 0 : L.promoLimitActivityVO, O = q;
    if (null != O && O.mtShopId && B && k.skuId) {
        var V, P, T = s.default.getCartDishList(O.mtShopId, O.tableNum), A = i(null == B ? void 0 : B.limitRuleTag);
        try {
            for (A.s(); !(P = A.n()).done; ) {
                var j = P.value, R = j.skuIdList, E = j.limitValue, _ = j.limitActivityType, F = j.limitValuePerPerson;
                if (R.includes(+k.skuId)) {
                    var w = (0, o.computeSkuDishListInCart)(R, T), z = w.skusCountInCart, G = w.skuNames;
                    if (-1 === G.indexOf(S.skuName) && G.unshift(S.skuName), !(0, o.verifyLimitCount)((0, 
                    o.convertAssociatedSkuLimitData)({
                        limitCount: E,
                        isSkuIdDishInCart: !!(z + (f ? C : 0)),
                        incBoughtCount: D.incBoughtCount,
                        minBoughtCount: D.minBoughtCount,
                        skusCountInCart: z
                    }))) {
                        var H;
                        V = {
                            limitValue: E,
                            limitMessageTpl: null == B || null == (H = B.limitTextMode) ? void 0 : H["" + _],
                            skuNames: G,
                            limitValuePerPerson: F
                        };
                        break;
                    }
                }
            }
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            A.e(e);
        } finally {
            A.f();
        }
        if (V) {
            var U = {
                dishName: V.skuNames,
                limitCount: V.limitValue,
                orderedCount: 0,
                limitValuePerPerson: V.limitValuePerPerson,
                limitMessageTpl: V.limitMessageTpl
            };
            return {
                promptType: "confirm",
                passVerification: !1,
                errorMessage: (0, o.jointExceedLimitCountMessage)(U)
            };
        }
    }
    return {
        passVerification: !0
    };
};