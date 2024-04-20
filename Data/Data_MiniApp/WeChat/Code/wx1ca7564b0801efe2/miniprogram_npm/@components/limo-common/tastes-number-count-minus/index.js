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
        isShowBigBtn: {
            type: Boolean,
            value: !1
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
            var e = this.data.count;
            this.setData({
                newCount: e
            });
        },
        minusTasteToCart: function() {
            this.triggerEvent("minusDish");
        }
    }
});