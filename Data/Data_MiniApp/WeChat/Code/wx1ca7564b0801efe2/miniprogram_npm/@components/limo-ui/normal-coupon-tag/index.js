var e = require("../../../../b/helpers/interopRequireDefault")(require("../../../@limo/core/index.js")), o = require("../../../@limo/container/behaviors/index"), t = require("../ui-constant/enum");

Component({
    behaviors: [ o.commonBehavior, o.limoShim ],
    properties: {
        couponTagsItem: {
            type: Object,
            value: {}
        }
    },
    data: {
        LABEL_TYPE: t.LABEL_TYPE
    },
    methods: {
        onClick: function() {
            var o = this.data.couponTagsItem.colorType;
            o === t.LABEL_TYPE.COUPON_COLLECT_CURRENCY ? e.default.getLimoRuntime().sendMC && e.default.getLimoRuntime().sendMC({
                valLab: null,
                bid: "b_saaspay_nkazj7po_mc",
                options: {}
            }) : e.default.getLimoRuntime().sendMC && e.default.getLimoRuntime().sendMC({
                valLab: null,
                bid: "b_saaspay_uv12pt8e_mc",
                options: {}
            }), this.triggerEvent("handelCouponEvent", {
                colorType: o
            });
        }
    }
});