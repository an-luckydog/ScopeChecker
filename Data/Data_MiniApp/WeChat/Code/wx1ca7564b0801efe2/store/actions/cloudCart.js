var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.onPostOrderSuccess = function(e, t, r) {
    return function(a, c) {
        var l = i.default.getIn(c(), [ "cart", "shopId" ]), d = i.default.getIn(c(), [ "cart", "tableNum" ]);
        if ((0, u.sendMV)("b_saaspay_mnpvnqkr_mv"), h.default.clearLocalCartAndRelatedInfos(l, d), 
        !(0, C.isInMustDishPage)()) return e ? void (r && r()) : (o.default.setUseMenuCacheForNonMenuPage(l, !1), 
        void (0, s.default)({
            body: (t || "小伙伴") + "提交了订单~",
            buttons: [ {
                text: f.CONFIRM_TEXT,
                type: "submit",
                callback: function() {
                    (0, C.isInMenuPage)() && D.isNativeMp ? (0, n.customReLaunch)("menu") : (0, n.mixReload)(), 
                    (0, u.sendMC)("b_saaspay_4nv3kwse_mc");
                }
            } ]
        }));
        (0, s.default)({
            body: (t || "小伙伴") + "已下单锅底，继续点菜吧~",
            buttons: [ {
                text: f.CONFIRM_TEXT,
                type: "submit",
                callback: function() {
                    (0, n.jumpToPage)("menu");
                }
            } ]
        });
    };
}, exports.updateLocalCartWithCloudCartNew = function(e, s, n) {
    return function(u, f) {
        if (e && "object" == r(e) && 0 !== Object.keys(e).length) {
            var h = e.cartId, C = e.shopId, D = e.tableNum, I = e.cloudCart, q = void 0 === I ? {} : I, y = q.version, g = q.seqId, L = void 0 === g ? 0 : g, T = q.dishInfos, M = void 0 === T ? [] : T, _ = q.mealType;
            if (!(y < i.default.getIn(f(), [ "cart", "refactorLocalCart", "version" ]))) {
                var O = (i.default.getIn(f(), [ "cart", "userOperation", "operationList" ]) || []).filter(function(e) {
                    return e.seqId > L;
                }), R = (0, l.getDishListFromStore)(f(), C), x = (0, p.mergeNewCartDishInfosAndLeftOperation)(M, O, R), N = (0, 
                p.transToLocalCartDishList)(x.leftDishes, R, !0), P = N.cartDishList, k = N.cartDishSortMapList, A = N.unVerfiedDish, j = (0, 
                i.default)({
                    cartId: h,
                    version: y,
                    mealType: _
                });
                Object.keys(j).forEach(function(e) {
                    return void 0 === j[e] && c.default.addCustom("getCartInfoResponseMissing", 1, {
                        missing: e
                    });
                }), o.default.setPartialCloudCartInfo(C, j);
                var E = (0, d.verifyCartDish)(R, (0, p.transferCartDishListToRefactorCartDishMap)(P), k, !0, s), S = A.concat.apply(A, [ E && E.unVerfiedDish ].concat(a(x.filterDishes)));
                n && (0, d.handleUnverifyDish)(S), u((0, v.updateCart)(C, D, E.cartDishList, E.cartDishSortMapList, {
                    type: m.UPDATE_CART_TYPE.FROM_CLOUD_CART
                })), 0 === Object.keys(E.cartDishList).length && u((0, v.closeCartPanel)());
                var w = function(e) {
                    var t = (0, i.default)({});
                    return Object.keys(e).forEach(function(r) {
                        var s = e[r];
                        s && s.forEach(function(e) {
                            var r = e.userAvatars || (0, i.default)([]), s = a(new Set(r.map(function(e) {
                                return e.uid;
                            })));
                            t = i.default.set(t, e.goodsNo, s);
                        });
                    }), t;
                }(E.cartDishList);
                if (t && clearTimeout(), t = setTimeout(function() {
                    u((0, b.updateCartGoodsUserInfo)(w));
                }, 300), Array.isArray(S) && (null == S ? void 0 : S.length) > 0) {
                    var F = S.reduce(function(e, t) {
                        var r = (t || {}).spuId;
                        return r ? (e[r] = (null == R ? void 0 : R[r]) || {}, e) : e;
                    }, {});
                    c.default.sendInfo({
                        name: "[newCart][verifyData]",
                        content: {
                            shopId: C,
                            tableNum: D,
                            cartId: h,
                            unverifiedDishes: S,
                            originalDishes: F
                        }
                    });
                }
            }
        }
    };
};

var t, r = require("../../b/helpers/typeof"), a = require("../../b/helpers/toConsumableArray"), i = e(require("../../miniprogram_npm/seamless-immutable/index.js")), s = e(require("../../lib/mix/confirm")), n = require("../../lib/navigator"), u = require("../../modules/LXHelper"), o = e(require("../../api/rmsStorage")), c = e(require("../../lib/mix/log")), l = require("../../modules/dishHelper"), d = require("../../modules/menu/cart/cartDishVerify"), f = require("../../constants/bizConstants"), m = require("../../constants/cartConstants"), p = require("../../modules/menu/cart/cartDataTransfer"), h = e(require("../../modules/menu/cart/cartSdk")), v = require("./cart"), b = require("./baseCart"), C = require("../../lib/mix/util"), D = require("../../lib/env");