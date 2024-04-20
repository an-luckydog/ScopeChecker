var t = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.UPDATE_CART = void 0, exports.commonAction = a, exports.selectedSkuDishes = void 0, 
exports.setCombineAction = function(t) {
    return a(t);
}, exports.toggleContainerPanelAction = function(t) {
    return a({
        showContainerPanelTag: t
    });
}, exports.updateCalculateProcessIdAction = function(t) {
    return a({
        processId: t
    });
}, exports.updateCalculator = void 0, exports.updateCartDiscountData = function(t) {
    return function(o, n) {
        var u = n().extraInfo.urlParams.shopId, i = r.default.getDishList(u, !1), s = t ? JSON.parse(JSON.stringify(t)) : t;
        if (t) {
            var l, c, d, p = [];
            null == t || null == (l = t.cartYellowText) || null == (l = l[0]) || null == (l = l.additionGoods) || l.forEach(function(t) {
                Object.keys(i).forEach(function(e) {
                    var r;
                    i[e].validity && (null == (r = i[e]) || null == (r = r.skuMenuItems) || r.forEach(function(e) {
                        e.soldOut || e.skuId !== t.skuId || p.push(t);
                    }));
                });
            }), null != s && null != (c = s.cartYellowText) && null != (c = c[0]) && c.additionGoods && (s.cartYellowText[0].additionGoods = p, 
            null != p && p.length || (s.cartYellowText[0].additionType = -1)), null == t || null == (d = t.buyFreeSuit) || d.forEach(function(t, e) {
                var r, o = [];
                null == t || null == (r = t.additionGoods) || r.forEach(function(t) {
                    Object.keys(i).forEach(function(e) {
                        var r;
                        i[e].validity && (null == (r = i[e]) || null == (r = r.skuMenuItems) || r.forEach(function(e) {
                            e.soldOut || e.skuId !== t.skuId || o.push(t);
                        }));
                    });
                }), s.buyFreeSuit[e].additionGoods = o, null != o && o.length || (s.buyFreeSuit[e].additionType = -1);
            });
        }
        o(a({
            cartDiscountData: s
        })), o((0, e.setAddOnYellowStrip)());
    };
}, exports.updateCartDishInfo = void 0, exports.updateCartGoodsUserInfo = function(t) {
    return a({
        goodsUserInfo: t
    });
}, exports.updateCartPrice = function(t) {
    return a({
        cartPrice: t
    });
}, exports.updateCartUserInfo = function(t) {
    return a({
        userInfo: n(t)
    });
}, exports.updateEditSkuDishAction = exports.updateCurrentDishId = void 0, exports.updatePackageDetailPanelAction = function(t) {
    return a({
        packageDetail: t
    });
}, exports.updatePromotionCalculateVersion = function(t) {
    return a({
        promotionCalculateVersion: t
    });
}, exports.updatePromotionMap = function(t) {
    return a({
        promotionMap: t
    });
}, exports.updateTastes = void 0;

var e = require("./add-on"), r = t(require("../../api/rmsStorage")), o = t(require("../../miniprogram_npm/seamless-immutable/index.js"));

function n(t) {
    if (!t) return (0, o.default)([]);
    var e = [ "#FFC150", "#5AEBDA", "#FF6633", "#6AC2FC", "#5A80EB", "#96D623", "#C63DB8", "#FF337F", "#FF6400" ];
    return t.map(function(t, r) {
        return o.default.set(t, "color", e[r % e.length]);
    });
}

function a(t) {
    return {
        type: i,
        payload: t
    };
}

function u(t) {
    return function(e) {
        return a(function(t, e) {
            var r = {};
            return e.forEach(function(e) {
                t.hasOwnProperty(e) && (r[e] = t[e]);
            }), r;
        }(e, t));
    };
}

var i = "UPDATE_ANY_CART";

exports.UPDATE_CART = i;

var s = u([ "calcValue", "calcStatus", "isShowCountCalc", "firstEnterCalc" ]);

exports.updateCalculator = s;

var l = u([ "menuSkuDish", "cartSkuDish", "menuPackageSku", "cartPackageSku" ]);

exports.selectedSkuDishes = l;

var c = u([ "currentSpuId", "currentSkuId", "containerOpenExtraData", "detailPanelSpuId", "__newReportConfig__", "currentDiscount" ]);

exports.updateCurrentDishId = c;

var d = u([ "cartDishList", "refactorLocalCart", "userOperation", "cartDishSortMapList" ]);

exports.updateCartDishInfo = d;

var p = u([ "weightTastes", "packageTastes", "modifyTastes" ]);

exports.updateTastes = p;

var f = u([ "editDishSpuId", "editDishGoodsNo" ]);

exports.updateEditSkuDishAction = f;