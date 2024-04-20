var o = require("../../../miniprogram_npm/@limo/container/behaviors/index");

Component({
    behaviors: [ o.commonBehavior, o.limoShim ],
    properties: {
        iconType: {
            type: String
        },
        color: {
            type: String,
            value: "#333",
            observer: function(o) {
                o && this.setData({
                    iconColor: "color: ".concat(o, ";")
                });
            }
        },
        size: {
            type: Number,
            observer: function(o) {
                o && this.setData({
                    fontSize: "font-size: ".concat(o, "rpx;")
                });
            }
        }
    },
    data: {
        fontSize: "",
        iconColor: "color: #333;"
    }
});