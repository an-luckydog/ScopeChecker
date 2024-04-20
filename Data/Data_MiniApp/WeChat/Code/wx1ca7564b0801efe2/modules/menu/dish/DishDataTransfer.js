var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.transferSkuData = exports.transferItemData = exports.sliceDataTransfer = exports.getSetObj = exports.generateDishList = exports.checkBizType = void 0;

var t = require("../../../b/helpers/objectSpread2"), i = e(require("../../../miniprogram_npm/seamless-immutable/index.js")), a = e(require("../../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), r = require("../../../constants/bizConstants"), n = require("../../../constants/menu"), o = e(require("../../MustDishSdk")), d = e(require("../../../api/rmsStorage")), s = require("./util"), c = require("./PropertyUtil"), l = e(require("../I18n/I18nService")), u = e(require("../shop/shopService")), g = require("../../../types/newMenu/MenuData"), p = {
    DEFAULT: {
        marginTop: 0,
        marginBottom: 40,
        paddingTop: 18,
        paddingBottom: 10,
        borderTop: 0,
        borderBottom: 0,
        height: 182
    },
    LARGE: {
        marginTop: 0,
        marginBottom: 22,
        paddingTop: 0,
        paddingBottom: 0,
        borderTop: 0,
        borderBottom: 0,
        height: 442
    },
    SMALL: {
        marginTop: 0,
        marginBottom: 20,
        paddingTop: 0,
        paddingBottom: 0,
        borderTop: 0,
        borderBottom: 0,
        height: 352
    },
    SUPER_LARGE: {
        marginTop: 0,
        marginBottom: 35,
        paddingTop: 0,
        paddingBottom: 0,
        borderTop: 0,
        borderBottom: 0,
        height: 563
    },
    ORDERED: {
        marginTop: 0,
        marginBottom: 0,
        paddingTop: 0,
        paddingBottom: 0,
        borderTop: 0,
        borderBottom: 0,
        height: 100
    },
    RIGHT_LARGE: {
        marginTop: 0,
        marginBottom: 30,
        paddingTop: 0,
        paddingBottom: 0,
        borderTop: 0,
        borderBottom: 0,
        height: 526
    },
    COUPON: {
        marginTop: 0,
        marginBottom: 18,
        paddingTop: 0,
        paddingBottom: 0,
        borderTop: 0,
        borderBottom: 0,
        height: 247
    }
}, h = a.default.MPInfo.getSystemInfo().windowWidth || 375;

function T(e, t) {
    var i = 0;
    return Object.keys(e).forEach(function(a) {
        i += Math.floor(e[a] / 750 * t);
    }), i = i / t * 750;
}

var m = function(e) {
    var t, i, a, o, d = e.item, s = e.cartCount, p = void 0 === s ? 0 : s, h = e.cartWeight, T = void 0 === h ? 0 : h, m = e.mustCount, I = void 0 === m ? -1 : m, y = e.hotRankFromIndex, f = void 0 !== y && y, D = e.itemIndex, S = void 0 === D ? 0 : D, E = e.dishType, v = void 0 === E ? "DEFAULT" : E, L = e.dishFrom, _ = void 0 === L ? "" : L, C = e.categoryId, P = void 0 === C ? -1 : C;
    if (d) {
        var b = d.recommendTags && d.recommendTags.length > 0 && (null == (t = d.recommendTags[0]) || null == (t = t.tagDesc) ? void 0 : t.match(/\d/g)) || [], O = Number(b.join("")) || 0, R = l.default.getCurrency(), k = u.default.getShopServiceData().fmpBizData, A = {
            id: d.spuId,
            rank: (0, c.dealHotRank)(f, S),
            picTag: (0, c.dealPicTag)(d.dishTag && d.dishTag[0]),
            picUrl: (0, c.dealPicUrl)(d.dishPicUrls, v),
            picLabel: (0, c.dealPicLabel)({
                ordered: d.ordered,
                stockCount: d.stockCount,
                unit: d.unit,
                hotRankFromIndex: f,
                recommendCount: O,
                dishType: v,
                picLabelStyleType: null != (i = null == k ? void 0 : k.picLabelStyleType) ? i : g.PIC_LABEL_STYLE_TYPE.DEFAULT
            }),
            currency: R,
            name: d.spuName,
            desc: (0, c.dealHiddenDishDesc)(d, v) ? "" : (0, c.dealDescription)(d.spicy, d.description),
            ordered: d.ordered,
            recommendTags: "SUPER_LARGE" !== v ? d.recommendTags : [],
            saleQuantity: null != (a = d.saleQuantityStr) && a.length ? d.saleQuantityStr : (0, 
            c.dealSaleQuantity)(d.saleQuantity),
            tagList: (0, c.dealTagList)(d, !1, d.sampleTagList, v),
            sampleTagList: (0, c.dealTagList)(d, !1, d.sampleTagList, v),
            currentPrice: (0, c.dealCurrentPrice)(d),
            originalPrice: (0, c.dealOriginalPrice)(d),
            unit: (0, c.dealUnit)(d),
            preventSale: (0, c.dealPreventSale)(d),
            operationData: (0, c.dealOperationData)(d, p, T, I, _, v, P),
            orderedSize: (0, c.dealOrderedSize)(v),
            hotSellingTag: (0, c.dealHotSellingTag)(d.hotSellingImgTag, "" + d.currentPrice, v),
            mustCount: I,
            skuMenuItems: d.skuMenuItems,
            tagListSize: (0, c.dealTagListSize)(v),
            dishDescribeTag: d.dishDescribeTag || [],
            estimatedPrice: P === r.DISH_CATEGORY_ID.ORDERED ? void 0 : d.estimatedPrice
        };
        return Object.keys(A).forEach(function(e) {
            A[e] || delete A[e];
        }), A.hiddenDish = null == d ? void 0 : d.hiddenDish, d.canWeight ? A.weight = T : A.count = p, 
        A.currentPrice && (null == (o = A.currentPrice) ? void 0 : o.length) > 5 && -1 !== n.SMALL_FONT_TYPE.indexOf(v) && (A.priceSmallFont = !0), 
        A;
    }
}, I = function(e, t, i) {
    var a = n.DISH_ITEM_ROW_NUMBER[i], o = 0;
    if (e && e.length) {
        if (t === r.DISH_CATEGORY_ID.ORDERED) return 100 * (e && e.length || 0);
        if (t === r.PLUGIN_CATEGORY) return 30;
        if (t === r.DISH_CATEGORY_ID.COUPON) return 120 * (e && e.length || 0);
        for (var d = 0; d < e.length; d++) e[d].isSpread && o++;
        return Math.ceil(o / a) * T(p[i], h) || 1;
    }
    return 100;
}, y = function(e, t) {
    var i = n.DISH_ITEM_ROW_NUMBER[t];
    return "number" == typeof e ? Math.ceil(e / i) * T(p[t], h) || 1 : 100;
};

exports.checkBizType = function(e) {
    var t;
    switch (e) {
      case 0:
        t = 1;
        break;

      case 1:
        t = 2;
        break;

      default:
        t = e || 1;
    }
    return t;
}, exports.getSetObj = function(e, t, i) {
    var a = {};
    return e.forEach(function(r, n) {
        if (r && r.categoryId === t) if (r.dishInfo) for (var o = !1, d = 0; d < r.dishInfo.length; d++) {
            for (var s = 0, c = 0; c < r.dishInfo[d].content.length; c++) {
                var l = e[n].dishInfo[d].content[c];
                l.isNotValidity && (o ? (l.isSpread && s++, a["allDishList[".concat(n, "].dishInfo[").concat(d, "].content[").concat(c, "].isSpread")] = !l.isSpread) : o = !0);
            }
            a["allDishList[".concat(n, "].dishInfo[").concat(d, "].minHeight")] = y(r.dishInfo[d].content.length - s, i);
        } else a["allDishList[".concat(n, "].isSpread")] = !e[n].isSpread;
    }), a;
}, exports.transferSkuData = function(e) {
    var t, i, a = e.item, r = e.sku, n = e.dishType, d = void 0 === n ? "DEFAULT" : n;
    if (a) {
        var s = l.default.getCurrency(), p = u.default.getShopServiceData().fmpBizData, h = {
            id: a.spuId,
            skuId: r.skuId,
            picTag: (0, c.dealPicTag)(a.dishTag && a.dishTag[0]),
            picUrl: (0, c.dealPicUrl)(a.dishPicUrls, d),
            picLabel: (0, c.dealPicLabel)({
                ordered: a.ordered,
                stockCount: r.stockCount,
                unit: r.unit,
                picLabelStyleType: null != (t = null == p ? void 0 : p.picLabelStyleType) ? t : g.PIC_LABEL_STYLE_TYPE.DEFAULT
            }),
            currency: s,
            name: (0, c.dealSkuName)(r),
            desc: (0, c.dealHiddenDishDesc)(a, d) ? "" : (0, c.dealDescription)(a.spicy, a.description),
            recommendTags: a.recommendTags,
            saleQuantity: null != (i = a.saleQuantityStr) && i.length ? a.saleQuantityStr : (0, 
            c.dealSaleQuantity)(a.saleQuantity),
            tagList: (0, c.dealTagList)(r),
            currentPrice: (0, c.dealCurrentPrice)(r),
            originalPrice: (0, c.dealOriginalPrice)(r),
            unit: (0, c.dealUnit)(r),
            mustCount: o.default.getMustCount(r),
            sampleTagList: (0, c.dealTagList)(r),
            dishDescribeTag: a.dishDescribeTag || [],
            tagListSize: (0, c.dealTagListSize)(d),
            hotSellingTag: (0, c.dealHotSellingTag)(a.hotSellingImgTag, "" + a.currentPrice, d)
        };
        return Object.keys(h).forEach(function(e) {
            h[e] || delete h[e];
        }), h;
    }
}, exports.sliceDataTransfer = function(e) {
    var i = d.default.getSliceStep(), a = 0, r = {}, n = [], o = function() {
        if (0 !== Object.keys(r).length) {
            var e = t({}, r);
            n.push(e), r = {};
        }
    };
    return e.forEach(function(t, n) {
        t.dishInfo ? function(t, n) {
            if (t.dishCount < i) a <= i && a + t.dishCount > i ? (o(), a = t.dishCount) : a += t.dishCount, 
            r["allDishList[".concat(n, "]")] = t, n === e.length - 1 && o(); else {
                var d = t.categoryId, s = t.categoryName, c = t.categoryType, l = t.dishInfo, u = t.iconType, g = t.key, p = t.parentId, h = t.dishCount;
                r["allDishList[".concat(n, "]")] = {
                    categoryId: d,
                    categoryName: s,
                    categoryType: c,
                    iconType: u,
                    key: g,
                    parentId: p,
                    dishCount: h,
                    dishInfo: [ l[0] ]
                }, o();
                for (var T = 1; T < t.dishInfo.length; T++) r["allDishList[".concat(n, "].dishInfo[").concat(T, "]")] = t.dishInfo[T], 
                o();
            }
        }(t, n) : (r["allDishList[".concat(n, "]")] = t, n === e.length - 1 && o());
    }), n;
}, exports.generateDishList = function(e, a) {
    var c = a.categories, l = a.list, u = a.cartList, g = a.menuStyle, p = (a.pointBuyCampaign, 
    i.default.getIn(g, [ "dishShowType" ]) || 0), h = n.DISH_ITEM_TYPE_MAP[p] || n.DISH_ITEM_TYPE_VAL.DEFAULT, T = (0, 
    s.computeItemCount)(u), y = [], f = 0, D = Object.keys(l).length, S = e ? 48 : 24 * Math.ceil(D / 200), E = S > 120 ? 120 : S;
    d.default.setSliceStep(E);
    return function i(a) {
        var d = a.parentName, c = void 0 === d ? "" : d, u = a.parentId, g = void 0 === u ? 0 : u, D = a.recursionCategories;
        (void 0 === D ? [] : D).forEach(function(a) {
            var d = a.childDishCategories, u = a.categoryId, D = a.iconType, S = a.categoryName, v = (0, 
            s.categoryDisplay)(e, a, l), L = v.display, _ = void 0 === L || L, C = v.spuIdArr, P = void 0 === C ? [] : C;
            if (e || null != P && P.length && _) {
                var b = {
                    categoryId: 0,
                    categoryName: "",
                    categoryType: "",
                    dishCount: 0,
                    dishInfo: [],
                    iconType: 0,
                    key: "",
                    parentId: 0,
                    parentName: ""
                };
                S && u && (u === r.DISH_CATEGORY_ID.DISCOUNT && (S = "".concat(S).concat(r.OVER_PRICE_TITLE)), 
                b = t(t({}, b), {}, {
                    categoryId: u,
                    categoryName: S,
                    parentName: c,
                    categoryType: (0, s.getCategoryType)(u),
                    parentId: g,
                    iconType: D,
                    key: g ? "".concat(g, "-").concat(u) : u
                }));
                for (var O = 0, R = [], k = p === r.DISH_SHOW_TYPE.DEFAULT || p === r.DISH_SHOW_TYPE.RIGHT_LARGE, A = 0; A < P.length; A++) {
                    var B = A, H = P[B], M = g ? "".concat(g, "-").concat(u, "-").concat(H) : "".concat(u, "-").concat(H), U = l && l[H], N = T[H] || 0, x = T[H] || 0, Y = o.default.getMustCount(null == U ? void 0 : U.skuMenuItems[0]), G = U && m({
                        item: U,
                        cartCount: N,
                        cartWeight: x,
                        mustCount: Y,
                        dishType: h,
                        hotRankFromIndex: a.categoryId === r.DISH_CATEGORY_ID.HOT,
                        itemIndex: B,
                        categoryId: u
                    }), q = b.categoryId === r.DISH_CATEGORY_ID.ORDERED ? "".concat(n.DISH_ITEM_TYPE_VAL.ORDERED, "_").concat(h) : h;
                    G && (G = (0, s.filterItemKeys)(q, G, n.EXTRA_FILTER_KEYS));
                    var F = !(null != U && U.canSaleNow) && !(null != U && U.validity) || (null == U ? void 0 : U.soldOut);
                    if (G && F && (O += 1), G) {
                        var j = !0;
                        U && F && O > 1 && k && (j = !1), u === r.DISH_CATEGORY_ID.ORDERED ? f < 6 && (R.push(t(t({}, G), {}, {
                            categoryId: u,
                            parentId: g,
                            key: M,
                            isSpread: j
                        })), f++) : R.push(t(t({}, G), {}, {
                            isSpread: j,
                            isNotValidity: F,
                            categoryId: u,
                            parentId: g,
                            key: M
                        }));
                    }
                }
                if (R.length > 0) {
                    for (var z = E, Q = 0, W = [], w = 0; w <= Math.ceil(R.length / z - 1); w++) {
                        var V = R.slice(Q, Q + z);
                        W.push({
                            key: "".concat(u, "-").concat(w),
                            minHeight: I(V, u, h),
                            content: V
                        }), Q += z;
                    }
                    b.dishCount = R.length, b.dishInfo = W, y.push(b);
                }
                O > 1 && k && y.push({
                    categoryId: u,
                    key: u + "-spread",
                    isNotValidity: !0,
                    isSpread: !1,
                    notValidityDishCount: O - 1,
                    parentId: g
                }), u === r.DISH_CATEGORY_ID.COUPON && (b.dishCount = a.spuIds.length, b.dishInfo = a.spuIds, 
                y.push(b));
            } else d && i({
                parentName: S,
                recursionCategories: d,
                parentId: u
            });
        });
    }({
        recursionCategories: c
    }), y;
}, exports.transferItemData = m;