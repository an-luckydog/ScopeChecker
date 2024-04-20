var e = require("../../../../b/helpers/interopRequireDefault"), t = require("../../../../b/helpers/objectSpread2"), r = e(require("../../../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), a = require("../../../../constants/bizConstants"), o = require("../../../../modules/menu/dish/expose"), n = require("../../../../modules/LXHelper"), i = require("../../../../lib/wx/transfer-rpx"), s = (r.default.MPInfo.getSystemInfo().screenHeight || 812) - (0, 
i.transformRpxToNumber)(a.MENU_PAGE_INIT_CONFIG.INIT_SEARCH_BANNER_HEIGHT) - (0, 
i.transformRpxToNumber)(a.MENU_PAGE_INIT_CONFIG.INIT_CART_HEIGHT) + (0, i.transformRpxToNumber)(20);

module.exports = Behavior({
    properties: {
        hasMtLogin: {
            type: Boolean,
            value: !1
        },
        horizontal: {
            type: Boolean,
            value: !1
        },
        winWidth: {
            type: Number,
            value: 0
        },
        categoriesList: {
            type: Array,
            value: [],
            observer: function(e) {
                if (Array.isArray(e) && e.length) {
                    var t = this.reRenderCategoruData(this.data.selectCategoryIds).dataToRender;
                    this.data.horizontal && (t.categoryLines = this.categoryFormat(e)), this.setData(t);
                }
            }
        },
        selectCategoryIds: {
            type: Array,
            value: [],
            observer: function(e, t) {
                if (t[0] === e[0] && e[1]) {
                    var r = this.reRenderCategoruData([ null, e[1] ]).dataToRender;
                    this.setData(r);
                } else {
                    var a = this.reRenderCategoruData(e).dataToRender;
                    this.setData(a);
                }
            }
        },
        menuType: {
            type: Number,
            value: 0,
            observer: function(e) {
                1 === e && this.setData({
                    categoryClass: "category-list-white",
                    flexSwitch: !0
                });
            }
        },
        categoryHasIcon: {
            type: Boolean,
            value: !1
        },
        showCouponPackage: {
            type: Boolean,
            value: !1
        },
        payCouponDecoInfo: {
            type: Object,
            value: {}
        },
        couponCount: {
            type: String,
            value: ""
        }
    },
    data: {
        DISH_CATEGORY_CLASS_MAP: a.DISH_CATEGORY_CLASS_MAP,
        categoryHeader: {},
        secondCategoryList: [],
        curSecondCategoryId: 0,
        categoryClass: "category-list",
        flexSwitch: !1,
        categoryHeight: s
    },
    methods: {
        behaviorsNavBehavior_limoAttached: function() {
            this.secondCategoryWidth = Math.floor((0, i.transformRpxToNumber)(136)), this.secondCategoryGap = Math.floor((0, 
            i.transformRpxToNumber)(20));
        },
        categoryFormat: function(e) {
            for (var t = [], r = [], a = !1, o = 0; o < e.length; o += 1) e[o].childDishCategories && e[o].childDishCategories.length > 0 && (a = !0), 
            r.length < 3 ? r.push(e[o] || {}) : a ? (t.push(r), t.push({}), r = [ e[o] || {} ], 
            a = e[o].childDishCategories && e[o].childDishCategories.length > 0) : (r.push(e[o] || {}), 
            t.push(r), t.push({}), r = [], a = !1);
            if (r.length > 0) {
                for (var n = (a ? 3 : 4) - r.length, i = 0; i < n; i++) r.push({});
                t.push(r), t.push({});
            }
            return t;
        },
        calcCategoryScrollOffset: function() {},
        calcSecondCategoryScrollOffset: function(e) {
            var t = this.data, r = t.secondCategoryList, a = t.winWidth, o = r.findIndex(function(t) {
                return t.categoryId === e;
            }), n = this.secondCategoryGap, i = n + this.secondCategoryWidth;
            return o * i - ((a - n) / 2 - (i - n) / 2) + n;
        },
        reRenderCategoruData: function(e, t, r) {
            var a = e[0] || 0, o = e[1] || 0, n = {};
            if (!a && o) {
                n.curSecondCategoryId = o;
                var i = this.data, s = i.menuType, c = i.secondCategoryList;
                return 1 === s && (n.categoryHeader = c.find(function(e) {
                    return e.categoryId === o;
                })), {
                    dataToRender: n
                };
            }
            n.curCategoryId = a;
            var d, g, u, h = this.data, l = h.categoriesList, y = h.curSecondCategoryId, f = h.categoryScrollOffset, C = h.secondCategoryList, p = h.showMoreCategory, I = h.menuType;
            t ? (g = t, u = (d = l[t] || {}).categoryName) : d = l.find(function(e) {
                return e.categoryId === a;
            }) || {};
            var v = a, m = [], _ = y;
            d.childDishCategories && d.childDishCategories.length > 0 && (m = d.childDishCategories, 
            v = o || (m[0] || {}).categoryId, _ = v), 0 === C.length && 0 === m.length || (n.secondCategoryList = m, 
            0 !== m.length && (n.curSecondCategoryId = _)), 0 === m.length ? (n.categoryHeader = d, 
            n.secondCategoryList = [], n.selectSecondCategoryId = -1, n.curSecondCategoryId = -1) : 1 === I && (n.categoryHeader = m.find(function(e) {
                return e.categoryId === _;
            })), p && (n.showMoreCategory = !1);
            var T = this.calcCategoryScrollOffset(a, t);
            return 0 === T ? n.categoryScrollOffset = 0 : f !== T && (n.categoryScrollOffset = T), 
            r && this.clickCategoryReport(d, {
                tabIndex: g,
                tabName: u
            }), {
                dataToRender: n,
                selectCategoryIdForDishList: v
            };
        },
        switchCategoryTab: function(e) {
            var t = this, r = e.currentTarget.dataset || {}, a = r.categoryId, o = r.index;
            if (a) {
                var n = this.reRenderCategoruData([ a ], o, !0), i = n.dataToRender, s = n.selectCategoryIdForDishList;
                this.setData(i, function() {
                    t.triggerEvent("switchTab", {
                        categoryId: s,
                        index: o
                    });
                });
            }
        },
        switchSecondCategoryTab: function(e) {
            var t = this, r = e.detail, a = e.currentTarget.dataset;
            if (r && r.categoryId) {
                var o, n, i = null;
                this.data.categoriesList.find(function(e) {
                    return !!(i = e.childDishCategories && e.childDishCategories.find(function(e) {
                        return e.categoryId === r.categoryId;
                    }));
                }), o = a.index, n = i.categoryName, i && this.clickCategoryReport(i, {
                    tabIndex: o,
                    tabName: n
                }), this.setData({
                    curSecondCategoryId: r.categoryId
                }, function() {
                    t.triggerEvent("switchTab", {
                        categoryId: r.categoryId
                    });
                });
            } else {
                var s = [];
                if (a && a.categoryId && a.fatherCategoryId && (s = [ a.fatherCategoryId, a.categoryId ]), 
                s.length > 1) {
                    var c = this.reRenderCategoruData(s, "", !0), d = c.dataToRender, g = c.selectCategoryIdForDishList;
                    this.setData(d, function() {
                        t.triggerEvent("switchTab", {
                            categoryId: g
                        });
                    });
                }
            }
        },
        onMoreOrderedTab: function() {
            this.triggerEvent("moreOrderedTap");
        },
        exposeCategory: function(e) {
            var r, a = e.currentTarget.dataset;
            (0, n.sendMV)("b_saaspay_f7kum44x_mv", null, {}, {
                tab_index: null == a ? void 0 : a.index,
                tab_name: null == a || null == (r = a.exposeCategory) ? void 0 : r.categoryName
            });
            var i = a.exposeCategory;
            (0, o.appendExposeDishItem)(o.EXPOSE_DISH_TYPE.CATEGORY, t({}, i.__reportConfig__));
        },
        clickCategoryReport: function(e, r) {
            var a = r.tabIndex, o = r.tabName;
            [ "b_saaspay_f7kum44x_mc" ].forEach(function(r) {
                (0, n.sendMC)(r, null, null, {
                    clickData: t({}, e.__reportConfig__),
                    tab_index: a,
                    tab_name: o
                });
            });
        }
    }
});