var e = require("../../miniprogram_npm/@limo/container/behaviors/index");

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    properties: {
        checked: {
            type: Boolean,
            value: !1
        },
        disabled: {
            type: Boolean,
            value: !1
        }
    },
    methods: {
        clickRadio: function() {
            this.triggerEvent("checkRadio");
        }
    }
});