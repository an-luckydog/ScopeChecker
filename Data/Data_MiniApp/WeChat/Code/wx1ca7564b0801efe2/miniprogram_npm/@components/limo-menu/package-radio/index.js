var e = require("../../../@limo/container/behaviors/index");

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    properties: {
        needCare: {
            type: Boolean,
            value: !1
        },
        selected: {
            type: Boolean,
            value: !1
        }
    },
    methods: {
        radioClick: function() {
            this.triggerEvent("radioFun");
        }
    }
});