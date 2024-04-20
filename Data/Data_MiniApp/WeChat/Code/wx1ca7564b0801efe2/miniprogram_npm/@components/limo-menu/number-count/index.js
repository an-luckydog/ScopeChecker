var t = require("../../../../b/helpers/interopRequireDefault"), e = require("../../../../b/helpers/objectSpread2"), i = require("../../../@limo/container/behaviors/index"), o = require("../../../../modules/menu/dish/DishDataUtil"), a = require("../../../../store/actions/extraInfo"), s = t(require("../../../../store/menu")), n = t(require("../common-behaviors/common"));

Component({
    behaviors: [ n.default, i.commonBehavior, i.limoShim ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        dish: {
            type: Object
        },
        count: {
            type: Number,
            value: 0
        },
        stockCount: {
            type: Number,
            value: -1
        },
        minBoughtCount: {
            type: Number,
            value: -1
        },
        isBigSize: {
            type: Boolean,
            value: !1
        },
        extendClickArea: {
            type: Boolean,
            value: !1
        },
        recommendReportParams: {
            type: Object
        },
        customClassName: {
            type: String,
            value: ""
        },
        canClickCountNum: {
            type: Boolean,
            value: !1
        },
        disabled: {
            type: Boolean,
            value: !1
        }
    },
    data: {},
    created: function() {
        this.store = s.default;
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            this.commonBehaviorsCommon_limoAttached(), this.dealCount();
        },
        setMpUserInfo: function(t) {
            this.store.dispatch((0, a.setMpUserInfo)(t));
        },
        dealCount: function() {
            var t = this.data, e = t.dish, i = t.canClickCountNum;
            this.setData({
                showCountStyle: (0, o.dealOperationCountStyle)((null == e ? void 0 : e.spuId) || "", i)
            });
        },
        addDish: function() {
            var t = this.data.dish;
            this.clickReport(e({
                recommendReportParams: this.data.recommendReportParams
            }, this.data.reportConfig || {}), this.data.dish, this.data.CLICKTYPE.ADD), this.triggerEvent("addToCart", t);
        },
        minusDishToCart: function() {
            this.clickReport(this.data.reportConfig, this.data.dish, this.data.CLICKTYPE.MINUS), 
            this.triggerEvent("minusDish", this.data.dish);
        },
        onclickCountNumFunc: function() {
            this.triggerEvent("onclickCountNum", this.data.dish);
        }
    }
});