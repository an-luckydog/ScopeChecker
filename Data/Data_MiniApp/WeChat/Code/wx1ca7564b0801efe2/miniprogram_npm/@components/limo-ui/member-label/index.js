var e = require("../../../@limo/container/behaviors/index"), o = require("../../../../modules/LXHelper"), t = require("./type");

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    properties: {
        customClass: {
            type: String,
            value: ""
        },
        labelType: {
            type: Number,
            value: t.MEMBER_LABEL_TYPE.CORNER
        },
        texts: {
            type: Array,
            value: []
        }
    },
    data: {
        MEMBER_LABEL_TYPE: t.MEMBER_LABEL_TYPE
    },
    lifetimes: {
        attached: function() {
            (0, o.sendMV)("b_saaspay_z970nfev_mv");
        }
    },
    methods: {
        collectCouponAction: function() {
            this.triggerEvent("collectCoupon", {
                from: "member-label"
            }, {
                bubbles: !0,
                composed: !0
            }), (0, o.sendMC)("b_saaspay_z970nfev_mc");
        }
    }
});