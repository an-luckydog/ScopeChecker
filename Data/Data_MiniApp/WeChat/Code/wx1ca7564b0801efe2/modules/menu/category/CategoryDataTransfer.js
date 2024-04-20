var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getPluginActivityToCategory = exports.generateCategoryList = exports.categoryListHasIcon = exports.assembleCouponToCategory = void 0, 
require("../../../b/helpers/Arrayincludes");

var t = e(require("../../../miniprogram_npm/@limo/core/index.js")), i = require("./util"), o = require("../../../constants/bizConstants"), r = e(require("../../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), n = e(require("../../../lib/mix/log")).default, a = [ o.DISH_CATEGORY_ID.COUPON ];

exports.assembleCouponToCategory = function(e, t) {
    return e.find(function(e) {
        return e.categoryId === o.DISH_CATEGORY_ID.COUPON;
    }) || e.unshift({
        categoryId: o.DISH_CATEGORY_ID.COUPON,
        categoryMultimediaList: null,
        categoryName: t.couponTitle || "优惠",
        categorySellableType: 0,
        childDishCategories: null,
        iconType: 0,
        position: 0,
        rank: -2,
        spuIds: [ , , ,  ],
        selectedUrl: t.categoryIcon || o.COUPON_ICON,
        unSelectedUrl: t.categoryIcon || o.COUPON_ICON
    }), e;
}, exports.getPluginActivityToCategory = function(e, i, a) {
    var s, c = e;
    if (!r.default.isWxNative || !i.length) return e;
    var u = null == t.default.getLimoRuntime().getExtConfigSync || null == (s = t.default.getLimoRuntime().getExtConfigSync()) ? void 0 : s.plugins;
    if (u && !u.includes("mercPlugin")) return n.addError("ext文件中未注入插件数据", u, {
        level: "info"
    }), e;
    if (!u) {
        var l = null == t.default.getLimoRuntime().getExtConfigSync ? void 0 : t.default.getLimoRuntime().getExtConfigSync();
        return n.addError("获取插件数据异常", {
            extData: l
        }), e;
    }
    var g = (t.default.getLimoRuntime().getSystemInfoSync && t.default.getLimoRuntime().getSystemInfoSync() || {}).SDKVersion, d = void 0 === g ? "" : g;
    if (r.default.compareVersion(d, "2.10.4") < 0) return n.addError("微信基础库版本不支持低于插件最低支持版本", {
        SDKVersion: d
    }, {
        level: "info"
    }), e;
    var y = Object.keys(a);
    return e.find(function(e) {
        return e.categoryId === o.PLUGIN_CATEGORY;
    }) || c.unshift({
        categoryId: o.PLUGIN_CATEGORY,
        categoryMultimediaList: null,
        categoryName: "活动",
        categorySellableType: 0,
        childDishCategories: null,
        iconType: 0,
        position: 0,
        rank: -1,
        spuIds: y.slice(0, i.length)
    }), c;
}, exports.categoryListHasIcon = function(e) {
    return e.some(function(e) {
        return !!e.icon;
    });
}, exports.generateCategoryList = function(e, t) {
    var r = t.list, n = t.cartList, s = t.isLogin;
    return function t(c) {
        var u = [], l = c.categories, g = c.isChildCategory, d = void 0 !== g && g, y = c.parentCategoryName, C = void 0 === y ? "" : y, p = c.dishShowType, m = c.activeIds, f = void 0 === m ? [] : m, v = 0;
        return l && l.forEach(function(c, l) {
            var g = c.spuIds;
            if (e || function() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], i = arguments.length > 1 ? arguments[1] : void 0, o = arguments.length > 2 ? arguments[2] : void 0;
                return !!a.includes(o.categoryId) || (null != t && t.length ? t.some(function(e) {
                    return !(!i || !i[e]);
                }) : !(null == o || null == (e = o.childDishCategories) || !e.some(function(e) {
                    var t;
                    return null == e || null == (t = e.spuIds) ? void 0 : t.some(function(e) {
                        return !(!i || !i[e]);
                    });
                })));
            }(g, r, c)) {
                var y = function(e, t) {
                    var r = t.category, n = t.isChildCategory, a = void 0 !== n && n, s = t.parentCategoryName, c = void 0 === s ? "" : s, u = t.index, l = t.dishShowType, g = t.activeIds, d = t.cartList, y = void 0 === d ? {} : d, C = t.isLogin, p = void 0 !== C && C, m = r.categoryId, f = r.iconType, v = void 0 === f ? 0 : f, h = r.categoryName, I = r.childDishCategories, _ = r.subCategoryName, S = r.categorySellableType, T = void 0 === S ? 0 : S, N = r.spuIds;
                    if (m) return null != N && N.length || null != I && I.length ? {
                        categoryId: m,
                        iconType: v,
                        categoryName: h,
                        subCategoryName: _,
                        spuIds: N,
                        categorySellableType: T,
                        count: (0, i.computeCategoryCount)(y, r),
                        active: (0, i.dealCategoryActive)(m, g),
                        icon: (0, i.dealCategoryIcons)(r),
                        subTitle: (0, i.dealCategorySubTitle)(m, p),
                        id: "category-item-" + m,
                        __reportConfig__: {
                            categoryName: h,
                            isChildCategory: a,
                            parentCategoryName: c,
                            index: u,
                            dishShowType: l,
                            categoryIcon: !!r.categoryMultimediaList,
                            sn: u,
                            dish_cate_name: h,
                            dish_cate_type: v ? o.DISH_CATE_TYPE.RECOMMEND_DISH : o.DISH_CATE_TYPE.RECOMMEND_CLASS,
                            dish_cate_id: v
                        }
                    } : void 0;
                }(0, {
                    category: c,
                    isChildCategory: d,
                    parentCategoryName: C,
                    index: l,
                    dishShowType: p,
                    activeIds: f,
                    cartList: n,
                    isLogin: s
                });
                if (y) {
                    var m = c.childDishCategories;
                    if (m && m.length) {
                        var h = t({
                            categories: m,
                            isChildCategory: !0,
                            parentCategoryName: c.categoryName,
                            index: l,
                            dishShowType: p,
                            activeIds: f,
                            count: v
                        });
                        y.childDishCategories = h.categories, y.count = h.count, v += h.count;
                    } else v += +y.count;
                    u.push(y);
                }
            }
        }), {
            categories: u,
            count: v
        };
    }(t).categories;
};