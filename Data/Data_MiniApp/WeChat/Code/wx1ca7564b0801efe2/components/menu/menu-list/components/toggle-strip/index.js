var e = require("../../../../../miniprogram_npm/@limo/container/behaviors/index");

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    properties: {
        isSpread: {
            type: Boolean,
            value: !1,
            observer: function(e) {
                this.setData({
                    newIsSpread: e
                });
            }
        },
        notValidityDishCount: {
            type: Number,
            value: 0,
            observer: function(e) {
                this.setData({
                    notValidityDishText: "其它".concat(e, "件不可售商品")
                });
            }
        },
        categoryId: {
            type: Number,
            value: -1
        }
    },
    data: {
        notValidityDishText: "",
        newIsSpread: !1
    },
    methods: {
        changeSpread: function() {
            this.triggerEvent("changeSpread", {
                categoryId: this.data.categoryId
            }, {
                bubbles: !0,
                composed: !0
            });
        }
    }
});