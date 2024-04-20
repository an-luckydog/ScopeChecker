var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.setDishOperationData = exports.judgeCollocationModule = exports.getMenuListCollocationRenderData = exports.getCollocationData = void 0;

var t = require("../../b/helpers/defineProperty"), r = e(require("../../b/regenerator")), n = require("../../b/helpers/asyncToGenerator"), o = require("../../lib/mix/util"), u = e(require("../menu/shop/shopService")), i = require("../../types/panel/dishDetail/DealCollocationDataParams.d.js"), a = e(require("../../api/dish")), l = require("../../constants/menu"), s = require("../../constants/ajaxResCode"), d = require("../../constants/bizConstants"), c = require("../menu/dish/PropertyUtil"), p = require("../menu/dish/util"), h = require("../cartHelper"), I = e(require("../MustDishSdk")), v = require("../commonHelper"), f = require("../menu/dish/report"), C = require("./CollocationDataTransfer");

exports.judgeCollocationModule = function(e, t) {
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, o = !1;
    if (!t) return !1;
    var u = t.singlePages, a = void 0 === u ? [] : u, l = t.comboPages, s = void 0 === l ? [] : l;
    if (e === i.COLLOCATION_FROM.DISH_DETAIL) {
        var c = (null == s ? void 0 : s.length) && (null == s ? void 0 : s.find(function(e) {
            return e === i.COLLOCATION_FROM.DISH_DETAIL;
        })), p = (null == a ? void 0 : a.length) && (null == a ? void 0 : a.find(function(e) {
            return e === i.COLLOCATION_FROM.DISH_DETAIL;
        }));
        (c || p) && (o = !0);
    } else if (e === i.COLLOCATION_FROM.DISH_LIST) {
        var h = (null == a ? void 0 : a.length) && (null == a ? void 0 : a.find(function(e) {
            return e === i.COLLOCATION_FROM.DISH_LIST;
        }));
        n && Number(n) !== d.DISH_CATEGORY_ID.ORDERED && !r[n] && h && (o = !0);
    }
    return o;
};

var D = function() {
    var e = n(r.default.mark(function e(t, n, i) {
        var l, d, c, p, h, I, f, C, D, g, O, m, S, M;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return c = [], p = n.refactorCartDishMap, h = (0, o.getMixUrlParam)("shopId") || 0, 
                I = (0, o.getMixUrlParam)("tableNum") || "", f = +(0, o.getMixUrlParam)("reserveMode") || 0, 
                C = (0, o.getMixUrlParam)("posOrderId") || "", D = null == (l = u.default.getShopServiceData()) ? void 0 : l.shopConfig, 
                g = null == D ? void 0 : D.bizMode, null == (d = Object.keys(p)) || d.forEach(function(e) {
                    var t;
                    null == (t = p[e]) || t.forEach(function(e) {
                        var t = c.find(function(t) {
                            return t.skuId === e.skuId;
                        });
                        c.length <= 50 && !t && c.push({
                            spuId: e.spuId,
                            skuId: e.skuId
                        });
                    });
                }), O = (0, v.getPreOrderInfo)(h, f), m = O.peopleCount, S = O.selectedTime, e.prev = 3, 
                e.next = 6, a.default.getRelatedSpuRecommend({
                    mtShopId: h,
                    tableNum: I,
                    spuId: t,
                    reserveMode: f,
                    posOrderId: C,
                    from: i,
                    peopleCount: m,
                    selectedTime: S,
                    cartDishes: c,
                    bizMode: g
                });

              case 6:
                M = e.sent, e.next = 11;
                break;

              case 9:
                e.prev = 9, e.t0 = e.catch(3);

              case 11:
                return e.abrupt("return", M && M.code === s.RES_CODE.SUCCESS && M.data ? M.data : null);

              case 12:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 3, 9 ] ]);
    }));
    return function(t, r, n) {
        return e.apply(this, arguments);
    };
}();

exports.getCollocationData = D;

exports.getMenuListCollocationRenderData = function(e) {
    var r, n, o = e.collocationResData, u = e.dishRowIndex, i = e.categoryId, a = e.childCategoryId, l = e.spuId, s = e.dishList, d = e.dishShowType, c = e.categoryDishIndex, p = void 0 === c ? 0 : c, h = (null == o || null == (r = o.matchSingleDish) ? void 0 : r.skus) || [], I = (null == o || null == (n = o.matchSingleDish) ? void 0 : n.rule) || 0, v = (0, 
    C.getSingleDishList)(s, h, I, l, f.COLLOCATION_DISH_TYPE.MENU_SINGLE, null, p);
    return v.length ? t({}, i, t({}, a || i, {
        dishRowIndex: u,
        menuIndex: p,
        spuId: l,
        dishShowType: d,
        list: v
    })) : null;
};

exports.setDishOperationData = function(e, t) {
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.DISH_ITEM_TYPE_VAL.COLLOCATION, n = arguments.length > 3 ? arguments[3] : void 0;
    if (e) {
        var o = e.spuId, u = (0, p.computeItemCount)(t), i = u[o] || 0;
        if (n) {
            var a = e.skuMenuItems.find(function(e) {
                return e.skuId === n;
            });
            if (!a) return;
            var s = (0, h.getSingleSpu)(e, a);
            s.stockCount = (null == a ? void 0 : a.stockCount) || s.stockCount;
            var d = I.default.getMustCount(a), v = (0, h.computeSkuCount)(a, t);
            return (0, c.dealOperationData)(s, v, i, d, "", r);
        }
        var f = u[o] || 0, C = I.default.getMustCount(e.skuMenuItems[0]);
        return (0, c.dealOperationData)(e, f, i, C, "", r);
    }
};