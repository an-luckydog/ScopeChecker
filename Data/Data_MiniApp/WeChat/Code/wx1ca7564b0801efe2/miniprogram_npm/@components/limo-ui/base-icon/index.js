var e = require("../../../@limo/container/behaviors/index");

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    properties: {
        iconType: {
            type: String
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        customClass: {
            type: String,
            value: ""
        },
        customStyle: {
            type: String,
            value: ""
        },
        customIconStyle: {
            type: String,
            value: ""
        }
    },
    methods: {
        onIconClick: function() {
            this.triggerEvent("onClick");
        }
    }
});