var t = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.addDish = X, exports.addDishList = function(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {};
    return function(r, i) {
        var o = i().cart, c = o.shopId, f = o.tableNum, h = o.cartDishList, D = u.default.merge(h, {}), g = o.cartDishSortMapList, I = (0, 
        p.getDishListFromStore)(i()), m = !0, S = "已添加至购物车";
        if (t.forEach(function(t) {
            var e = I[t.spuId];
            if (m) if (e) if (Z(e, t.skuId, h)) if ((0, l.judgeMultiDish)(e) || (0, l.judgeComplexSpuDish)(e)) {
                S = "已加入购物车，部分菜可修改做法";
                var n = tt(e, t.skuId, h, g);
                h = n.cartDishList, g = n.cartDishSortMapList;
            } else {
                var r = $(e, h, g);
                h = r.cartDishList, g = r.cartDishSortMapList;
            } else m = !1; else m = !1;
        }), m) {
            e && (a.default.show({
                content: S
            }), n()), r((0, d.operationDispatch)(s.OPERATE_TYPE.ADD, null, D, h));
            var C = u.default.getIn(i(), [ "extraInfo", "headInfo", "orderInfo" ]);
            V(C), r(j(c, f, h, g));
        }
    };
}, exports.addToCart = z, exports.calculateTotalMaxChoice = function(t) {
    var e = 0;
    return null == t || t.forEach(function(t) {
        t.maxChoice >= 0 ? e += t.maxChoice : e = 1 / 0;
    }), e;
}, exports.closeCalcPanel = Q, exports.closeCartPanel = Y, exports.closeMustDishPanel = function() {
    return function(t) {
        t((0, L.toggleMustDishPanelAction)(!1)), t(O(!0));
    };
}, exports.editSkuDish = function(t) {
    return function() {
        var e = r(n.default.mark(function e(r, a) {
            var i, o, s, d, f;
            return n.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    i = (0, p.getDishListFromStore)(a()), o = t.spuId, s = t.skuId, d = i[o.toString()], 
                    f = d.skuMenuItems.find(function(t) {
                        return t.skuId === s;
                    }), r((0, c.toggleContainerPanelAction)(!0)), r((0, c.updateCurrentDishId)({
                        currentSpuId: o,
                        currentDiscount: ""
                    })), t.canWeight ? (r((0, c.selectedSkuDishes)({
                        menuSkuDish: f,
                        cartSkuDish: t
                    })), r(U(!0)), r((0, c.updateTastes)({
                        weightTastes: !0
                    }))) : t.dishType === g.DISH_TYPE.NORMAL ? (r((0, c.selectedSkuDishes)({
                        menuSkuDish: f,
                        cartSkuDish: t
                    })), r(U(!0)), r(B(g.DISH_ADD_FROM.CART))) : t.dishType === g.DISH_TYPE.PACKAGE && ((0, 
                    l.judgeFixedPackage)(d) ? r((0, c.updatePackageDetailPanelAction)((0, _.TransPanelDetailsData)(u.default.asMutable(t, {
                        deep: !0
                    })))) : (r((0, c.selectedSkuDishes)({
                        menuPackageSku: f,
                        cartPackageSku: t
                    })), r(R(!0)))), r(H(d)), r((0, c.updateEditSkuDishAction)({
                        editDishSpuId: t.spuId,
                        editDishGoodsNo: t.goodsNo
                    }));

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
        }));
        return function(t, n) {
            return e.apply(this, arguments);
        };
    }();
}, exports.editWeightSkuDish = function(t) {
    return function(e, n) {
        var r = (0, p.getDishListFromStore)(n()), u = t.spuId, a = t.skuId, i = r[u.toString()], o = i.skuMenuItems.find(function(t) {
            return t.skuId === a;
        });
        e(H(i)), e((0, c.selectedSkuDishes)({
            menuSkuDish: o,
            cartSkuDish: t
        })), e((0, c.updateCalculator)({
            calcValue: t.weight,
            calcStatus: g.CALCULATOR_STATUS.WEIGHT
        })), e(y(!0)), e((0, c.updateEditSkuDishAction)({
            editDishSpuId: t.spuId,
            editDishGoodsNo: t.goodsNo
        })), e((0, c.toggleContainerPanelAction)(!0)), e((0, c.updateCurrentDishId)({
            currentSpuId: t.spuId
        }));
    };
}, exports.generateLocalCart = function(t, e, n) {
    return function(r, u) {
        var a = (0, i.getMixPathName)();
        if (/(takeaway|webview|login)/.test(a) && C.default.isWxNative) k.default.sendInfo({
            name: "[webview-generateLocalCart-1]",
            content: {
                pathName: a
            }
        }); else {
            var c = (0, p.getDishListFromStore)(u()), l = o.default.getCartDishList(t, e), h = (0, 
            f.verifyNewCartDishList)(t, e, c);
            if (!Object.keys(l).length && Object.keys(h.cartDishList).length) {
                var g = o.default.getRefactorLocalCart(t, e);
                P.default.clearLocalCartAndRelatedInfos(t, e), k.default.sendInfo({
                    name: "[cartInStorage]",
                    content: {
                        cartDishList: l,
                        refactorLocalCart: g
                    }
                });
            } else r((0, d.operationDispatch)(s.OPERATE_TYPE.ADD, null, l, h.cartDishList, !0)), 
            r(j(t, e, h.cartDishList, h.cartDishSortMapList));
            Object.keys(l).length < Object.keys(h.cartDishList).length && k.default.sendInfo({
                name: "[generateLocalCart]",
                content: {
                    cartDishList: l,
                    newCartDishList: h.cartDishList
                }
            });
            var I = D.default.getFixedMustDishList((0, f.transferCartDishListToRefactorCartDishMap)(h.cartDishList), c);
            if (n) r((0, T.showText)(n, !1)); else if ((null == I ? void 0 : I.length) > 0) {
                var m = D.default.getMustOrderText(I);
                m.length && r((0, T.showText)(m, !1));
            }
            (null == I ? void 0 : I.length) > 0 && r(P.default.batchDish(s.OPERATE_TYPE.ADD, I, !0));
        }
    };
}, exports.minusCartGrouponDish = function(t, n) {
    return t = "" + t, function(r, a) {
        C.default.showLoading({
            title: "加载中",
            mask: !0
        });
        var i = a().cart, o = i.shopId, s = i.tableNum, d = i.cartDishList, l = i.cartDishSortMapList, f = d[t] || [], h = f.find(function(t) {
            return t.goodsNo === n;
        }), D = l.findIndex(function(t) {
            return t.goodsNo === n;
        });
        if (h && h.length) {
            var g = f.findIndex(function(t) {
                return t.goodsNo === n;
            });
            if (1 === h.count) {
                if (1 === f.length) d = u.default.without(d, t); else {
                    var I = u.default.flatMap(d[t], function(t, e) {
                        return e === g ? [] : t;
                    });
                    d = u.default.set(d, t, I);
                }
                l = u.default.flatMap(l, function(t, e) {
                    return e === D ? [] : t;
                });
            } else d = u.default.setIn(d, [ t, g, "count" ], h.count - 1);
        }
        r((0, c.updateCartDishInfo)({
            cartDishList: d,
            cartDishSortMapList: l
        }));
        var m = (0, p.getDishListFromStore)(a()), S = t && (null == m ? void 0 : m[t]) || {}, k = e(e({}, h), {}, {
            hiddenDish: S.hiddenDish
        });
        null != k && k.hiddenDish ? r(J(k)) : r(j(o, s, d, l)), 0 === Object.keys(d).length && r(Y());
    };
}, exports.minusDish = J, exports.openCartPanel = function() {
    return function(t) {
        t((0, T.hide)()), t(E(!0)), t(O(!0)), t((0, L.toggleMustDishVisibleAction)(!1)), 
        t((0, M.setAddOnShowAction)(!1));
    };
}, exports.openDishDetail = function(t) {
    return function(n, r) {
        if (n(H(t)), n((0, c.updateCurrentDishId)({
            detailPanelSpuId: t.spuId,
            containerOpenExtraData: {
                reportConfig: (null == t ? void 0 : t.reportConfig) || {}
            }
        })), n(q(!0)), C.default.isNativeMp) {
            var u = N.default.getShopServiceData().fmpBizData, a = t.spuId, s = (0, p.getDishListFromStore)(r()), d = a && (null == s ? void 0 : s[a]) || {};
            if (null != u && u.needJumpDishPanel && !d.canWeight) !function(t, e, n, r) {
                null != e && e.showDishOperation && r.canSaleNow && !r.soldOut && (t((0, c.updateCurrentDishId)({
                    currentSpuId: n.spuId,
                    currentSkuId: "",
                    currentDiscount: ""
                })), t((0, c.toggleContainerPanelAction)(!0)));
            }(n, u, t, d); else {
                var l = e(e({}, (0, i.getMixUrlParam)("")), {}, {
                    spuId: t.spuId
                });
                o.default.setSelectedDishData(l.shopId, t);
                var f = C.default.appendQuery(b.PATH["dish-detail"] + "?", l);
                C.default.navigateTo({
                    url: f
                });
            }
        }
    };
}, exports.openMustDishPanel = function() {
    return function(t) {
        t((0, L.toggleMustDishPanelAction)(!0)), t(O(!1));
    };
}, exports.operateCollocationDish = function(t, e, n) {
    return function(r, a) {
        if (t) {
            var i = (0, p.getDishListFromStore)(a()), o = a().cart.cartDishList, s = i[t];
            if (s) {
                var d = s.skuMenuItems.find(function(t) {
                    return t.skuId === e;
                });
                if ((0, l.judgeMultiDish)(s)) {
                    var c = (0, l.computeSkuCount)(d, o);
                    d = u.default.merge(d, {
                        count: c,
                        categoryId: u.default.getIn(s, [ "parentCategoryId", 0 ]),
                        methods: s.methods,
                        tastes: s.tastes
                    });
                    var f = (0, h.getUniqueKey)(d);
                    d = u.default.set(d, "goodsNo", f);
                } else d = (0, h.transToSkuDish)(s, o);
                "plus" === n ? r(X(d)) : "minus" === n && r(J(d));
            }
        }
    };
}, exports.selectSpuDishAction = H, exports.setDishAddFromAction = B, exports.showCalcPanel = function(t) {
    return function(e, n) {
        var r = t.spuId.toString(), u = (0, p.getDishListFromStore)(n())[r];
        u.showMultipleInput && (e(function(t, e) {
            return function(n) {
                var r = t.skuMenuItems.find(function(t) {
                    return t.skuId === e.skuId;
                });
                e.dishType === g.DISH_TYPE.PACKAGE ? n((0, c.selectedSkuDishes)({
                    menuPackageSku: r,
                    cartPackageSku: e
                })) : n((0, c.selectedSkuDishes)({
                    menuSkuDish: r,
                    cartSkuDish: e
                })), n(H(t)), n((0, c.updateCalculator)({
                    calcStatus: g.CALCULATOR_STATUS.ADD,
                    calcValue: e.count,
                    isShowCountCalc: !0
                })), n(y(!0, "请输入份数")), n((0, c.toggleContainerPanelAction)(!0)), n((0, c.updateCurrentDishId)({
                    currentSpuId: e.spuId
                })), n((0, c.updateEditSkuDishAction)({
                    editDishSpuId: e.spuId,
                    editDishGoodsNo: e.goodsNo
                })), n((0, L.toggleMustDishVisibleAction)(!1));
            };
        }(u, t)), e((0, c.toggleContainerPanelAction)(!0)), e((0, c.updateCalculator)({
            isShowCountCalc: !0
        })), e((0, c.updateCurrentDishId)({
            currentSpuId: t.spuId
        })));
    };
}, exports.toggleCartAndMustDishPanel = function() {
    return function(t, e) {
        u.default.getIn(e(), [ "cart", "miniCartVisible" ]) ? (t(O(!1)), t((0, L.toggleMustDishVisibleAction)(!0, !0))) : (t(O(!0)), 
        t((0, L.toggleMustDishVisibleAction)(!1)));
    };
}, exports.toggleCartVisibleAction = w, exports.toggleDishDetailPanelAction = q, 
exports.toggleMultiPanelAction = U, exports.togglePackagePanelAction = R, exports.toggleRegisterPanelAction = function(t) {
    return (0, c.commonAction)({
        showRegisterPanel: t
    });
}, exports.updateBaseInfo = function(t, e) {
    return function(n) {
        n((0, c.setCombineAction)({
            shopId: t,
            tableNum: e
        }));
    };
}, exports.updateCart = j, require("../../b/helpers/Arrayincludes");

require("../../b/helpers/createForOfIteratorHelper");

var e = require("../../b/helpers/objectSpread2"), n = t(require("../../b/regenerator")), r = require("../../b/helpers/asyncToGenerator"), u = t(require("../../miniprogram_npm/seamless-immutable/index.js")), a = t(require("../../lib/mix/toast")), i = require("../../lib/mix/util"), o = t(require("../../api/rmsStorage")), s = require("../../constants/cartConstants"), d = require("./newCart"), c = require("./baseCart"), l = require("../../modules/cartHelper"), f = require("../../modules/menu/cart/cartDataTransfer"), h = require("../../modules/operateCartHelper"), p = require("../../modules/dishHelper"), D = t(require("../../modules/MustDishSdk")), g = require("../../constants/bizConstants"), I = require("../../constants/reportConstants"), m = t(require("../../api/cartPike")), S = t(require("../../lib/enhanceDebounce")), C = t(require("../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), k = t(require("../../lib/wx/log")), A = require("../asyncActions/price"), T = require("./cartToast"), M = require("./add-on"), v = require("./report"), L = require("./mustDish"), P = t(require("../../modules/menu/cart/cartSdk")), x = t(require("../../modules/menu/grouponCoupon/GrouponCouponSdk")), b = require("../../constants/path"), N = (t(require("../../lib/mix/confirm")), 
t(require("../../modules/menu/shop/shopService"))), _ = require("../../modules/panel/package/utils");

function E(t) {
    return (0, c.commonAction)({
        showCartPanel: t
    });
}

function w(t) {
    return (0, c.commonAction)({
        cartVisible: t
    });
}

function O(t) {
    return (0, c.commonAction)({
        miniCartVisible: t
    });
}

function U(t) {
    return (0, c.commonAction)({
        showMultiPanel: t
    });
}

function R(t) {
    return (0, c.commonAction)({
        showPackagePanel: t
    });
}

function y(t, e) {
    return (0, c.commonAction)({
        showCalculatorPanel: t,
        calculateTitle: e
    });
}

function q(t) {
    return (0, c.commonAction)({
        showDishDetailPanel: t
    });
}

function F(t) {
    return (0, c.commonAction)({
        packageVisible: t
    });
}

function H(t) {
    return (0, c.commonAction)({
        spuDish: t
    });
}

function B(t) {
    return (0, c.commonAction)({
        dishAddFrom: t
    });
}

var G = (0, S.default)(function(t, e) {
    t((0, A.calculateCartPromotion)(e));
}, 500, !0);

function Y() {
    return function(t) {
        t(E(!1)), t((0, L.toggleMustDishVisibleAction)(!0, !0));
    };
}

function j(t, e, n, r) {
    var u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    return function(a, c) {
        var h = o.default.getCartDishList(t, e);
        a((0, d.updateCartBySRP)(t, e, n, r));
        var D = (0, i.getMixPathName)(), g = (0, p.getDishListFromStore)(c());
        (o.default.getHasOpenTogether(t) || o.default.getNewAdvanceFlag(t)) && m.default.isConnected() && (null == u ? void 0 : u.type) !== s.UPDATE_CART_TYPE.FROM_CLOUD_CART && !/(order-confirm|order-detail)/.test(D) && a((0, 
        d.sendOperationList)()), /(order-confirm|order-detail|tt-validate-coupon)/.test(D) || G(a, u);
        var I = (0, l.calculateCartDishListDiff)(h, n);
        return a((0, L.updateMustDishStatus)((0, f.transferCartDishListToRefactorCartDishMap)(n), g, I, (null == u ? void 0 : u.type) === s.UPDATE_CART_TYPE.FROM_CLOUD_CART)), 
        Promise.resolve();
    };
}

var V = function(t) {
    t && t.posOrderId && !o.default.getAddDishTipAfterOrderedFlag(t.posOrderId) && t.orderDiscountConflictTips && (a.default.show({
        content: t.orderDiscountConflictTips,
        duration: 2e3
    }), o.default.setAddDishTipAfterOrderedFlag(t.posOrderId));
}, K = function(t, e, n, r) {
    var a, i = r.skuDish, o = r.editDishGoodsNo, s = r.cartSpu, d = r.cartDishList, c = r.cartDishSortMapList, l = r.spuId;
    if (i.goodsNo === o) a = u.default.merge(s[t], {
        count: i.count,
        remark: i.remark
    }), d = u.default.setIn(d, [ l, t ], a); else {
        a = u.default.merge(i, {
            count: u.default.getIn(s, [ t, "count" ]) + i.count,
            remark: i.remark
        }), d = u.default.setIn(d, [ l, t ], a);
        var f = u.default.flatMap(d[l], function(t, n) {
            return n === e ? [] : t;
        });
        d = u.default.set(d, l, f), c = u.default.flatMap(c, function(t, e) {
            return e === n ? [] : t;
        });
    }
    return {
        cartDishList: d,
        cartDishSortMapList: c
    };
}, W = function() {
    var t = r(n.default.mark(function t(e, r, i, o) {
        var d, c, l, h, p, g, I, m, S, C, k, A, T, M;
        return n.default.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return d = o.skuDish, c = o.cartSpu, l = o.dishList, h = u.default.getIn(c, [ i ]), 
                p = {
                    skuDish: h,
                    operateCount: -(null == h ? void 0 : h.count) || 0
                }, g = {
                    skuDish: d,
                    operateCount: d.count
                }, t.next = 6, D.default.getMustDishDynamicStatus(P.default.getRefactorCartDishMap(e), l, p, g);

              case 6:
                I = t.sent, m = [], S = r.cartDishList, C = r.cartDishSortMapList, k = I.code, A = I.message, 
                T = I.data, t.t0 = k, t.next = t.t0 === s.MINUS_MUST_DISH_STATUS.MINUS_FORBIDDEN ? 12 : t.t0 === s.MINUS_MUST_DISH_STATUS.CANCAL ? 13 : t.t0 === s.MINUS_MUST_DISH_STATUS.MINUS_APPROVED ? 14 : t.t0 === s.MINUS_MUST_DISH_STATUS.ADD_FIXED ? 15 : 19;
                break;

              case 12:
                return t.abrupt("return", (A && a.default.show({
                    content: A
                }), null));

              case 13:
                return t.abrupt("return", null);

              case 14:
                return t.abrupt("return", r);

              case 15:
                return m = m.concat(T.mustDishList), M = (0, f.batchDishWithTempCartDishList)(m, {
                    cartDishList: S,
                    cartDishSortMapList: C
                }), S = M.cartDishList, C = M.cartDishSortMapList, t.abrupt("break", 20);

              case 19:
                return t.abrupt("return", null);

              case 20:
                return t.abrupt("return", {
                    cartDishList: S,
                    cartDishSortMapList: C
                });

              case 21:
              case "end":
                return t.stop();
            }
        }, t);
    }));
    return function(e, n, r, u) {
        return t.apply(this, arguments);
    };
}();

function z(t, e) {
    return function() {
        var i = r(n.default.mark(function r(i, o) {
            var l, f, m, S, C, k, T, L, b, N, _, E, w, O, U, R, y, q, F, H, B, G, Y, z, X, J, Q, Z, $;
            return n.default.wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    if (P.default.validateAddDish(t, o())) {
                        n.next = 2;
                        break;
                    }
                    return n.abrupt("return");

                  case 2:
                    if (f = Date.now(), null == (l = t) || !l.soldOut) {
                        n.next = 5;
                        break;
                    }
                    return n.abrupt("return", void a.default.show({
                        content: "该菜品已售罄~",
                        duration: 1e3
                    }));

                  case 5:
                    if (i((0, c.setCombineAction)({
                        cartVisible: !0,
                        showMultiPanel: !1,
                        showCalculatorPanel: !1,
                        showPackagePanel: !1,
                        dishAddFrom: ""
                    })), m = (0, p.getDishListFromStore)(o()), S = o().cart, C = S.shopId, k = S.tableNum, 
                    T = t.spuId.toString(), L = S.dishAddFrom, b = x.default.getApplyCouponId(), N = S.editDishSpuId, 
                    _ = S.editDishGoodsNo, E = S.cartDishList, w = u.default.merge(E, {}), O = S.cartDishSortMapList, 
                    t = D.default.updateMustCount(t), t = (0, h.addCloudCartFields)(t), U = (0, h.getUniqueKey)(t), 
                    t = u.default.set(t, "goodsNo", U), R = E[T], y = (0, u.default)({
                        spuId: T,
                        goodsNo: U,
                        skuId: t.skuId
                    }), x.default.setSelectedCouponItemNo(U, e), q = R && R.findIndex(function(t) {
                        return t.goodsNo === U;
                    }), F = R && R.findIndex(function(t) {
                        return t.goodsNo === _;
                    }), H = O.findIndex(function(t) {
                        return t.goodsNo === _;
                    }), B = s.OPERATE_TYPE.ADD, !R) {
                        n.next = 53;
                        break;
                    }
                    if (!t.canWeight) {
                        n.next = 25;
                        break;
                    }
                    E = u.default.set(E, T, [ t ]), G = O.findIndex(function(e) {
                        return e.skuId === t.skuId;
                    }), O = u.default.set(O, G, y), n.next = 51;
                    break;

                  case 25:
                    if (B = s.OPERATE_TYPE.MODIFY, -1 === q) {
                        n.next = 39;
                        break;
                    }
                    if (!N) {
                        n.next = 36;
                        break;
                    }
                    return z = K(q, F, H, {
                        skuDish: t,
                        editDishGoodsNo: _,
                        cartSpu: R,
                        cartDishList: E,
                        cartDishSortMapList: O,
                        spuId: T
                    }), n.next = 30, W(o(), z, F, {
                        skuDish: t,
                        cartSpu: R,
                        dishList: m
                    });

                  case 30:
                    if (z = n.sent) {
                        n.next = 33;
                        break;
                    }
                    return n.abrupt("return");

                  case 33:
                    E = u.default.merge(z.cartDishList), O = u.default.merge(z.cartDishSortMapList), 
                    n.next = 37;
                    break;

                  case 36:
                    L !== g.DISH_ADD_FROM.CART ? (Y = u.default.merge(t, {
                        count: u.default.getIn(R, [ q, "count" ]) + t.count,
                        remark: t.remark
                    }), E = u.default.setIn(E, [ T, q ], Y)) : (X = K(q, F, H, {
                        skuDish: t,
                        editDishGoodsNo: _,
                        cartSpu: R,
                        cartDishList: E,
                        cartDishSortMapList: O,
                        spuId: T
                    }), E = u.default.merge(X.cartDishList), O = u.default.merge(X.cartDishSortMapList));

                  case 37:
                    n.next = 51;
                    break;

                  case 39:
                    if (t = u.default.set(t, "createTime", Date.now()), !N) {
                        n.next = 50;
                        break;
                    }
                    return J = u.default.set(R, F, t), E = u.default.set(E, T, J), O = u.default.set(O, H, y), 
                    n.next = 44, W(o(), {
                        cartDishList: E,
                        cartDishSortMapList: O
                    }, F, {
                        skuDish: t,
                        cartSpu: R,
                        dishList: m
                    });

                  case 44:
                    if (Q = n.sent) {
                        n.next = 47;
                        break;
                    }
                    return n.abrupt("return");

                  case 47:
                    E = u.default.merge(Q.cartDishList), O = u.default.merge(Q.cartDishSortMapList), 
                    n.next = 51;
                    break;

                  case 50:
                    R = R.concat([ t ]), E = u.default.set(E, T, R), O = O.concat([ y ]);

                  case 51:
                    n.next = 54;
                    break;

                  case 53:
                    t = u.default.set(t, "createTime", Date.now()), E = u.default.set(E, T, [ t ]), 
                    O = O.concat([ y ]);

                  case 54:
                    Z = u.default.getIn(o(), [ "extraInfo", "headInfo", "orderInfo" ]), V(Z), $ = {
                        type: s.UPDATE_CART_TYPE.ADD_DISH,
                        skuId: t.skuId
                    }, b ? (x.default.setGrouponDishInfoById(b, U), i((0, A.calculateGrouponPromotion)($, E, O, function() {
                        i((0, d.operationDispatch)(B, t, w, E)), i(j(C, k, E, O, $));
                    }))) : (i((0, d.operationDispatch)(B, t, w, E)), i(j(C, k, E, O, $)), i((0, v.setDishOperationAction)(I.DISH_OPERATION_TYPE.ADD, f))), 
                    i((0, c.setCombineAction)({
                        calcValue: "",
                        weightTastes: !1,
                        editDishSpuId: null,
                        editDishGoodsNo: null,
                        menuSkuDish: null,
                        cartSkuDish: null,
                        menuPackageSku: null,
                        cartPackageSku: null
                    })), i((0, M.updateAddOnList)());

                  case 58:
                  case "end":
                    return n.stop();
                }
            }, r);
        }));
        return function(t, e) {
            return i.apply(this, arguments);
        };
    }();
}

function X(t, e) {
    var n = Date.now();
    return function(r, i) {
        var c;
        if (P.default.validateAddDish(t, i())) {
            var f = i().cart, g = (0, p.getDishListFromStore)(i()), m = null == (c = t) || null == (c = c.spuId) ? void 0 : c.toString(), S = g[m];
            if ((0, l.judgeFixedPackage)(S)) {
                var C = f.refactorLocalCart;
                r(P.default.addFixedPackage(S, C));
            } else {
                var k = x.default.getApplyCouponId(), T = f.shopId, L = f.tableNum, b = f.cartDishList, N = u.default.merge(b, {}), _ = f.cartDishSortMapList;
                t = D.default.updateMustCount(t), t = (0, h.addCloudCartFields)(t);
                var E = (0, h.getUniqueKey)(t);
                x.default.setSelectedCouponItemNo(E, e), t = u.default.set(t, "goodsNo", E);
                var w = b[m], O = S.skuMenuItems.find(function(e) {
                    return e.skuId === t.skuId;
                }), U = S.incBoughtCount, R = -1 === O.stockCount ? 1 / 0 : O.stockCount, y = -1 === S.minBoughtCount ? U : S.minBoughtCount;
                if (o.default.getFirstAddDishTime() || o.default.setFirstAddDishTime(new Date().getTime()), 
                w) {
                    var q = 0;
                    if (w.forEach(function(e) {
                        e.skuId === t.skuId && (q += e.count);
                    }), q + U <= R) {
                        var F = w.findIndex(function(t) {
                            return t.goodsNo === E;
                        });
                        if (-1 !== F) {
                            var H = u.default.set(w[F], "count", u.default.getIn(w, [ F, "count" ]) + U);
                            b = u.default.setIn(b, [ m, F ], H);
                        } else t = u.default.merge(t, {
                            count: y,
                            createTime: Date.now()
                        }), w = w.concat([ t ]), b = u.default.set(b, m, w), _ = _.concat([ {
                            skuId: t.skuId,
                            spuId: m,
                            goodsNo: E
                        } ]);
                    }
                } else t = u.default.merge(t, {
                    count: y,
                    createTime: Date.now()
                }), b = u.default.set(b, m, [ t ]), _ = _.concat([ {
                    skuId: t.skuId,
                    spuId: m,
                    goodsNo: E
                } ]);
                var B = u.default.getIn(i(), [ "extraInfo", "headInfo", "orderInfo" ]);
                V(B);
                var G = {
                    type: s.UPDATE_CART_TYPE.ADD_DISH,
                    skuId: t.skuId
                };
                k ? (x.default.setGrouponDishInfoById(k, E), r((0, A.calculateGrouponPromotion)(G, b, _, function() {
                    r((0, d.operationDispatch)(s.OPERATE_TYPE.ADD, t, N, b)), r(j(T, L, b, _, G));
                }))) : (r((0, d.operationDispatch)(s.OPERATE_TYPE.ADD, t, N, b)), r((0, v.setDishOperationAction)(I.DISH_OPERATION_TYPE.ADD, n)), 
                r(j(T, L, b, _, G)), t.discount && t.discount.meetCondition && a.default.show({
                    content: "已加入购物车，滑动看看~",
                    duration: 1e3
                })), r((0, M.updateAddOnList)());
            }
        }
    };
}

function J() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return function() {
        var i = r(n.default.mark(function r(i, o) {
            var c, f, h, g, m, S, C, k, A, T, L, x, b, N, _, E, w, O, U, R, y, q, F, H, B;
            return n.default.wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    if (f = null == (c = t) || null == (c = c.spuId) ? void 0 : c.toString()) {
                        n.next = 3;
                        break;
                    }
                    return n.abrupt("return");

                  case 3:
                    return h = Date.now(), g = o().cart || {}, m = g.shopId, S = g.tableNum, C = g.cartDishList || [], 
                    k = g.cartDishSortMapList || [], A = u.default.merge(C, {}), T = (0, p.getDishListFromStore)(o()), 
                    L = T[f], x = L.incBoughtCount, b = -1 === L.minBoughtCount ? 1 : L.minBoughtCount, 
                    N = C[f] || [], e && N.length && (_ = N.filter(function(e) {
                        return e.skuId === t.skuId;
                    }), t = _[_.length - 1]), (!(0, l.judgeMultiDish)(L) && !(0, l.judgeComplexSpuDish)(L) || (0, 
                    l.judgeFixedPackage)(L)) && (E = t.goodsNo, -1 === N.findIndex(function(t) {
                        return t.goodsNo === E;
                    }) && N.length && (t = N[N.length - 1])), w = t.count, O = function() {
                        var e = t.goodsNo, n = N.findIndex(function(t) {
                            return t.goodsNo === e;
                        }), r = 0;
                        if (N.map(function(e) {
                            return e.skuId === t.skuId && (r += e.count), null;
                        }), r - x < b) {
                            var a = (0, u.default)([]);
                            N.map(function(e) {
                                return e.skuId !== t.skuId && (a = a.concat((0, u.default)([ e ]))), null;
                            }), C = a.length > 0 ? u.default.set(C, f, a) : u.default.without(C, f), k = k.filter(function(e) {
                                return e.skuId !== t.skuId;
                            });
                        } else {
                            var i, o = (null == (i = t) ? void 0 : i.cartCount) || 0;
                            if (w - x <= 0 && 0 == (o > w ? o - w : 0)) {
                                var s = u.default.flatMap(N, function(t, e) {
                                    return e === n ? [] : t;
                                });
                                C = u.default.set(C, f, s);
                                var d = k.findIndex(function(e) {
                                    return e.goodsNo === t.goodsNo;
                                });
                                k = u.default.flatMap(k, function(t, e) {
                                    return e === d ? [] : t;
                                });
                            } else {
                                var c = u.default.getIn(N, [ n, "count" ]) - x, l = u.default.set(N[n], "count", c);
                                C = u.default.setIn(C, [ f, n ], l);
                            }
                        }
                        return {
                            cartDishList: C,
                            cartDishSortMapList: k
                        };
                    }, U = {
                        skuDish: t,
                        operateCount: -x
                    }, n.next = 13, D.default.getMustDishDynamicStatus(P.default.getRefactorCartDishMap(o()), T, U);

                  case 13:
                    R = n.sent, y = R.code, q = R.message, F = R.data, H = {}, n.t0 = y, n.next = n.t0 === s.MINUS_MUST_DISH_STATUS.MINUS_FORBIDDEN ? 21 : n.t0 === s.MINUS_MUST_DISH_STATUS.CANCAL ? 23 : n.t0 === s.MINUS_MUST_DISH_STATUS.MINUS_APPROVED ? 24 : n.t0 === s.MINUS_MUST_DISH_STATUS.ADD_FIXED ? 26 : 30;
                    break;

                  case 21:
                    return q && a.default.show({
                        content: q
                    }), n.abrupt("break", 31);

                  case 23:
                    return n.abrupt("break", 31);

                  case 24:
                    return H = O(), C = u.default.merge(H.cartDishList), k = u.default.merge(H.cartDishSortMapList), 
                    i((0, d.operationDispatch)(s.OPERATE_TYPE.MINUS, t, A, C)), i(j(m, S, C, k)), i((0, 
                    v.setDishOperationAction)(I.DISH_OPERATION_TYPE.MINUS, h)), n.abrupt("break", 31);

                  case 26:
                    return H = O(), C = u.default.merge(H.cartDishList), k = u.default.merge(H.cartDishSortMapList), 
                    i((0, d.operationDispatch)(s.OPERATE_TYPE.MINUS, t, A, C)), i(j(m, S, C, k)), B = F.mustDishList, 
                    i(P.default.batchDish(s.OPERATE_TYPE.MINUS, B)), n.abrupt("break", 31);

                  case 30:
                    return n.abrupt("return");

                  case 31:
                    0 === Object.keys(C).length && i(Y()), i((0, M.updateAddOnList)());

                  case 32:
                  case "end":
                    return n.stop();
                }
            }, r);
        }));
        return function(t, e) {
            return i.apply(this, arguments);
        };
    }();
}

function Q() {
    return function(t, e) {
        t((0, c.updateCalculator)({
            calcValue: "",
            firstEnterCalc: !0
        })), t(w(!0)), t((0, L.toggleMustDishVisibleAction)(!0)), t(F(!0)), t(function(t) {
            return (0, c.commonAction)({
                multiVisible: t
            });
        }(!0)), t(y(!1)), t((0, L.updateMustDishCartDiffAction)(0)), e().cart.showMultiPanel || t((0, 
        c.updateEditSkuDishAction)({
            editDishSpuId: null,
            editDishGoodsNo: null
        }));
    };
}

function Z(t, e, n) {
    var r = !0, u = t.skuMenuItems.find(function(t) {
        return t.skuId === e;
    });
    if (!u) return !1;
    var i = n[t.spuId], o = 0;
    i && i.map(function(t) {
        return t.skuId === e && (o += t.count), null;
    });
    var s = t.incBoughtCount, d = -1 === u.stockCount ? 1 / 0 : u.stockCount, c = -1 === u.limitCount ? 1 / 0 : u.limitCount, l = u.orderedCount;
    if (o) o + s > d && (r = !1, a.default.show({
        content: t.spuName + "库存不足",
        duration: 1e3
    })), (0, p.verifyLimitCount)({
        delta: s,
        limitCount: c,
        usedCount: o + l
    }) || (r = !1, a.default.show({
        content: (0, p.jointExceedLimitCountMessage)({
            dishName: t.spuName,
            limitCount: c,
            orderedCount: l
        }),
        duration: p.LIMIT_COUNT_MESSAGE_DURATION
    })); else {
        var f = -1 === t.minBoughtCount ? s : t.minBoughtCount;
        f > d && (r = !1, a.default.show({
            content: t.spuName + "库存不足",
            duration: 1e3
        })), (0, p.verifyLimitCount)({
            delta: f,
            limitCount: c,
            usedCount: o
        }) || (r = !1, a.default.show({
            content: (0, p.jointExceedLimitCountMessage)({
                dishName: t.spuName,
                limitCount: c,
                orderedCount: l
            }),
            duration: p.LIMIT_COUNT_MESSAGE_DURATION
        }));
    }
    return r;
}

function $(t, e, n) {
    var r = t.spuId, a = e[r], i = t.incBoughtCount, o = -1 === t.minBoughtCount ? i : t.minBoughtCount, s = (0, 
    h.transToSkuDish)(t, e);
    s = D.default.updateMustCount(s), s = (0, h.addCloudCartFields)(s);
    var d = (0, h.getUniqueKey)(s);
    s = u.default.set(s, "goodsNo", d);
    var c = null == a ? void 0 : a.findIndex(function(t) {
        return t.goodsNo === d;
    });
    if (void 0 !== c && -1 !== c) {
        var l = u.default.set(a[c], "count", u.default.getIn(a, [ c, "count" ]) + i);
        e = u.default.setIn(e, [ r, c ], l);
    } else s = u.default.merge(s, {
        count: o,
        createTime: Date.now()
    }), e = u.default.set(e, r, [ s ]), n = n.concat([ {
        skuId: s.skuId,
        spuId: r,
        goodsNo: d
    } ]);
    return {
        cartDishList: e,
        cartDishSortMapList: n
    };
}

function tt(t, e, n, r) {
    var a = t.spuId, i = n[a], o = function(t, e, n) {
        var r, a = e.skuMenuItems && e.skuMenuItems.findIndex(function(t) {
            return t.skuId === n;
        });
        if (u.default.getIn(e, [ "skuMenuItems", a, "soldOut" ])) return null;
        var i, o = u.default.getIn(e, [ "skuMenuItems", a ]), s = -1 === e.minBoughtCount ? e.incBoughtCount : e.minBoughtCount, d = t[o.spuId.toString()];
        d && (i = d.find(function(t) {
            return t.skuId === n;
        }));
        var c = null != (r = i) && r.count ? e.incBoughtCount : s, f = (0, l.setCartSkuAttrs)(e, o.skuId), h = f.newMethods, p = f.newTastes;
        return u.default.merge(o, {
            count: c,
            categoryId: u.default.getIn(e, [ "parentCategoryId", 0 ]),
            methods: h,
            tastes: p
        });
    }(n, t, e);
    o = D.default.updateMustCount(o), o = (0, h.addCloudCartFields)(o);
    var s = (0, h.getUniqueKey)(o);
    o = u.default.set(o, "goodsNo", s);
    var d = (0, u.default)({
        spuId: a,
        goodsNo: s,
        skuId: o.skuId
    });
    if (i) {
        var c = i.findIndex(function(t) {
            return t.goodsNo === s;
        });
        if (-1 !== c) {
            var f = u.default.merge(o, {
                count: u.default.getIn(i, [ c, "count" ]) + o.count,
                remark: o.remark
            });
            n = u.default.setIn(n, [ a, c ], f);
        } else o = u.default.set(o, "createTime", Date.now()), i = i.concat([ o ]), n = u.default.set(n, a, i), 
        r = r.concat([ d ]);
    } else o = u.default.set(o, "createTime", Date.now()), n = u.default.set(n, a, [ o ]), 
    r = r.concat([ d ]);
    return {
        cartDishList: n,
        cartDishSortMapList: r
    };
}