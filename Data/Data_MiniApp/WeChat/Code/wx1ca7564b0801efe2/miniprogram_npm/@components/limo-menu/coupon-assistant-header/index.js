var e = require("../../../@limo/container/behaviors/index"), o = require("../../../../modules/LXHelper");

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    properties: {
        couponCount: {
            type: String,
            value: ""
        },
        couponStyle: {
            type: Object,
            value: {}
        },
        hideMore: {
            type: Boolean,
            value: !1
        },
        bizId: {
            type: String,
            value: ""
        }
    },
    data: {},
    lifetimes: {},
    methods: {
        onCheckMore: function() {
            var e = this.data.bizId;
            e && (0, o.sendMC)("b_".concat(e, "_mc")), this.triggerEvent("checkMore");
        }
    }
});