var e = require("../../../miniprogram_npm/@limo/container/behaviors/index");

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    properties: {
        fromPage: {
            type: String,
            value: ""
        },
        isNativeTabbarPage: {
            type: Boolean,
            value: !1
        }
    }
});