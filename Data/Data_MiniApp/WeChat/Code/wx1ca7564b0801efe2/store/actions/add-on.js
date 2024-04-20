Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SET_SKU_MAP = exports.SET_ADD_ON_TIPS = exports.SET_ADD_ON_SHOW = exports.SET_ADD_ON_ID = exports.SET_ADD_ON = exports.GET_ADD_ON = void 0, 
exports.setAddOnList = s, exports.setAddOnShowAction = function(t) {
    return {
        type: "SET_ADD_ON_SHOW",
        isShow: t
    };
}, exports.setAddOnYellowStrip = o, exports.setSkuMap = function(t) {
    return function(n) {
        var r = {}, e = t;
        Object.keys(e).forEach(function(t) {
            var n;
            null == (n = e[t]) || null == (n = n.skuMenuItems) || n.forEach(function(n) {
                var e = n.skuId;
                r[e] || (r[e] = t);
            });
        }), n(function(t) {
            return {
                type: "SET_SKU_MAP",
                skuMap: t
            };
        }(r));
    };
}, exports.updateAddOnList = function() {
    return function(t, n) {
        var r, e, u = n(), o = null == (r = u.addOn) ? void 0 : r.id, i = function(t, n) {
            var r, e = null == t || null == (r = t.buyFreeSuit) ? void 0 : r.find(function(t) {
                return t.campaignId === n;
            }), u = null == e ? void 0 : e.additionGoods;
            return null != u && u.length ? u : null;
        }(null == (e = u.cart) ? void 0 : e.cartDiscountData, o);
        i && t(s(i, o));
    };
};

var t = require("../../b/helpers/objectSpread2"), n = require("../../modules/menu/dish/DishDataTransfer"), r = require("../../constants/menu"), e = require("../../modules/collocation/CollocationDataTransfer");

exports.GET_ADD_ON = "GET_ADD_ON";

exports.SET_ADD_ON = "SET_ADD_ON";

exports.SET_SKU_MAP = "SET_SKU_MAP";

exports.SET_ADD_ON_SHOW = "SET_ADD_ON_SHOW";

exports.SET_ADD_ON_TIPS = "SET_ADD_ON_TIPS";

exports.SET_ADD_ON_ID = "SET_ADD_ON_ID";

function u(t) {
    return {
        type: "SET_ADD_ON_TIPS",
        tips: t
    };
}

function o(t) {
    return function(n, r) {
        var e = r() || {}, o = e.cart, i = e.addOn;
        if (o && o.cartDiscountData && i && (t || i.id)) {
            var s = function(t, n, r) {
                var e, u;
                return null == t || null == (e = t.buyFreeSuit) || e.forEach(function(t) {
                    t.campaignId.toString() === n.toString() && (u = t[r]);
                }), u;
            }(o.cartDiscountData, t || i.id, "discountText"), c = [];
            s && s.forEach(function(t) {
                c.push({
                    isHighlight: !!Number.isNaN(+t),
                    text: t
                });
            }), n(u(c));
        } else n(u([]));
    };
}

var i = function(t, u, o) {
    var i, s, c, _ = (null == (i = t.skuMenuItems) ? void 0 : i.length) < 2 ? t : (0, 
    e.getCollocationSpuDish)(t, o);
    return _.soldOut ? null : (0, n.transferItemData)({
        item: _,
        dishType: r.DISH_ITEM_TYPE_VAL.DEFAULT,
        dishFrom: "ADDON",
        cartCount: (s = u, c = o, s ? s.reduce(function(t, n) {
            return (n.skuId === c ? Number(n.count) : 0) + Number(t);
        }, 0) : 0)
    });
};

function s(n, r) {
    return function(e, u) {
        var s, c = [], _ = u(), a = _.dish.dishList, D = null == (s = _.cart) ? void 0 : s.cartDishList, d = _.addOn.skuMap;
        n && n.forEach(function(n) {
            var r = d[n.skuId], e = a[r];
            if (e) {
                var u = D[r], o = i(e, u, n.skuId);
                o && c.push(t(t({}, o), {}, {
                    skuId: n.skuId
                }));
            }
        }), (null == n ? void 0 : n.length) > 0 && (c = function(t) {
            return t && t.sort(function(t, n) {
                return (t && t.currentPrice ? Number(t.currentPrice) : 0) - (n && n.currentPrice ? Number(n.currentPrice) : 0);
            }), t.length > 30 && (t.length = 30), t;
        }(c), e(function(t) {
            return {
                type: "SET_ADD_ON_ID",
                id: t
            };
        }(r)), e(function(t) {
            return {
                type: "SET_ADD_ON",
                addOnList: t
            };
        }(c)), e(o(r)));
    };
}