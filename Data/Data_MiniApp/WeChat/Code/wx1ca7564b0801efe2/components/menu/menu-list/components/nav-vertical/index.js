var e = require("../../../../../b/helpers/interopRequireDefault"), o = require("../../../../../miniprogram_npm/@limo/container/behaviors/index"), t = require("../../../../../constants/bizConstants"), r = require("../../../../../lib/wx/transfer-rpx"), a = e(require("../../behaviors/nav-behavior"));

Component({
    behaviors: [ a.default, o.commonBehavior, o.limoShim ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        couponCount: {
            type: Number,
            value: 0
        },
        couponAssistantStyle: {
            type: Object,
            value: {}
        }
    },
    data: {
        showMoreCategory: !1,
        categoryScrollTop: 0,
        DISH_CATEGORY_ID: t.DISH_CATEGORY_ID,
        categoryType: {
            HAS_CAN_SALE: 0,
            ONLY_NOT_SALE_NOW: 1,
            NOT_SALE_NOW_AND_SOLD_OUT: 2,
            ONLY_SOLD_OUT: 3
        }
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            this.behaviorsNavBehavior_limoAttached(), this.categoryHeight = Math.floor((0, r.transformRpxToNumber)(96));
        },
        showMoreCategory: function() {
            this.setData({
                showMoreCategory: !0
            });
        },
        hideMoreCategory: function() {
            this.setData({
                showMoreCategory: !1
            });
        },
        calcCategoryScrollOffset: function(e) {
            var o = this.data, t = o.categoriesList, r = o.categoryScrollTop, a = t.findIndex(function(o) {
                return o.categoryId === e;
            }), i = r;
            return a > -1 && (i = a * this.categoryHeight), i;
        },
        categoryScroll: function() {},
        onCouponAssistantCheckMore: function() {
            this.triggerEvent("onCouponAssistantCheckMore");
        }
    }
});