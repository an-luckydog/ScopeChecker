var t = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports._transferToSimpleCartDishInfo = v, exports.calculateCartDishListDiff = function(t, e) {
    var r = [], n = Object.keys(e), o = Object.keys(t);
    return u(new Set(n.concat(o))).forEach(function(n) {
        var o = e[n], a = t[n];
        if (o && a) {
            var s = o.map(function(t) {
                return t.goodsNo;
            }), i = a.map(function(t) {
                return t.goodsNo;
            });
            u(new Set(s.concat(i))).forEach(function(t) {
                var e = o.find(function(e) {
                    return e.goodsNo === t;
                }), u = a.find(function(e) {
                    return e.goodsNo === t;
                });
                if (e && u) {
                    var n = (e.count || 0) - (u.count || 0);
                    n && r.push(k(e, n));
                } else if (e && !u) r.push(k(e, e.count)); else if (!e && u) {
                    var s = u.canWeight ? u.weight : u.count;
                    r.push(k(u, -s));
                }
            });
        } else o && !a ? o.forEach(function(t) {
            r.push(k(t, t.count));
        }) : !o && a && a.forEach(function(t) {
            var e = t.canWeight ? t.weight : t.count;
            r.push(k(t, -e));
        });
    }), r;
}, exports.calculateMethodsCount = function(t) {
    var e = 0;
    return null != t && t.length ? (t.forEach(function(t) {
        var u;
        e += (null == t || null == (u = t.items) ? void 0 : u.length) || 0;
    }), e) : e;
}, exports.calculateTastesCount = function(t) {
    var e = 0;
    return null != t && t.length ? (t.forEach(function(t) {
        t.items.forEach(function(t) {
            e += (null == t ? void 0 : t.count) || 0;
        });
    }), e) : e;
}, exports.computeAddPrice = f, exports.computePackageAddPrice = function(t) {
    var e = t.packageGroups, u = (0, o.default)([]), r = 0;
    return e.map(function(t) {
        var e = t.groupSkus, n = (0, o.default)([]);
        e.map(function(t) {
            var e;
            if (t.count > 0) if (e = f(t), t.canWeight) r += (0, c.plusFloat)((0, c.multiFloat)(e.addPrice, e.weight * e.count) + e.extraPrice); else {
                var u = e.count * e.number;
                r += (0, c.multiFloat)((0, c.plusFloat)(e.extraPrice, e.addPrice), u);
            } else e = t.number > 0 ? f(t) : o.default.set(t, "extraPrice", function(t) {
                if (!t.length) return 0;
                var e = 0;
                return t.forEach(function(t) {
                    null == t || t.forEach(function(t) {
                        e += (null == t ? void 0 : t.price) || 0;
                    });
                }), e;
            }(null == t ? void 0 : t.methods) || 0);
            return n = n.concat([ e ]), null;
        });
        var a = o.default.set(t, "groupSkus", n);
        return u = u.concat([ a ]), null;
    }), o.default.merge(t, {
        packageGroups: u,
        extraPrice: r
    });
}, exports.computeSkuCount = function(t, e) {
    var u = e[t.spuId.toString()], r = 0;
    return u && u.forEach(function(e) {
        e.skuId === t.skuId && (r += e.count);
    }), r;
}, exports.getDishExchangeTip = function(t, e) {
    var u, r = "", n = !1;
    if (null == t || null == (u = t.discount) || !u.useGroupCoupon) return {
        tip: r,
        isCouponDish: n
    };
    var a = t.goodsNo || t.itemNo;
    return o.default.getIn(e, [ a, "exchangeCount" ]) > 0 && (r = "已使用".concat(t.itemCount, "张兑换券"), 
    n = !0), {
        tip: r,
        isCouponDish: n
    };
}, exports.getGrouponTip = function(t, e) {
    var u, r = "", n = !1;
    if (null == t || null == (u = t.discount) || !u.useGroupCoupon) return {
        tip: r,
        isCouponDish: n
    };
    var a = t.goodsNo || t.itemNo;
    return o.default.getIn(e, [ a, "count" ]) > 0 && (r = "已使用".concat(t.itemCount, "张团购券"), 
    n = !0), {
        tip: r,
        isCouponDish: n
    };
}, exports.getLimitDescList = function(t, e) {
    var u = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = t.minBoughtCount, n = t.stockCount;
    e && (n = e.stockCount);
    var o = t.unit || "份";
    return n && n > -1 && n < i.MAX_SHOW_STOCK_COUNT ? "仅剩 ".concat(n, " ").concat(o) : r && r > 1 && !u ? "".concat(r, " ").concat(o, "起售") : "";
}, exports.getSingleSpu = function(t, e) {
    var u = t.skuMenuItems.find(function(t) {
        return t.skuId === e.skuId;
    });
    return o.default.merge(t, {
        specAttrs: (0, o.default)([]),
        skuMenuItems: (0, o.default)([ u ])
    });
}, exports.getUnveriedDishText = function(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = new Set();
    t.forEach(function(t) {
        r = r.add(t.skuName);
    });
    var n = u(r).join("、");
    return n += e ? "的菜品信息发生变化，已为您自动更新" : "的菜品信息发生变化，将为您从购物车删除";
}, exports.judgeComplexSpuDish = function(t) {
    return !!(t.methods && t.methods.length > 0 || t.tastes && t.tastes.length > 0);
}, exports.judgeFeedingExist = d, exports.judgeFixedPackage = function(t) {
    var e;
    return m(t) && (null == t || null == (e = t.skuMenuItems) || null == (e = e[0]) ? void 0 : e.noNeedChoosePackageGroups);
}, exports.judgeMultiDish = function(t) {
    var e = t.specAttrs;
    if (!e || 0 === e.length) return !1;
    var u = o.default.getIn(e, [ 0, "specValues" ]);
    return !!(u && u.length > 1);
}, exports.judgePackageEnableAdd = function(t) {
    var e = !0, u = [], o = [], a = [];
    if (t) return t.packageGroups ? (t.packageGroups.map(function() {
        var t = n(r.default.mark(function t(n) {
            var s, i, c, p;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    s = n.groupSkus.reduce(function(t, e) {
                        return t + e.count;
                    }, 0);
                    try {
                        i = (0, l.getPackageGroupLimitNum)(n), c = i.minCount, s < c && (e = !1, p = (0, 
                        l.getPackageGroupLimitText)(n), o.push({
                            groupId: n.groupId,
                            groupName: n.groupName,
                            limitText: p
                        }));
                    } catch (t) {}
                    return t.abrupt("return", (n.groupSkus.map(function(t) {
                        return t.required && !t.count && (e = !1, u.push(t.skuName), a.push(t.groupId)), 
                        null;
                    }), null));

                  case 3:
                  case "end":
                    return t.stop();
                }
            }, t);
        }));
        return function(e) {
            return t.apply(this, arguments);
        };
    }()), {
        enableClick: e,
        mustChildDishs: u,
        notFullGroup: o,
        mustDishGroup: a
    }) : {
        enableClick: e,
        mustChildDishs: u,
        notFullGroup: o,
        mustDishGroup: a
    };
    return {
        enableClick: e,
        mustChildDishs: u,
        notFullGroup: o,
        mustDishGroup: a
    };
}, exports.judgePackageSpuDish = m, exports.selectTastes = function(t) {
    var e = t.methods, u = t.tastes, r = !1;
    return e && e.length > 0 && e.map(function(t) {
        var e = t.items;
        return e && e.length > 0 && e.map(function(t) {
            return t.defaultSelected || (r = !0), null;
        }), null;
    }), u && u.length > 0 && u.map(function(t) {
        var e = t.items;
        return e && e.length > 0 && (r = !0), null;
    }), r;
}, exports.setCartSkuAttrs = function(t, u) {
    var r = o.default.asMutable(t, {
        deep: !0
    });
    if (r.specAttrs) {
        var n = null;
        r.specAttrs[0] && !r.specAttrs[0].specValues && (n = [ {
            specValues: [ e(e({}, r.specAttrs[0]), {}, {
                key: (r.specAttrs[0].valueId || r.specAttrs[0].key) + ""
            }) ]
        } ], r.specAttrs = n);
    }
    var a, s = (0, p.initAttrsMatrix)(r);
    if (u) {
        var i = (0, p.dealDefaultMutex)(s, {
            groupId: "",
            type: 3,
            id: u + ""
        }, a);
        a = i.mutexMatrix;
    }
    var c = function(t) {
        if (!t) return [];
        var u = t.map(function(t) {
            var u = t.items, r = t.groupId, n = t.groupName, o = t.type, i = [];
            return u.forEach(function(t) {
                var u = t.defaultSelected, c = t.id, l = t.soldOut;
                if (u && !l) {
                    var d = (0, p.dealDefaultMutex)(s, {
                        groupId: r,
                        type: o,
                        id: c
                    }, a);
                    a = d.mutexMatrix;
                    var f = e(e({}, t), {}, {
                        groupId: r,
                        groupName: n
                    });
                    2 === o && (f.count = 1), d.success && i.push(f);
                }
            }), i;
        });
        return (0, o.default)(u);
    };
    return {
        newMethods: c(r.methods),
        newTastes: c(r.tastes)
    };
}, exports.stopPollTask = void 0, exports.transferToOperateDish = k;

var e = require("../b/helpers/objectSpread2"), u = require("../b/helpers/toConsumableArray"), r = t(require("../b/regenerator")), n = require("../b/helpers/asyncToGenerator"), o = t(require("../miniprogram_npm/seamless-immutable/index.js")), a = t(require("../api/rmsStorage")), s = t(require("../lib/mix/log")), i = require("../constants/bizConstants"), c = require("../lib/number"), l = require("./panel/package/utils"), p = require("./panel/spec/mutex");

function d(t) {
    if (!t || 0 === t.length) return !1;
    var e = !1;
    return t.map(function(t) {
        return t && t.length > 0 && (e = !0), null;
    }), e;
}

function f(t) {
    var e = t.weight || 1, u = t.methods, r = t.tastes, n = 0;
    return u && u.length > 0 && u.map(function(t) {
        return t && t.length > 0 && (null == t || t.map(function(t) {
            var u = t.priceType;
            return n = u === i.PRICE_TYPE.PRO_PORTION ? (0, c.plusFloat)(n, (0, c.multiFloat)(t.price, e)) : (0, 
            c.plusFloat)(n, t.price), null;
        })), null;
    }), r && r.length > 0 && r.map(function(t) {
        return t && t.length > 0 && (null == t || t.map(function(t) {
            var e = (0, c.multiFloat)(t.price, t.count);
            return n = (0, c.plusFloat)(n, e), null;
        })), null;
    }), o.default.set(t, "extraPrice", n);
}

function m(t) {
    return !!t && !(!t.skuMenuItems || !t.skuMenuItems.length) && t.skuMenuItems.some(function(t) {
        return t.packageGroups && t.packageGroups.length > 0;
    });
}

function g(t) {
    var e = (0, o.default)([]);
    return d(t) ? (t.map(function(t) {
        if (t.length > 0) {
            var u = (0, o.default)({
                groupId: o.default.getIn(t, [ 0, "groupId" ]),
                groupName: o.default.getIn(t, [ 0, "groupName" ])
            }), r = (0, o.default)([]);
            t.map(function(t) {
                return r = r.concat([ {
                    id: t.id,
                    name: t.name,
                    count: t.count || 1
                } ]), null;
            }), u = o.default.set(u, "items", r), e = e.concat([ u ]);
        }
        return null;
    }), e) : e;
}

function h(t) {
    var e = (0, o.default)([]);
    return Array.isArray(t) && 0 !== t.length ? (t.map(function(t) {
        var u = (0, o.default)({
            groupId: t.groupId,
            groupName: t.groupName
        }), r = (0, o.default)([]);
        return t.groupSkus.map(function(t) {
            var e = (0, o.default)({
                spuId: t.spuId,
                skuId: t.skuId,
                skuName: t.skuName,
                number: t.number,
                count: t.count,
                sum: t.number * t.count,
                weight: t.weight,
                methods: g(t.methods),
                tastes: g(t.tastes)
            });
            return e.count > 0 && (r = r.concat([ e ])), null;
        }), u = o.default.set(u, "groupSkus", r), e = e.concat([ u ]), null;
    }), e) : e;
}

function v(t) {
    var e = t.goodsNo, u = t.tastes, r = t.methods, n = t.packageGroups, o = t.spuId, a = t.skuId, s = t.skuName, i = t.mustCount, c = t.createTime, l = t.remark, p = t.manualCampaigns, d = t.campaignId, f = t.discount;
    return {
        itemNo: e,
        tastes: g(u),
        methods: g(r),
        packages: h(n),
        spuId: o,
        skuId: a,
        skuName: s,
        mustCount: i,
        createTime: c,
        remark: l,
        manualCampaigns: p,
        campaignId: d,
        discount: f
    };
}

function k(t, e) {
    var u = v(t), r = void 0 !== e;
    if (t.canWeight) {
        var n = r ? e : t.weight;
        return o.default.merge(u, {
            operateWeight: n
        });
    }
    var a = r ? e : t.count;
    return o.default.merge(u, {
        operateCount: a
    });
}

exports.stopPollTask = function() {
    var t = Number(a.default.getTimeOutId() || 0);
    try {
        t && (clearTimeout(t), a.default.setTimeOutId({}));
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        s.default.addError("轮询停止失败", t);
    }
};