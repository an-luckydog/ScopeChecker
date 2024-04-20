var e = require("../../../../../b/helpers/interopRequireDefault"), t = require("../../../../../miniprogram_npm/@limo/container/behaviors/index"), o = require("../../../../../constants/bizConstants"), r = require("../../../../../lib/wx/transfer-rpx"), a = e(require("../../behaviors/nav-behavior"));

Component({
    behaviors: [ a.default, t.commonBehavior, t.limoShim ],
    options: {
        addGlobalClass: !0
    },
    data: {
        showMoreCategory: !0,
        categoryLines: [],
        currentExpendCategory: 0,
        DISH_CATEGORY_ID: o.DISH_CATEGORY_ID
    },
    properties: {
        couponAssistantStyle: {
            type: Object,
            value: {}
        }
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            this.behaviorsNavBehavior_limoAttached(), this.categoryWidth = Math.floor((0, r.transformRpxToNumber)(196));
        },
        catchTouchMove: function() {},
        showMoreCategory: function() {
            for (var e, t = this.data, o = t.categoryLines, r = t.curCategoryId, a = {
                showMoreCategory: !0
            }, n = -1, i = 0; i < o.length; i += 1) {
                var s = o[i];
                s.secondCategory && s.secondCategory.length > 0 && (a["categoryLines[".concat(i, "].secondCategory")] = []), 
                e || (e = Array.isArray(s) ? s.find(function(e) {
                    return e.categoryId === r;
                }) : null, n = i);
            }
            e && (a["categoryLines[".concat(n + 1, "].secondCategory")] = e.childDishCategories, 
            a.currentExpendCategory = r), this.setData(a), this.triggerEvent("showMoreCategory", {
                showMoreCategory: !0
            });
        },
        hideMoreCategory: function() {
            this.setData({
                showMoreCategory: !1,
                currentExpendCategory: 0
            }), this.triggerEvent("showMoreCategory", {
                showMoreCategory: !1
            });
        },
        expendSecondCategory: function(e) {
            for (var t = e.currentTarget.dataset || {}, o = t.categoryId, r = t.index, a = this.data, n = a.categoriesList, i = a.categoryLines, s = a.currentExpendCategory, c = {}, g = 0; g < i.length; g += 1) i[g].secondCategory && i[g].secondCategory.length > 0 && (c["categoryLines[".concat(g, "].secondCategory")] = []);
            var h = i[r + 1] && i[r + 1].secondCategory && i[r + 1].secondCategory.length;
            if (s === o && h) c["categoryLines[".concat(r + 1, "].secondCategory")] = [], c.currentExpendCategory = ""; else {
                var d = n.find(function(e) {
                    return e.categoryId === o;
                });
                c["categoryLines[".concat(r + 1, "].secondCategory")] = d.childDishCategories, c.currentExpendCategory = o;
            }
            this.setData(c);
        },
        calcCategoryScrollOffset: function(e, t) {
            var o = this.data, r = o.categoriesList, a = o.winWidth, n = o.categoryScrollOffset;
            return t || (t = r.findIndex(function(t) {
                return t.categoryId === e;
            })), t > -1 ? t * this.categoryWidth - (a / 2 - this.categoryWidth / 2) : n;
        },
        onCouponAssistantCheckMore: function() {
            this.triggerEvent("onCouponAssistantCheckMore");
        }
    }
});