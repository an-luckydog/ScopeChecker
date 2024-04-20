var e = require("../../../miniprogram_npm/@limo/container/behaviors/index.js");

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    properties: {
        promptSrc: {
            type: String,
            value: ""
        },
        platform: {
            type: Number,
            value: 1
        },
        top: {
            type: Number,
            value: 180
        }
    }
});