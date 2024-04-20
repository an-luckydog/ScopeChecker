var t = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var u = require("../b/helpers/defineProperty");

require("../b/helpers/Objectvalues");

var e = t(require("../b/regenerator")), n = require("../b/helpers/asyncToGenerator"), i = require("../b/helpers/objectSpread2"), a = require("../b/helpers/classCallCheck"), r = require("../b/helpers/createClass"), s = t(require("../miniprogram_npm/seamless-immutable/index.js")), o = require("../constants/bizConstants"), l = require("../constants/cartConstants"), d = t(require("../lib/mix/confirm")), f = require("./cartHelper"), c = require("./operateCartHelper"), h = require("./menu/cart/cartDataTransfer"), v = require("./menu/dish/DishSdk"), g = require("../constants/menu"), k = require("./menu/dish/PropertyUtil"), m = require("./panel/package/utils"), I = (0, 
s.default)({
    handlePackage: !1,
    existCloudCart: !1,
    fixedStableList: [],
    fixedModifiedList: [],
    multiStableList: [],
    multiModifiedList: []
}), p = new (function() {
    function t() {
        var r = this;
        a(this, t), this.mustDishInfos = void 0, this.addFixedMustDish = function(t, u, e, n, i) {
            var a = u || (0, s.default)({}), l = r.getCountMapOfCartMustDishes(a);
            return t.forEach(function(t) {
                var d, h, v = r.getMenuSpuBySkuId(e, t.skuId);
                if (v && !((0, f.judgePackageSpuDish)(v) && !(0, f.judgeFixedPackage)(v) || (0, 
                f.judgeComplexSpuDish)(v))) {
                    var g = null == (d = v.skuMenuItems) ? void 0 : d.find(function(u) {
                        return u.skuId === t.skuId;
                    });
                    if (g) {
                        var k = v.minBoughtCount === o.NO_LIMIT_CHOICE ? 0 : v.minBoughtCount, I = v.incBoughtCount ? v.incBoughtCount : o.SINGLE_CHOICE, p = t.count, M = i ? 0 : p, D = (null == (h = l[t.skuId]) ? void 0 : h.count) || 0, C = a[t.spuId] || (0, 
                        s.default)([]);
                        if (Array.isArray(C)) {
                            var S = null == C ? void 0 : C.findIndex(function(t) {
                                return t.skuId === g.skuId;
                            }), E = C[S], L = (null == E ? void 0 : E.count) || 0, b = p - D;
                            if (b > 0) {
                                var x, T = b + L;
                                if (T - k > 0 ? (T - k) % I && (T += I - (T - k) % I) : T = k, E) x = E, x = (0, 
                                c.transToCartDish)(E, v); else if (x = g, (0, f.judgeFixedPackage)(v)) {
                                    x = (0, m.initPackage)(v, {
                                        refactorCartDishMap: u
                                    }).cartPackageSku;
                                } else if ((0, f.judgeComplexSpuDish)(v)) {
                                    var y = e[t.spuId];
                                    x = r._initMultiSku(y, g);
                                }
                                var _ = s.default.merge(x, {
                                    mustCount: M
                                }), A = (0, s.default)({
                                    skuDish: _,
                                    addCount: T - L,
                                    promptCount: b
                                });
                                n = n.concat([ A ]);
                            }
                        }
                    }
                }
            }), n;
        }, this.judgeFixedMustDishList = function(t) {
            var u = r.mustDishInfos.fixedStableList || [], e = 0, n = r.getCountMapOfCartMustDishes(t);
            return u.forEach(function(t) {
                var u;
                ((null == (u = n[t.skuId]) ? void 0 : u.count) || 0) >= t.count && e++;
            }), e === u.length;
        }, this.initMustDish = function(t, u) {
            if (r.mustDishInfos = s.default.asMutable(I, {
                deep: !0
            }), !t) return r.mustDishInfos;
            var e = t.handlePackage, n = t.existCloudCart, a = t.mandatoryRules;
            return r.mustDishInfos = i(i({}, r.mustDishInfos), {}, {
                handlePackage: e,
                existCloudCart: n
            }), null == a || a.forEach(function(t) {
                var e = t.type === l.MANDATORY_RULES.TABLE_CAN_MODIFIED || t.type === l.MANDATORY_RULES.PEOPLE_CAN_MODIFIED || !1;
                t.choiceType === l.MANDATORY_TYPE.FIXED ? r.aggregateFixedMustDish(e, t, u) : r.aggregateMultiMustDish(e, t);
            }), r.mustDishInfos;
        }, this.getMustOrderText = function(t) {
            return "" + t.map(function(t) {
                var u;
                return "".concat(null == (u = t.skuDish) ? void 0 : u.skuName, " +").concat(t.promptCount);
            }).join("，");
        }, this.getFixedStableMustDishList = function(t, u) {
            var e = (0, s.default)([]), n = r.mustDishInfos.fixedStableList || [];
            return n.length > 0 && (e = r.addFixedMustDish(n, t, u, e, !1)), e;
        }, this.getFixedMustDishList = function(t, u) {
            var e = (0, s.default)([]);
            e = r.getFixedStableMustDishList(t, u);
            var n = r.mustDishInfos.fixedModifiedList || [], i = r.mustDishInfos.existCloudCart || !1;
            return n.length > 0 && !i && (e = r.addFixedMustDish(n, t, u, e, !0)), e;
        }, this.getConfirmTxt = function(t) {
            if (!t) return "";
            var u = "修改后将自动为您将以下必选品加入购物车：".concat(t.mustDishesNeedStr, "，请确认是否保存修改");
            return t.isMultiDishesEnough || (u = "修改后将自动为您将以下必选品加入购物车：".concat(t.mustDishesNeedStr, "，下单前将需要您继续选择其他需要添加的必选品，请确认是否保存修改")), 
            u;
        }, this.getMustDishDynamicStatus = function() {
            var t = n(e.default.mark(function t(u, n, i, a) {
                var f, c, h, v, g, k, m, I, p, M, D, C, S, E, L, b, x, T, y, _, A, N, O, P, j;
                return e.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (h = (0, s.default)({
                            code: l.MINUS_MUST_DISH_STATUS.CANCAL,
                            data: {
                                mustDishList: (0, s.default)([])
                            },
                            message: ""
                        }), a && a.skuDish && (u = r.addItemToRefactorCartDishMap(u, a)), v = i.skuDish, 
                        g = i.operateCount, v && u) {
                            t.next = 5;
                            break;
                        }
                        return t.abrupt("return", h);

                      case 5:
                        if (k = null == v || null == (f = v.spuId) ? void 0 : f.toString()) {
                            t.next = 8;
                            break;
                        }
                        return t.abrupt("return", h);

                      case 8:
                        if (m = n[k], I = u || (0, s.default)({}), p = I[k], M = r.getCountMapOfCartMustDishes(I), 
                        p) {
                            t.next = 12;
                            break;
                        }
                        return D = M[v.skuId], t.abrupt("return", null != D && D.count ? s.default.merge(h, {
                            code: l.MINUS_MUST_DISH_STATUS.MINUS_FORBIDDEN,
                            message: l.MUST_DISH_IN_PACKAGE_TEXT
                        }) : h);

                      case 12:
                        if (m) {
                            t.next = 14;
                            break;
                        }
                        return t.abrupt("return", h);

                      case 14:
                        if (C = v.goodsNo, -1 !== (S = Array.isArray(p) ? p.findIndex(function(t) {
                            return t.itemNo === C;
                        }) : -1)) {
                            t.next = 17;
                            break;
                        }
                        return t.abrupt("return", h);

                      case 17:
                        if (E = m.minBoughtCount === o.NO_LIMIT_CHOICE ? 1 : m.minBoughtCount, L = v.count || 0, 
                        b = r.getMustCount(v), x = 0, p.forEach(function(t) {
                            t.skuId === v.skuId && (x += t.count || 0);
                        }), T = (null == (c = M[v.skuId]) ? void 0 : c.count) || 0, 0, y = x + g < E ? T - x : T + g, 
                        !(b > 0 && y < b)) {
                            t.next = 24;
                            break;
                        }
                        return t.abrupt("return", s.default.merge(h, {
                            code: l.MINUS_MUST_DISH_STATUS.MINUS_FORBIDDEN,
                            message: l.MUST_DISH_CANNOT_MINUS_TEXT
                        }));

                      case 24:
                        if (A = null, (null == v ? void 0 : v.dishType) === o.DISH_TYPE.PACKAGE && (N = 0, 
                        L + g >= 0 && (N = L + g), O = s.default.set(p[S], "count", N), P = s.default.merge(I), 
                        P = s.default.setIn(P, [ v.spuId, S ], O), A = r.packageMustDishesToModified(v, P)), 
                        null == (_ = A) || !_.mustDishesNeedStr) {
                            t.next = 29;
                            break;
                        }
                        return j = r, t.abrupt("return", new Promise(function(t) {
                            return (0, d.default)({
                                body: r.getConfirmTxt(A),
                                buttons: [ {
                                    text: "暂不修改",
                                    type: "cancel",
                                    callback: function() {
                                        h = s.default.merge(h, {
                                            code: l.MINUS_MUST_DISH_STATUS.CANCAL
                                        }), t(h);
                                    }
                                }, {
                                    text: "继续修改",
                                    type: "submit",
                                    callback: function() {
                                        if (x + g < E) {
                                            var e = (0, s.default)([]);
                                            p.forEach(function(t) {
                                                t.skuId !== v.skuId && (e = e.concat((0, s.default)([ t ])));
                                            }), u = e.length > 0 ? s.default.set(u, k, e) : s.default.without(u, k);
                                        } else if (L + g <= 0) {
                                            var i = s.default.flatMap(p, function(t, u) {
                                                return u === S ? [] : t;
                                            });
                                            u = s.default.set(u, k, i);
                                        } else {
                                            var a = s.default.set(p[S], "count", L + g);
                                            u = s.default.setIn(u, [ k, S ], a);
                                        }
                                        var r = j.mustDishInfos.fixedStableList || [], o = j.addFixedMustDish(r, u, n, [], !0) || [];
                                        h = s.default.merge(h, {
                                            code: l.MINUS_MUST_DISH_STATUS.ADD_FIXED,
                                            data: {
                                                mustDishList: o
                                            }
                                        }), t(h);
                                    }
                                } ]
                            });
                        }));

                      case 29:
                        return t.abrupt("return", s.default.merge(h, {
                            code: l.MINUS_MUST_DISH_STATUS.MINUS_APPROVED
                        }));

                      case 30:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }));
            return function(u, e, n, i) {
                return t.apply(this, arguments);
            };
        }(), this.getMultiMustDishList = function(t, u) {
            var e = r.mustDishInfos || {}, n = e.fixedStableList, i = e.multiStableList, a = e.multiModifiedList, o = r.updateMultiSku(i, n, t, u, !1), l = r.updateMultiSku(a, n, t, u, !0);
            return {
                multiMustDishInfo: (0, s.default)({
                    multiStableList: o.newMustRuleList,
                    multiModifiedList: l.newMustRuleList
                }),
                isStableEnough: r.checkMultiSkuEnough(i, n, t, u).isMultiEnough
            };
        }, this.checkCartMustDishStatus = function(t, u, e) {
            var n = !0, i = (0, s.default)({}), a = r.mustDishInfos || {}, o = u || (0, s.default)({});
            if (Object.keys(a).length > 0) {
                var l = a.fixedStableList, d = a.multiStableList, f = a.multiModifiedList;
                if (l.length || d.length || f.length) {
                    var c = r.judgeFixedMustDishList(o), h = r.updateMultiSku(f, l, o, e, !0), v = r.checkMultiSkuEnough(d, l, o, e), g = v.isMultiEnough, k = h.isMultiEnough || t;
                    n = c && g && k, i = (null == v ? void 0 : v.aggregatedMultiMustGroup) || (0, s.default)({});
                }
            }
            return {
                isMustDishEnough: n,
                aggregatedMultiMustGroup: i
            };
        }, this.updateMustCount = function(t) {
            return t ? s.default.set(t, "mustCount", r.getMustCount(t)) : t;
        }, this.getMustCount = function(t) {
            if (!t) return t;
            var u = r.mustDishInfos, e = u.fixedStableList, n = u.fixedModifiedList, i = !(!e || !e.length) && e.find(function(u) {
                return u.skuId === (null == t ? void 0 : t.skuId);
            }), a = !(!n || !n.length) && n.find(function(u) {
                return u.skuId === (null == t ? void 0 : t.skuId);
            });
            return i || a ? i ? i.count : 0 : -1;
        }, this.getAutoAddMustText = function(t) {
            return "已自动为您将以下必选品加入购物车：" + t.map(function(t) {
                var u;
                return "".concat(null == (u = t.skuDish) ? void 0 : u.skuName, "x").concat(t.promptCount);
            }).join("，");
        }, this.splitMustDishList = function(t, u) {
            var e = (0, s.default)({}), n = (null == t ? void 0 : t.multiStableList) || (0, 
            s.default)([]), i = (null == t ? void 0 : t.multiModifiedList) || (0, s.default)([]), a = n.concat(i);
            return 0 === a.length || (a = a.map(function(t) {
                var e = null == t ? void 0 : t.groupId, n = u[e] || (0, s.default)({});
                return s.default.merge(t, n);
            })).forEach(function(t) {
                var u, n = null == t ? void 0 : t.groupId;
                if (n) {
                    var i = (null == t ? void 0 : t.checkedSelectCount) || 0, a = (null == t ? void 0 : t.checkedDishList) || (0, 
                    s.default)({}), r = (null == t ? void 0 : t.mustDishList) || (0, s.default)([]);
                    r = null == (u = r) ? void 0 : u.map(function(t) {
                        var u, e = null == t ? void 0 : t.skuId;
                        if (!e) return t;
                        var i = (null == (u = a[e]) ? void 0 : u.multiCount) || 0, r = (null == t ? void 0 : t.cartCount) || 0;
                        return s.default.merge(t, {
                            cartCount: r,
                            count: i,
                            groupId: n
                        });
                    });
                    var o = s.default.merge(t, (0, s.default)({
                        selected: i,
                        mustDishList: r
                    }));
                    e = s.default.set(e, n, o);
                }
            }), e;
        }, this.updateDishCountFromMustDishPanel = function(t, u) {
            var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            if (!u) return (0, s.default)({});
            var n = u[e] || (0, s.default)({}), i = null == n ? void 0 : n.mustDishList;
            return Array.isArray(i) && 0 !== (null == i ? void 0 : i.length) ? (null == t || t.forEach(function(t) {
                t.skuId && t.operateCount && (u = r.dealMustDishCount(u, e, t.skuId, t.operateCount));
            }), u) : u;
        }, this.updateMustDishCountFromCart = function(t, u) {
            return u ? (null == t || t.forEach(function(t) {
                var e = t.skuId, n = Object.values(u).filter(function(t) {
                    return ((null == t ? void 0 : t.mustDishList) || []).findIndex(function(t) {
                        return t.skuId === e;
                    }) > -1;
                });
                if (Array.isArray(n) && n.length) {
                    var i = t.operateCount || 0;
                    i > 0 ? u = r.dealMustDishCount(u, n[0].groupId || "", e, i) : i < 0 && n.forEach(function(t) {
                        var n, a = t.groupId || "", s = null == (n = t.mustDishList) ? void 0 : n.find(function(t) {
                            return t.skuId === e;
                        }), o = (null == s ? void 0 : s.count) || 0;
                        0 !== i && 0 !== o && (i + o >= 0 ? (u = r.dealMustDishCount(u, a, e, i), i = 0) : (u = r.dealMustDishCount(u, a, e, -o), 
                        i += o));
                    });
                }
            }), u) : {};
        }, this.packageMustDishesToModified = function(t, u) {
            var e, n = r.mustDishInfos, i = n.fixedStableList, a = n.multiStableList;
            if (!n.handlePackage || !u) return null;
            if (null === t || t.dishType !== o.DISH_TYPE.PACKAGE) return null;
            var s = !1;
            if (null == t || null == (e = t.packageGroups) || e.forEach(function(t) {
                var u;
                null == t || null == (u = t.groupSkus) || u.forEach(function(t) {
                    null != i && i.find(function(u) {
                        return u.skuId === t.skuId;
                    }) && (s = !0);
                });
            }), !s) return null;
            var l = r.fixedStableDishesWillAdded(i, u);
            if (!l) return null;
            return {
                mustDishesNeedStr: l,
                isMultiDishesEnough: r.isMultiStableDishesEnough(i, a, u)
            };
        }, this.addItemToRefactorCartDishMap = function(t, u) {
            var e = (0, h._transferToRefactorCartDishInfo)(u.skuDish), n = u.operateCount, i = e.spuId.toString(), a = t[i];
            if (a) {
                var r = a.findIndex(function(t) {
                    return t.itemNo === e.goodsNo;
                });
                if (-1 !== r) {
                    var o = s.default.getIn(a, [ r, "count" ]), l = s.default.set(e, "count", o + n);
                    t = s.default.setIn(t, [ i, r ], l);
                } else a = a.concat([ e ]), t = s.default.set(t, i, a);
            } else t = s.default.set(t, i, [ e ]);
            return t;
        }, this.getMenuSpuBySkuId = function(t, u) {
            var e = Object.keys(t).find(function(e) {
                var n;
                return null == (n = t[e]) || null == (n = n.skuMenuItems) ? void 0 : n.find(function(t) {
                    return t.skuId === u;
                });
            });
            return e ? t[e] : null;
        }, this.getCountMapOfCartMustDishes = function(t) {
            var u, e = r.mustDishInfos.handlePackage || !1, n = (0, s.default)({});
            return null == (u = Object.keys(t)) || u.forEach(function(u) {
                var i = t[u];
                null == i || i.forEach(function(t) {
                    var u;
                    if (t) {
                        if (Array.isArray(t.packages) && t.packages.length > 0) {
                            if (!e) return;
                            var i = (null == t ? void 0 : t.count) || 0;
                            t.packages.forEach(function(t) {
                                var u;
                                null == (u = t.groupSkus) || u.forEach(function(t) {
                                    var u, e, a = t.skuId, r = (null == (u = n[a]) ? void 0 : u.count) || 0, o = (null == (e = n[a]) ? void 0 : e.packageCount) || 0, l = ((null == t ? void 0 : t.count) || 0) * ((null == t ? void 0 : t.number) || 0) * i;
                                    n = s.default.set(n, a, {
                                        count: r + l,
                                        packageCount: o + l,
                                        skuName: t.skuName
                                    });
                                });
                            });
                        }
                        var a = t.skuId, r = (null == (u = n[a]) ? void 0 : u.count) || 0;
                        n = s.default.set(n, a, {
                            count: r + Number(t.count || 0),
                            skuName: t.skuName
                        });
                    }
                });
            }), n;
        }, this.updateMultiSku = function(t, u, e, n, i) {
            var a = r.getCountMapOfCartMustDishes(e), o = (0, s.default)([]), l = !0;
            return null == t || t.forEach(function(t) {
                var e = (0, s.default)([]), d = 0;
                if (t.skuList.forEach(function(t) {
                    var i, o, l, f = r.getMenuSpuBySkuId(n, t);
                    if (f) {
                        var c = 0, h = (null == (i = a[t]) ? void 0 : i.count) || 0, v = (null == (o = a[t]) ? void 0 : o.packageCount) || 0, g = null == u ? void 0 : u.find(function(u) {
                            return u.skuId === t;
                        });
                        if (g) {
                            var k = h - ((null == g ? void 0 : g.count) || 0);
                            c = k > 0 ? k : 0;
                        } else c = h;
                        var m = null == f || null == (l = f.skuMenuItems) ? void 0 : l.find(function(u) {
                            return u.skuId === t;
                        });
                        m = s.default.merge(m, {
                            cartCount: h,
                            packageCount: v,
                            count: c
                        }), e = e.concat([ m ]), d += c;
                    }
                }), e.length > 0) {
                    var f = s.default.merge(t, {
                        mustDishList: e,
                        selected: d,
                        canModify: i
                    });
                    o = o.concat([ f ]), d < t.choice && (l = !1);
                }
            }), {
                newMustRuleList: o,
                isMultiEnough: l
            };
        }, this.aggregateFixedMustDish = function(t, u, e) {
            var n = u.skuList, i = u.mustCount, a = u.groupId, s = t ? r.mustDishInfos.fixedModifiedList : r.mustDishInfos.fixedStableList, o = t ? r.mustDishInfos.multiModifiedList : r.mustDishInfos.multiStableList;
            i < 0 || n.forEach(function(t) {
                var u = r.getMenuSpuBySkuId(e, t);
                if (u) {
                    var n = u.spuId;
                    if ((0, f.judgePackageSpuDish)(u) && !(0, f.judgeFixedPackage)(u) || (0, f.judgeComplexSpuDish)(u)) o.push({
                        skuList: [ t ],
                        total: 1,
                        choice: i,
                        groupId: "".concat(a, "-").concat(t)
                    }); else if (!u.canWeight) {
                        var l = u.skuMenuItems.find(function(u) {
                            return u.skuId === t;
                        });
                        if (l) {
                            var d = -1 === l.stockCount ? 1 / 0 : l.stockCount;
                            if (l.validity && !l.soldOut && 0 !== d) {
                                var c = s.findIndex(function(u) {
                                    return t === u.skuId;
                                });
                                if (-1 === c) s.push({
                                    skuId: t,
                                    spuId: n,
                                    count: Math.min(i, d)
                                }); else {
                                    var h = Number(s[c].count) + i;
                                    s[c].count = Math.min(h, d);
                                }
                            }
                        }
                    }
                }
            });
        }, this.aggregateMultiMustDish = function(t, u) {
            var e = t ? r.mustDishInfos.multiModifiedList : r.mustDishInfos.multiStableList, n = u.total, i = u.mustCount;
            i >= 0 && e.push({
                skuList: u.skuList,
                total: n,
                choice: i,
                groupId: u.groupId
            });
        }, this.fixedStableDishesWillAdded = function(t, u) {
            var e = "", n = r.getCountMapOfCartMustDishes(u);
            return t.forEach(function(t) {
                var u, i, a = (null == (u = n[t.skuId]) ? void 0 : u.count) || 0, r = (null == (i = n[t.skuId]) ? void 0 : i.skuName) || 0, s = t.count - a;
                if (s > 0) {
                    var o = "".concat(r, " x ").concat(s);
                    e = e ? "".concat(e, "、").concat(o) : o;
                }
            }), e;
        }, this.isMultiStableDishesEnough = function(t, u, e) {
            var n = 0, i = 0, a = r.getCountMapOfCartMustDishes(e);
            return u.forEach(function(u) {
                var e;
                i = u.choice, null == u || null == (e = u.skuList) || e.forEach(function(u) {
                    var e, i = (null == (e = a[u]) ? void 0 : e.count) || 0, r = null == t ? void 0 : t.find(function(t) {
                        return t.skuId === u;
                    });
                    r && ((i -= r.count) < 0 && (i = 0)), n += i;
                });
            }), !(n - i < 0);
        }, this.getMaximalMatchingOfBipartiteGraph = function(t, u, e) {
            var n, i = (0, s.default)(Array(t + 1).fill(-1)), a = (0, s.default)([]), r = (0, 
            s.default)([]), o = 0;
            e.forEach(function(t) {
                if (!((null == t ? void 0 : t.length) < 2)) {
                    var u = t[0], e = t[1];
                    i.length <= u || (r = r.concat((0, s.default)([ i[u] ])), a = a.concat((0, s.default)([ e ])), 
                    i = s.default.set(i, u, o++));
                }
            });
            for (var l = (0, s.default)(Array(u).fill(-1)), d = (0, s.default)(Array(u).fill(-1)), f = function t(u) {
                for (var e = i[u]; -1 !== e; e = r[e]) {
                    var n = a[e], o = l[n];
                    if (-1 === o) {
                        l = s.default.set(l, n, Number(o) + 1);
                        var f = d[n];
                        if (-1 === f || t(f)) return d = s.default.set(d, n, u), !0;
                    }
                }
                return !1;
            }, c = 0, h = 0; h < t; h++) l = (0, s.default)(Array(u).fill(-1)), f(h) && c++;
            for (var v = (0, s.default)([]), g = null == (n = d) || null == (n = n.map(function(t, u) {
                return t > -1 ? (v = v.concat((0, s.default)([ u ])), [ t, u ]) : null;
            })) ? void 0 : n.filter(function(t) {
                return t;
            }), k = 0; k < (null == e ? void 0 : e.length); k++) {
                var m;
                if ((null == (m = v) ? void 0 : m.length) === u) break;
                var I = e[k];
                if ((null == I ? void 0 : I.length) > 1) {
                    var p, M = I[1];
                    -1 === (null == (p = v) ? void 0 : p.indexOf(I[1])) && (v = v.concat((0, s.default)([ M ])), 
                    g = g.concat((0, s.default)([ I ])));
                }
            }
            return {
                matchCount: c,
                maximalMatchingList: g
            };
        }, this.checkRuleDishMap = function(t, e) {
            var n, i, a = (0, s.default)([]), o = (0, s.default)([]), l = (0, s.default)({}), d = (0, 
            s.default)([]);
            null == (n = Object.values(t)) || n.forEach(function(t) {
                for (var u = s.default.merge(t, {
                    choice: 1
                }), e = 0; e < t.choice; e++) d = d.concat([ u ]);
            }), d.forEach(function(t, u) {
                var n = (null == t ? void 0 : t.skuList) || (0, s.default)([]);
                e.forEach(function(t, e) {
                    n.indexOf(t.skuId) > -1 && (a = a.concat((0, s.default)([ [ u, e ] ])), -1 === o.indexOf(u) && (o = o.concat((0, 
                    s.default)([ u ]))));
                });
            });
            var f = (null == (i = o) ? void 0 : i.length) || 0, c = (null == e ? void 0 : e.length) || 0;
            if (!f || !c) return {
                isMultiEnough: !1,
                aggregatedMultiMustGroup: l
            };
            var h = r.getMaximalMatchingOfBipartiteGraph(f, c, a), v = h.matchCount;
            return h.maximalMatchingList.forEach(function(t) {
                var n, i;
                if (!((null == t ? void 0 : t.length) < 2)) {
                    var a = t[0], r = d[a] || (0, s.default)({}), o = t[1], f = e[o] || (0, s.default)({}), c = null == r || null == (n = r.groupId) ? void 0 : n.toString(), h = null == f ? void 0 : f.skuId;
                    if (c && h) if (-1 === (null == (i = Object.keys(l)) ? void 0 : i.indexOf(c))) {
                        var v = (0, s.default)(u({}, c, {
                            checkedDishList: u({}, h, {
                                multiCount: 1
                            }),
                            checkedSelectCount: 1
                        }));
                        l = s.default.merge(l, v);
                    } else {
                        var g, k, m = (null == (g = l[c]) ? void 0 : g.checkedDishList) || (0, s.default)({}), I = (null == (k = l[c]) ? void 0 : k.checkedSelectCount) || 0;
                        if (-1 === Object.keys(m).indexOf(h)) m = s.default.setIn(m, [ h, "multiCount" ], 1); else {
                            var p = s.default.getIn(m, [ h, "multiCount" ]) || 0;
                            m = s.default.setIn(m, [ h, "multiCount" ], p + 1);
                        }
                        l = s.default.setIn(l, [ c, "checkedDishList" ], m), l = s.default.setIn(l, [ c, "checkedSelectCount" ], I + 1);
                    }
                }
            }), {
                isMultiEnough: v === d.length,
                aggregatedMultiMustGroup: l
            };
        }, this.checkMultiSkuEnough = function(t, u, e, n) {
            var i = (0, s.default)([]), a = (0, s.default)({}), o = (0, s.default)([]), l = (0, 
            s.default)({
                aggregatedMultiMustGroup: (0, s.default)({}),
                isMultiEnough: !0
            });
            if (!t) return l;
            var d, f = r.getCountMapOfCartMustDishes(e);
            return t.forEach(function(t) {
                var e, l = 0;
                if (null == t || null == (e = t.skuList) || e.forEach(function(t) {
                    var e, a, d, c, h = r.getMenuSpuBySkuId(n, t);
                    if (h) {
                        var v = 0, g = (null == (e = f[t]) ? void 0 : e.count) || 0, k = (null == (a = f[t]) ? void 0 : a.packageCount) || 0, m = null == u ? void 0 : u.find(function(u) {
                            return u.skuId === t;
                        });
                        if (m) {
                            var I = g - ((null == m ? void 0 : m.count) || 0);
                            v = I > 0 ? I : 0;
                        } else v = g;
                        var p = null == h || null == (d = h.skuMenuItems) ? void 0 : d.find(function(u) {
                            return u.skuId === t;
                        });
                        if (!(null == (c = i) ? void 0 : c.find(function(u) {
                            return u.skuId === t;
                        }))) {
                            p = s.default.merge(p, {
                                cartCount: g,
                                packageCount: k,
                                count: v
                            }), i = i.concat((0, s.default)([ p ]));
                            for (var M = s.default.merge(p, {
                                count: 1
                            }), D = 0; D < v; D++) o = o.concat((0, s.default)([ M ]));
                        }
                    } else l += 1;
                }), l < t.total) for (var d = 0; d < t.choice; d++) a = s.default.set(a, t.groupId, t);
            }), Object.keys(a).length > 0 && (l = 0 === (null == (d = o) ? void 0 : d.length) ? s.default.set(l, "isMultiEnough", !1) : r.checkRuleDishMap(a, o)), 
            l;
        }, this.mustDishInfos = s.default.asMutable(I, {
            deep: !0
        });
    }
    return r(t, [ {
        key: "dealMustDishCount",
        value: function(t, u, e, n) {
            var i, a, r, o;
            if (!u) return t;
            var l = t[u] || (0, s.default)({}), d = (null == l ? void 0 : l.mustDishList) || [], f = null == d ? void 0 : d.findIndex(function(t) {
                return t.skuId === e;
            });
            if (-1 === f) return t;
            var c, h = d[f], v = (null == l ? void 0 : l.checkedDishList) && (null == l ? void 0 : l.checkedDishList[e]) || (0, 
            s.default)({}), g = (null == l ? void 0 : l.selected) || 0, k = (null == l ? void 0 : l.checkedSelectCount) || 0, m = (null == (i = h) ? void 0 : i.count) || 0, I = (null == (a = h) ? void 0 : a.cartCount) || 0, p = m + n, M = p > 0 ? p : 0, D = M - m;
            return h = s.default.set(h, "count", M), v = s.default.set(v, "multiCount", Number((null == (r = v) ? void 0 : r.multiCount) || 0) + D), 
            g += D, k += D, t = s.default.setIn(t, [ u, "selected" ], g > 0 ? g : 0), t = s.default.setIn(t, [ u, "checkedSelectCount" ], k > 0 ? k : 0), 
            t = s.default.setIn(t, [ u, "checkedDishList", e ], v), (t = s.default.setIn(t, [ u, "mustDishList", f ], h)) && (null == (o = Object.keys(t)) || o.forEach(function(e) {
                var n, i = null == (n = t[e]) || null == (n = n.mustDishList) ? void 0 : n.findIndex(function(t) {
                    return t.skuId === h.skuId;
                });
                -1 !== i && (t = s.default.setIn(t, [ e, "mustDishList", i, "cartCount" ], I + D), 
                !c && e !== u && s.default.getIn(t, [ e, "mustDishList", i, "count" ]) > 0 && (c = e));
            })), c && p < 0 && (t = this.dealMustDishCount(t, c, e, p)), t;
        }
    }, {
        key: "getSkuTotalCountInCart",
        value: function(t, u) {
            var e, n = 0, i = this.mustDishInfos.handlePackage || !1;
            return null == (e = Object.keys(t)) || e.forEach(function(e) {
                var a = t[e];
                null == a || a.forEach(function(t) {
                    if (t) if (Array.isArray(t.packages) && t.packages.length > 0) {
                        if (!i) return;
                        var e = t.count || 0;
                        t.packages.forEach(function(t) {
                            var i;
                            null == (i = t.groupSkus) || i.forEach(function(t) {
                                if (t.skuId === u) {
                                    var i = (null == t ? void 0 : t.count) || 0, a = (null == t ? void 0 : t.number) || 0;
                                    n += i * a * e;
                                }
                            });
                        });
                    } else {
                        if (t.skuId !== u) return;
                        n += Number(t.count || 0);
                    }
                });
            }), n;
        }
    }, {
        key: "formatMustDishRenderGroup",
        value: function(t, u, e) {
            var n = this, a = (null == e ? void 0 : e.mandatoryRules) || [];
            if (!a.length) return [];
            var r = (0, v.GetDishSdkSingleton)(t);
            r.setDishCategoryInfo({
                type: g.DISH_ITEM_TYPE_VAL.DEFAULT
            });
            var s = [];
            return a.forEach(function(t) {
                var e = t.groupId, a = t.groupName, o = t.mustCount, d = t.skuList, c = t.choiceType, h = d.map(function(t) {
                    var e = n.getMenuSpuBySkuId(u, t);
                    if (e) {
                        var a = e.spuId;
                        return i(i({
                            skuId: t
                        }, r.getRenderDishData(a, t)), {}, {
                            isNormalPackage: (0, f.judgePackageSpuDish)(e) && !(0, f.judgeFixedPackage)(e),
                            isComplexSpuDish: (0, f.judgeComplexSpuDish)(e)
                        });
                    }
                }).filter(function(t) {
                    return !!t;
                });
                c === l.MANDATORY_TYPE.M_CHOOSE_N ? s.push({
                    groupId: e,
                    groupName: a,
                    mustCount: o,
                    mustDishList: h,
                    choiceType: c
                }) : h.filter(function(t) {
                    return t.isNormalPackage || t.isComplexSpuDish;
                }).forEach(function(t) {
                    s.push({
                        groupId: "".concat(e, "-").concat(t.skuId),
                        groupName: a,
                        mustCount: o,
                        mustDishList: [ t ],
                        choiceType: c
                    });
                });
            }), s;
        }
    }, {
        key: "dealMustDishOperation",
        value: function(t) {
            var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, e = arguments.length > 2 ? arguments[2] : void 0, n = (0, 
            v.GetDishSdkSingleton)(t), a = {};
            return e.forEach(function(t) {
                var e = t || {}, r = e.groupId, s = e.mustDishList, o = void 0 === s ? [] : s;
                r && (a[r] = {}, o.forEach(function(t) {
                    var e = t.id, s = t.skuId, o = (u[e || ""] || []).find(function(t) {
                        return t.skuId === s;
                    }), l = (u[e || ""] || []).filter(function(t) {
                        return t.skuId === s;
                    }).reduce(function(t, u) {
                        return Number(t) + Number(u.count);
                    }, 0) || 0, d = n.findOriginalSpuDetail(e), f = (0, k.dealSkuOperationData)(d, s, l, 0, p.getMustCount(o));
                    a[r][s] = i(i({}, f), {}, {
                        groupId: r,
                        cartCount: l
                    });
                }));
            }), a;
        }
    }, {
        key: "_initMultiSku",
        value: function(t, u) {
            var e = (0, f.setCartSkuAttrs)(t, u.skuId), n = e.newMethods, i = e.newTastes, a = s.default.merge(u, {
                methods: n,
                tastes: i
            });
            return a = (0, f.computeAddPrice)(a);
        }
    } ]), t;
}())(), M = p;

exports.default = M;