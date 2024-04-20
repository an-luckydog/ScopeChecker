var e = require("../../../../../b/helpers/interopRequireDefault"), t = require("../../../../../miniprogram_npm/@limo/container/behaviors/index"), o = require("../../../../../miniprogram_npm/@components/limo-ui/ui-constant/enum"), r = require("../../../../../lib/wx/transfer-rpx"), a = e(require("../../behaviors/nav-behavior"));

Component({
    behaviors: [ a.default, t.commonBehavior, t.limoShim ],
    externalClasses: [ "container-style" ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        showMoreSecondCategory: {
            type: Boolean,
            value: !1
        },
        winWidth: {
            type: Number,
            value: 0
        },
        secondCategoryList: {
            type: Array,
            value: [],
            observer: function(e) {
                if (e && e.length > 3) {
                    var t = this.data.curSecondCategoryId, o = this.calcSecondCategoryScrollOffset(t);
                    this.data.secondCategoryScrollOffset !== o && this.setData({
                        secondCategoryScrollOffset: o
                    });
                }
            }
        },
        categoryHeader: {
            type: Object,
            value: {}
        },
        curSecondCategoryId: {
            type: Number,
            value: 0,
            observer: function(e, t) {
                if (e !== t) {
                    var o = this.calcSecondCategoryScrollOffset(e);
                    this.data.secondCategoryScrollOffset !== o && this.setData({
                        secondCategoryScrollOffset: o
                    });
                }
            }
        },
        customClass: {
            type: String,
            value: ""
        },
        couponCount: {
            type: String,
            value: ""
        },
        couponAssistantStyle: {
            type: Object,
            value: {}
        }
    },
    data: {
        showMoreCategory: !1,
        secondCategoryScrollOffset: 0,
        RED_POINT_TYPE: o.RED_POINT_TYPE
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            this.behaviorsNavBehavior_limoAttached(), this.secondCategoryWidth = Math.floor((0, 
            r.transformRpxToNumber)(136)), this.secondCategoryGap = Math.floor((0, r.transformRpxToNumber)(20));
        },
        dishPanelOrderd: function() {
            this.triggerEvent("onMoreOrderedTab");
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
        calcSecondCategoryScrollOffset: function(e) {
            var t = this.data, o = t.secondCategoryList, r = t.winWidth, a = o.findIndex(function(t) {
                return t.categoryId === e;
            }), n = this.secondCategoryGap, s = n + this.secondCategoryWidth;
            return a * s - ((r - n) / 2 - (s - n) / 2) + n;
        },
        switchSecondCategoryTab: function(e) {
            var t = e.currentTarget.dataset, o = (t || {}).categoryId;
            o && (this.triggerEvent("onNavTab", t), this.setData({
                curSecondCategoryId: o,
                showMoreCategory: !1
            }));
        },
        onCouponAssistantCheckMore: function() {
            this.triggerEvent("onCouponAssistantCheckMore");
        }
    }
});