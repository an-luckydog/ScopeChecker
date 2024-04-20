Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getSingleDishList = exports.getNormalPackageList = exports.getIntelligentGroupList = exports.getCollocationSpuDish = void 0;

var e = require("../../b/helpers/objectSpread2"), r = require("../../constants/bizConstants"), n = require("../menu/dish/PropertyUtil"), i = require("../cartHelper"), t = require("../menu/dish/DishDataTransfer"), u = require("../../constants/menu"), s = require("../../miniprogram_npm/@components/limo-ui/ui-constant/enum"), a = require("../menu/dish/report"), o = function(e, r) {
    if (!e) return "";
    var n = e.spuName;
    if ((0, i.judgeMultiDish)(e)) {
        var t, u = null == e ? void 0 : e.skuMenuItems.find(function(e) {
            return e.skuId === r;
        });
        null != u && null != (t = u.specAttrs) && null != (t = t[0]) && t.value && (n = "".concat(n, "(").concat(u.specAttrs[0].value, ")"));
    }
    return n;
}, c = function(e, r) {
    var n = [];
    return e.forEach(function(e) {
        var i = e.spuId, t = e.skuId, u = r[i], s = (null == u ? void 0 : u.spuName) || "";
        n.push({
            spuId: i,
            skuId: t,
            name: s
        });
    }), n;
}, l = function(r, n) {
    var i, t = null == r ? void 0 : r.skuMenuItems.find(function(e) {
        return e.skuId === n;
    });
    return t && r ? e(e({}, r), {}, {
        specAttrs: [],
        spuName: o(r, n),
        skuMenuItems: [ t ],
        currentPrice: t.currentPrice,
        originalPrice: t.originalPrice,
        grouponCouponCount: (null == t || null == (i = t.grouponCouponInfo) ? void 0 : i.length) || 0,
        stockCount: t.stockCount,
        memberPrice: t.memberPrice,
        tagList: t.tagList,
        sampleTagList: t.tagList
    }) : null;
};

exports.getCollocationSpuDish = l;

var p = function(e) {
    var r;
    return e && e >= 30 && (r = {
        text: "近期".concat(e, "人已购买"),
        type: s.LABEL_TYPE.BKG_DP
    }), r;
};

exports.getNormalPackageList = function(e, i, u, s) {
    var o = [];
    return null == i || i.forEach(function(i, c) {
        var l = e[i.spuId];
        if (l) {
            var g = function(e, i) {
                var t, u = [], s = [];
                return null == i || null == (t = i.skuMenuItems) || null == (t = t[0]) || null == (t = t.packageGroups) || t.forEach(function(i) {
                    var t;
                    null == i || null == (t = i.groupSkus) || t.forEach(function(t) {
                        var a = t && t.dishPicUrls && t.dishPicUrls[r.PICTURE_RATIO.FOUR_TO_THREE] || r.PLACEHOLDER_DISH_PIC.FOUR_TO_THREE, o = t.skuName;
                        u.findIndex(function(e) {
                            return e.spuId === t.spuId;
                        }) > -1 && t.stockCount < 1 || (s.push({
                            spuId: t.spuId,
                            skuId: t.skuId,
                            name: t.skuName
                        }), t.spuId === e ? u.unshift({
                            name: o,
                            picUrl: a,
                            groupType: i.groupType,
                            currentDish: !0,
                            picLabel: (0, n.dealPicLabel)(!1, t.stockCount, t.unit),
                            spuId: t.spuId
                        }) : u.push({
                            name: o,
                            picUrl: a,
                            groupType: i.groupType,
                            currentDish: !1,
                            picLabel: (0, n.dealPicLabel)(!1, t.stockCount, t.unit),
                            spuId: t.spuId
                        }));
                    });
                }), {
                    list: u,
                    skusInfo: s
                };
            }(u, l), d = (0, t.transferItemData)({
                item: l,
                dishType: "DEFAULT"
            });
            if (d) {
                var I = d.name, m = d.tagList, f = d.recommendTags, h = d.currentPrice, P = d.originalPrice, v = d.unit, _ = d.currency, L = e[u], T = (0, 
                a.getCommonConfigParams)(a.COLLOCATION_DISH_TYPE.PACKAGE_DISH), k = (0, a.getReportConfigDishParams)(L, c + "", g.skusInfo, T, s), C = (0, 
                a.dealReportConfigDish)(k);
                o.push({
                    spuId: l.spuId,
                    name: I,
                    tagList: m,
                    recommendTags: f,
                    currentPrice: h,
                    originalPrice: P,
                    unit: v,
                    list: g.list.slice(0, 6),
                    showMoreInfo: g.list.length > 6,
                    currency: _,
                    saleQuantityTag: p(l.saleQuantity),
                    __newReportConfig__: C
                });
            }
        }
    }), o;
};

var g = function(e, r, n) {
    var i = [];
    return null == r || r.forEach(function(r) {
        var s = e[r.spuId];
        if (null == s ? void 0 : s.skuMenuItems.find(function(e) {
            return e.skuId === r.skuId;
        })) {
            var a = n === r.spuId, c = l(s, r.skuId);
            if (c) {
                var g = (0, t.transferItemData)({
                    item: c,
                    dishType: u.DISH_ITEM_TYPE_VAL.SMALL
                });
                if (g) {
                    var d = g.picUrl, I = g.tagList, m = g.recommendTags, f = g.currentPrice, h = g.originalPrice, P = g.unit, v = g.currency, _ = g.picLabel, L = g.dishDescribeTag;
                    i.push({
                        name: o(s, r.skuId),
                        picUrl: d,
                        picLabel: _,
                        currentDish: a,
                        currentPrice: f,
                        originalPrice: h,
                        tagList: I,
                        recommendTags: m,
                        dishDesc: "",
                        saleQuantityTag: p(s.saleQuantity),
                        currency: v,
                        unit: P,
                        dishDescribeTag: L
                    });
                }
            }
        }
    }), i;
}, d = function(e) {
    return "number" == typeof e ? e + "" : "";
};

exports.getIntelligentGroupList = function(e, r, n, i) {
    var t = [], u = e[n];
    return null == r || r.forEach(function(r, s) {
        var o = r.groupName, l = r.currentPrice, p = void 0 === l ? 0 : l, I = r.originalPrice, m = void 0 === I ? 0 : I, f = r.unit, h = r.groupDesc, P = r.skus, v = g(e, P, n), _ = (0, 
        a.getCommonConfigParams)(a.COLLOCATION_DISH_TYPE.GROUP_DISH), L = c(P, e), T = (0, 
        a.getReportConfigDishParams)(u, s + "", L, _, i), k = (0, a.dealReportConfigDish)(T);
        t.push({
            groupName: o,
            currentPrice: d(p),
            originalPrice: m > p ? d(m) : "",
            unit: {
                text: "/" + f,
                start: ""
            },
            groupDesc: h,
            skuList: P,
            list: v,
            __newReportConfig__: k
        });
    }), t;
};

exports.getSingleDishList = function(r, n, i, s, g, d, I) {
    var m = [];
    return null == n || n.forEach(function(n, f) {
        var h = r[null == n ? void 0 : n.spuId], P = r[s];
        if (h) {
            var v = l(h, n.skuId);
            if (!v) return;
            var _ = (0, t.transferItemData)({
                item: v,
                dishType: u.DISH_ITEM_TYPE_VAL.LARGE
            });
            if (_) {
                var L = _.picUrl, T = void 0 === L ? "" : L, k = _.recommendTags, C = _.tagList, D = _.currentPrice, E = _.originalPrice, y = _.currency, b = _.unit, R = _.picLabel, O = _.dishDescribeTag, A = (0, 
                a.getCommonConfigParams)(g, i), S = c([ n ], r), U = (0, a.getReportConfigDishParams)(P, f + "", S, A, d, I), N = (0, 
                a.dealReportConfigDish)(U);
                if (g === a.COLLOCATION_DISH_TYPE.MENU_SINGLE) {
                    var x = {
                        name: o(h, n.skuId),
                        picLabel: R,
                        picUrl: T,
                        recommendTags: k,
                        saleQuantityTag: p(h.saleQuantity),
                        tagList: C,
                        currentPrice: D,
                        originalPrice: E,
                        unit: b,
                        currency: y,
                        spuId: n.spuId,
                        skuId: n.skuId,
                        dishDescribeTag: O,
                        __newReportConfig__: N
                    };
                    m.push(x);
                } else {
                    var H = e(e({}, _), {}, {
                        name: o(h, n.skuId),
                        spuId: n.spuId,
                        skuId: n.skuId,
                        __newReportConfig__: N
                    });
                    m.push(H);
                }
            }
        }
    }), m;
};