var t = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports._transferToRefactorCartDishInfo = l, exports.batchDishWithTempCartDishList = void 0, 
exports.batchUpdateDish = function(t, e) {
    var r = e.cartDishList, u = e.cartDishSortMapList;
    return t.forEach(function(t) {
        var e = t.modifySKuDish;
        if (e) {
            var i = r[e.spuId], s = null == i ? void 0 : i.find(function(t) {
                return t.goodsNo === e.itemNo;
            }), o = null == i ? void 0 : i.findIndex(function(t) {
                return t.goodsNo === e.itemNo;
            });
            if (s) {
                var f = a.default.set(s, "remark", e.remark), c = (0, n.getUniqueKey)(f);
                f = a.default.set(f, "goodsNo", c);
                var d = null == i ? void 0 : i.findIndex(function(t) {
                    return t.goodsNo === c;
                }), l = u.findIndex(function(t) {
                    return t.goodsNo === e.itemNo;
                }), h = (0, a.default)({
                    spuId: e.spuId,
                    goodsNo: c,
                    skuId: f.skuId
                });
                if (-1 !== d) {
                    f = a.default.merge(f, {
                        count: Number(a.default.getIn(i, [ d, "count" ])) + Number(f.count)
                    }), r = a.default.setIn(r, [ e.spuId, d ], f);
                    var p = a.default.flatMap(i, function(t, e) {
                        return e === o ? [] : t;
                    });
                    r = a.default.set(r, e.spuId, p), u = a.default.flatMap(u, function(t, e) {
                        return e === l ? [] : t;
                    });
                } else {
                    f = a.default.set(f, "createTime", Date.now());
                    var v = a.default.flatMap(i, function(t, e) {
                        return e === o ? f : t;
                    });
                    r = a.default.set(r, [ e.spuId ], v), u = (u = a.default.flatMap(u, function(t, e) {
                        return e === l ? [] : t;
                    })).concat([ h ]);
                }
            }
        }
    }), {
        cartDishList: r,
        cartDishSortMapList: u
    };
}, exports.filterSameRefactorCartDishInfo = function(t) {
    var r = {};
    Array.isArray(t) && t.forEach(function(t) {
        var e = function(t) {
            var e, r = a.default.asMutable(t, {
                deep: !0
            });
            if (Array.isArray(t.packages) && t.packages.length > 0) {
                var n = [];
                r.packages.forEach(function(t) {
                    t.groupSkus.forEach(function(e) {
                        var r = {
                            groupId: t.groupId,
                            skuId: e.skuId,
                            number: e.number,
                            count: e.count,
                            methods: p(e.methods),
                            tastes: p(e.tastes)
                        };
                        n.push(r);
                    });
                }), e = {
                    skuId: r.skuId,
                    packages: n
                };
            } else e = {
                skuId: r.skuId,
                methods: p(r.methods),
                tastes: p(r.tastes)
            };
            return (0, u.default)(JSON.stringify(e));
        }(t), n = r[e] || [];
        n.push(t), r[e] = n;
    });
    var n = function(t, e) {
        return void 0 !== t && void 0 !== e ? t + e : void 0;
    };
    return Object.values(r).forEach(function(r) {
        if (Array.isArray(r) && 2 === r.length) {
            var a = e(r, 2), u = a[0], i = a[1], s = n(u.operateCount, i.operateCount), o = n(u.operateWeight, i.operateWeight);
            (void 0 !== s && 0 === s || void 0 !== o && 0 === o) && (t = t.filter(function(t) {
                return r.indexOf(t) < 0;
            }));
        }
    }), t;
}, exports.getPartialCloudCartInfoFromStorage = function(t, e) {
    var r = s.default.getPartialCloudCartInfo(t);
    return "string" == typeof e ? r.tableNum === e ? r : null : Object.keys(r).length > 0 ? r : null;
}, exports.mergeNewCartDishInfosAndLeftOperation = void 0, exports.transToLocalCartDishList = h, 
exports.transferCartDishListToRefactorCartDishMap = function(t) {
    var e = (0, a.default)({});
    return Object.keys(t).forEach(function(r) {
        var u = t[r], n = a.default.flatMap(u, function(t) {
            return l(t);
        });
        e = a.default.setIn(e, [ r ], n);
    }), e;
}, exports.transferRefactorCartDishMapToCartDishList = function(t, e) {
    var r, u = (0, a.default)([]);
    return null == (r = Object.keys(t)) || r.forEach(function(e) {
        var r = t[e];
        u = u.concat(r);
    }), h(u, e);
}, exports.verifyNewCartDishList = function(t, e, r) {
    var u, n = s.default.getCartDishSortMapList(t, e), i = (null == (u = s.default.getRefactorLocalCart(t, e)) ? void 0 : u.refactorCartDishMap) || (0, 
    a.default)({}), f = (0, o.verifyCartDish)(r, i, n, !1, !1), l = s.default.getInvalidDishes(t);
    if (l) {
        s.default.setInvalidDishes(t, void 0);
        var h = (0, c.handleInvalidDishes)(l, f.cartDishList), p = d(h, f), v = p.cartDishList, m = p.cartDishSortMapList;
        f.cartDishList = v, f.cartDishSortMapList = m;
    } else (0, o.handleUnverifyDish)(f.unVerfiedDish, f.promptDishes);
    return f;
};

var e = require("../../../b/helpers/slicedToArray");

require("../../../b/helpers/Objectvalues");

var r = require("../../../constants/cartConstants"), a = t(require("../../../miniprogram_npm/seamless-immutable/index.js")), u = t(require("../../../miniprogram_npm/@dp/md5/index.js")), n = require("../../operateCartHelper"), i = require("../../cartHelper"), s = t(require("../../../api/rmsStorage")), o = require("./cartDishVerify"), f = t(require("../../MustDishSdk")), c = require("./cartVerify");

var d = function(t, e) {
    return null != t && t.length && t.forEach(function(t) {
        null != t && t.addCount && t.skuDish && (e = function(t, e) {
            var r = t.skuDish;
            if (r && r.soldOut) return e;
            var u = e.cartDishList, i = e.cartDishSortMapList;
            r = f.default.updateMustCount(r), r = (0, n.addCloudCartFields)(r);
            var s = (0, n.getUniqueKey)(r);
            if (!(r = a.default.set(r, "goodsNo", s))) return e;
            var o = r.spuId.toString(), c = u[o], d = (0, a.default)({
                spuId: o,
                goodsNo: s,
                skuId: r.skuId
            });
            if (c) {
                var l = c.findIndex(function(t) {
                    return t.goodsNo === s;
                });
                if (-1 !== l) {
                    var h = Number(a.default.getIn(c, [ l, "count" ])) + Number(t.addCount);
                    if (h > 0) {
                        var p = a.default.merge(r, {
                            count: h
                        });
                        u = a.default.setIn(u, [ o, l ], p);
                    } else {
                        var v = a.default.flatMap(c, function(t, e) {
                            return e === l ? [] : t;
                        });
                        u = a.default.set(u, o, v);
                        var m = i.findIndex(function(t) {
                            return t.goodsNo === s;
                        });
                        i = a.default.flatMap(i, function(t, e) {
                            return e === m ? [] : t;
                        });
                    }
                } else {
                    var D = a.default.set(r, "count", t.addCount);
                    c = c.concat([ D ]), u = a.default.set(u, o, c), i = i.concat([ d ]);
                }
            } else r = a.default.merge(r, {
                count: t.addCount,
                createTime: Date.now()
            }), u = a.default.set(u, o, [ r ]), i = i.concat([ d ]);
            return {
                cartDishList: u,
                cartDishSortMapList: i
            };
        }(t, e));
    }), e;
};

exports.batchDishWithTempCartDishList = d;

function l(t) {
    var e = t.weight, r = t.count, u = t.allDiscount, n = t.itemPrice, s = t.extraPrice, o = t.allBuyFreeDiscount, f = t.userAvatars, c = t.manualCampaigns, d = t.campaignDishes, l = t.pointDiscountText, h = t.allCouponDiscount, p = (0, 
    i._transferToSimpleCartDishInfo)(t);
    return a.default.merge(p, {
        weight: e,
        count: r,
        allDiscount: u,
        allBuyFreeDiscount: o,
        itemPrice: n,
        extraPrice: s,
        userAvatars: f,
        manualCampaigns: c,
        campaignDishes: d,
        pointDiscountText: l,
        allCouponDiscount: h
    });
}

function h(t, e) {
    var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], u = (0, 
    a.default)({}), i = (0, a.default)([]), s = (0, a.default)([]);
    return t.map(function(t) {
        var o = t.spuId, f = e && e[o];
        if (!f || r && !(0, n.isValidDish)(t, f)) return s = s.concat([ t ]), null;
        var c = a.default.setIn(t, [ "remark" ], {
            customRemark: t.remark,
            opt: null
        });
        c = (0, n.transToCartDish)(c, f);
        var d = (0, n.getUniqueKey)(c);
        c = a.default.merge(c, {
            goodsNo: d,
            userAvatars: t.userAvatars
        });
        var l = u[o];
        return l = l ? l.concat([ c ]) : (0, a.default)([ c ]), u = a.default.set(u, o, l), 
        i = i.concat([ {
            spuId: o,
            skuId: c.skuId,
            goodsNo: c.goodsNo
        } ]), null;
    }), {
        cartDishList: u,
        cartDishSortMapList: i,
        unVerfiedDish: s
    };
}

function p(t) {
    var e = [];
    return t.length > 0 && t.forEach(function(t) {
        t.items.sort(function(t, e) {
            return Number(t.id) - Number(e.id);
        });
        var r = [];
        t.items.forEach(function(t) {
            r.push(t.id);
        }), e.push(r);
    }), e;
}

exports.mergeNewCartDishInfosAndLeftOperation = function(t, e, u) {
    var n = function(t) {
        return t.length ? t.reduce(function(t, e) {
            return t[e.itemNo || e.skuId] = e, t;
        }, {}) : [];
    }, i = n(t);
    e.forEach(function(t) {
        var e = t.operaType, s = t.operateCartDishList;
        if (e === r.OPERATE_TYPE.CLEAR_CART) i = n(s); else {
            if (e === r.OPERATE_TYPE.MODIFY && s.find(function(t) {
                var e = t.operateWeight, r = t.operateCount, a = t.spuId, n = t.itemNo, s = u[a];
                return !s || !!(s.canWeight ? e < 0 : r < 0) && !i[n];
            })) return;
            s.forEach(function(t) {
                var u = t.operateWeight, n = t.operateCount, s = t.skuId, o = t.itemNo;
                switch (i[o] = i[o] || t, e) {
                  case r.OPERATE_TYPE.ADD_MINUS:
                  case r.OPERATE_TYPE.MODIFY:
                    i[o] = a.default.set(i[o], "count", Number(n || 0) + Number(i[o].count || 0));
                    break;

                  case r.OPERATE_TYPE.SET:
                    i[o] = a.default.set(i[o], "count", Number(n || 0));
                    break;

                  case r.OPERATE_TYPE.WEIGHT_OP:
                    Object.keys(i).forEach(function(t) {
                        i[t].skuId === s && (i[t] = null);
                    }), i[o] = u ? a.default.set(i[o], "weight", Number(u || 0)) : null;
                }
            });
        }
    });
    var s = [], o = Object.keys(i).filter(function(t) {
        return i[t];
    }).map(function(t) {
        return i[t];
    }).filter(function(t) {
        var e = t.spuId, r = t.weight, a = t.count, n = u[e];
        return n ? n.canWeight ? r > 0 : a > 0 : (s.push(t), !1);
    });
    return {
        filterDishes: s,
        leftDishes: o
    };
};