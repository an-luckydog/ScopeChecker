var e = require("../../../../b/helpers/interopRequireDefault"), t = require("../../../@limo/container/behaviors/index"), a = require("../../limo-ui/ui-constant/enum"), i = require("../../limo-ui/ui-lib/util"), n = e(require("../../../../modules/menu/I18n/I18nService"));

Component({
    behaviors: [ t.commonBehavior, t.limoShim ],
    properties: {
        textLeft: {
            type: String,
            value: ""
        },
        textRight: {
            type: String,
            value: ""
        },
        selected: {
            type: Boolean,
            value: !1
        },
        count: {
            type: Number,
            value: 0,
            observer: function() {
                this.handlePropertiesChange();
            }
        },
        groupCouponNum: {
            type: Number,
            value: 0
        },
        className: {
            type: String,
            value: ""
        },
        styleString: {
            type: String,
            value: ""
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        stockCount: {
            type: Number,
            value: -1
        },
        defaultSelected: {
            type: Boolean,
            value: !1
        },
        disablePlus: {
            type: Boolean,
            value: !1
        },
        operationRight: {
            type: Boolean,
            value: !1,
            observer: function() {
                this.handlePropertiesChange();
            }
        },
        operationBetween: {
            type: Boolean,
            value: !1,
            observer: function() {
                this.handlePropertiesChange();
            }
        },
        mutex: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        customClassName: "",
        NO_LIMIT_CHOICE: -1,
        CORNER_TYPE: a.CORNER_TYPE,
        MAX_SHOW_STOCK_COUNT: 10,
        RED_POINT_TYPE_NUMBER: a.RED_POINT_TYPE.NUMBER,
        STAR_TYPE: a.STAR_TYPE,
        tastesStyle: ""
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            var e = this.data.className, t = n.default.getCurrency();
            this.setData({
                customClassName: (0, i.dealClassName)(e),
                currency: t
            }), this.handlePropertiesChange();
        },
        handlePropertiesChange: function() {
            var e = this.data, t = e.count, a = e.operationRight, i = "";
            e.operationBetween && (i = t ? "taste-item taste-item-shot" : "taste-item"), a && (i = t ? "taste-item whole-line whole-line-shot" : "taste-item whole-line"), 
            this.setData({
                tastesStyle: i
            });
        },
        btnClickFn: function() {
            this.triggerEvent("boxItemClick");
        },
        addMultiTasteHandle: function() {
            this.triggerEvent("addMultiTaste");
        },
        minusTasteHandle: function() {
            this.triggerEvent("minusTaste");
        },
        mutexClickHandle: function() {
            this.triggerEvent("handleMutex");
        }
    }
});