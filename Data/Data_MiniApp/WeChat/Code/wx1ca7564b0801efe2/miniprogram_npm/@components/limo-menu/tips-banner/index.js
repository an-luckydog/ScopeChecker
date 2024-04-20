var t = require("../../../@limo/container/behaviors/index");

Component({
    behaviors: [ t.commonBehavior, t.limoShim ],
    properties: {
        tipMessage: {
            type: String,
            value: ""
        },
        timePeriod: {
            type: Object,
            value: {}
        },
        buttonText: {
            type: String,
            value: ""
        },
        tipsBannerFixedBottom: {
            type: Boolean,
            value: !1
        }
    },
    methods: {
        onTapButton: function() {
            this.triggerEvent("tapTipsBannerButton", {
                buttonText: this.data.buttonText
            }, {
                bubbles: !0
            });
        }
    }
});