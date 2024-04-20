var e = require("../../../@limo/container/behaviors/index");

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    properties: {
        count: {
            type: Number,
            value: 0,
            observer: function() {
                this.handlePropertiesChange();
            }
        },
        isTastesLimit: {
            type: Boolean,
            value: !1,
            observer: function() {
                this.handlePropertiesChange();
            }
        },
        isShowBigBtn: {
            type: Boolean,
            value: !1
        },
        disablePlus: {
            type: Boolean,
            value: !1,
            observer: function() {
                this.handlePropertiesChange();
            }
        }
    },
    data: {},
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            this.handlePropertiesChange();
        },
        handlePropertiesChange: function() {
            var e = this.data, t = e.isTastesLimit, i = e.count, n = e.disablePlus;
            this.setData({
                newTastesLimit: t || n,
                newCount: i
            });
        },
        minusTasteToCart: function() {
            this.triggerEvent("minusDish");
        },
        addMultiTasteNum: function() {
            this.triggerEvent("addToCart");
        }
    }
});