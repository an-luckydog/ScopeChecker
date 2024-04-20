var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.addCloudCartFields = f, exports.getUniqueKey = c, exports.initPackageGroups = g, 
exports.isValidDish = function(e, t) {
    var u = function(e, u, r) {
        if (!e || !u) return !1;
        var n = e.skuId, a = e.methods, o = e.tastes, i = e.number, d = u.skuId, s = u.number, l = r ? u.methods : t.methods, c = r ? u.tastes : t.tastes;
        return n === d && (!r || i === s) && (a || []).every(function(e) {
            return (l || []).find(function(t) {
                return t.id === e.id;
            });
        }) && (o || []).every(function(e) {
            return (c || []).find(function(t) {
                return t.id === e.id;
            });
        });
    }, r = e.skuId, n = t.skuMenuItems.find(function(e) {
        return e.skuId === r;
    });
    if (!n) return !1;
    if (t.dishType === a.DISH_TYPE.NORMAL) return u(e, n);
    var o = e.packages, i = n.packageGroups, d = o.find(function(e) {
        var t = i.find(function(t) {
            return t.groupId === e.groupId;
        });
        return !t || e.groupSkus.find(function(e) {
            var r = t.groupSkus.find(function(t) {
                return t.skuId === e.skuId;
            });
            return !u(e, r, !0);
        });
    });
    return u(e, n) && !d;
}, exports.transToCartDish = function(e, u) {
    var n, i = e.spuId, s = e.skuId, l = (null == u || null == (n = u.skuMenuItems) ? void 0 : n.find(function(e) {
        return e.skuId + "" == s + "";
    })) || {}, p = (0, r.default)({
        spuId: i,
        skuId: s,
        skuName: e.skuName,
        hiddenDish: (null == u ? void 0 : u.hiddenDish) || !1,
        canWeight: "boolean" == typeof e.canWeight ? e.canWeight : e.weight > 0,
        weight: e.weight || null,
        count: e.count,
        manualCampaigns: e.manualCampaigns,
        specAttrs: l.specAttrs || null,
        remark: r.default.getIn(e, [ "remark", "customRemark" ]) || null,
        mustCount: e.mustCount,
        createTime: e.createTime,
        recommendType: e.recommendType || null,
        categoryId: r.default.getIn(u, [ "parentCategoryId", 0 ]),
        unit: l.unit,
        dishType: l.dishType,
        currentPrice: l.currentPrice,
        originalPrice: l.originalPrice,
        memberPrice: l.memberPrice,
        soldOut: l.soldOut,
        validity: l.validity,
        stockCount: l.stockCount,
        saleTimeDesc: l.saleTimeDesc,
        showRemark: l.showRemark,
        promotionTag: l.promotionTag,
        promotionRule: l.promotionRule,
        tagList: l.tagList,
        defaultSelected: l.defaultSelected,
        packageGroups: l.packageGroups,
        includeMethodPrice: l.includeMethodPrice,
        includeTastePrice: l.includeTastePrice,
        dishBoxVO: l.dishBoxVO,
        minFeeding: l.minFeeding,
        maxFeeding: l.maxFeeding,
        allowManualDiscount: l.allowManualDiscount
    }), f = l.dishType;
    if (f === a.DISH_TYPE.NORMAL) {
        var m = I(e, u), h = k(e, u);
        p = r.default.merge(p, {
            methods: m,
            tastes: h
        }), p = (0, d.computeAddPrice)(p);
    } else if (f === a.DISH_TYPE.PACKAGE) {
        var v = function(e, u) {
            var n = e.packages, i = u.packageGroups, d = g(i, a.INIT_PACKAGE.RECOVER), s = d;
            return d.map(function(e, u) {
                var d = n.find(function(t) {
                    return t.groupId === e.groupId;
                });
                return d ? (d.groupSkus.map(function(n) {
                    var d = r.default.getIn(s, [ u, "groupSkus" ]), l = e.groupSkus.find(function(e) {
                        return e.skuId === n.skuId;
                    }), p = r.default.getIn(i, [ u, "groupSkus" ]).find(function(e) {
                        return e.skuId === n.skuId;
                    });
                    if (l) {
                        var f = n.sum, g = n.count, m = l.number, h = f || g;
                        if (h % m != 0) return null;
                        var v = (0, r.default)({
                            spuId: n.spuId,
                            skuId: n.skuId,
                            skuName: n.skuName,
                            number: l.number,
                            unit: l.unit,
                            count: h / m,
                            extraPrice: l.extraPrice,
                            addPrice: l.addPrice || 0,
                            defaultSelected: l.defaultSelected,
                            dishType: l.dishType || a.DISH_TYPE.NORMAL,
                            canWeight: l.canWeight,
                            weight: l.weight,
                            offShelf: l.offShelf,
                            required: l.required,
                            soldOut: l.soldOut,
                            groupId: l.groupId,
                            groupType: l.groupType,
                            groupChoiceType: l.groupChoiceType,
                            specAttrs: l.specAttrs,
                            parentCategoryId: l.parentCategoryId,
                            parentBaseCategoryId: l.parentBaseCategoryId,
                            methods: I(n, p),
                            tastes: k(n, p),
                            allowManualDiscount: l.allowManualDiscount
                        }), y = c(v);
                        v = r.default.set(v, "goodsNo", y);
                        var P = o.default.findLastIndex(d, function(e) {
                            return e.skuId === v.skuId;
                        });
                        d = d[P].init ? r.default.set(d, P, v) : (0, r.default)([].concat(t(d.slice(0, P + 1)), [ v ], t(d.slice(P + 1)))), 
                        s = r.default.setIn(s, [ u, "groupSkus" ], d);
                    }
                    return null;
                }), null) : (0 === e.groupLimit && (s = r.default.set(s, u, e)), null);
            }), s;
        }(e, l);
        p = r.default.merge(p, {
            methods: e.methods,
            tastes: e.tastes,
            includeMethodPrice: l.includeMethodPrice,
            includeTastePrice: l.includeTastePrice,
            packageGroups: v
        }), p = (0, d.computePackageAddPrice)(p);
    }
    return p;
}, exports.transToCloudCartDishList = function(e, t, u) {
    var n = (0, r.default)([]), a = {};
    return t.forEach(function(t) {
        var r = t.spuId, o = u[r], i = e[r];
        if (i) {
            var d = i.find(function(e) {
                return e.goodsNo === t.goodsNo;
            });
            if (d) {
                var s = y(d, o);
                return void (n = n.concat([ s ]));
            }
        }
        a[t.goodsNo] = {
            menuSpu: o,
            cartSpu: i
        };
    }), Object.keys(a).length > 0 && i.default.sendInfo({
        name: "[CloudCartTransform]",
        content: {
            cartDishList: e,
            cartDishSortMapList: t,
            cloudCartDishList: n,
            filterDishes: a
        }
    }), n;
}, exports.transToSkuDish = function(e) {
    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", o = null == e ? void 0 : e.spuId, s = (null == e || null == (t = e.skuMenuItems) ? void 0 : t.find(function(e) {
        return e.skuId === a;
    })) || r.default.getIn(e, [ "skuMenuItems", 0 ]) || {};
    (0, d.judgeFixedPackage)(e) && (s = function(e) {
        if (!e.packageGroups) return e;
        try {
            var t = e.packageGroups.map(function(e) {
                var t = e.groupSkus.map(function(e) {
                    return u(u({}, e), {}, {
                        number: e.count
                    });
                });
                return u(u({}, e), {}, {
                    groupSkus: t
                });
            });
            return u(u({}, e), {}, {
                packageGroups: t
            });
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            return i.default.addError("transFixedPackageSkuDish", t), e;
        }
    }(s));
    var l, f = r.default.merge(s, {
        __newReportConfig__: null == e ? void 0 : e.__newReportConfig__
    }) || {}, g = n && n[o.toString()], m = c(s);
    return Array.isArray(g) && (l = g.find(function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e.goodsNo === m;
    })) || (l = p(f, e)), l;
};

var t = require("../b/helpers/toConsumableArray"), u = require("../b/helpers/objectSpread2"), r = e(require("../miniprogram_npm/seamless-immutable/index.js")), n = e(require("../miniprogram_npm/@dp/md5/index.js")), a = require("../constants/bizConstants"), o = e(require("../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), i = e(require("../lib/mix/log")), d = require("./cartHelper"), s = require("./menu/dish/DishSdk"), l = require("../lib/mix/util");

function c(e, t) {
    var o, i, d, s = r.default.asMutable(e, {
        deep: !0
    });
    switch (s.dishType) {
      case a.DISH_TYPE.NORMAL:
        var l = [], c = [];
        (null == s || null == (o = s.methods) ? void 0 : o.length) > 0 && s.methods.forEach(function(e) {
            e.sort && (null == e || e.sort(function(e, t) {
                return e.id - t.id;
            }));
            var t = [];
            e.forEach && (null == e || e.forEach(function(e) {
                t.push(e.id);
            })), l.push(t);
        }), (null == s || null == (i = s.tastes) ? void 0 : i.length) > 0 && s.tastes.forEach(function(e) {
            e.sort && (null == e || e.sort(function(e, t) {
                return e.id - t.id;
            }));
            var t = [];
            e.forEach && (null == e || e.forEach(function(e) {
                t.push({
                    id: e.id,
                    count: e.count
                });
            })), c.push(t);
        }), d = u({
            skuId: s.skuId,
            methods: l,
            tastes: c
        }, t), s.remark && (d.remark = s.remark);
        break;

      case a.DISH_TYPE.PACKAGE:
        var p = [];
        s.packageGroups.forEach(function(e) {
            e.groupSkus.forEach(function(t) {
                var u, r, n = [], a = [];
                (null == t || null == (u = t.methods) ? void 0 : u.length) > 0 && t.methods.forEach(function(e) {
                    e.sort && (null == e || e.sort(function(e, t) {
                        return e.id - t.id;
                    }));
                    var t = [];
                    e.forEach && (null == e || e.forEach(function(e) {
                        t.push(e.id);
                    })), n.push(t);
                }), (null == t || null == (r = t.tastes) ? void 0 : r.length) > 0 && t.tastes.forEach(function(e) {
                    e.sort && (null == e || e.sort(function(e, t) {
                        return e.id - t.id;
                    }));
                    var t = [];
                    e.forEach && (null == e || e.forEach(function(e) {
                        t.push({
                            id: e.id,
                            count: e.count
                        });
                    })), a.push(t);
                });
                var o = {
                    groupId: e.groupId,
                    skuId: t.skuId,
                    number: t.number,
                    count: t.count,
                    methods: n,
                    tastes: a
                };
                p.push(o);
            });
        }), d = s.remark ? u({
            skuId: s.skuId,
            packages: p,
            remark: s.remark
        }, t) : u({
            skuId: s.skuId,
            packages: p
        }, t);
    }
    return (0, n.default)(JSON.stringify(d));
}

function p(e, t) {
    var u = r.default.merge(e, {
        count: 0,
        categoryId: r.default.getIn(t, [ "parentCategoryId", 0 ]),
        methods: (0, r.default)([]),
        tastes: (0, r.default)([])
    }), n = c(u);
    return u = r.default.set(u, "goodsNo", n);
}

function f(e) {
    var t = e || {};
    return r.default.merge(t, {
        weight: t.weight || null,
        remark: t.remark || null,
        mustCount: void 0 !== t.mustCount ? t.mustCount : -1,
        recommendType: t.recommendType || null,
        extraPrice: t.extraPrice || 0,
        userAvatars: t.userAvatars || null,
        manualCampaigns: t.manualCampaigns || null
    });
}

function g(e, t) {
    var n = (0, r.default)([]);
    return e && e.map(function(e) {
        var o = (0, r.default)([]), i = e.groupId, s = e.groupType, l = e.groupChoiceType;
        e.groupSkus.map(function(e) {
            var n = (0, d.setCartSkuAttrs)(u(u({}, e), {}, {
                skuMenuItems: [ e ]
            }), e.skuId), p = n.newMethods, f = n.newTastes, g = 0, m = -1 === e.stockCount ? 1 / 0 : e.stockCount;
            !e.soldOut && m >= e.count && (s === a.GROUP_TYPE.FIXED || e.defaultSelected && t === a.INIT_PACKAGE.ADD) && (g = 1);
            var h = r.default.merge(e, {
                groupId: i,
                groupType: s,
                groupChoiceType: l,
                methods: p,
                tastes: f,
                number: e.count,
                count: g,
                init: !0
            }), I = c(h = (0, d.computeAddPrice)(h));
            return h = r.default.set(h, "goodsNo", I), o = o.concat([ h ]), null;
        });
        var p = r.default.set(e, "groupSkus", o);
        return n = n.concat([ p ]), null;
    }), n;
}

function m(e) {
    var t = e.methods;
    if (!(0, d.judgeFeedingExist)(t)) return null;
    var u = (0, r.default)([]);
    return t.map(function(e) {
        if ((null == e ? void 0 : e.length) > 0) {
            var t = (0, r.default)({
                groupId: r.default.getIn(e, [ 0, "groupId" ]),
                groupName: r.default.getIn(e, [ 0, "groupName" ])
            }), n = (0, r.default)([]);
            e.map(function(e) {
                return n = n.concat([ {
                    id: e.id,
                    name: e.name,
                    count: 1,
                    unitPrice: e.price,
                    unitOrgPrice: void 0 !== e.unitOrgPrice ? e.unitOrgPrice : e.price,
                    priceType: e.priceType
                } ]), null;
            }), t = r.default.set(t, "items", n), u = u.concat([ t ]);
        }
        return null;
    }), u;
}

function h(e) {
    var t = e.tastes;
    if (!(0, d.judgeFeedingExist)(t)) return null;
    var u = (0, r.default)([]);
    return t.map(function(t) {
        if (t.length > 0) {
            var n = (0, r.default)({
                groupId: r.default.getIn(t, [ 0, "groupId" ]),
                groupName: r.default.getIn(t, [ 0, "groupName" ])
            }), a = (0, r.default)([]);
            t.map(function(t) {
                return a = a.concat([ {
                    id: t.id,
                    name: t.name,
                    count: t.count,
                    unitPrice: t.price,
                    totalPrice: e.totalPrice,
                    spuId: t.spuId,
                    skuId: t.skuId,
                    cateId: t.parentBaseCategoryId,
                    parentCategoryId: t.parentBaseCategoryId,
                    allowManualDiscount: t.allowManualDiscount
                } ]), null;
            }), n = r.default.set(n, "items", a), u = u.concat([ n ]);
        }
        return null;
    }), u;
}

function I(e, t) {
    var u = e.methods, n = t.methods, a = (0, r.default)([]);
    return n && 0 !== n.length ? (a = (0, r.default)(Array.from({
        length: n.length
    }, function() {
        return [];
    })), u && u.length > 0 && u.map(function(e) {
        var t = e.groupId, u = n.find(function(e) {
            return e.groupId === t;
        });
        if (!u) return null;
        var o = e.items;
        if (!o || 0 === o.length) return null;
        var i = (0, r.default)([]);
        o.map(function(n) {
            var a = u.items.find(function(e) {
                return e.id === n.id;
            });
            if (a) {
                var o = (0, r.default)({
                    groupId: t,
                    groupName: e.groupName,
                    id: a.id,
                    name: a.name,
                    price: a.price,
                    priceType: a.priceType,
                    soldOut: a.soldOut,
                    defaultSelected: a.defaultSelected
                });
                i = i.concat([ o ]);
            }
            return null;
        });
        var d = n.findIndex(function(t) {
            return e.groupId === t.groupId;
        });
        return a = r.default.set(a, d, i), null;
    }), a) : a;
}

function k(e, t) {
    var u = e.tastes, n = t.tastes, a = (0, r.default)([]);
    return n && 0 !== n.length ? (a = (0, r.default)(Array.from({
        length: n.length
    }, function() {
        return [];
    })), u && u.length > 0 && u.map(function(e) {
        var t = e.groupId, u = n.find(function(e) {
            return e.groupId === t;
        });
        if (!u) return null;
        var o = e.items;
        if (!o || 0 === o.length) return null;
        var i = (0, r.default)([]);
        o.map(function(n) {
            var a = u.items.find(function(e) {
                return e.id === n.id;
            });
            if (a) {
                var o = (0, r.default)({
                    groupId: t,
                    groupName: e.groupName,
                    count: n.count,
                    id: a.id,
                    name: a.name,
                    price: a.price,
                    priceType: a.priceType,
                    soldOut: a.soldOut,
                    repeatable: a.repeatable,
                    minBoughtCount: a.minBoughtCount,
                    maxBoughtCount: a.maxBoughtCount,
                    incBoughtCount: a.incBoughtCount,
                    stockCount: a.stockCount,
                    memberPrice: a.memberPrice,
                    spuId: a.spuId,
                    skuId: a.skuId,
                    parentCategoryId: a.parentCategoryId,
                    parentBaseCategoryId: a.parentBaseCategoryId,
                    allowManualDiscount: a.allowManualDiscount
                });
                i = i.concat([ o ]);
            }
            return null;
        });
        var d = n.findIndex(function(t) {
            return e.groupId === t.groupId;
        });
        return a = r.default.set(a, d, i), null;
    }), a) : a;
}

function v(e) {
    return e.remark ? (0, r.default)({
        customRemark: e.remark,
        opts: []
    }) : null;
}

function y(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, r.default)({}), u = (0, 
    r.default)({
        cateId: t.parentBaseCategoryId && t.parentBaseCategoryId[0] || null,
        displayCategoryId: t.parentCategoryId && t.parentCategoryId[0] || null,
        skuImg: t.dishPicUrls && t.dishPicUrls[0] || null,
        unit: t.unit || "",
        skuId: e.skuId,
        spuId: e.spuId,
        skuName: e.skuName,
        dishType: e.dishType,
        canWeight: e.canWeight,
        weight: e.weight,
        unitBasePrice: e.originalPrice,
        unitRawPrice: e.originalPrice,
        unitPrice: e.unitPrice,
        totalPrice: e.totalPrice,
        boxInfoVO: e.boxInfoVO,
        memberPrice: e.memberPrice,
        count: e.count,
        itemNo: e.goodsNo,
        specAttrs: e.specAttrs,
        remark: v(e),
        extraPrice: e.extraPrice,
        mustCount: e.mustCount,
        initCount: e.initCount,
        createTime: e.createTime,
        recommendType: e.recommendType,
        categoryId: e.categoryId,
        allowManualDiscount: e.allowManualDiscount,
        manualCampaigns: P(e.manualCampaigns, e.count)
    }), n = e.dishType;
    if (n === a.DISH_TYPE.NORMAL) {
        var o = m(e), i = h(e);
        u = r.default.merge(u, {
            methods: o,
            tastes: i
        });
    } else if (n === a.DISH_TYPE.PACKAGE) {
        var d = function(e) {
            var t = e.packageGroups, u = (0, r.default)([]);
            return t.map(function(t) {
                var n = (0, r.default)({
                    groupId: t.groupId,
                    groupName: t.groupName,
                    groupType: t.groupType,
                    groupChoiceType: t.groupChoiceType,
                    groupLimit: t.groupLimit,
                    optionType: t.optionType,
                    lowerCount: t.lowerCount,
                    upperCount: t.upperCount
                }), a = (0, r.default)([]);
                return t.groupSkus.map(function(t) {
                    var u = (0, r.default)({
                        spuId: t.spuId,
                        skuId: t.skuId,
                        skuName: t.skuName,
                        unit: t.unit,
                        number: t.number,
                        count: t.number * t.count,
                        specAttrs: t.specAttrs,
                        dishType: t.dishType,
                        addPrice: t.addPrice || 0,
                        cateId: t.parentBaseCategoryId,
                        canWeight: t.canWeight,
                        weight: t.weight,
                        unitBasePrice: null,
                        methods: m(t),
                        tastes: h(t),
                        unitPrice: e.unitPrice,
                        totalPrice: e.totalPrice,
                        allowManualDiscount: t.allowManualDiscount
                    });
                    return u.count > 0 && (a = a.concat([ u ])), null;
                }), n = r.default.set(n, "groupSkus", a), u = u.concat([ n ]), null;
            }), u;
        }(e);
        u = r.default.merge(u, {
            methods: e.methods,
            tastes: e.tastes,
            includeMethodPrice: e.includeMethodPrice,
            includeTastePrice: e.includeTastePrice,
            packages: d
        });
    }
    return u;
}

var P = function(e, t) {
    if (Array.isArray(e)) {
        var n = (0, s.GetDishSdkSingleton)((0, l.getShopId)());
        return e.map(function(e) {
            var a = e.campaignSkus;
            return u(u({}, e), {}, {
                campaignSkus: null == a ? void 0 : a.map(function(e) {
                    var u = e.spuId, a = e.skuId, o = n ? n.findOriginalSpuDetail(u) : {}, i = n ? n.findOriginalSkuDetail(u, a) : {}, d = r.default.merge(i, e);
                    return d = f(d), y(d = r.default.set(d, "count", d.count * t), o);
                })
            });
        });
    }
};